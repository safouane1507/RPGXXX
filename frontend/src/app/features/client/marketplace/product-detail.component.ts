import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';
import { AuthService } from '../../../core/services/auth.service';
import { CartService } from '../../../core/services/cart.service';

const DOMAIN_LABELS: Record<string, string> = {
  artisanat_art:       'Artisanat d\'art',
  produit_terroir:     'Produits du terroir',
  soin_beaute:         'Soin & Beauté',
  habillement_mode:    'Mode Marocaine',
  artisanat_culinaire: 'Artisanat Culinaire',
  agriculture_bio:     'Agriculture Bio',
  produits_mer:        'Produits de la mer',
  artisanat_service:   'Artisanat Service',
  tourisme_rural:      'Tourisme Rural'
};

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
<div class="product-detail-page">

  @if (product()) {
    <!-- Breadcrumb -->
    <div class="container breadcrumb">
      <a routerLink="/marketplace">Boutique</a>
      <span>›</span>
      <span class="bc-domain">{{ domainLabel(product().domain) }}</span>
      <span>›</span>
      <span class="bc-current">{{ t(product().name) }}</span>
    </div>

    <div class="container pd-body">
      <div class="pd-layout">

        <!-- ── Gallery ── -->
        <div class="pd-gallery">
          <!-- Main image -->
          <div class="pd-main-img">
            @if (activeImg()) {
              <img [src]="activeImg()" [alt]="t(product().name)" />
            } @else {
              <div class="pd-img-ph">🛍️</div>
            }
            @if (product().isFeatured) { <div class="pd-feat">⭐ Mis en avant</div> }
            @if (product().priceDiscount) {
              <div class="pd-discount">-{{ discountPct() }}%</div>
            }
          </div>

          <!-- Thumbnails -->
          @if (allImages().length > 1) {
            <div class="pd-thumbs">
              @for (img of allImages(); track $index) {
                <div class="pd-thumb" [class.active]="activeImg() === img"
                  (click)="activeImg.set(img)">
                  <img [src]="img" [alt]="t(product().name)" loading="lazy" />
                </div>
              }
            </div>
          }
        </div>

        <!-- ── Info ── -->
        <div class="pd-info">
          <span class="pd-domain">{{ domainLabel(product().domain) }}</span>
          <h1>{{ t(product().name) }}</h1>

          <!-- Badges -->
          <div class="pd-badges">
            @if (product().isOrganic)  { <span class="badge green">🌿 Bio & Naturel</span> }
            @if (product().isHandmade) { <span class="badge amber">🤲 Fait main</span> }
            @for (cert of product().certifications; track cert) {
              <span class="badge blue">✓ {{ cert }}</span>
            }
          </div>

          <!-- Rating -->
          @if (product().rating > 0) {
            <div class="pd-rating">
              <div class="stars">{{ starsDisplay(product().rating) }}</div>
              <span class="rating-val">{{ product().rating | number:'1.1-1' }}</span>
              @if (product().reviewCount > 0) {
                <span class="review-count">({{ product().reviewCount }} avis)</span>
              }
            </div>
          }

          <!-- Price -->
          <div class="pd-price-block">
            @if (product().priceDiscount) {
              <span class="pd-old-price">{{ product().price | number:'1.0-0' }} MAD</span>
              <span class="pd-price">{{ product().priceDiscount | number:'1.0-0' }} MAD</span>
              <span class="pd-economy">Économisez {{ (product().price - product().priceDiscount) | number:'1.0-0' }} MAD</span>
            } @else {
              <span class="pd-price">{{ product().price | number:'1.0-0' }} MAD</span>
            }
          </div>

          <!-- Stock -->
          @if (!product().isInfiniteStock) {
            <div class="pd-stock" [class.low]="product().stock < 10">
              @if (product().stock > 0) {
                <span>✓ En stock ({{ product().stock }} disponibles)</span>
              } @else {
                <span class="out">✕ Rupture de stock</span>
              }
            </div>
          }

          <!-- Origin -->
          @if (product().origin?.city || product().origin?.region) {
            <div class="pd-origin">
              📍 Origine : <strong>{{ product().origin?.city || product().origin?.region }}</strong>
              @if (product().origin?.region && product().origin?.city) {
                <span class="origin-region">, {{ product().origin.region }}</span>
              }
            </div>
          }

          <!-- Short description -->
          @if (t(product().shortDescription)) {
            <p class="pd-short-desc">{{ t(product().shortDescription) }}</p>
          }

          <!-- Quantity -->
          @if (product().isInfiniteStock || product().stock > 0) {
            <div class="pd-qty">
              <span class="pd-qty-label">Quantité</span>
              <div class="pd-qty-stepper">
                <button (click)="decQty()" [disabled]="qty() <= 1" aria-label="Diminuer">−</button>
                <span>{{ qty() }}</span>
                <button (click)="incQty()" [disabled]="!product().isInfiniteStock && qty() >= product().stock" aria-label="Augmenter">+</button>
              </div>
            </div>
          }

          <!-- CTA -->
          <div class="pd-cta">
            <button class="btn-add-cart" (click)="addToCart()" [disabled]="!product().isInfiniteStock && product().stock <= 0">
              🛒 {{ (!product().isInfiniteStock && product().stock <= 0) ? 'Rupture de stock' : 'Ajouter au panier' }}
            </button>
            <a routerLink="/annuaire" class="btn-contact">✉️ Contacter le vendeur</a>
          </div>

          <!-- Vendor card -->
          @if (product().proActor) {
            <div class="vendor-card">
              <div class="vendor-avatar">🏺</div>
              <div class="vendor-info">
                <strong>{{ product().proActor?.proProfile?.companyName || 'Artisan' }}</strong>
                <span>Acteur local certifié</span>
              </div>
              <a routerLink="/annuaire" class="vendor-link">Voir la fiche →</a>
            </div>
          }
        </div>
      </div>

      <!-- ── Full Description ── -->
      @if (t(product().description)) {
        <section class="pd-desc-section">
          <h2>Description</h2>
          <div class="pd-desc-body" [innerHTML]="t(product().description)"></div>
        </section>
      }

      <!-- ── Tags ── -->
      @if (product().tags?.length > 0) {
        <div class="pd-tags">
          @for (tag of product().tags; track tag) {
            <span class="tag">#{{ tag }}</span>
          }
        </div>
      }

      <!-- ── Similar Products ── -->
      @if (similar().length > 0) {
        <section class="pd-similar">
          <h2>Produits similaires</h2>
          <div class="similar-grid">
            @for (p of similar(); track p._id) {
              <a [routerLink]="['/marketplace', p.slug]" class="sim-card">
                <div class="sim-thumb">
                  @if (p.coverImage) { <img [src]="p.coverImage" [alt]="t(p.name)" loading="lazy" /> }
                  @else { <div class="sim-ph">🛍️</div> }
                </div>
                <div class="sim-body">
                  <h4>{{ t(p.name) }}</h4>
                  <strong class="sim-price">{{ p.price | number:'1.0-0' }} MAD</strong>
                </div>
              </a>
            }
          </div>
        </section>
      }
    </div>

  } @else if (notFound()) {
    <div class="not-found">
      <div class="nf-icon">🛍️</div>
      <h2>Produit introuvable</h2>
      <p>Ce produit n'existe pas ou n'est plus disponible.</p>
      <a routerLink="/marketplace" class="btn-back">← Retour à la boutique</a>
    </div>
  } @else {
    <div class="page-loader">
      <div class="loader-ring"></div>
      <p>Chargement du produit…</p>
    </div>
  }
</div>
  `,
  styles: [`
    .product-detail-page { min-height:70vh; }
    /* Breadcrumb */
    .breadcrumb { display:flex; align-items:center; gap:.5rem; padding:1rem 1.5rem; font-size:.82rem; color:var(--text-muted); }
    .breadcrumb a { color:#8B4513; text-decoration:none; }
    .breadcrumb a:hover { text-decoration:underline; }
    .bc-domain { color:var(--text-secondary); }
    .bc-current { color:var(--text-primary); font-weight:600; }
    /* Body */
    .pd-body { padding:.5rem 1.5rem 3.5rem; }
    .pd-layout { display:grid; grid-template-columns:1fr 1fr; gap:2.5rem; margin-bottom:3rem; }
    /* Gallery */
    .pd-gallery { display:flex; flex-direction:column; gap:.75rem; }
    .pd-main-img { position:relative; aspect-ratio:4/3; background:var(--bg-tertiary); border-radius:16px; overflow:hidden; }
    .pd-main-img img { width:100%; height:100%; object-fit:cover; }
    .pd-img-ph { width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:4rem; }
    .pd-feat { position:absolute; top:1rem; left:1rem; background:rgba(0,0,0,.65); color:#ffd700; padding:.25rem .75rem; border-radius:8px; font-size:.78rem; font-weight:700; }
    .pd-discount { position:absolute; top:1rem; right:1rem; background:#e74c3c; color:#fff; padding:.25rem .75rem; border-radius:8px; font-size:.82rem; font-weight:800; }
    .pd-thumbs { display:flex; gap:.5rem; overflow-x:auto; scrollbar-width:none; }
    .pd-thumbs::-webkit-scrollbar { display:none; }
    .pd-thumb { width:72px; height:56px; border-radius:8px; overflow:hidden; cursor:pointer; flex-shrink:0; border:2px solid transparent; transition:border-color .2s; }
    .pd-thumb.active { border-color:#8B4513; }
    .pd-thumb img { width:100%; height:100%; object-fit:cover; }
    /* Info */
    .pd-info { display:flex; flex-direction:column; gap:1rem; }
    .pd-domain { font-size:.75rem; font-weight:700; color:#8B4513; text-transform:uppercase; letter-spacing:.05em; }
    h1 { font-size:1.5rem; font-weight:900; color:var(--text-primary); margin:0; line-height:1.3; }
    .pd-badges { display:flex; flex-wrap:wrap; gap:.375rem; }
    .badge { padding:.25rem .65rem; border-radius:6px; font-size:.75rem; font-weight:600; }
    .badge.green { background:rgba(39,174,96,.1); color:#27ae60; }
    .badge.amber { background:rgba(243,156,18,.1); color:#f39c12; }
    .badge.blue  { background:rgba(52,152,219,.1); color:#3498db; }
    .pd-rating { display:flex; align-items:center; gap:.5rem; }
    .stars { color:#f39c12; font-size:1rem; letter-spacing:.05em; }
    .rating-val { font-size:.9rem; font-weight:700; color:var(--text-primary); }
    .review-count { font-size:.8rem; color:var(--text-muted); }
    .pd-price-block { display:flex; align-items:baseline; gap:.75rem; flex-wrap:wrap; }
    .pd-old-price { font-size:1rem; color:var(--text-muted); text-decoration:line-through; }
    .pd-price { font-size:1.7rem; font-weight:900; color:#8B4513; }
    .pd-economy { font-size:.8rem; color:#27ae60; font-weight:600; }
    .pd-stock { font-size:.85rem; }
    .pd-stock span { color:#27ae60; }
    .pd-stock.low span { color:#f39c12; }
    .pd-stock .out { color:#e74c3c; }
    .pd-origin { font-size:.875rem; color:var(--text-secondary); }
    .pd-origin strong { color:var(--text-primary); }
    .origin-region { color:var(--text-muted); }
    .pd-short-desc { font-size:.9rem; line-height:1.75; color:var(--text-secondary); margin:0; }
    .pd-qty { display:flex; align-items:center; gap:.875rem; }
    .pd-qty-label { font-size:.85rem; font-weight:600; color:var(--text-secondary); }
    .pd-qty-stepper { display:flex; align-items:center; gap:.875rem; border:1px solid var(--card-border); border-radius:10px; padding:.35rem .9rem; }
    .pd-qty-stepper button { width:26px; height:26px; border-radius:50%; border:1px solid var(--card-border); background:var(--bg-secondary); color:var(--text-primary); font-size:1rem; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s; }
    .pd-qty-stepper button:hover:not(:disabled) { background:var(--brand-gold,#d4af6a); color:#2c1a05; border-color:var(--brand-gold,#d4af6a); }
    .pd-qty-stepper button:disabled { opacity:.35; cursor:not-allowed; }
    .pd-qty-stepper span { min-width:1.5rem; text-align:center; font-weight:700; color:var(--text-primary); }
    .pd-cta { display:flex; gap:.75rem; flex-wrap:wrap; }
    .btn-add-cart { display:inline-flex; align-items:center; gap:.375rem; padding:.7rem 1.5rem; background:var(--brand-gold,#d4af6a); color:#2c1a05; border:none; border-radius:10px; font-weight:700; font-size:.9rem; cursor:pointer; transition:background .2s; }
    .btn-add-cart:hover:not(:disabled) { background:#c49a52; }
    .btn-add-cart:disabled { opacity:.5; cursor:not-allowed; }
    .btn-contact { display:inline-flex; align-items:center; gap:.375rem; padding:.7rem 1.5rem; background:#8B4513; color:#fff; border:none; border-radius:10px; font-weight:700; font-size:.9rem; text-decoration:none; cursor:pointer; transition:background .2s; }
    .btn-contact:hover { background:#7a3a10; }
    .vendor-card { display:flex; align-items:center; gap:.875rem; background:var(--bg-secondary); border:1px solid var(--card-border); border-radius:12px; padding:.875rem 1rem; }
    .vendor-avatar { width:44px; height:44px; background:var(--bg-tertiary); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.5rem; flex-shrink:0; }
    .vendor-info { flex:1; display:flex; flex-direction:column; gap:.15rem; }
    .vendor-info strong { font-size:.9rem; font-weight:700; color:var(--text-primary); }
    .vendor-info span { font-size:.78rem; color:var(--text-muted); }
    .vendor-link { font-size:.8rem; color:#8B4513; font-weight:600; text-decoration:none; white-space:nowrap; }
    .vendor-link:hover { text-decoration:underline; }
    /* Description */
    .pd-desc-section h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 1rem; }
    .pd-desc-body { font-size:.9rem; line-height:1.85; color:var(--text-secondary); }
    /* Tags */
    .pd-tags { display:flex; flex-wrap:wrap; gap:.375rem; margin-top:1.5rem; }
    .tag { padding:.25rem .65rem; background:var(--bg-secondary); border:1px solid var(--card-border); border-radius:6px; font-size:.78rem; color:var(--text-muted); }
    /* Similar */
    .pd-similar { margin-top:2.5rem; }
    .pd-similar h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 1.25rem; }
    .similar-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(175px,1fr)); gap:1rem; }
    .sim-card { text-decoration:none; background:var(--card-bg); border:1px solid var(--card-border); border-radius:10px; overflow:hidden; transition:transform .2s,box-shadow .2s; }
    .sim-card:hover { transform:translateY(-2px); box-shadow:0 4px 14px rgba(0,0,0,.08); }
    .sim-thumb { height:130px; background:var(--bg-tertiary); overflow:hidden; }
    .sim-thumb img { width:100%; height:100%; object-fit:cover; transition:transform .3s; }
    .sim-card:hover .sim-thumb img { transform:scale(1.05); }
    .sim-ph { height:100%; display:flex; align-items:center; justify-content:center; font-size:2.5rem; }
    .sim-body { padding:.75rem; display:flex; flex-direction:column; gap:.25rem; }
    h4 { font-size:.82rem; font-weight:600; color:var(--text-primary); margin:0; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
    .sim-price { font-size:.85rem; font-weight:800; color:#8B4513; }
    /* Not found */
    .not-found { display:flex; flex-direction:column; align-items:center; gap:1rem; padding:5rem 2rem; text-align:center; }
    .nf-icon { font-size:4rem; }
    .not-found h2 { font-size:1.4rem; font-weight:800; color:var(--text-primary); }
    .not-found p { color:var(--text-muted); }
    .btn-back { padding:.6rem 1.5rem; background:#8B4513; color:#fff; border-radius:10px; text-decoration:none; font-weight:700; }
    .page-loader { display:flex; flex-direction:column; align-items:center; gap:1.25rem; padding:6rem 2rem; }
    .loader-ring { width:44px; height:44px; border:4px solid var(--card-border); border-top-color:#8B4513; border-radius:50%; animation:spin .8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .page-loader p { color:var(--text-muted); font-size:.875rem; }
    @media(max-width:768px) { .pd-layout{grid-template-columns:1fr;} .pd-body{padding:.5rem 1rem 2.5rem;} }
    @media(max-width:480px) { h1{font-size:1.25rem;} .pd-price{font-size:1.4rem;} }
  `]
})
export class ProductDetailComponent implements OnInit {
  private api    = inject(ApiService);
  private route  = inject(ActivatedRoute);
  private lang   = inject(LanguageService);
  private title  = inject(Title);
  private meta   = inject(Meta);
  private router = inject(Router);
  private auth   = inject(AuthService);
  private cart   = inject(CartService);

  product  = signal<any>(null);
  similar  = signal<any[]>([]);
  notFound = signal(false);
  activeImg = signal<string | null>(null);
  allImages = signal<string[]>([]);
  qty       = signal(1);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.api.get<{ data: any }>(`/products/${slug}`).subscribe({
        next: r => {
          const p = r.data;
          this.product.set(p);

          // SEO — dynamic title & meta tags
          const nameFr  = this.t(p.name);
          const descFr  = this.t(p.shortDescription) || this.t(p.description) || '';
          this.title.setTitle(`${nameFr} - KENZ BLADI`);
          this.meta.updateTag({ name: 'description', content: descFr.replace(/<[^>]*>/g, '').slice(0, 160) });
          this.meta.updateTag({ property: 'og:title',       content: `${nameFr} - KENZ BLADI` });
          this.meta.updateTag({ property: 'og:description', content: descFr.replace(/<[^>]*>/g, '').slice(0, 200) });
          this.meta.updateTag({ property: 'og:image',       content: p.coverImage || '' });
          this.meta.updateTag({ property: 'og:type',        content: 'product' });
          this.meta.updateTag({ name: 'twitter:card',       content: 'summary_large_image' });

          // Build image list: coverImage first, then additional images
          const imgs: string[] = [];
          if (p.coverImage) imgs.push(p.coverImage);
          if (p.images?.length) p.images.forEach((img: any) => { if (img.url && !imgs.includes(img.url)) imgs.push(img.url); });
          this.allImages.set(imgs);
          this.activeImg.set(imgs[0] || null);

          // Load similar products
          this.api.get<{ data: any[] }>('/products', { domain: p.domain, limit: 5 }).subscribe({
            next: res => this.similar.set(res.data.filter((s: any) => s._id !== p._id).slice(0, 4)),
            error: () => {}
          });
        },
        error: () => this.notFound.set(true)
      });
    }
  }

  t(f: Record<string, string> | null | undefined): string {
    if (!f) return '';
    const l = this.lang.current();
    return f[l] || f['fr'] || '';
  }

  domainLabel(id: string): string { return DOMAIN_LABELS[id] || id; }

  discountPct(): number {
    const p = this.product();
    if (!p || !p.priceDiscount) return 0;
    return Math.round((1 - p.priceDiscount / p.price) * 100);
  }

  starsDisplay(rating: number): string {
    const full  = Math.floor(rating);
    const half  = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  }

  incQty(): void {
    const p = this.product();
    const max = p.isInfiniteStock ? Infinity : p.stock;
    this.qty.update(v => Math.min(v + 1, max));
  }

  decQty(): void {
    this.qty.update(v => Math.max(1, v - 1));
  }

  addToCart(): void {
    if (!this.auth.isLoggedIn() || this.auth.currentUser()?.role !== 'client') {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }

    this.cart.addToCart(this.product(), this.qty());
    this.cart.isCartOpen.set(true);
  }
}
