import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

interface Product {
  _id:       string;
  name:      Record<string, string>;
  domain:    string;
  price:     number;
  stock:     number;
  status:    string;
  isActive:  boolean;
  coverImage:string | null;
  proActor:  { proProfile: { companyName: string } };
  createdAt: string;
}

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  private api = inject(ApiService);

  products   = signal<Product[]>([]);
  isLoading  = signal(true);
  viewMode   = signal<'grid' | 'table'>('table');
  searchTerm = signal('');
  filterDomain = signal('');
  filterStatus = signal('');
  selectedIds  = signal<Set<string>>(new Set());

  total = signal(0);
  page  = signal(1);
  limit = 10;

  readonly statusLabels: Record<string, string> = {
    draft:                'Brouillon',
    en_cours_publication: 'En cours de publication',
    published:            'Publié',
    archived:             'Archivé',
    rejected:             'Rejeté'
  };

  readonly domainLabels: Record<string, string> = {
    artisanat_service:   'Artisanat de Service',
    produits_mer:        'Produits de la Mer',
    habillement_mode:    'Habillement & Mode',
    tourisme_rural:      'Tourisme Rural',
    artisanat_art:       "Artisanat d'art",
    agriculture_bio:     'Agriculture Bio',
    soin_beaute:         'Soin & Beauté',
    produit_terroir:     'Produit de Terroir',
    artisanat_culinaire: 'Artisanat Culinaire'
  };

  ngOnInit(): void { this.load(); }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = {
      page:  this.page(),
      limit: this.limit
    };
    if (this.filterDomain()) params['domain'] = this.filterDomain();
    if (this.filterStatus()) params['status'] = this.filterStatus();
    if (this.searchTerm())   params['search'] = this.searchTerm();

    this.api.get<{ data: Product[]; pagination: { total: number } }>('/products', params)
      .subscribe({
        next: res => {
          this.products.set(res.data);
          this.total.set(res.pagination.total);
          this.isLoading.set(false);
        },
        error: () => {
          // Demo data
          this.products.set([
            { _id: '1', name: { fr: 'Huile Argan Biologique' },     domain: 'soin_beaute',         price: 0, stock: 45, status: 'en_cours_publication', isActive: true,  coverImage: null, proActor: { proProfile: { companyName: '' } }, createdAt: new Date().toISOString() },
            { _id: '2', name: { fr: 'Épices de Fables' },           domain: 'artisanat_culinaire', price: 0, stock: 10, status: 'en_cours_publication', isActive: true,  coverImage: null, proActor: { proProfile: { companyName: '' } }, createdAt: new Date().toISOString() },
            { _id: '3', name: { fr: 'Gandoura' },                   domain: 'habillement_mode',    price: 0, stock: 15, status: 'en_cours_publication', isActive: true,  coverImage: null, proActor: { proProfile: { companyName: '' } }, createdAt: new Date().toISOString() },
            { _id: '4', name: { fr: 'Tapis artisanaux recyclés' },  domain: 'artisanat_art',       price: 0, stock: 55, status: 'en_cours_publication', isActive: true,  coverImage: null, proActor: { proProfile: { companyName: '' } }, createdAt: new Date().toISOString() },
            { _id: '5', name: { fr: 'Résine' },                     domain: 'produit_terroir',     price: 0, stock: 10, status: 'en_cours_publication', isActive: true,  coverImage: null, proActor: { proProfile: { companyName: '' } }, createdAt: new Date().toISOString() },
            { _id: '6', name: { fr: 'Tisane Régionale' },           domain: 'agriculture_bio',     price: 0, stock: 10, status: 'en_cours_publication', isActive: false, coverImage: null, proActor: { proProfile: { companyName: '' } }, createdAt: new Date().toISOString() },
            { _id: '7', name: { fr: 'Beurre corps Cacao (Bain Beurre)' }, domain: 'soin_beaute',  price: 0, stock: 20, status: 'en_cours_publication', isActive: true,  coverImage: null, proActor: { proProfile: { companyName: '' } }, createdAt: new Date().toISOString() },
            { _id: '8', name: { fr: 'Sardine Fraîche (Agadir)' },   domain: 'produits_mer',        price: 0, stock: 20, status: 'en_cours_publication', isActive: true,  coverImage: null, proActor: { proProfile: { companyName: '' } }, createdAt: new Date().toISOString() }
          ]);
          this.total.set(8);
          this.isLoading.set(false);
        }
      });
  }

  get pages(): number { return Math.ceil(this.total() / this.limit); }
  get selectedCount(): number { return this.selectedIds().size; }

  toggleSelect(id: string): void {
    this.selectedIds.update(s => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  toggleAll(): void {
    if (this.selectedIds().size === this.products().length) {
      this.selectedIds.set(new Set());
    } else {
      this.selectedIds.set(new Set(this.products().map(p => p._id)));
    }
  }

  isSelected(id: string): boolean { return this.selectedIds().has(id); }
  get allSelected(): boolean { return this.selectedIds().size === this.products().length && this.products().length > 0; }

  clearFilters(): void {
    this.searchTerm.set('');
    this.filterDomain.set('');
    this.filterStatus.set('');
    this.page.set(1);
    this.load();
  }

  applyFilters(): void { this.page.set(1); this.load(); }

  goToPage(p: number): void { this.page.set(p); this.load(); }

  getName(product: Product): string {
    return product.name?.['fr'] || product.name?.['ar'] || '—';
  }
}
