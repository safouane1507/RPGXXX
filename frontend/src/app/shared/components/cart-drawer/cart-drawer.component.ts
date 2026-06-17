import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.scss']
})
export class CartDrawerComponent {
  cart = inject(CartService);
  private lang   = inject(LanguageService);
  private router = inject(Router);

  t(f: Record<string, string> | undefined): string {
    if (!f) return '';
    const l = this.lang.current();
    return f[l] || f['fr'] || '';
  }

  close(): void {
    this.cart.isCartOpen.set(false);
  }

  checkout(): void {
    this.close();
    this.router.navigate(['/checkout']);
  }
}
