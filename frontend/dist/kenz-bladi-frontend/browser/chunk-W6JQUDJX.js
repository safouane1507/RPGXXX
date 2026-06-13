import {
  AuthService
} from "./chunk-SCCTXVTR.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-PTMK54BH.js";
import "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-4ELZIBL4.js";

// src/app/features/pro/layout/pro-layout.component.ts
var _c0 = () => ({ exact: true });
var ProLayoutComponent = class _ProLayoutComponent {
  constructor() {
    this.auth = inject(AuthService);
  }
  static {
    this.\u0275fac = function ProLayoutComponent_Factory(t) {
      return new (t || _ProLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProLayoutComponent, selectors: [["app-pro-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 2, consts: [[1, "pro-shell"], [1, "pro-topbar"], ["routerLink", "/pro/dashboard", 1, "pro-brand"], ["src", "assets/logo/logo1-1.png", "alt", "KENZ BLADI", 1, "pro-logo"], [1, "pro-brand-text"], [1, "pro-brand-name"], [1, "pro-brand-sub"], [1, "pro-nav"], ["routerLink", "/pro/dashboard", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "nav-icon"], ["routerLink", "/pro/products", "routerLinkActive", "active"], ["routerLink", "/pro/annuaire", "routerLinkActive", "active"], ["routerLink", "/pro/profile", "routerLinkActive", "active"], [1, "pro-logout", 3, "click"], [1, "pro-content"]], template: function ProLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "KENZ BLADI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "Espace Acteur Pro");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "a", 8)(11, "span", 9);
        \u0275\u0275text(12, "\u{1F3E0}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Tableau de bord ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 10)(15, "span", 9);
        \u0275\u0275text(16, "\u{1F4E6}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Mes Produits ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 11)(19, "span", 9);
        \u0275\u0275text(20, "\u{1F4D6}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Ma Fiche Annuaire ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 12)(23, "span", 9);
        \u0275\u0275text(24, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " Mon Profil ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 13);
        \u0275\u0275listener("click", function ProLayoutComponent_Template_button_click_26_listener() {
          return ctx.auth.logout();
        });
        \u0275\u0275elementStart(27, "span", 9);
        \u0275\u0275text(28, "\u{1F6AA}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " D\xE9connexion ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "main", 14);
        \u0275\u0275element(31, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c0));
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.pro-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-secondary);\n}\n.pro-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 0.75rem 1.5rem;\n  background: var(--card-bg);\n  border-bottom: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-wrap: wrap;\n}\n.pro-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  text-decoration: none;\n}\n.pro-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n.pro-brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.pro-brand-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: var(--brand-primary);\n}\n.pro-brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n}\n.pro-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  flex: 1;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.pro-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 0.875rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-decoration: none;\n  border-radius: var(--radius-md);\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.pro-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n  color: var(--brand-primary);\n}\n.pro-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(139, 69, 19, 0.08);\n  color: var(--brand-primary);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.pro-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  background: transparent;\n  border: 1px solid var(--card-border);\n  border-radius: var(--radius-md);\n  padding: 0.5rem 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pro-logout[_ngcontent-%COMP%]:hover {\n  color: var(--brand-red);\n  border-color: var(--brand-red);\n  background: rgba(192, 57, 43, 0.06);\n}\n.pro-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n@media (max-width: 900px) {\n  .pro-nav[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=pro-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProLayoutComponent, { className: "ProLayoutComponent", filePath: "src\\app\\features\\pro\\layout\\pro-layout.component.ts", lineNumber: 124 });
})();
export {
  ProLayoutComponent
};
//# sourceMappingURL=chunk-W6JQUDJX.js.map
