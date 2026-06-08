import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="services-page container section-spacing">
      <h1>Nos Services</h1>
      <p>Services proposés par les coopératives et artisans de la plateforme KENZ BLADI.</p>
    </section>`,
  styles: [`.services-page{padding:4rem 1.5rem;} h1{font-size:1.75rem;font-weight:800;margin-bottom:1rem;color:var(--text-primary);} p{font-size:1rem;color:var(--text-secondary);line-height:1.8;}`]
})
export class ServicesComponent {}
