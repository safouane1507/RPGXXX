import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface FaqItem { q: string; a: string; open: boolean; }

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="faq-page">
      <div class="container section-spacing">
        <h1>Questions Fréquentes</h1>
        <div class="faq-list">
          @for (item of items(); track item.q) {
            <div class="faq-item" [class.open]="item.open">
              <button class="faq-q" (click)="item.open = !item.open">
                {{ item.q }}
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16" [style.transform]="item.open ? 'rotate(180deg)' : ''">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              @if (item.open) {
                <div class="faq-a">{{ item.a }}</div>
              }
            </div>
          }
        </div>
      </div>
    </section>`,
  styles: [`.faq-page{padding:4rem 0;} h1{font-size:1.75rem;font-weight:800;margin-bottom:2rem;color:var(--text-primary);} .faq-list{display:flex;flex-direction:column;gap:.75rem;max-width:720px;} .faq-item{background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;overflow:hidden;} .faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;padding:1rem 1.25rem;background:transparent;border:none;font-size:.95rem;font-weight:600;color:var(--text-primary);cursor:pointer;text-align:start;} .faq-q svg{transition:transform .2s ease;flex-shrink:0;} .faq-a{padding:0 1.25rem 1rem;font-size:.875rem;color:var(--text-secondary);line-height:1.7;}`]
})
export class FaqComponent {
  items = signal<FaqItem[]>([
    { q: "Comment s'inscrire comme artisan sur KENZ BLADI ?", a: "Contactez l'administrateur via le formulaire de contact. Un compte Pro vous sera créé avec vos identifiants personnels.", open: false },
    { q: "Comment ajouter mes produits dans la boutique ?", a: "Une fois votre compte Pro activé, rendez-vous dans votre espace Pro → Gestion des produits → Ajouter.", open: false },
    { q: "Dans quelles langues la plateforme est-elle disponible ?", a: "La plateforme est disponible en Français, Arabe, Anglais et Darija marocaine.", open: false },
    { q: "Comment apparaître dans l'Annuaire des Acteurs Pro ?", a: "Complétez votre fiche dans l'espace Pro. Elle sera soumise à validation par l'administrateur avant publication.", open: false },
    { q: "Puis-je vendre mes produits directement via la plateforme ?", a: "Oui, via la Marketplace. La plateforme propose différents plans d'abonnement : Gratuit, Basic, Premium et Enterprise.", open: false }
  ]);
}
