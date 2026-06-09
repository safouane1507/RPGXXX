import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

interface Product {
  _id:             string;
  name:            Record<string, string>;
  domain:          string;
  price:           number;
  stock:           number;
  status:          string;
  isFeatured:      boolean;
  isActive:        boolean;
  coverImage:      string | null;
  rejectionReason: string;
  proActor:        { proProfile: { companyName: string }; email?: string };
  createdAt:       string;
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
  searchTerm = '';
  filterDomain = '';
  filterStatus = '';
  selectedIds  = signal<Set<string>>(new Set());

  total = signal(0);
  page  = signal(1);
  limit = 20;

  successMsg    = signal('');
  rejectModalId = signal<string | null>(null);
  rejectReason  = signal('');

  readonly statusLabels: Record<string, string> = {
    draft:                'Brouillon',
    en_cours_publication: 'En attente',
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
    const params: Record<string, string | number | boolean> = { page: this.page(), limit: this.limit };
    if (this.filterDomain) params['domain'] = this.filterDomain;
    if (this.filterStatus) params['status'] = this.filterStatus;
    if (this.searchTerm)   params['search'] = this.searchTerm;

    this.api.get<{ data: Product[]; pagination: { total: number } }>('/admin/products', params)
      .subscribe({
        next: res => {
          this.products.set(res.data);
          this.total.set(res.pagination.total);
          this.isLoading.set(false);
        },
        error: () => this.isLoading.set(false)
      });
  }

  get pages(): number { return Math.ceil(this.total() / this.limit); }
  get selectedCount(): number { return this.selectedIds().size; }
  get allSelected(): boolean { return this.selectedIds().size === this.products().length && this.products().length > 0; }

  toggleSelect(id: string): void {
    this.selectedIds.update(s => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  }

  toggleAll(): void {
    this.selectedIds.set(
      this.selectedIds().size === this.products().length
        ? new Set()
        : new Set(this.products().map(p => p._id))
    );
  }

  isSelected(id: string): boolean { return this.selectedIds().has(id); }
  getName(p: Product): string { return p.name?.['fr'] || p.name?.['ar'] || '—'; }

  clearFilters(): void { this.searchTerm = ''; this.filterDomain = ''; this.filterStatus = ''; this.page.set(1); this.load(); }
  applyFilters(): void { this.page.set(1); this.load(); }
  goToPage(p: number): void { this.page.set(p); this.load(); }

  // ── Status actions ────────────────────────────────────────

  publish(id: string): void {
    this.api.patch(`/admin/products/${id}/status`, { status: 'published' }).subscribe(() => {
      this.notify('Produit publié !');
      this.load();
    });
  }

  archive(id: string): void {
    this.api.patch(`/admin/products/${id}/status`, { status: 'archived' }).subscribe(() => {
      this.notify('Produit archivé.');
      this.load();
    });
  }

  openReject(id: string): void { this.rejectModalId.set(id); this.rejectReason.set(''); }
  closeReject(): void { this.rejectModalId.set(null); }

  confirmReject(): void {
    const id = this.rejectModalId();
    if (!id) return;
    this.api.patch(`/admin/products/${id}/status`, { status: 'rejected', rejectionReason: this.rejectReason() })
      .subscribe(() => {
        this.closeReject();
        this.notify('Produit rejeté.');
        this.load();
      });
  }

  toggleFeature(p: Product): void {
    this.api.patch<{ isFeatured: boolean }>(`/admin/products/${p._id}/feature`).subscribe(res => {
      p.isFeatured = res.isFeatured;
      this.notify(res.isFeatured ? 'Mis en avant !' : 'Retiré de la mise en avant.');
    });
  }

  deleteProduct(id: string): void {
    if (!confirm('Supprimer ce produit définitivement ?')) return;
    this.api.delete(`/admin/products/${id}`).subscribe(() => {
      this.notify('Produit supprimé.');
      this.load();
    });
  }

  // ── Bulk actions ──────────────────────────────────────────

  bulkAction(action: 'publish' | 'archive'): void {
    const ids = Array.from(this.selectedIds());
    if (!ids.length) return;
    this.api.post('/admin/products/bulk', { ids, action }).subscribe(() => {
      this.selectedIds.set(new Set());
      this.notify(`${ids.length} produit(s) ${action === 'publish' ? 'publiés' : 'archivés'}.`);
      this.load();
    });
  }

  bulkDelete(): void {
    const ids = Array.from(this.selectedIds());
    if (!ids.length || !confirm(`Supprimer ${ids.length} produit(s) ?`)) return;
    ids.forEach(id => this.api.delete(`/admin/products/${id}`).subscribe());
    setTimeout(() => { this.selectedIds.set(new Set()); this.notify('Produits supprimés.'); this.load(); }, 400);
  }

  private notify(msg: string): void {
    this.successMsg.set(msg);
    setTimeout(() => this.successMsg.set(''), 3500);
  }
}
