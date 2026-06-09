import { Routes } from '@angular/router';
import { authGuard }  from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { proGuard }   from './core/guards/pro.guard';

export const routes: Routes = [
  // ── Espace Client (Front-Office Public) ──────────────────
  {
    path: '',
    loadComponent: () => import('./features/client/layout/client-layout.component')
      .then(m => m.ClientLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/client/home/home.component').then(m => m.HomeComponent),
        title: 'KENZ BLADI - Marché Artisanal Marocain'
      },
      {
        path: 'about',
        loadComponent: () => import('./features/client/about/about.component').then(m => m.AboutComponent),
        title: 'À Propos - KENZ BLADI'
      },
      {
        path: 'services',
        loadComponent: () => import('./features/client/services/services.component').then(m => m.ServicesComponent),
        title: 'Nos Services - KENZ BLADI'
      },
      {
        path: 'blog',
        loadComponent: () => import('./features/client/blog/blog-list.component').then(m => m.BlogListComponent),
        title: 'Blog - KENZ BLADI'
      },
      {
        path: 'blog/:slug',
        loadComponent: () => import('./features/client/blog/blog-detail.component').then(m => m.BlogDetailComponent)
      },
      {
        path: 'marketplace',
        loadComponent: () => import('./features/client/marketplace/marketplace.component').then(m => m.MarketplaceComponent),
        title: 'Boutique - KENZ BLADI'
      },
      {
        path: 'marketplace/:slug',
        loadComponent: () => import('./features/client/marketplace/product-detail.component').then(m => m.ProductDetailComponent)
      },
      {
        path: 'tourism',
        loadComponent: () => import('./features/client/tourism/tourism-list.component').then(m => m.TourismListComponent),
        title: 'Tourisme - KENZ BLADI'
      },
      {
        path: 'tourism/:slug',
        loadComponent: () => import('./features/client/tourism/tourism-detail.component').then(m => m.TourismDetailComponent)
      },
      {
        path: 'annuaire',
        loadComponent: () => import('./features/client/annuaire/annuaire-list.component').then(m => m.AnnuaireListComponent),
        title: 'Annuaire - KENZ BLADI'
      },
      {
        path: 'annuaire/:slug',
        loadComponent: () => import('./features/client/annuaire/annuaire-detail.component').then(m => m.AnnuaireDetailComponent)
      },
      {
        path: 'faq',
        loadComponent: () => import('./features/client/faq/faq.component').then(m => m.FaqComponent),
        title: 'FAQ - KENZ BLADI'
      }
    ]
  },

  // ── Espace Admin (Port 4200 /admin) ───────────────────────
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import('./features/admin/layout/admin-layout.component')
      .then(m => m.AdminLayoutComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: 'Dashboard - KENZ BLADI Admin'
      },
      {
        path: 'products',
        loadComponent: () => import('./features/admin/products/products-list.component').then(m => m.ProductsListComponent),
        title: 'Gestion Produits'
      },
      {
        path: 'services',
        loadComponent: () => import('./features/admin/services/services-list.component').then(m => m.ServicesListComponent),
        title: 'Gestion Services'
      },
      {
        path: 'cooperatives',
        loadComponent: () => import('./features/admin/cooperatives/cooperatives-list.component').then(m => m.CooperativesListComponent),
        title: 'Gestion Coopératives'
      },
      {
        path: 'annuaire',
        loadComponent: () => import('./features/admin/annuaire/annuaire-admin.component').then(m => m.AnnuaireAdminComponent),
        title: 'Gestion Annuaire'
      },
      {
        path: 'users',
        loadComponent: () => import('./features/admin/users/users-list.component').then(m => m.UsersListComponent),
        title: 'Gestion Utilisateurs'
      },
      {
        path: 'payments',
        loadComponent: () => import('./features/admin/payments/payments.component').then(m => m.PaymentsComponent),
        title: 'Gestion Paiements'
      },
      {
        path: 'cms',
        loadComponent: () => import('./features/admin/cms/cms.component').then(m => m.CmsComponent),
        title: 'Gestion Contenu'
      },
      {
        path: 'events',
        loadComponent: () => import('./features/admin/events/events-list.component').then(m => m.EventsListComponent),
        title: 'Gestion Événements'
      },
      {
        path: 'tourism',
        loadComponent: () => import('./features/admin/tourism/tourism-admin.component').then(m => m.TourismAdminComponent),
        title: 'Gestion Tourisme'
      },
      {
        path: 'complaints',
        loadComponent: () => import('./features/admin/complaints/complaints.component').then(m => m.ComplaintsComponent),
        title: 'Réclamations'
      }
    ]
  },

  // ── Espace Acteur Pro ─────────────────────────────────────
  {
    path: 'pro',
    canActivate: [authGuard, proGuard],
    loadComponent: () => import('./features/pro/layout/pro-layout.component').then(m => m.ProLayoutComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/pro/dashboard/pro-dashboard.component').then(m => m.ProDashboardComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./features/pro/products/pro-products.component').then(m => m.ProProductsComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/pro/profile/pro-profile.component').then(m => m.ProProfileComponent)
      },
      {
        path: 'annuaire',
        loadComponent: () => import('./features/pro/annuaire/pro-annuaire.component').then(m => m.ProAnnuaireComponent)
      }
    ]
  },

  // ── Auth ──────────────────────────────────────────────────
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
        title: 'Connexion - KENZ BLADI'
      }
    ]
  },

  { path: '**', redirectTo: '' }
];
