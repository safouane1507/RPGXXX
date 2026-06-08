import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

interface AnnuaireEntry {
  _id:           string;
  structureName: string;
  domain:        string;
  structureType: string;
  isActive:      boolean;
  isVerified:    boolean;
  contact:       { city: string; phone: string; email: string };
  createdAt:     string;
}

@Component({
  selector: 'app-annuaire-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="annuaire-admin">
      <div class="page-header">
        <h2>Gestion des Annuaires</h2>
        <div class="header-kpis">
          <span class="kpi-pill total">Total: {{ total() }}</span>
          <span class="kpi-pill active">Actifs: {{ activeCount() }}</span>
          <span class="kpi-pill pending">En attente: {{ pendingCount() }}</span>
        </div>
      </div>

      <div class="filter-bar">
        <select class="filter-select" (change)="filterDomain.set($any($event.target).value); load()">
          <option value="">Tous les domaines</option>
          @for (d of domains; track d.id) {
            <option [value]="d.id">{{ d.label }}</option>
          }
        </select>
        <select class="filter-select" (change)="filterActive.set($any($event.target).value); load()">
          <option value="">Tous les statuts</option>
          <option value="true">Actifs</option>
          <option value="false">En attente</option>
        </select>
      </div>

      @if (isLoading()) {
        <div class="loading">Chargement…</div>
      } @else {
        <div class="annuaire-table-wrap">
          <table class="annuaire-table">
            <thead>
              <tr>
                <th>Structure</th>
                <th>Domaine</th>
                <th>Type</th>
                <th>Ville</th>
                <th>Contact</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (row of entries(); track row._id) {
                <tr>
                  <td class="col-name">
                    <div class="actor-avatar">{{ row.structureName.charAt(0) }}</div>
                    <span>{{ row.structureName }}</span>
                  </td>
                  <td><span class="domain-chip">{{ domainLabel(row.domain) }}</span></td>
                  <td><span class="type-chip">{{ row.structureType }}</span></td>
                  <td>{{ row.contact.city || '—' }}</td>
                  <td class="col-contact">
                    <div>{{ row.contact.email }}</div>
                    <div class="phone">{{ row.contact.phone }}</div>
                  </td>
                  <td>
                    <span class="status-badge" [class.active]="row.isActive" [class.pending]="!row.isActive">
                      {{ row.isActive ? 'Actif' : 'En attente' }}
                    </span>
                    @if (row.isVerified) {
                      <span class="verified-chip">✓ Vérifié</span>
                    }
                  </td>
                  <td class="col-actions">
                    <button class="action-btn activate" [class.deactivate]="row.isActive"
                      (click)="toggle(row)" title="{{ row.isActive ? 'Désactiver' : 'Activer' }}">
                      {{ row.isActive ? 'Désactiver' : 'Activer' }}
                    </button>
                    <button class="action-btn edit">Modifier</button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  `,
  styles: [`
    .annuaire-admin { display:flex; flex-direction:column; gap:1.25rem; }
    .page-header { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.75rem; }
    h2 { font-size:1.1rem; font-weight:700; color:var(--text-primary); }
    .header-kpis { display:flex; gap:.5rem; }
    .kpi-pill { padding:.25rem .75rem; border-radius:12px; font-size:.75rem; font-weight:700; }
    .kpi-pill.total   { background:rgba(139,69,19,.08);  color:#8B4513; }
    .kpi-pill.active  { background:rgba(39,174,96,.08);  color:#27ae60; }
    .kpi-pill.pending { background:rgba(243,156,18,.08); color:#d68910; }
    .filter-bar { display:flex; gap:.75rem; flex-wrap:wrap; }
    .filter-select { padding:.375rem .625rem; border:1px solid var(--card-border); border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; }
    .loading { padding:2rem; text-align:center; color:var(--text-muted); }
    .annuaire-table-wrap { background:var(--card-bg); border:1px solid var(--card-border); border-radius:10px; overflow:hidden; }
    .annuaire-table { width:100%; border-collapse:collapse; font-size:.82rem; }
    .annuaire-table thead tr { background:var(--bg-secondary); }
    .annuaire-table th { padding:.7rem 1rem; text-align:start; font-weight:600; color:var(--text-secondary); white-space:nowrap; }
    .annuaire-table tbody tr { border-top:1px solid var(--card-border); transition:background .15s; }
    .annuaire-table tbody tr:hover { background:rgba(139,69,19,.025); }
    .annuaire-table td { padding:.7rem 1rem; color:var(--text-primary); vertical-align:middle; }
    .col-name { display:flex; align-items:center; gap:.625rem; min-width:180px; }
    .actor-avatar { width:32px; height:32px; border-radius:8px; background:linear-gradient(135deg,#8B4513,#d4af6a); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.85rem; flex-shrink:0; }
    .domain-chip { padding:.18rem .5rem; background:rgba(139,69,19,.07); color:#8B4513; border-radius:6px; font-size:.7rem; font-weight:600; white-space:nowrap; }
    .type-chip { padding:.18rem .5rem; background:var(--bg-tertiary); color:var(--text-secondary); border-radius:6px; font-size:.7rem; text-transform:capitalize; }
    .col-contact { font-size:.78rem; } .phone { color:var(--text-muted); font-size:.72rem; }
    .status-badge { padding:.18rem .55rem; border-radius:10px; font-size:.7rem; font-weight:700; }
    .status-badge.active  { background:rgba(39,174,96,.1);  color:#27ae60; }
    .status-badge.pending { background:rgba(243,156,18,.1); color:#d68910; }
    .verified-chip { margin-inline-start:.25rem; padding:.18rem .5rem; background:rgba(39,174,96,.08); color:#27ae60; border-radius:6px; font-size:.68rem; font-weight:600; }
    .col-actions { display:flex; gap:.375rem; }
    .action-btn { padding:.28rem .65rem; border-radius:6px; border:1px solid; font-size:.75rem; font-weight:600; cursor:pointer; transition:all .2s; }
    .action-btn.activate   { border-color:rgba(39,174,96,.3);  color:#27ae60; background:transparent; &:hover{background:rgba(39,174,96,.07);} }
    .action-btn.deactivate { border-color:rgba(231,76,60,.3);  color:#e74c3c; background:transparent; &:hover{background:rgba(231,76,60,.07);} }
    .action-btn.edit       { border-color:rgba(52,152,219,.3); color:#3498db; background:transparent; &:hover{background:rgba(52,152,219,.07);} }
  `]
})
export class AnnuaireAdminComponent implements OnInit {
  private api = inject(ApiService);

  entries      = signal<AnnuaireEntry[]>([]);
  isLoading    = signal(true);
  total        = signal(0);
  activeCount  = signal(0);
  pendingCount = signal(0);
  filterDomain = signal('');
  filterActive = signal('');

  readonly domains = [
    { id: 'artisanat_service',   label: 'Artisanat de Service' },
    { id: 'produits_mer',        label: 'Produits de la Mer' },
    { id: 'habillement_mode',    label: 'Habillement & Mode' },
    { id: 'tourisme_rural',      label: 'Tourisme Rural' },
    { id: 'artisanat_art',       label: "Artisanat d'art" },
    { id: 'agriculture_bio',     label: 'Agriculture Bio' },
    { id: 'soin_beaute',         label: 'Soin & Beauté' },
    { id: 'produit_terroir',     label: 'Produit de Terroir' },
    { id: 'artisanat_culinaire', label: 'Artisanat Culinaire' }
  ];

  ngOnInit(): void { this.load(); }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = { limit: 50 };
    if (this.filterDomain()) params['domain'] = this.filterDomain();
    if (this.filterActive()) params['isActive'] = this.filterActive();

    this.api.get<{ data: AnnuaireEntry[]; pagination: { total: number } }>('/annuaire', params)
      .subscribe({
        next: res => {
          this.entries.set(res.data);
          this.total.set(res.pagination.total);
          this.activeCount.set(res.data.filter(e => e.isActive).length);
          this.pendingCount.set(res.data.filter(e => !e.isActive).length);
          this.isLoading.set(false);
        },
        error: () => this.isLoading.set(false)
      });
  }

  toggle(row: AnnuaireEntry): void {
    this.api.patch(`/annuaire/${row._id}/toggle-active`).subscribe(() => {
      row.isActive = !row.isActive;
    });
  }

  domainLabel(id: string): string {
    return this.domains.find(d => d.id === id)?.label ?? id;
  }
}
