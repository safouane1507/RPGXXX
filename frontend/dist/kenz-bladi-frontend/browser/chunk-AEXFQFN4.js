import {
  RouterLink,
  RouterModule
} from "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item._id;
function DashboardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement des statistiques\u2026");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_2_For_11_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 62);
    \u0275\u0275element(1, "path", 63)(2, "path", 64);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_2_For_11_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 62);
    \u0275\u0275element(1, "path", 65)(2, "polyline", 66);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_2_For_11_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 62);
    \u0275\u0275element(1, "path", 67)(2, "circle", 39)(3, "path", 68);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_2_For_11_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 62);
    \u0275\u0275element(1, "rect", 45)(2, "line", 46)(3, "line", 47)(4, "line", 48);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_2_For_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 69);
    \u0275\u0275element(2, "polyline", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" +", card_r2.trend, "% ");
  }
}
function DashboardComponent_Conditional_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55)(1, "div", 56);
    \u0275\u0275template(2, DashboardComponent_Conditional_2_For_11_Case_2_Template, 3, 0)(3, DashboardComponent_Conditional_2_For_11_Case_3_Template, 3, 0)(4, DashboardComponent_Conditional_2_For_11_Case_4_Template, 4, 0)(5, DashboardComponent_Conditional_2_For_11_Case_5_Template, 5, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 57)(7, "div", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 59);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 60);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, DashboardComponent_Conditional_2_For_11_Conditional_13_Template, 4, 1, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const card_r2 = ctx.$implicit;
    \u0275\u0275styleProp("--card-color", card_r2.color);
    \u0275\u0275property("routerLink", card_r2.route);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, (tmp_13_0 = card_r2.icon) === "annuaire" ? 2 : tmp_13_0 === "products" ? 3 : tmp_13_0 === "users" ? 4 : tmp_13_0 === "events" ? 5 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(card_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r2.sub);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, card_r2.trend ? 13 : -1);
  }
}
function DashboardComponent_Conditional_2_For_45_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", row_r4.active, " actives)");
  }
}
function DashboardComponent_Conditional_2_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 71);
    \u0275\u0275element(2, "span", 72);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73);
    \u0275\u0275element(5, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 75)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DashboardComponent_Conditional_2_For_45_Conditional_9_Template, 2, 1, "span", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.getDomainColor(row_r4._id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDomainLabel(row_r4._id), " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.getBarWidth(row_r4.count, ctx_r2.activeTab() === "annuaire" ? ctx_r2.stats().byDomain.annuaire : ctx_r2.stats().byDomain.products))("background", ctx_r2.getDomainColor(row_r4._id))("animation-delay", i_r5 * 80 + "ms");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.count);
    \u0275\u0275advance();
    \u0275\u0275conditional(9, ctx_r2.activeTab() === "annuaire" ? 9 : -1);
  }
}
function DashboardComponent_Conditional_2_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 30)(1, "div", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78)(4, "span", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 80);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 81);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pro_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.getDomainColor(pro_r6.proProfile.domain));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (pro_r6.proProfile.companyName || pro_r6.email).charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pro_r6.proProfile.companyName || pro_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getDomainLabel(pro_r6.proProfile.domain));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", pro_r6.isActive)("inactive", !pro_r6.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pro_r6.isActive ? "Actif" : "Inactif", " ");
  }
}
function DashboardComponent_Conditional_2_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 82);
    \u0275\u0275element(2, "circle", 83)(3, "line", 84)(4, "line", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " fiches en attente de validation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 86);
    \u0275\u0275text(10, "Traiter \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.stats().annuaire.pending);
  }
}
function DashboardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h2");
    \u0275\u0275text(3, "Bonjour, Administrateur \u{1F44B}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Voici un aper\xE7u de votre plateforme ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "KENZ BLADI \u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6);
    \u0275\u0275repeaterCreate(10, DashboardComponent_Conditional_2_For_11_Template, 14, 8, "a", 7, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "section", 8)(13, "div", 9)(14, "div")(15, "h3", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 11);
    \u0275\u0275element(17, "path", 12)(18, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Annuaire des Acteurs Professionnels ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "p", 14);
    \u0275\u0275text(21, "R\xE9partition par domaine de la Taxonomie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "span", 17);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 18);
    \u0275\u0275text(27, "Total fiches");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 19)(29, "span", 17);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 18);
    \u0275\u0275text(32, "Actives");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 20)(34, "span", 17);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 18);
    \u0275\u0275text(37, "En attente");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 21)(39, "button", 22);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_2_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set("annuaire"));
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 22);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_2_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set("products"));
    });
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 23);
    \u0275\u0275repeaterCreate(44, DashboardComponent_Conditional_2_For_45_Template, 10, 11, "div", 24, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 25)(47, "section", 26)(48, "div", 27)(49, "h4");
    \u0275\u0275text(50, "Nouveaux Acteurs Pro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "a", 28);
    \u0275\u0275text(52, "Voir tous \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "ul", 29);
    \u0275\u0275repeaterCreate(54, DashboardComponent_Conditional_2_For_55_Template, 10, 10, "li", 30, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "section", 31)(57, "div", 27)(58, "h4");
    \u0275\u0275text(59, "Actions rapides");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 32)(61, "a", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 34);
    \u0275\u0275element(63, "line", 35)(64, "line", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, " Valider une fiche Annuaire ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(66, "a", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(67, "svg", 34);
    \u0275\u0275element(68, "path", 38)(69, "circle", 39)(70, "line", 40)(71, "line", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, " Cr\xE9er un compte Pro ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(73, "a", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(74, "svg", 34);
    \u0275\u0275element(75, "polyline", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " Publier un produit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(77, "a", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(78, "svg", 34);
    \u0275\u0275element(79, "rect", 45)(80, "line", 46)(81, "line", 47)(82, "line", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, " Cr\xE9er un \xE9v\xE9nement ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(84, "a", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(85, "svg", 34);
    \u0275\u0275element(86, "path", 50)(87, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, " R\xE9diger un article ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(89, "a", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(90, "svg", 34);
    \u0275\u0275element(91, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " Voir les r\xE9clamations ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(93, DashboardComponent_Conditional_2_Conditional_93_Template, 11, 1, "div", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.statCards());
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r2.stats().annuaire.total);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.stats().annuaire.active);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.stats().annuaire.pending);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "annuaire");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Annuaire (", ctx_r2.stats().annuaire.total, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === "products");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Produits (", ctx_r2.stats().products.total, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.activeTab() === "annuaire" ? ctx_r2.stats().byDomain.annuaire : ctx_r2.stats().byDomain.products);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.stats().recentPros);
    \u0275\u0275advance(39);
    \u0275\u0275conditional(93, ctx_r2.stats().annuaire.pending > 0 ? 93 : -1);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.api = inject(ApiService);
    this.stats = signal(null);
    this.isLoading = signal(true);
    this.activeTab = signal("annuaire");
    this.domainLabels = {
      artisanat_service: "Artisanat de Service",
      produits_mer: "Produits de la Mer",
      habillement_mode: "Habillement & Mode",
      tourisme_rural: "Tourisme Rural",
      artisanat_art: "Artisanat d'art",
      agriculture_bio: "Agriculture Bio",
      soin_beaute: "Soin & Beaut\xE9",
      produit_terroir: "Produit de Terroir",
      artisanat_culinaire: "Artisanat Culinaire"
    };
    this.domainColors = {
      artisanat_service: "#8B4513",
      produits_mer: "#006994",
      habillement_mode: "#C0392B",
      tourisme_rural: "#27AE60",
      artisanat_art: "#8E44AD",
      agriculture_bio: "#2ECC71",
      soin_beaute: "#E91E8C",
      produit_terroir: "#F39C12",
      artisanat_culinaire: "#E74C3C"
    };
    this.statCards = signal([]);
  }
  ngOnInit() {
    this.loadStats();
  }
  loadStats() {
    this.isLoading.set(true);
    this.api.get("/admin/stats").subscribe({
      next: (res) => {
        this.stats.set(res.data);
        this.buildCards(res.data);
        this.isLoading.set(false);
      },
      error: () => {
        const demo = {
          products: { total: 248, published: 183 },
          annuaire: { total: 62, active: 45, pending: 17 },
          users: { total: 310, pro: 62, client: 248 },
          events: { total: 14 },
          blogs: { total: 38 },
          byDomain: {
            annuaire: [
              { _id: "artisanat_art", count: 14, active: 11 },
              { _id: "produit_terroir", count: 12, active: 9 },
              { _id: "agriculture_bio", count: 10, active: 8 },
              { _id: "soin_beaute", count: 8, active: 6 },
              { _id: "artisanat_culinaire", count: 7, active: 5 },
              { _id: "habillement_mode", count: 5, active: 4 },
              { _id: "tourisme_rural", count: 3, active: 2 },
              { _id: "produits_mer", count: 2, active: 2 },
              { _id: "artisanat_service", count: 1, active: 0 }
            ],
            products: [
              { _id: "artisanat_art", count: 68, active: 68 },
              { _id: "produit_terroir", count: 55, active: 55 },
              { _id: "agriculture_bio", count: 42, active: 42 },
              { _id: "soin_beaute", count: 35, active: 35 },
              { _id: "artisanat_culinaire", count: 28, active: 28 },
              { _id: "habillement_mode", count: 12, active: 12 },
              { _id: "artisanat_service", count: 8, active: 8 }
            ]
          },
          recentPros: [
            { _id: "1", email: "coop.safran@ma.ma", isActive: true, createdAt: (/* @__PURE__ */ new Date()).toISOString(), proProfile: { companyName: "Coop Safran Taliouine", domain: "produit_terroir" } },
            { _id: "2", email: "argan.essaouira@ma.ma", isActive: true, createdAt: (/* @__PURE__ */ new Date()).toISOString(), proProfile: { companyName: "Coop\xE9rative d'Argan Essaouira", domain: "soin_beaute" } },
            { _id: "3", email: "poterie.fes@ma.ma", isActive: false, createdAt: (/* @__PURE__ */ new Date()).toISOString(), proProfile: { companyName: "Poterie Artisanale F\xE8s", domain: "artisanat_art" } },
            { _id: "4", email: "broderie.tanger@ma.ma", isActive: true, createdAt: (/* @__PURE__ */ new Date()).toISOString(), proProfile: { companyName: "Maison Broderie Tanger", domain: "habillement_mode" } },
            { _id: "5", email: "zellige.meknes@ma.ma", isActive: true, createdAt: (/* @__PURE__ */ new Date()).toISOString(), proProfile: { companyName: "Zellige & Mosa\xEFque Mekn\xE8s", domain: "artisanat_art" } }
          ]
        };
        this.stats.set(demo);
        this.buildCards(demo);
        this.isLoading.set(false);
      }
    });
  }
  buildCards(data) {
    this.statCards.set([
      {
        label: "Fiches Annuaire",
        value: data.annuaire.total,
        sub: `${data.annuaire.active} actives \xB7 ${data.annuaire.pending} en attente`,
        icon: "annuaire",
        color: "#8B4513",
        route: "/admin/annuaire",
        trend: 12
      },
      {
        label: "Produits",
        value: data.products.total,
        sub: `${data.products.published} publi\xE9s`,
        icon: "products",
        color: "#006994",
        route: "/admin/products",
        trend: 8
      },
      {
        label: "Acteurs Pro",
        value: data.users.pro,
        sub: `${data.users.client} clients enregistr\xE9s`,
        icon: "users",
        color: "#27AE60",
        route: "/admin/users",
        trend: 5
      },
      {
        label: "\xC9v\xE9nements",
        value: data.events.total,
        sub: `${data.blogs.total} articles publi\xE9s`,
        icon: "events",
        color: "#8E44AD",
        route: "/admin/events",
        trend: 3
      }
    ]);
  }
  getDomainLabel(id) {
    return this.domainLabels[id] || id;
  }
  getDomainColor(id) {
    return this.domainColors[id] || "#999";
  }
  getBarWidth(count, rows) {
    const max = Math.max(...rows.map((r) => r.count), 1);
    return `${Math.round(count / max * 100)}%`;
  }
  trackById(_, item) {
    return item._id;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "dashboard"], [1, "loading-state"], [1, "spinner"], [1, "welcome-banner"], [1, "welcome-text"], ["src", "assets/logo.png", "alt", "KENZ BLADI", 1, "welcome-logo"], [1, "stat-grid"], [1, "stat-card", 3, "routerLink", "--card-color"], [1, "annuaire-section"], [1, "section-header"], [1, "section-title"], ["viewBox", "0 0 24 24", "fill", "none", "width", "20", "height", "20", 2, "vertical-align", "middle", "margin-inline-end", "8px"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20", "stroke", "#8B4513", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z", "stroke", "#8B4513", "stroke-width", "2"], [1, "section-sub"], [1, "annuaire-kpis"], [1, "kpi"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi", "kpi-active"], [1, "kpi", "kpi-pending"], [1, "chart-tabs"], [3, "click"], [1, "domain-chart"], [1, "domain-row"], [1, "bottom-grid"], [1, "card", "recent-card"], [1, "card-header"], ["routerLink", "/admin/users", 1, "see-all"], [1, "recent-list"], [1, "recent-item"], [1, "card", "quick-actions-card"], [1, "quick-actions"], ["routerLink", "/admin/annuaire", 1, "action-btn", "action-primary"], ["viewBox", "0 0 24 24", "fill", "none", "width", "18", "height", "18"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["routerLink", "/admin/users", 1, "action-btn"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "stroke", "currentColor", "stroke-width", "2"], ["cx", "9", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "2"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "22", "y1", "11", "x2", "16", "y2", "11", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["routerLink", "/admin/products", 1, "action-btn"], ["points", "22,12 18,12 15,21 9,3 6,12 2,12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "/admin/events", 1, "action-btn"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2", "stroke", "currentColor", "stroke-width", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6", "stroke", "currentColor", "stroke-width", "2"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6", "stroke", "currentColor", "stroke-width", "2"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10", "stroke", "currentColor", "stroke-width", "2"], ["routerLink", "/admin/cms", 1, "action-btn"], ["d", "M12 20h9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z", "stroke", "currentColor", "stroke-width", "2"], ["routerLink", "/admin/complaints", 1, "action-btn"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", "stroke", "currentColor", "stroke-width", "2"], [1, "pending-alert"], [1, "stat-card", 3, "routerLink"], [1, "stat-icon"], [1, "stat-body"], [1, "stat-value"], [1, "stat-label"], [1, "stat-sub"], [1, "stat-trend"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", "stroke", "currentColor", "stroke-width", "2"], ["points", "3.27,6.96 12,12.01 20.73,6.96", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "stroke", "currentColor", "stroke-width", "2"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", "stroke", "currentColor", "stroke-width", "2"], ["viewBox", "0 0 24 24", "fill", "none", "width", "12", "height", "12"], ["points", "23,6 13.5,15.5 8.5,10.5 1,18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "domain-name"], [1, "domain-dot"], [1, "bar-track"], [1, "bar-fill"], [1, "domain-count"], [1, "active-count"], [1, "recent-avatar"], [1, "recent-info"], [1, "recent-name"], [1, "recent-domain"], [1, "status-badge"], ["viewBox", "0 0 24 24", "fill", "none", "width", "16", "height", "16"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["routerLink", "/admin/annuaire"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, DashboardComponent_Conditional_1_Template, 4, 0, "div", 1)(2, DashboardComponent_Conditional_2_Template, 94, 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.isLoading() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(2, !ctx.isLoading() && ctx.stats() ? 2 : -1);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n\n.dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  gap: 1rem;\n  color: var(--text-muted, #888);\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(139, 69, 19, 0.15);\n  border-top-color: #8B4513;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.welcome-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513 0%,\n      #d4af6a 100%);\n  border-radius: 14px;\n  padding: 1.5rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #fff;\n  overflow: hidden;\n  position: relative;\n}\n.welcome-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset-inline-end: -40px;\n  top: -40px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n}\n.welcome-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n}\n.welcome-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.9;\n  margin: 0;\n}\n.welcome-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.welcome-banner[_ngcontent-%COMP%]   .welcome-logo[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  object-fit: contain;\n  opacity: 0.9;\n  position: relative;\n  z-index: 1;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 1200px) {\n  .stat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .stat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--card-bg, #fff);\n  border-radius: 14px;\n  padding: 1.25rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  text-decoration: none;\n  border: 1px solid var(--card-border, #f0f0f0);\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n  position: relative;\n  overflow: hidden;\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset-inline-start: 0;\n  inset-block: 0;\n  width: 4px;\n  background: var(--card-color);\n  border-radius: 4px 0 0 4px;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .stat-card[_ngcontent-%COMP%] {\n  background: #1e2030;\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background: color-mix(in srgb, var(--card-color) 12%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: var(--card-color);\n}\n.stat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.stat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 800;\n  color: var(--text-primary, #1a1a1a);\n  line-height: 1;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .stat-value[_ngcontent-%COMP%] {\n  color: #f0f0f0;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-secondary, #555);\n  margin-top: 0.2rem;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .stat-label[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.stat-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted, #999);\n  margin-top: 0.15rem;\n}\n.stat-trend[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 1rem;\n  top: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #27ae60;\n  background: rgba(39, 174, 96, 0.08);\n  padding: 0.15rem 0.4rem;\n  border-radius: 6px;\n}\n.annuaire-section[_ngcontent-%COMP%] {\n  background: var(--card-bg, #fff);\n  border-radius: 14px;\n  padding: 1.5rem;\n  border: 2px solid rgba(139, 69, 19, 0.15);\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .annuaire-section[_ngcontent-%COMP%] {\n  background: #1e2030;\n  border-color: rgba(212, 175, 106, 0.2);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text-primary, #1a1a1a);\n  margin: 0 0 0.25rem;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .section-title[_ngcontent-%COMP%] {\n  color: #f0f0f0;\n}\n.section-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted, #888);\n  margin: 0;\n}\n.annuaire-kpis[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  flex-shrink: 0;\n}\n.kpi[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.kpi[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text-primary, #1a1a1a);\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .kpi[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: #f0f0f0;\n}\n.kpi[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted, #888);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.kpi.kpi-active[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n.kpi.kpi-pending[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n.chart-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n  border-bottom: 1px solid var(--card-border, #f0f0f0);\n  padding-bottom: 0.75rem;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .chart-tabs[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.chart-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.4rem 1rem;\n  border: 1px solid var(--card-border, #e8e8e8);\n  border-radius: 20px;\n  background: transparent;\n  color: var(--text-secondary, #666);\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.22s ease;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .chart-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #9ca3af;\n}\n.chart-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #8B4513;\n  border-color: #8B4513;\n  color: #fff;\n  font-weight: 600;\n}\n.domain-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.domain-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 1fr 120px;\n  align-items: center;\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .domain-row[_ngcontent-%COMP%] {\n    grid-template-columns: 140px 1fr 80px;\n  }\n}\n.domain-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: var(--text-secondary, #555);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .domain-name[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.domain-name[_ngcontent-%COMP%]   .domain-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  background: var(--bar-track, #f0f0f0);\n  border-radius: 5px;\n  overflow: hidden;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .bar-track[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.6s ease;\n  animation: _ngcontent-%COMP%_growBar 0.6s ease forwards;\n  width: 0;\n}\n@keyframes _ngcontent-%COMP%_growBar {\n  to {\n    width: var(--target-width);\n  }\n}\n.domain-count[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--text-primary, #1a1a1a);\n  white-space: nowrap;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .domain-count[_ngcontent-%COMP%] {\n  color: #f0f0f0;\n}\n.domain-count[_ngcontent-%COMP%]   .active-count[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--text-muted, #999);\n  font-size: 0.75rem;\n  margin-inline-start: 0.25rem;\n}\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 900px) {\n  .bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--card-bg, #fff);\n  border-radius: 14px;\n  padding: 1.25rem;\n  border: 1px solid var(--card-border, #f0f0f0);\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .card[_ngcontent-%COMP%] {\n  background: #1e2030;\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary, #1a1a1a);\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f0f0f0;\n}\n.card-header[_ngcontent-%COMP%]   .see-all[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #8B4513;\n  text-decoration: none;\n  font-weight: 600;\n}\n.card-header[_ngcontent-%COMP%]   .see-all[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.recent-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.recent-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.recent-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.recent-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.recent-info[_ngcontent-%COMP%]   .recent-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a1a);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .recent-info[_ngcontent-%COMP%]   .recent-name[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n.recent-info[_ngcontent-%COMP%]   .recent-domain[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted, #999);\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  padding: 0.15rem 0.5rem;\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  color: #e74c3c;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: 8px;\n  border: 1px solid var(--card-border, #e8e8e8);\n  background: transparent;\n  color: var(--text-secondary, #555);\n  font-size: 0.78rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.22s ease;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .action-btn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #9ca3af;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.06);\n  color: #8B4513;\n  border-color: rgba(139, 69, 19, 0.2);\n}\n.action-btn.action-primary[_ngcontent-%COMP%] {\n  background: rgba(139, 69, 19, 0.08);\n  color: #8B4513;\n  border-color: rgba(139, 69, 19, 0.2);\n  font-weight: 600;\n}\n.action-btn.action-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.14);\n}\n.pending-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 0.875rem;\n  background: rgba(243, 156, 18, 0.08);\n  border: 1px solid rgba(243, 156, 18, 0.25);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  color: #d68910;\n}\n.pending-alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pending-alert[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d68910;\n  font-weight: 700;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.pending-alert[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.pending-alert[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #d68910;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .pending-alert[_ngcontent-%COMP%] {\n  background: rgba(243, 156, 18, 0.06);\n  border-color: rgba(243, 156, 18, 0.2);\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\admin\\dashboard\\dashboard.component.ts", lineNumber: 50 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-AEXFQFN4.js.map
