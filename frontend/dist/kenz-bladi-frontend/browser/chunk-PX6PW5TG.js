import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JXVZJL7I.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-AJRT7THN.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/annuaire/annuaire-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item._id;
var _c0 = (a0) => ["/annuaire", a0];
function AnnuaireListComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275property("value", d_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.label);
  }
}
function AnnuaireListComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("value", r_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2);
  }
}
function AnnuaireListComponent_For_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", a_r3.logo, \u0275\u0275sanitizeUrl)("alt", a_r3.structureName);
  }
}
function AnnuaireListComponent_For_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.structureName.charAt(0));
  }
}
function AnnuaireListComponent_For_30_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DE} ", a_r3.contact.phone, "");
  }
}
function AnnuaireListComponent_For_30_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2709 ", a_r3.contact.email, "");
  }
}
function AnnuaireListComponent_For_30_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", a_r3.contact.city, "");
  }
}
function AnnuaireListComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13)(1, "div", 14);
    \u0275\u0275template(2, AnnuaireListComponent_For_30_Conditional_2_Template, 1, 2, "img", 15)(3, AnnuaireListComponent_For_30_Conditional_3_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275template(9, AnnuaireListComponent_For_30_Conditional_9_Template, 2, 1, "span")(10, AnnuaireListComponent_For_30_Conditional_10_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AnnuaireListComponent_For_30_Conditional_11_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, a_r3.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, a_r3.logo ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r3.structureName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.domainLabel(a_r3.domain));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, (a_r3.contact == null ? null : a_r3.contact.phone) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, (a_r3.contact == null ? null : a_r3.contact.email) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, (a_r3.contact == null ? null : a_r3.contact.city) ? 11 : -1);
  }
}
var AnnuaireListComponent = class _AnnuaireListComponent {
  constructor() {
    this.api = inject(ApiService);
    this.actors = signal([]);
    this.search = "";
    this.domain = "";
    this.region = "";
    this.city = "";
    this.domains = [{ id: "artisanat_art", label: "Artisanat d'art" }, { id: "soin_beaute", label: "Soin & Beaut\xE9" }, { id: "produit_terroir", label: "Produit de Terroir" }, { id: "agriculture_bio", label: "Agriculture Bio" }, { id: "artisanat_culinaire", label: "Artisanat Culinaire" }, { id: "habillement_mode", label: "Habillement & Mode" }, { id: "produits_mer", label: "Produits de la Mer" }, { id: "tourisme_rural", label: "Tourisme Rural" }, { id: "artisanat_service", label: "Artisanat de Service" }];
    this.regions = ["Tanger-T\xE9touan-Al Hoce\xEFma", "Oriental", "F\xE8s-Mekn\xE8s", "Rabat-Sal\xE9-K\xE9nitra", "Casablanca-Settat", "Marrakech-Safi", "Souss-Massa", "Dr\xE2a-Tafilalet"];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    const p = { limit: 24 };
    if (this.domain)
      p.domain = this.domain;
    if (this.region)
      p.region = this.region;
    if (this.city)
      p.city = this.city;
    this.api.get("/annuaire", p).subscribe({ next: (r) => this.actors.set(r.data), error: () => {
    } });
  }
  domainLabel(id) {
    return this.domains.find((d) => d.id === id)?.label ?? id;
  }
  static {
    this.\u0275fac = function AnnuaireListComponent_Factory(t) {
      return new (t || _AnnuaireListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnuaireListComponent, selectors: [["app-annuaire-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 11, consts: [[1, "annuaire-page"], [1, "ann-hero"], [1, "container"], [1, "container", "ann-body"], [1, "ann-filters"], ["type", "text", "placeholder", "Nom de la structure\u2026", 1, "f-input", 3, "ngModelChange", "input", "ngModel"], [1, "f-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], ["type", "text", "placeholder", "Ville\u2026", 1, "f-input", 3, "ngModelChange", "input", "ngModel"], [1, "ann-content"], [1, "results-count"], [1, "ann-grid"], [1, "ann-card", 3, "routerLink"], [1, "ann-logo"], [3, "src", "alt"], [1, "ann-domain"], [1, "ann-contact"], [1, "ann-city"]], template: function AnnuaireListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 3)(10, "aside", 4)(11, "h4");
        \u0275\u0275text(12, "Filtrer votre recherche");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function AnnuaireListComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275listener("input", function AnnuaireListComponent_Template_input_input_13_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AnnuaireListComponent_Template_select_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.domain, $event) || (ctx.domain = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AnnuaireListComponent_Template_select_change_14_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(15, "option", 7);
        \u0275\u0275text(16, "Secteur d'activit\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(17, AnnuaireListComponent_For_18_Template, 2, 2, "option", 8, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AnnuaireListComponent_Template_select_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.region, $event) || (ctx.region = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AnnuaireListComponent_Template_select_change_19_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(20, "option", 7);
        \u0275\u0275text(21, "R\xE9gion");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(22, AnnuaireListComponent_For_23_Template, 2, 2, "option", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AnnuaireListComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.city, $event) || (ctx.city = $event);
          return $event;
        });
        \u0275\u0275listener("input", function AnnuaireListComponent_Template_input_input_24_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 10)(26, "p", 11);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 12);
        \u0275\u0275repeaterCreate(29, AnnuaireListComponent_For_30_Template, 12, 9, "a", 13, _forTrack1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "HOME.ANNUAIRE_TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "HOME.ANNUAIRE_SUBTITLE"));
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.domain);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.domains);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.region);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.regions);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.city);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Affichage de ", ctx.actors().length, " \xE9l\xE9ments");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.actors());
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TranslateModule, TranslatePipe], styles: ['\n\n.annuaire-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.ann-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #2c1a00,\n      #5a3200);\n  padding: 3rem 0;\n  color: #fff;\n}\n.ann-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: var(--zellige-pattern);\n  background-repeat: repeat;\n  background-size: 40px 12px;\n  opacity: 0.15;\n  pointer-events: none;\n}\n.ann-hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.ann-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  color: #f8f1e7 !important;\n}\n.ann-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  color: #f8f1e7 !important;\n}\n.ann-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 1.5rem;\n  padding-top: 2rem;\n  padding-bottom: 3rem;\n}\n@media (max-width: 900px) {\n  .ann-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ann-filters[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 1.25rem;\n  align-self: start;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.ann-filters[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.f-input[_ngcontent-%COMP%], .f-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.4rem 0.625rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n}\n.results-count[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin-bottom: 1rem;\n}\n.ann-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1rem;\n}\n.ann-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.ann-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);\n  text-decoration: none;\n}\n.ann-logo[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.1),\n      rgba(212, 175, 106, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.25rem;\n  overflow: hidden;\n}\n.ann-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ann-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #8B4513;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.ann-domain[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8B4513;\n  font-weight: 600;\n}\n.ann-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.ann-city[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=annuaire-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnuaireListComponent, { className: "AnnuaireListComponent", filePath: "src\\app\\features\\client\\annuaire\\annuaire-list.component.ts", lineNumber: 62 });
})();
export {
  AnnuaireListComponent
};
//# sourceMappingURL=chunk-PX6PW5TG.js.map
