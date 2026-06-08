import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-annuaire-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="ann-detail container section-spacing">
      @if (actor()) {
        <a routerLink="/annuaire" class="back">← Retour à l'Annuaire</a>
        <div class="actor-header">
          <div class="actor-logo-lg">
            @if (actor().logo) { <img [src]="actor().logo" [alt]="actor().structureName" /> }
            @else { <span>{{ actor().structureName.charAt(0) }}</span> }
          </div>
          <div>
            <h1>{{ actor().structureName }}</h1>
            <p class="actor-slogan">{{ t(actor().slogan) }}</p>
            @if (actor().isVerified) { <span class="verified">✓ Vérifié</span> }
          </div>
        </div>
        <div class="actor-body">
          <div class="actor-desc">
            <h2>Présentation</h2>
            <p>{{ t(actor().presentation) || t(actor().description) }}</p>
          </div>
          <div class="actor-contact-card">
            <h3>Contact</h3>
            @if (actor().contact?.phone)  { <div>📞 {{ actor().contact.phone }}</div> }
            @if (actor().contact?.email)  { <div>✉ {{ actor().contact.email }}</div> }
            @if (actor().contact?.website){ <div>🌐 <a [href]="actor().contact.website" target="_blank">{{ actor().contact.website }}</a></div> }
            @if (actor().contact?.city)   { <div>📍 {{ actor().contact.city }}, {{ actor().contact.region }}</div> }
          </div>
        </div>
      } @else {
        <p style="text-align:center;padding:3rem;color:var(--text-muted)">Chargement…</p>
      }
    </div>`,
  styles: [`.ann-detail{padding:2.5rem 1.5rem;max-width:900px;margin:0 auto;} .back{font-size:.82rem;color:#8B4513;text-decoration:none;display:block;margin-bottom:1.5rem;&:hover{text-decoration:underline;}} .actor-header{display:flex;align-items:flex-start;gap:1.25rem;margin-bottom:2rem;} .actor-logo-lg{width:80px;height:80px;border-radius:16px;background:linear-gradient(135deg,rgba(139,69,19,.1),rgba(212,175,106,.1));display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;} .actor-logo-lg img{width:100%;height:100%;object-fit:cover;} .actor-logo-lg span{font-size:2rem;font-weight:800;color:#8B4513;} h1{font-size:1.5rem;font-weight:800;color:var(--text-primary);margin-bottom:.25rem;} .actor-slogan{font-size:.9rem;color:var(--text-muted);margin-bottom:.5rem;} .verified{font-size:.75rem;padding:.2rem .6rem;background:rgba(39,174,96,.1);color:#27ae60;border-radius:10px;font-weight:700;} .actor-body{display:grid;grid-template-columns:1fr 280px;gap:1.5rem;} @media(max-width:700px){.actor-body{grid-template-columns:1fr;}} .actor-desc h2{font-size:1.05rem;font-weight:700;margin-bottom:.75rem;color:var(--text-primary);} .actor-desc p{font-size:.9rem;line-height:1.8;color:var(--text-secondary);} .actor-contact-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:1.25rem;align-self:start;} h3{font-size:.9rem;font-weight:700;margin-bottom:.75rem;color:var(--text-primary);} .actor-contact-card div{font-size:.82rem;color:var(--text-secondary);padding:.3rem 0;border-bottom:1px solid var(--card-border);&:last-child{border-bottom:none;}} a{color:#8B4513;}`]
})
export class AnnuaireDetailComponent implements OnInit {
  private api   = inject(ApiService);
  private route = inject(ActivatedRoute);
  private lang  = inject(LanguageService);
  actor = signal<any>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) this.api.get<{ data: any }>(`/annuaire/${slug}`).subscribe({ next: r => this.actor.set(r.data), error: () => {} });
  }
  t(f: Record<string, string>): string { const l = this.lang.current(); return f?.[l] || f?.['fr'] || ''; }
}
