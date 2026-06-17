import {
  LanguageService
} from "./chunk-XFLHW3ED.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import "./chunk-AJRT7THN.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/annuaire/annuaire-detail.component.ts
function AnnuaireDetailComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.actor().logo, \u0275\u0275sanitizeUrl)("alt", ctx_r0.actor().structureName);
  }
}
function AnnuaireDetailComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actor().structureName.charAt(0));
  }
}
function AnnuaireDetailComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "\u2713 V\xE9rifi\xE9");
    \u0275\u0275elementEnd();
  }
}
function AnnuaireDetailComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DE} ", ctx_r0.actor().contact.phone, "");
  }
}
function AnnuaireDetailComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2709 ", ctx_r0.actor().contact.email, "");
  }
}
function AnnuaireDetailComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "\u{1F310} ");
    \u0275\u0275elementStart(2, "a", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r0.actor().contact.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actor().contact.website);
  }
}
function AnnuaireDetailComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u{1F4CD} ", ctx_r0.actor().contact.city, ", ", ctx_r0.actor().contact.region, "");
  }
}
function AnnuaireDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275text(1, "\u2190 Retour \xE0 l'Annuaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275template(4, AnnuaireDetailComponent_Conditional_1_Conditional_4_Template, 1, 2, "img", 4)(5, AnnuaireDetailComponent_Conditional_1_Conditional_5_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AnnuaireDetailComponent_Conditional_1_Conditional_11_Template, 2, 0, "span", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "h2");
    \u0275\u0275text(15, "Pr\xE9sentation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 9)(19, "h3");
    \u0275\u0275text(20, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AnnuaireDetailComponent_Conditional_1_Conditional_21_Template, 2, 1, "div")(22, AnnuaireDetailComponent_Conditional_1_Conditional_22_Template, 2, 1, "div")(23, AnnuaireDetailComponent_Conditional_1_Conditional_23_Template, 4, 2, "div")(24, AnnuaireDetailComponent_Conditional_1_Conditional_24_Template, 2, 2, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, ctx_r0.actor().logo ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.actor().structureName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.t(ctx_r0.actor().slogan));
    \u0275\u0275advance();
    \u0275\u0275conditional(11, ctx_r0.actor().isVerified ? 11 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.t(ctx_r0.actor().presentation) || ctx_r0.t(ctx_r0.actor().description));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(21, ((tmp_6_0 = ctx_r0.actor().contact) == null ? null : tmp_6_0.phone) ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(22, ((tmp_7_0 = ctx_r0.actor().contact) == null ? null : tmp_7_0.email) ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(23, ((tmp_8_0 = ctx_r0.actor().contact) == null ? null : tmp_8_0.website) ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(24, ((tmp_9_0 = ctx_r0.actor().contact) == null ? null : tmp_9_0.city) ? 24 : -1);
  }
}
function AnnuaireDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
var AnnuaireDetailComponent = class _AnnuaireDetailComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.lang = inject(LanguageService);
    this.actor = signal(null);
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug)
      this.api.get(`/annuaire/${slug}`).subscribe({ next: (r) => this.actor.set(r.data), error: () => {
      } });
  }
  t(f) {
    const l = this.lang.current();
    return f?.[l] || f?.["fr"] || "";
  }
  static {
    this.\u0275fac = function AnnuaireDetailComponent_Factory(t) {
      return new (t || _AnnuaireDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnuaireDetailComponent, selectors: [["app-annuaire-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "ann-detail", "container", "section-spacing"], ["routerLink", "/annuaire", 1, "back"], [1, "actor-header"], [1, "actor-logo-lg"], [3, "src", "alt"], [1, "actor-slogan"], [1, "verified"], [1, "actor-body"], [1, "actor-desc"], [1, "actor-contact-card"], ["target", "_blank", 3, "href"], [2, "text-align", "center", "padding", "3rem", "color", "var(--text-muted)"]], template: function AnnuaireDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AnnuaireDetailComponent_Conditional_1_Template, 25, 9)(2, AnnuaireDetailComponent_Conditional_2_Template, 2, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.actor() ? 1 : 2);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.ann-detail[_ngcontent-%COMP%] {\n  padding: 2.5rem 1.5rem;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.back[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #8B4513;\n  text-decoration: none;\n  display: block;\n  margin-bottom: 1.5rem;\n}\n.back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.actor-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.actor-logo-lg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.1),\n      rgba(212, 175, 106, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.actor-logo-lg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.actor-logo-lg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #8B4513;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.actor-slogan[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin-bottom: 0.5rem;\n}\n.verified[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.2rem 0.6rem;\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n  border-radius: 10px;\n  font-weight: 700;\n}\n.actor-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 280px;\n  gap: 1.5rem;\n}\n@media (max-width: 700px) {\n  .actor-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.actor-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n  color: var(--text-primary);\n}\n.actor-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.8;\n  color: var(--text-secondary);\n}\n.actor-contact-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 1.25rem;\n  align-self: start;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n  color: var(--text-primary);\n}\n.actor-contact-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n  padding: 0.3rem 0;\n  border-bottom: 1px solid var(--card-border);\n}\n.actor-contact-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\na[_ngcontent-%COMP%] {\n  color: #8B4513;\n}\n/*# sourceMappingURL=annuaire-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnuaireDetailComponent, { className: "AnnuaireDetailComponent", filePath: "src\\app\\features\\client\\annuaire\\annuaire-detail.component.ts", lineNumber: 45 });
})();
export {
  AnnuaireDetailComponent
};
//# sourceMappingURL=chunk-PUGAZCCK.js.map
