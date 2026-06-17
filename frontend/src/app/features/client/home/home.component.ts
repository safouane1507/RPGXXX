import { Component, OnInit, inject, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

interface AnnuaireCard {
  _id:           string;
  structureName: string;
  domain:        string;
  structureType: string;
  description:   Record<string, string>;
  logo:          string | null;
  contact:       { city: string; phone: string };
  isVerified:    boolean;
  slug:          string;
}

interface ProductCard {
  _id:        string;
  name:       Record<string, string>;
  price:      number;
  coverImage: string | null;
  domain:     string;
  slug:       string;
  proActor:   { proProfile: { companyName: string } };
}

interface BlogPost {
  _id:       string;
  title:     Record<string, string>;
  excerpt:   Record<string, string>;
  coverImage:string;
  slug:      string;
  publishedAt: string;
  author:    { firstName: string; lastName: string };
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private api         = inject(ApiService);
  private langService = inject(LanguageService);

  currentLang = this.langService.current;
  isRTL       = this.langService.isRTL;

  @ViewChild('marketplaceTrack') marketplaceTrack?: ElementRef<HTMLElement>;
  @ViewChild('annuaireTrack')    annuaireTrack?: ElementRef<HTMLElement>;

  // ── Data ──────────────────────────────────────────────────
  annuaireList     = signal<AnnuaireCard[]>([]);
  featuredProducts = signal<ProductCard[]>([]);
  blogPosts        = signal<BlogPost[]>([]);

  // ── UI State ──────────────────────────────────────────────
  activeDomain     = signal<string>('all');
  isLoadingAnnuaire = signal(true);
  isLoadingProducts = signal(true);

  readonly domains = [
    { id: 'all',               labelKey: 'HOME.FILTER_ALL', color: '#8B4513' },
    { id: 'artisanat_service', labelKey: 'DOMAINS.artisanat_service', color: '#8B4513' },
    { id: 'produits_mer',      labelKey: 'DOMAINS.produits_mer',      color: '#006994' },
    { id: 'habillement_mode',  labelKey: 'DOMAINS.habillement_mode',  color: '#C0392B' },
    { id: 'tourisme_rural',    labelKey: 'DOMAINS.tourisme_rural',    color: '#27AE60' },
    { id: 'artisanat_art',     labelKey: 'DOMAINS.artisanat_art',     color: '#8E44AD' },
    { id: 'agriculture_bio',   labelKey: 'DOMAINS.agriculture_bio',   color: '#2ECC71' },
    { id: 'soin_beaute',       labelKey: 'DOMAINS.soin_beaute',       color: '#E91E8C' },
    { id: 'produit_terroir',   labelKey: 'DOMAINS.produit_terroir',   color: '#F39C12' },
    { id: 'artisanat_culinaire',labelKey: 'DOMAINS.artisanat_culinaire', color: '#E74C3C' }
  ];

  ngOnInit(): void {
    this.loadAnnuaire('all');
    this.loadFeaturedProducts();
    this.loadBlogPosts();
  }

  // ── Data Loaders ──────────────────────────────────────────
  loadAnnuaire(domain: string): void {
    this.activeDomain.set(domain);
    this.isLoadingAnnuaire.set(true);
    const params: Record<string, string | number | boolean> = { limit: 10 };
      if (domain) {
        params['domain'] = domain;
      }

      this.api.get<{ data: AnnuaireCard[] }>('/annuaire', params).subscribe({
      next:  res => { this.annuaireList.set(res.data); this.isLoadingAnnuaire.set(false); },
      error: () => { this.annuaireList.set([]); this.isLoadingAnnuaire.set(false); }
    });
  }

  loadFeaturedProducts(): void {
    this.isLoadingProducts.set(true);
    this.api.get<{ data: ProductCard[] }>('/products/featured').subscribe({
      next:  res => { this.featuredProducts.set(res.data); this.isLoadingProducts.set(false); },
      error: () => { this.featuredProducts.set([]); this.isLoadingProducts.set(false); }
    });
  }

  loadBlogPosts(): void {
    this.api.get<{ data: BlogPost[] }>('/blog', { limit: 3 }).subscribe({
      next:  res => this.blogPosts.set(res.data),
      error: () => this.blogPosts.set([])
    });
  }

  // ── Carousel ──────────────────────────────────────────────
  scrollCarousel(direction: 'prev' | 'next'): void {
    const el = this.marketplaceTrack?.nativeElement;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    const sign = this.isRTL() ? -1 : 1;
    const delta = direction === 'next' ? amount * sign : -amount * sign;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  }

  scrollAnnuaire(direction: 'prev' | 'next'): void {
    const el = this.annuaireTrack?.nativeElement;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    const sign = this.isRTL() ? -1 : 1;
    const delta = direction === 'next' ? amount * sign : -amount * sign;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  }

  // ── Helpers ───────────────────────────────────────────────
  getLocalizedText(field: Record<string, string>): string {
    const lang = this.currentLang();
    return field?.[lang] || field?.['fr'] || field?.['ar'] || '';
  }

  openInNewTab(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
