import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from '../../../core/components/footer/footer.component';
import { CartDrawerComponent } from '../../../shared/components/cart-drawer/cart-drawer.component';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CartDrawerComponent],
  template: `
    <app-navbar />
    <main class="main-content">
      <router-outlet />
    </main>
    <app-footer />
    <app-cart-drawer />
  `,
  styles: [`
    .main-content {
      padding-top: 72px;
      min-height: 100vh;
    }
  `]
})
export class ClientLayoutComponent {}
