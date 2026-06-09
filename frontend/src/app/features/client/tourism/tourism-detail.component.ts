import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-tourism-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
<article class="tourism-detail">
  @if (place()) {

    <!-- Cover -->
    <div class="detail-cover" [style.background-image]="'url(' + (place().coverImage || '') + ')'">
      <div class="cover-overlay">
        <div class="container">
          <a routerLink="/tourism" class="back-link">← {{ 'TOURISM.TITLE' | translate }}</a>
          <div class="cover-meta">
            <span class="loc-type-badge">{{ place().locationType }}</span>
            @if (place().isFeatured) { <span class="feat-badge">⭐ Coup de cœur</span> }
          </div>
          <h1>{{ t(place().name) }}</h1>
          @if (place().location?.city) {
            <span class="location-badge">📍 {{ place().location.city }}
              @if (place().location?.region) { <span class="region-txt">, {{ place().location.region }}</span> }
            </span>
          }
        </div>
      </div>
    </div>

    <div class="container detail-body">

      <!-- ── Article complet ── -->
      <section class="article-text">
        @if (t(place().fullArticle)) {
          <div [innerHTML]="t(place().fullArticle)"></div>
        } @else {
          <p>{{ t(place().shortDescription) }}</p>
        }
      </section>

      <!-- ── Galerie photos ── -->
      @if (place().photos?.length > 0) {
        <section class="photo-gallery">
          <h2>Galerie</h2>
          <div class="gallery-grid">
            @for (photo of place().photos; track $index) {
              <div class="gallery-item" (click)="openLightbox($index)">
                <img [src]="photo.url" [alt]="t(photo.caption) || 'Photo'" loading="lazy" />
                <div class="gallery-overlay">🔍</div>
              </div>
            }
          </div>
        </section>
      }

      <!-- ── Infos pratiques ── -->
      @if (place().practicalInfo) {
        <section class="practical-info">
          <h2>{{ 'TOURISM.PRACTICAL_INFO' | translate }}</h2>
          <div class="info-grid">
            @if (t(place().practicalInfo?.bestSeason)) {
              <div class="info-item">
                <span class="info-icon">🌤️</span>
                <div>
                  <strong>{{ 'TOURISM.BEST_SEASON' | translate }}</strong>
                  <span>{{ t(place().practicalInfo.bestSeason) }}</span>
                </div>
              </div>
            }
            @if (t(place().practicalInfo?.entryFee)) {
              <div class="info-item">
                <span class="info-icon">🎫</span>
                <div>
                  <strong>Tarif d'entrée</strong>
                  <span>{{ t(place().practicalInfo.entryFee) }}</span>
                </div>
              </div>
            }
            @if (t(place().practicalInfo?.openingHours)) {
              <div class="info-item">
                <span class="info-icon">🕐</span>
                <div>
                  <strong>Horaires</strong>
                  <span>{{ t(place().practicalInfo.openingHours) }}</span>
                </div>
              </div>
            }
            @if (t(place().practicalInfo?.howToGet)) {
              <div class="info-item info-item--full">
                <span class="info-icon">🚌</span>
                <div>
                  <strong>{{ 'TOURISM.HOW_TO_GET' | translate }}</strong>
                  <span>{{ t(place().practicalInfo.howToGet) }}</span>
                </div>
              </div>
            }
          </div>
        </section>
      }

      <!-- ── Carte OpenStreetMap ── -->
      @if (mapCoords()) {
        <section class="map-section">
          <h2>📍 Localisation</h2>
          <div class="map-wrap">
            <iframe
              [src]="mapUrl()"
              width="100%" height="350"
              style="border:0;border-radius:12px;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <a [href]="osmLink()" target="_blank" rel="noopener" class="osm-link">
            🗺️ Ouvrir dans OpenStreetMap
          </a>
        </section>
      }

      <!-- ── Coopératives à proximité ── -->
      @if (place().nearbyCooperatives?.length > 0) {
        <section class="nearby-coops">
          <h2>🤝 Coopératives à proximité</h2>
          <p class="nearby-sub">Découvrez les artisans et producteurs locaux autour de ce site.</p>
          <div class="coops-grid">
            @for (coop of place().nearbyCooperatives; track coop._id) {
              <a [routerLink]="['/annuaire', coop.slug]" class="coop-card">
                <div class="coop-logo">
                  @if (coop.logo) { <img [src]="coop.logo" [alt]="coop.structureName" /> }
                  @else { <span class="coop-logo-ph">🏺</span> }
                </div>
                <div class="coop-info">
                  <strong>{{ coop.structureName }}</strong>
                  @if (coop.contact?.city) { <span>📍 {{ coop.contact.city }}</span> }
                  @if (coop.description?.fr) {
                    <p>{{ coop.description.fr }}</p>
                  }
                </div>
              </a>
            }
          </div>
        </section>
      }

      <!-- ── Lieux similaires ── -->
      @if (place().relatedPlaces?.length > 0) {
        <section class="related-places">
          <h2>{{ 'TOURISM.OTHER_PLACES' | translate }}</h2>
          <div class="related-grid">
            @for (r of place().relatedPlaces; track r._id) {
              <a [routerLink]="['/tourism', r.slug]" class="related-card">
                <div class="related-img-wrap">
                  @if (r.coverImage) {
                    <img [src]="r.coverImage" [alt]="t(r.name)" loading="lazy" />
                  } @else {
                    <div class="related-ph">🌍</div>
                  }
                  <span class="related-type">{{ r.locationType }}</span>
                </div>
                <span class="related-name">{{ t(r.name) }}</span>
              </a>
            }
          </div>
        </section>
      }

    </div>

  } @else if (notFound()) {
    <div class="not-found">
      <div class="nf-icon">🌍</div>
      <h2>Lieu introuvable</h2>
      <p>Ce lieu n'existe pas ou n'est plus disponible.</p>
      <a routerLink="/tourism" class="btn-back">← Retour au tourisme</a>
    </div>
  } @else {
    <div class="page-loader">
      <div class="loader-ring"></div>
      <p>Chargement de la destination…</p>
    </div>
  }
</article>

<!-- ── Lightbox ──────────────────────────────────────────── -->
@if (lightboxIdx() !== null) {
  <div class="lightbox" (click)="closeLightbox()">
    <button class="lb-close" (click)="closeLightbox()">✕</button>
    @if (lightboxIdx()! > 0) {
      <button class="lb-nav lb-prev" (click)="lbNav(-1, $event)">‹</button>
    }
    @if (lightboxIdx()! < (place()?.photos?.length || 0) - 1) {
      <button class="lb-nav lb-next" (click)="lbNav(1, $event)">›</button>
    }
    <div class="lb-content" (click)="$event.stopPropagation()">
      <img [src]="place()?.photos[lightboxIdx()!]?.url" [alt]="t(place()?.photos[lightboxIdx()!]?.caption) || ''" />
      @if (t(place()?.photos[lightboxIdx()!]?.caption)) {
        <p class="lb-caption">{{ t(place()?.photos[lightboxIdx()!]?.caption) }}</p>
      }
    </div>
    <div class="lb-counter">{{ (lightboxIdx()! + 1) }} / {{ place()?.photos?.length }}</div>
  </div>
}
  `,
  styles: [`
    /* ── Base ───────────────────────────────────────── */
    .tourism-detail { min-height:70vh; }
    /* Cover */
    .detail-cover { position:relative; height:480px; background-size:cover; background-position:center; background-color:var(--bg-tertiary); }
    .cover-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.78) 0%,rgba(0,0,0,.2) 50%,transparent 100%); display:flex; align-items:flex-end; }
    .cover-overlay .container { padding-bottom:2.5rem; }
    .back-link { font-size:.82rem; color:rgba(255,255,255,.75); text-decoration:none; display:inline-block; margin-bottom:.75rem; transition:color .2s; }
    .back-link:hover { color:#fff; }
    .cover-meta { display:flex; gap:.5rem; margin-bottom:.5rem; }
    .loc-type-badge,.feat-badge { padding:.25rem .7rem; border-radius:6px; font-size:.72rem; font-weight:700; backdrop-filter:blur(4px); }
    .loc-type-badge { background:rgba(39,174,96,.7); color:#fff; text-transform:capitalize; }
    .feat-badge { background:rgba(0,0,0,.5); color:#ffd700; }
    h1 { font-size:2.2rem; font-weight:900; color:#fff; margin:0 0 .5rem; }
    .location-badge { font-size:.88rem; color:rgba(255,255,255,.8); }
    .region-txt { opacity:.7; }
    /* Body */
    .detail-body { padding:2.5rem 1.5rem; display:flex; flex-direction:column; gap:3rem; max-width:960px; margin:0 auto; }
    .article-text { font-size:.96rem; line-height:1.9; color:var(--text-secondary); }
    /* Section headings */
    h2 { font-size:1.2rem; font-weight:800; color:var(--text-primary); margin:0 0 1.25rem; }
    /* Photo Gallery */
    .gallery-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:.75rem; }
    .gallery-item { position:relative; aspect-ratio:4/3; overflow:hidden; border-radius:10px; cursor:pointer; }
    .gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform .3s; }
    .gallery-item:hover img { transform:scale(1.06); }
    .gallery-overlay { position:absolute; inset:0; background:rgba(0,0,0,.35); display:flex; align-items:center; justify-content:center; font-size:1.5rem; opacity:0; transition:opacity .2s; }
    .gallery-item:hover .gallery-overlay { opacity:1; }
    /* Practical Info */
    .info-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:1rem; }
    .info-item { background:var(--card-bg); border:1px solid var(--card-border); border-radius:12px; padding:1rem; display:flex; gap:.75rem; align-items:flex-start; }
    .info-item--full { grid-column:1/-1; }
    .info-icon { font-size:1.4rem; flex-shrink:0; margin-top:.1rem; }
    .info-item div { display:flex; flex-direction:column; gap:.25rem; }
    .info-item strong { font-size:.78rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:.05em; }
    .info-item span { font-size:.9rem; color:var(--text-primary); }
    /* Map */
    .map-wrap { border-radius:12px; overflow:hidden; margin-bottom:.875rem; }
    .osm-link { display:inline-flex; align-items:center; gap:.375rem; font-size:.85rem; color:#27ae60; text-decoration:none; font-weight:600; }
    .osm-link:hover { text-decoration:underline; }
    /* Nearby Coops */
    .nearby-sub { font-size:.875rem; color:var(--text-muted); margin:-0.75rem 0 1.25rem; }
    .coops-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:1rem; }
    .coop-card { display:flex; gap:.875rem; background:var(--card-bg); border:1px solid var(--card-border); border-radius:12px; padding:1rem; text-decoration:none; transition:box-shadow .2s,transform .2s; align-items:flex-start; }
    .coop-card:hover { box-shadow:0 4px 16px rgba(0,0,0,.08); transform:translateY(-2px); }
    .coop-logo { width:52px; height:52px; border-radius:10px; overflow:hidden; flex-shrink:0; background:var(--bg-tertiary); display:flex; align-items:center; justify-content:center; }
    .coop-logo img { width:100%; height:100%; object-fit:cover; }
    .coop-logo-ph { font-size:1.6rem; }
    .coop-info { flex:1; min-width:0; display:flex; flex-direction:column; gap:.25rem; }
    .coop-info strong { font-size:.88rem; font-weight:700; color:var(--text-primary); }
    .coop-info span { font-size:.75rem; color:var(--text-muted); }
    .coop-info p { font-size:.78rem; color:var(--text-secondary); display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin:0; }
    /* Related Places */
    .related-grid { display:flex; gap:1rem; overflow-x:auto; padding-bottom:.625rem; scrollbar-width:thin; }
    .related-card { flex-shrink:0; width:175px; text-decoration:none; display:flex; flex-direction:column; gap:.5rem; }
    .related-img-wrap { position:relative; width:175px; height:120px; border-radius:10px; overflow:hidden; }
    .related-img-wrap img { width:100%; height:100%; object-fit:cover; transition:transform .3s; }
    .related-card:hover img { transform:scale(1.06); }
    .related-ph { width:100%; height:100%; background:var(--bg-tertiary); display:flex; align-items:center; justify-content:center; font-size:2rem; }
    .related-type { position:absolute; bottom:.375rem; left:.375rem; background:rgba(0,0,0,.6); color:#fff; padding:.15rem .45rem; border-radius:5px; font-size:.65rem; font-weight:700; text-transform:capitalize; }
    .related-name { font-size:.82rem; font-weight:600; color:var(--text-primary); }
    /* Not Found */
    .not-found { display:flex; flex-direction:column; align-items:center; gap:1rem; padding:5rem 2rem; text-align:center; }
    .nf-icon { font-size:4rem; }
    .not-found h2 { font-size:1.4rem; font-weight:800; color:var(--text-primary); }
    .not-found p { color:var(--text-muted); }
    .btn-back { padding:.6rem 1.5rem; background:#27ae60; color:#fff; border-radius:10px; text-decoration:none; font-weight:700; }
    /* Loader */
    .page-loader { display:flex; flex-direction:column; align-items:center; gap:1.25rem; padding:6rem 2rem; }
    .loader-ring { width:44px; height:44px; border:4px solid var(--card-border); border-top-color:#27ae60; border-radius:50%; animation:spin .8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .page-loader p { color:var(--text-muted); font-size:.875rem; }
    /* Lightbox */
    .lightbox { position:fixed; inset:0; background:rgba(0,0,0,.93); z-index:200; display:flex; align-items:center; justify-content:center; }
    .lb-close { position:absolute; top:1rem; right:1rem; background:rgba(255,255,255,.12); border:none; color:#fff; font-size:1.25rem; width:40px; height:40px; border-radius:50%; cursor:pointer; z-index:2; }
    .lb-nav { position:absolute; background:rgba(255,255,255,.12); border:none; color:#fff; font-size:2rem; width:48px; height:48px; border-radius:50%; cursor:pointer; z-index:2; transition:background .2s; }
    .lb-nav:hover { background:rgba(255,255,255,.25); }
    .lb-prev { left:1rem; }
    .lb-next { right:1rem; }
    .lb-content { max-width:90vw; max-height:85vh; display:flex; flex-direction:column; align-items:center; gap:.75rem; }
    .lb-content img { max-width:100%; max-height:78vh; object-fit:contain; border-radius:8px; }
    .lb-caption { color:rgba(255,255,255,.75); font-size:.85rem; text-align:center; }
    .lb-counter { position:absolute; bottom:1rem; left:50%; transform:translateX(-50%); color:rgba(255,255,255,.6); font-size:.8rem; }
    @media(max-width:768px) { .detail-cover{height:320px;} h1{font-size:1.5rem;} .detail-body{padding:1.75rem 1rem;} .gallery-grid{grid-template-columns:repeat(2,1fr);} .info-grid{grid-template-columns:1fr;} .coops-grid{grid-template-columns:1fr;} }
  `]
})
export class TourismDetailComponent implements OnInit {
  private api       = inject(ApiService);
  private route     = inject(ActivatedRoute);
  private lang      = inject(LanguageService);
  private sanitizer = inject(DomSanitizer);

  place        = signal<any>(null);
  notFound     = signal(false);
  lightboxIdx  = signal<number | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.api.get<{ data: any }>(`/tourism/${slug}`).subscribe({
        next: r => this.place.set(r.data),
        error: () => this.notFound.set(true)
      });
    }
  }

  t(f: Record<string, string> | null | undefined): string {
    if (!f) return '';
    const l = this.lang.current();
    return f[l] || f['fr'] || '';
  }

  mapCoords(): [number, number] | null {
    const coords = this.place()?.location?.coordinates?.coordinates;
    if (coords && coords.length === 2) return [coords[1], coords[0]]; // [lat, lng]
    return null;
  }

  mapUrl(): SafeResourceUrl | null {
    const c = this.mapCoords();
    if (!c) return null;
    const [lat, lng] = c;
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.02},${lat - 0.02},${lng + 0.02},${lat + 0.02}&layer=mapnik&marker=${lat},${lng}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  osmLink(): string {
    const c = this.mapCoords();
    if (!c) return '';
    const [lat, lng] = c;
    return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`;
  }

  openLightbox(idx: number): void  { this.lightboxIdx.set(idx); }
  closeLightbox(): void             { this.lightboxIdx.set(null); }
  lbNav(delta: number, e: Event): void {
    e.stopPropagation();
    const current = this.lightboxIdx()!;
    const max = (this.place()?.photos?.length || 0) - 1;
    const next = current + delta;
    if (next >= 0 && next <= max) this.lightboxIdx.set(next);
  }
}
