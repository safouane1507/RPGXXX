import {
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  signal,
  ɵɵdefineInjectable
} from "./chunk-4ELZIBL4.js";

// src/app/core/services/cart.service.ts
var STORAGE_KEY = "kenzbladi_cart";
var CartService = class _CartService {
  constructor() {
    this.cartItems = signal(this.restore());
    this.isCartOpen = signal(false);
    this.itemCount = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0));
    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cartItems()));
    });
  }
  addToCart(product, quantity = 1) {
    const items = this.cartItems();
    const existing = items.find((i) => i.productId === product._id);
    if (existing) {
      this.updateQuantity(product._id, existing.quantity + quantity);
      return;
    }
    this.cartItems.set([...items, {
      productId: product._id,
      slug: product.slug,
      name: product.name,
      coverImage: product.coverImage ?? null,
      price: product.priceDiscount ?? product.price,
      quantity,
      stock: product.stock ?? 0,
      isInfiniteStock: !!product.isInfiniteStock
    }]);
  }
  removeFromCart(productId) {
    this.cartItems.update((items) => items.filter((i) => i.productId !== productId));
  }
  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.cartItems.update((items) => items.map((i) => {
      if (i.productId !== productId)
        return i;
      const max = i.isInfiniteStock ? quantity : Math.min(quantity, i.stock || quantity);
      return __spreadProps(__spreadValues({}, i), { quantity: max });
    }));
  }
  toggleCart() {
    this.isCartOpen.update((v) => !v);
  }
  getTotal() {
    return this.cartItems().reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
  restore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  static {
    this.\u0275fac = function CartService_Factory(t) {
      return new (t || _CartService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

export {
  CartService
};
//# sourceMappingURL=chunk-WWFTIXOC.js.map
