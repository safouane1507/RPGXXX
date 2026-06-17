import { Injectable, signal, computed, effect } from '@angular/core';

export interface CartItem {
  productId:        string;
  slug:             string;
  name:             Record<string, string>;
  coverImage:       string | null;
  price:            number;
  quantity:         number;
  stock:            number;
  isInfiniteStock:  boolean;
}

const STORAGE_KEY = 'kenzbladi_cart';

@Injectable({ providedIn: 'root' })
export class CartService {

  cartItems  = signal<CartItem[]>(this.restore());
  isCartOpen = signal(false);

  itemCount = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0));

  constructor() {
    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cartItems()));
    });
  }

  addToCart(product: any, quantity = 1): void {
    const items    = this.cartItems();
    const existing = items.find(i => i.productId === product._id);

    if (existing) {
      this.updateQuantity(product._id, existing.quantity + quantity);
      return;
    }

    this.cartItems.set([...items, {
      productId:       product._id,
      slug:            product.slug,
      name:            product.name,
      coverImage:      product.coverImage ?? null,
      price:           product.priceDiscount ?? product.price,
      quantity,
      stock:           product.stock ?? 0,
      isInfiniteStock: !!product.isInfiniteStock
    }]);
  }

  removeFromCart(productId: string): void {
    this.cartItems.update(items => items.filter(i => i.productId !== productId));
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) { this.removeFromCart(productId); return; }

    this.cartItems.update(items => items.map(i => {
      if (i.productId !== productId) return i;
      const max = i.isInfiniteStock ? quantity : Math.min(quantity, i.stock || quantity);
      return { ...i, quantity: max };
    }));
  }

  toggleCart(): void {
    this.isCartOpen.update(v => !v);
  }

  getTotal(): number {
    return this.cartItems().reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

  private restore(): CartItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
}
