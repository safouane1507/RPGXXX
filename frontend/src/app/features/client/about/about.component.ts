import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="about-page container section-spacing">
      <h1>À Propos de KENZ BLADI كنز بلادي</h1>
      <p>Plateforme dédiée à la valorisation et à la promotion du patrimoine artisanal marocain.</p>
      <p>Contenu géré via le CMS Admin (section <em>À Propos</em>).</p>
    </section>`,
  styles: [`.about-page{padding:4rem 1.5rem;max-width:800px;margin:0 auto;} h1{font-size:1.75rem;font-weight:800;margin-bottom:1rem;color:var(--text-primary);} p{font-size:1rem;color:var(--text-secondary);line-height:1.8;margin-bottom:.75rem;}`]
})
export class AboutComponent {}
