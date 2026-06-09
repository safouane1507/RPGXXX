# 🌟 KENZ BLADI كنز بلادي — Plan des Étapes Restantes

> **Stack :** Angular 17 · Express.js · MongoDB · i18n 4 langues  
> **Statut actuel :** Architecture de base générée (83 fichiers)

---

## ✅ PHASE 0 — TERMINÉ (Base Architecture)

- [x] Structure des dossiers Frontend + Backend
- [x] Schémas MongoDB (User, Product, Annuaire, Tourism, Event, Blog)
- [x] API Gateway Express avec routes complètes
- [x] Composant Navbar (Dark/Light mode + 4 langues + nouveaux onglets)
- [x] Dashboard Admin avec stats et emphase Annuaire
- [x] Sidebar Admin interactive (menu + sous-menus)
- [x] Page d'accueil Client (Hero + Carousel + Annuaire filtrable)
- [x] Admin Produits (vue tableau/grille fidèle screenshot)
- [x] Composants stubs (toutes les routes compilent)
- [x] i18n complet : `fr.json` · `ar.json` · `en.json` · `darija.json`
- [x] Styles globaux SCSS (CSS vars · thème dark/light · RTL)

---

## 🔴 PHASE 1 — AUTHENTIFICATION & SÉCURITÉ
> Priorité : **Critique** | Durée estimée : 2–3 jours

### 1.1 Intercepteur HTTP Angular
- [ ] Créer `src/app/core/interceptors/auth.interceptor.ts`
  - Injecter le token JWT dans chaque requête `Authorization: Bearer ...`
  - Rediriger vers `/auth/login` si erreur 401
  - Rafraîchissement automatique du token (optionnel)

### 1.2 Guards de Route
- [ ] `src/app/core/guards/admin.guard.ts` — protéger `/admin/*`
- [ ] `src/app/core/guards/pro.guard.ts` — protéger `/pro/*`
- [ ] `src/app/core/guards/auth.guard.ts` — protéger les routes authentifiées
- [ ] Décommenter `canActivate` dans `app.routes.ts`

### 1.3 Page Login complète
- [ ] Améliorer `login.component.ts` :
  - Validation des champs en temps réel
  - Animation de chargement
  - Message d'erreur détaillé
  - Redirection intelligente selon le rôle (`admin` → `/admin`, `pro` → `/pro`)
- [ ] Ajouter "Mot de passe oublié"

### 1.4 Backend — Script de seeding Admin
- [ ] Créer `backend/src/scripts/seed.js`
  - Créer le compte admin par défaut (email/password depuis `.env`)
  - Insérer des données de démo (coopératives, produits, articles)

---

## 🟠 PHASE 2 — GESTION DES MÉDIAS (Upload)
> Priorité : **Haute** | Durée estimée : 1–2 jours

### 2.1 Backend Upload
- [ ] Créer `backend/src/routes/upload.routes.js`
  - Route `POST /api/upload/image` (Multer)
  - Validation type de fichier (jpg, png, webp)
  - Limite de taille (5 MB max)
  - Stockage local dans `uploads/` (ou AWS S3 en production)
  - Réponse : URL publique du fichier

### 2.2 Frontend — Composant Upload
- [ ] Créer `src/app/shared/components/image-upload/image-upload.component.ts`
  - Drag & Drop
  - Preview avant upload
  - Barre de progression
  - Suppression de l'image

---

## 🟡 PHASE 3 — ESPACE ACTEUR PRO (Formulaires)
> Priorité : **Haute** | Durée estimée : 3–4 jours

### 3.1 Fiche Annuaire Pro — Formulaire complet
- [ ] `features/pro/annuaire/pro-annuaire.component.ts` — multi-onglets :
  - **Onglet 1 :** Informations générales (nom, slogan multilingue, type, domaine)
  - **Onglet 2 :** Contact (téléphone, email, adresse, coordonnées GPS)
  - **Onglet 3 :** Médias (logo, photo de couverture, galerie photos)
  - **Onglet 4 :** Description multilingue (FR / AR / EN / Darija) avec éditeur de texte
  - **Onglet 5 :** Réseaux sociaux
  - **Onglet 6 :** FAQ spécifique (questions/réponses multilingues)
- [ ] Soumission → API `POST /api/annuaire` + message "En attente de validation"

### 3.2 Gestion des Produits Pro
- [ ] `features/pro/products/pro-products.component.ts` — liste + CRUD :
  - Formulaire ajout produit (nom multilingue, prix, description, photos)
  - Sélection du domaine depuis la taxonomie
  - Gestion du stock
  - Statut de publication (brouillon / soumis)

### 3.3 Profil Pro
- [ ] `features/pro/profile/pro-profile.component.ts`
  - Modifier email / mot de passe
  - Langue préférée
  - Informations de contact

---

## 🟢 PHASE 4 — ADMIN — FORMULAIRES COMPLETS
> Priorité : **Haute** | Durée estimée : 4–5 jours

### 4.1 Gestion Annuaire Admin
- [ ] Tableau avec pagination et filtres avancés *(base créée)*
- [ ] **Bouton Activer/Désactiver** une fiche → `PATCH /api/annuaire/:id/toggle-active`
- [ ] **Modale de détail** : voir toutes les infos avant validation
- [ ] **Formulaire d'ajout** côté admin (créer une fiche manuellement)
- [ ] **Export CSV** de la liste

### 4.2 Gestion Produits Admin
- [ ] Formulaire d'ajout/modification produit complet *(liste créée)*
- [ ] Validation / rejet avec raison
- [ ] Mise en avant (`isFeatured: true`)
- [ ] Bulk actions : publier / archiver / supprimer plusieurs produits

### 4.3 Gestion Utilisateurs Pro
- [ ] `features/admin/users/users-list.component.ts` — CRUD complet :
  - Formulaire création compte Pro (email, password, domaine, type structure)
  - Toggle actif/inactif → `PATCH /api/admin/users/:id/toggle`
  - Réinitialisation mot de passe
  - Historique de connexion

### 4.4 CMS — Blogs/Articles
- [ ] Liste des articles avec statut
- [ ] Éditeur riche multilingue (Quill.js ou TipTap)
- [ ] Gestion des catégories
- [ ] Planification de publication

### 4.5 Gestion Événements
- [ ] Formulaire création événement (titre multilingue, dates, lieu, type)
- [ ] Liste des réservations par événement
- [ ] Confirmation/annulation des réservations

---

## 🔵 PHASE 5 — SECTION TOURISME COMPLÈTE
> Priorité : **Moyenne** | Durée estimée : 2–3 jours

- [ ] **Admin** — Formulaire création lieu touristique :
  - Contenu multilingue (article complet avec éditeur riche)
  - Upload photos multiples avec légendes
  - Carte interactive (sélection des coordonnées GPS)
  - Sélection des "Autres endroits à visiter" (relatedPlaces)
  - Lien avec les coopératives à proximité

- [ ] **Client** — Page détail lieu *(base créée)* :
  - Galerie photos avec lightbox
  - Carte Google Maps / OpenStreetMap
  - Section "Autres endroits à visiter" — cartes cliquables *(logique déjà implémentée)*
  - Section "Coopératives à proximité"

---

## 🟣 PHASE 6 — MARKETPLACE COMPLÈTE
> Priorité : **Moyenne** | Durée estimée : 3–4 jours

- [ ] Page liste produits avec filtres avancés :
  - Filtre par domaine, prix min/max, région, certifications
  - Tri : plus récents, prix croissant/décroissant, mieux notés
  - Vue grille / liste

- [ ] Page détail produit :
  - Galerie photos avec zoom
  - Description multilingue
  - Informations vendeur (lien vers fiche Annuaire)
  - Produits similaires du même domaine

- [ ] Panier / Commande *(optionnel selon scope)*

---

## ⚪ PHASE 7 — FONCTIONNALITÉS AVANCÉES
> Priorité : **Basse** | Durée estimée : 5–7 jours

### 7.1 Recherche Globale
- [ ] Barre de recherche unifiée (produits + annuaire + tourisme + blogs)
- [ ] MongoDB text search avec score de pertinence
- [ ] Suggestions en temps réel (autocomplete)

### 7.2 Système de Notifications Admin
- [ ] Badge dans la sidebar pour les éléments en attente
  - Fiches annuaire en attente de validation
  - Produits soumis
  - Réclamations non traitées
- [ ] Websocket ou polling toutes les 30s

### 7.3 Réclamations
- [ ] Formulaire client (type, description, pièce jointe)
- [ ] Interface admin de suivi (statut : nouveau / en traitement / résolu)
- [ ] Réponse par email

### 7.4 Statistiques Avancées
- [ ] Graphiques Chart.js dans le dashboard :
  - Évolution des inscriptions Pro (courbe)
  - Produits par domaine (camembert)
  - Vues mensuelles de l'annuaire (barres)
  - Top 5 fiches les plus visitées

### 7.5 SEO & Performance
- [ ] Slugs automatiques pour tous les contenus
- [ ] Meta tags dynamiques par page
- [ ] Sitemap XML automatique
- [ ] Lazy loading des images
- [ ] Server-Side Rendering (Angular Universal) — optionnel

---

## 🚀 PHASE 8 — DÉPLOIEMENT
> Priorité : **Finale** | Durée estimée : 1–2 jours

### 8.1 Backend
- [ ] Configurer les variables d'environnement de production dans `.env`
- [ ] MongoDB Atlas (base de données cloud)
- [ ] Déploiement sur VPS (PM2 + Nginx) ou Railway / Render
- [ ] HTTPS avec Let's Encrypt

### 8.2 Frontend
- [ ] Build de production : `ng build --configuration=production`
- [ ] Déploiement sur Vercel / Netlify / Nginx
- [ ] Configuration du domaine `kenzbladi.ma`

### 8.3 Checklist finale
- [ ] Tests de charge (k6 ou Artillery)
- [ ] Audit de sécurité (OWASP)
- [ ] Test sur mobile (iOS + Android)
- [ ] Test RTL complet (arabe + darija)
- [ ] Vérification i18n — toutes les clés traduites dans les 4 langues

---

## 📋 RÉSUMÉ DES PRIORITÉS

| Phase | Description | Priorité | Durée |
|-------|-------------|----------|-------|
| **1** | Auth + Guards + Intercepteur | 🔴 Critique | 2–3 j |
| **2** | Upload Médias | 🟠 Haute | 1–2 j |
| **3** | Espace Pro — Formulaires | 🟠 Haute | 3–4 j |
| **4** | Admin — Formulaires complets | 🟡 Haute | 4–5 j |
| **5** | Tourisme complet | 🟢 Moyenne | 2–3 j |
| **6** | Marketplace complète | 🟢 Moyenne | 3–4 j |
| **7** | Fonctionnalités avancées | 🔵 Basse | 5–7 j |
| **8** | Déploiement | ⚪ Finale | 1–2 j |

**Total estimé : ~22–30 jours de développement**

---

## 📌 PROCHAINE ÉTAPE RECOMMANDÉE

```
PHASE 1 — Intercepteur JWT + Guards + Script Seed Admin
```

Cela permettra de :
1. Protéger les routes admin/pro
2. Tester l'authentification de bout en bout
3. Avoir des données de démo dans MongoDB pour valider l'interface

---

*Document généré le 2026-06-08 · KENZ BLADI كنز بلادي*
