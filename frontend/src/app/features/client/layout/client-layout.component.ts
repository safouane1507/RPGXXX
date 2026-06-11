import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from '../../../core/components/footer/footer.component';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <main class="main-content">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [`
    .main-content {
      padding-top: 72px;
      min-height: 100vh;
    }
  `]
})
export class ClientLayoutComponent {}
