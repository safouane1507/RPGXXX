import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-annuaire-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule],
  template: `
    <section class="annuaire-page">
      <div class="ann-hero">
        <div class="container">
          <h1>{{ 'HOME.ANNUAIRE_TITLE' | translate }}</h1>
          <p>{{ 'HOME.ANNUAIRE_SUBTITLE' | translate }}</p>
        </div>
      </div>
      <div class="container ann-body">
        <!-- Filters sidebar -->
        <aside class="ann-filters">
          <h4>Filtrer votre recherche</h4>
          <input type="text" placeholder="Nom de la structure…" class="f-input" [(ngModel)]="search" (input)="load()" />
          <select class="f-select" [(ngModel)]="domain" (change)="load()">
            <option value="">Secteur d'activité</option>
            @for (d of domains; track d.id) { <option [value]="d.id">{{ d.label }}</option> }
          </select>
          <select class="f-select" [(ngModel)]="region" (change)="load()">
            <option value="">Région</option>
            @for (r of regions; track r) { <option [value]="r">{{ r }}</option> }
          </select>
          <input type="text" placeholder="Ville…" class="f-input" [(ngModel)]="city" (input)="load()" />
        </aside>

        <!-- Cards -->
        <div class="ann-content">
          <p class="results-count">Affichage de {{ actors().length }} éléments</p>
          <div class="ann-grid">
            @for (a of actors(); track a._id) {
              <a [routerLink]="['/annuaire', a.slug]" class="ann-card">
                <div class="ann-logo">
                  @if (a.logo) { <img [src]="a.logo" [alt]="a.structureName" /> }
                  @else { <span>{{ a.structureName.charAt(0) }}</span> }
                </div>
                <h3>{{ a.structureName }}</h3>
                <span class="ann-domain">{{ domainLabel(a.domain) }}</span>
                <div class="ann-contact">
                  @if (a.contact?.phone) { <span>📞 {{ a.contact.phone }}</span> }
                  @if (a.contact?.email) { <span>✉ {{ a.contact.email }}</span> }
                </div>
                @if (a.contact?.city) { <span class="ann-city">📍 {{ a.contact.city }}</span> }
              </a>
            }
          </div>
        </div>
      </div>
    </section>`,
  styles: [`.annuaire-page{min-height:100vh;} .ann-hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#2c1a00,#5a3200);padding:3rem 0;color:#fff;} .ann-hero::before{content:'';position:absolute;inset:0;background-image:var(--zellige-pattern);background-repeat:repeat;background-size:40px 12px;opacity:.15;pointer-events:none;} .ann-hero .container{position:relative;z-index:1;} .ann-hero h1{font-size:1.75rem;font-weight:800;margin-bottom:.5rem;color:#f8f1e7 !important;} .ann-hero p{opacity:.8;color:#f8f1e7 !important;} .ann-body{display:grid;grid-template-columns:240px 1fr;gap:1.5rem;padding-top:2rem;padding-bottom:3rem;} @media(max-width:900px){.ann-body{grid-template-columns:1fr;}} .ann-filters{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:1.25rem;align-self:start;display:flex;flex-direction:column;gap:.75rem;} .ann-filters h4{font-size:.9rem;font-weight:700;color:var(--text-primary);margin-bottom:.25rem;} .f-input,.f-select{width:100%;padding:.4rem .625rem;border:1px solid var(--card-border);border-radius:6px;background:var(--bg-secondary);color:var(--text-primary);font-size:.82rem;outline:none;} .results-count{font-size:.82rem;color:var(--text-muted);margin-bottom:1rem;} .ann-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem;} .ann-card{text-decoration:none;background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:1.25rem;display:flex;flex-direction:column;gap:.375rem;transition:transform .2s,box-shadow .2s;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.08);text-decoration:none;}} .ann-logo{width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,rgba(139,69,19,.1),rgba(212,175,106,.1));display:flex;align-items:center;justify-content:center;margin-bottom:.25rem;overflow:hidden;} .ann-logo img{width:100%;height:100%;object-fit:cover;} .ann-logo span{font-size:1.3rem;font-weight:800;color:#8B4513;} h3{font-size:.9rem;font-weight:700;color:var(--text-primary);} .ann-domain{font-size:.72rem;color:#8B4513;font-weight:600;} .ann-contact{display:flex;flex-direction:column;gap:.2rem;font-size:.75rem;color:var(--text-muted);} .ann-city{font-size:.75rem;color:var(--text-muted);}`]
})
export class AnnuaireListComponent implements OnInit {
  private api  = inject(ApiService);
  actors = signal<any[]>([]);
  search = ''; domain = ''; region = ''; city = '';
  readonly domains = [{ id:'artisanat_art',label:"Artisanat d'art"},{id:'soin_beaute',label:'Soin & Beauté'},{id:'produit_terroir',label:'Produit de Terroir'},{id:'agriculture_bio',label:'Agriculture Bio'},{id:'artisanat_culinaire',label:'Artisanat Culinaire'},{id:'habillement_mode',label:'Habillement & Mode'},{id:'produits_mer',label:'Produits de la Mer'},{id:'tourisme_rural',label:'Tourisme Rural'},{id:'artisanat_service',label:'Artisanat de Service'}];
  readonly regions = ['Tanger-Tétouan-Al Hoceïma','Oriental','Fès-Meknès','Rabat-Salé-Kénitra','Casablanca-Settat','Marrakech-Safi','Souss-Massa','Drâa-Tafilalet'];
  ngOnInit(): void { this.load(); }
  load(): void {
    const p: any = { limit: 24 };
    if (this.domain) p.domain = this.domain;
    if (this.region) p.region = this.region;
    if (this.city)   p.city   = this.city;
    this.api.get<{ data: any[] }>('/annuaire', p).subscribe({ next: r => this.actors.set(r.data), error: () => {} });
  }
  domainLabel(id: string): string { return this.domains.find(d => d.id === id)?.label ?? id; }
}
