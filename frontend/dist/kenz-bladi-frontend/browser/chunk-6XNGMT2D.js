import {
  AuthService
} from "./chunk-SCCTXVTR.js";
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
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/pro/dashboard/pro-dashboard.component.ts
var ProDashboardComponent = class _ProDashboardComponent {
  constructor() {
    this.api = inject(ApiService);
    this.auth = inject(AuthService);
    this.productsCount = signal(0);
    this.annuaireStatus = signal("none");
  }
  ngOnInit() {
    this.api.get("/products/my").subscribe({
      next: (res) => this.productsCount.set(res.pagination?.total || 0),
      error: () => {
      }
    });
    this.api.get("/annuaire/my").subscribe({
      next: (res) => this.annuaireStatus.set(res.data?.isActive ? "active" : "pending"),
      error: () => this.annuaireStatus.set("none")
    });
  }
  annuaireStatusLabel() {
    switch (this.annuaireStatus()) {
      case "active":
        return "Active";
      case "pending":
        return "En attente";
      default:
        return "Non cr\xE9\xE9e";
    }
  }
  static {
    this.\u0275fac = function ProDashboardComponent_Factory(t) {
      return new (t || _ProDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProDashboardComponent, selectors: [["app-pro-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 6, consts: [[1, "pro-dash"], [1, "welcome-card"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "products"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "annuaire"], [1, "stat-icon", "domain"], [1, "section-title"], [1, "pro-cards"], ["routerLink", "/pro/products", 1, "pro-card"], [1, "pc-icon"], [1, "pc-arrow"], ["routerLink", "/pro/annuaire", 1, "pro-card"], ["routerLink", "/pro/profile", 1, "pro-card"]], template: function ProDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "G\xE9rez vos produits, votre fiche annuaire et vos informations de contact depuis votre espace.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 3)(9, "div", 4);
        \u0275\u0275text(10, "\u{1F4E6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div")(12, "span", 5);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 6);
        \u0275\u0275text(15, "Produits");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 3)(17, "div", 7);
        \u0275\u0275text(18, "\u{1F4D6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div")(20, "span", 5);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 6);
        \u0275\u0275text(23, "Fiche Annuaire");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 3)(25, "div", 8);
        \u0275\u0275text(26, "\u{1F3F7}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div")(28, "span", 5);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 6);
        \u0275\u0275text(31, "Domaine d'activit\xE9");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "h3", 9);
        \u0275\u0275text(33, "Acc\xE8s rapide");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 10)(35, "a", 11)(36, "div", 12);
        \u0275\u0275text(37, "\u{1F4E6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h3");
        \u0275\u0275text(39, "Mes Produits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p");
        \u0275\u0275text(41, "Ajouter, modifier et g\xE9rer vos produits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span", 13);
        \u0275\u0275text(43, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "a", 14)(45, "div", 12);
        \u0275\u0275text(46, "\u{1F4D6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "h3");
        \u0275\u0275text(48, "Ma Fiche Annuaire");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Mettre \xE0 jour votre fiche dans l'annuaire public");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 13);
        \u0275\u0275text(52, "\u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "a", 15)(54, "div", 12);
        \u0275\u0275text(55, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "h3");
        \u0275\u0275text(57, "Mon Profil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p");
        \u0275\u0275text(59, "G\xE9rer vos informations de contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "span", 13);
        \u0275\u0275text(61, "\u2192");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_4_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Bienvenue, ", ((tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.proProfile == null ? null : tmp_0_0.proProfile.companyName) || ((tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.fullName), " \u{1F44B}");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.productsCount());
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.annuaireStatus() === "active");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.annuaireStatusLabel());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(((tmp_4_0 = ctx.auth.currentUser()) == null ? null : tmp_4_0.proProfile == null ? null : tmp_4_0.proProfile.domain) || "\u2014");
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.pro-dash[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n}\n.welcome-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-primary),\n      var(--brand-gold));\n  border-radius: var(--radius-lg);\n  padding: 1.75rem;\n  box-shadow: var(--shadow-md);\n  color: #fff;\n}\n.welcome-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  margin: 0 0 0.4rem;\n}\n.welcome-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n  opacity: 0.92;\n  max-width: 560px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 700px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: var(--radius-lg);\n  padding: 1.25rem;\n  box-shadow: var(--shadow-sm);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  border-radius: var(--radius-md);\n  background: rgba(139, 69, 19, 0.08);\n  flex-shrink: 0;\n}\n.stat-icon.annuaire.active[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n}\n.stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  text-transform: capitalize;\n}\n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.pro-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .pro-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pro-card[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: var(--radius-lg);\n  padding: 1.5rem;\n  box-shadow: var(--shadow-sm);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.pro-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--brand-primary);\n  text-decoration: none;\n}\n.pc-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 0.75rem;\n}\n.pro-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.375rem;\n}\n.pro-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.pc-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  inset-inline-end: 1.5rem;\n  color: var(--brand-primary);\n  font-weight: 700;\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.pro-card[_ngcontent-%COMP%]:hover   .pc-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(4px);\n}\n/*# sourceMappingURL=pro-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProDashboardComponent, { className: "ProDashboardComponent", filePath: "src\\app\\features\\pro\\dashboard\\pro-dashboard.component.ts", lineNumber: 151 });
})();
export {
  ProDashboardComponent
};
//# sourceMappingURL=chunk-6XNGMT2D.js.map
