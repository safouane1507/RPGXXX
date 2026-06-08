import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

interface StatCard {
  label:    string;
  value:    number;
  sub?:     string;
  icon:     string;
  color:    string;
  route:    string;
  trend?:   number;
}

interface DomainRow {
  _id:    string;
  count:  number;
  active: number;
}

interface RecentPro {
  _id:               string;
  email:             string;
  isActive:          boolean;
  createdAt:         string;
  proProfile: {
    companyName: string;
    domain:      string;
  };
}

interface DashStats {
  products:  { total: number; published: number };
  annuaire:  { total: number; active: number; pending: number };
  users:     { total: number; pro: number; client: number };
  events:    { total: number };
  blogs:     { total: number };
  byDomain:  { annuaire: DomainRow[]; products: DomainRow[] };
  recentPros: RecentPro[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private api = inject(ApiService);

  stats      = signal<DashStats | null>(null);
  isLoading  = signal(true);
  activeTab  = signal<'annuaire' | 'products'>('annuaire');

  readonly domainLabels: Record<string, string> = {
    artisanat_service:  'Artisanat de Service',
    produits_mer:       'Produits de la Mer',
    habillement_mode:   'Habillement & Mode',
    tourisme_rural:     'Tourisme Rural',
    artisanat_art:      "Artisanat d'art",
    agriculture_bio:    'Agriculture Bio',
    soin_beaute:        'Soin & Beauté',
    produit_terroir:    'Produit de Terroir',
    artisanat_culinaire:'Artisanat Culinaire'
  };

  readonly domainColors: Record<string, string> = {
    artisanat_service:  '#8B4513',
    produits_mer:       '#006994',
    habillement_mode:   '#C0392B',
    tourisme_rural:     '#27AE60',
    artisanat_art:      '#8E44AD',
    agriculture_bio:    '#2ECC71',
    soin_beaute:        '#E91E8C',
    produit_terroir:    '#F39C12',
    artisanat_culinaire:'#E74C3C'
  };

  statCards = signal<StatCard[]>([]);

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.isLoading.set(true);
    this.api.get<{ data: DashStats }>('/admin/stats').subscribe({
      next: res => {
        this.stats.set(res.data);
        this.buildCards(res.data);
        this.isLoading.set(false);
      },
      error: () => {
        // Données de démo si l'API n'est pas encore disponible
        const demo: DashStats = {
          products:  { total: 248, published: 183 },
          annuaire:  { total: 62,  active: 45,  pending: 17 },
          users:     { total: 310, pro: 62, client: 248 },
          events:    { total: 14 },
          blogs:     { total: 38 },
          byDomain:  {
            annuaire: [
              { _id: 'artisanat_art',      count: 14, active: 11 },
              { _id: 'produit_terroir',    count: 12, active: 9  },
              { _id: 'agriculture_bio',    count: 10, active: 8  },
              { _id: 'soin_beaute',        count: 8,  active: 6  },
              { _id: 'artisanat_culinaire',count: 7,  active: 5  },
              { _id: 'habillement_mode',   count: 5,  active: 4  },
              { _id: 'tourisme_rural',     count: 3,  active: 2  },
              { _id: 'produits_mer',       count: 2,  active: 2  },
              { _id: 'artisanat_service',  count: 1,  active: 0  }
            ],
            products: [
              { _id: 'artisanat_art',      count: 68, active: 68 },
              { _id: 'produit_terroir',    count: 55, active: 55 },
              { _id: 'agriculture_bio',    count: 42, active: 42 },
              { _id: 'soin_beaute',        count: 35, active: 35 },
              { _id: 'artisanat_culinaire',count: 28, active: 28 },
              { _id: 'habillement_mode',   count: 12, active: 12 },
              { _id: 'artisanat_service',  count: 8,  active: 8  }
            ]
          },
          recentPros: [
            { _id: '1', email: 'coop.safran@ma.ma',   isActive: true,  createdAt: new Date().toISOString(), proProfile: { companyName: 'Coop Safran Taliouine', domain: 'produit_terroir' } },
            { _id: '2', email: 'argan.essaouira@ma.ma',isActive: true,  createdAt: new Date().toISOString(), proProfile: { companyName: "Coopérative d'Argan Essaouira", domain: 'soin_beaute' } },
            { _id: '3', email: 'poterie.fes@ma.ma',   isActive: false, createdAt: new Date().toISOString(), proProfile: { companyName: 'Poterie Artisanale Fès', domain: 'artisanat_art' } },
            { _id: '4', email: 'broderie.tanger@ma.ma',isActive: true, createdAt: new Date().toISOString(), proProfile: { companyName: 'Maison Broderie Tanger', domain: 'habillement_mode' } },
            { _id: '5', email: 'zellige.meknes@ma.ma', isActive: true, createdAt: new Date().toISOString(), proProfile: { companyName: 'Zellige & Mosaïque Meknès', domain: 'artisanat_art' } }
          ]
        };
        this.stats.set(demo);
        this.buildCards(demo);
        this.isLoading.set(false);
      }
    });
  }

  private buildCards(data: DashStats): void {
    this.statCards.set([
      {
        label: 'Fiches Annuaire',
        value: data.annuaire.total,
        sub:   `${data.annuaire.active} actives · ${data.annuaire.pending} en attente`,
        icon:  'annuaire',
        color: '#8B4513',
        route: '/admin/annuaire',
        trend: 12
      },
      {
        label: 'Produits',
        value: data.products.total,
        sub:   `${data.products.published} publiés`,
        icon:  'products',
        color: '#006994',
        route: '/admin/products',
        trend: 8
      },
      {
        label: 'Acteurs Pro',
        value: data.users.pro,
        sub:   `${data.users.client} clients enregistrés`,
        icon:  'users',
        color: '#27AE60',
        route: '/admin/users',
        trend: 5
      },
      {
        label: 'Événements',
        value: data.events.total,
        sub:   `${data.blogs.total} articles publiés`,
        icon:  'events',
        color: '#8E44AD',
        route: '/admin/events',
        trend: 3
      }
    ]);
  }

  getDomainLabel(id: string): string { return this.domainLabels[id] || id; }
  getDomainColor(id: string): string { return this.domainColors[id] || '#999'; }

  getBarWidth(count: number, rows: DomainRow[]): string {
    const max = Math.max(...rows.map(r => r.count), 1);
    return `${Math.round((count / max) * 100)}%`;
  }

  trackById(_: number, item: { _id: string }) { return item._id; }
}
