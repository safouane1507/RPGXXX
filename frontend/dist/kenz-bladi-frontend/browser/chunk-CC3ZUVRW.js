import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JXVZJL7I.js";
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
  DecimalPipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/search/search-results.component.ts
var _forTrack0 = ($index, $item) => $item._id;
var _c0 = (a0) => ["/marketplace", a0];
var _c1 = (a0) => ["/annuaire", a0];
var _c2 = (a0) => ["/tourism", a0];
var _c3 = (a0) => ["/blog", a0];
function SearchResultsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.totalCount(), " r\xE9sultat(s) pour ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xAB ", ctx_r0.query, " \xBB");
  }
}
function SearchResultsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "\u{1F50D} Recherche en cours\u2026");
    \u0275\u0275elementEnd();
  }
}
function SearchResultsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucun r\xE9sultat trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Essayez d'autres mots-cl\xE9s ou v\xE9rifiez l'orthographe.");
    \u0275\u0275elementEnd()();
  }
}
function SearchResultsComponent_Conditional_12_Conditional_1_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", p_r2.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.t(p_r2.name));
  }
}
function SearchResultsComponent_Conditional_12_Conditional_1_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "\u{1F6CD}\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function SearchResultsComponent_Conditional_12_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "div", 15);
    \u0275\u0275template(2, SearchResultsComponent_Conditional_12_Conditional_1_For_7_Conditional_2_Template, 1, 2, "img", 16)(3, SearchResultsComponent_Conditional_12_Conditional_1_For_7_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong", 19);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, p_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, p_r2.coverImage ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.domain);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.t(p_r2.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 5, p_r2.price, "1.0-0"), " MAD");
  }
}
function SearchResultsComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "h2");
    \u0275\u0275text(2, "\u{1F6CD}\uFE0F Produits ");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275repeaterCreate(6, SearchResultsComponent_Conditional_12_Conditional_1_For_7_Template, 12, 10, "a", 14, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", ctx_r0.results().products.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.results().products);
  }
}
function SearchResultsComponent_Conditional_12_Conditional_2_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const a_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", a_r3.logo, \u0275\u0275sanitizeUrl)("alt", a_r3.structureName);
  }
}
function SearchResultsComponent_Conditional_12_Conditional_2_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "\u{1F3FA}");
    \u0275\u0275elementEnd();
  }
}
function SearchResultsComponent_Conditional_12_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "div", 23);
    \u0275\u0275template(2, SearchResultsComponent_Conditional_12_Conditional_2_For_7_Conditional_2_Template, 1, 2, "img", 16)(3, SearchResultsComponent_Conditional_12_Conditional_2_For_7_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c1, a_r3.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, a_r3.logo ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r3.structureName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r3.domain, " \xB7 ", (a_r3.contact == null ? null : a_r3.contact.city) || "", "");
  }
}
function SearchResultsComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "h2");
    \u0275\u0275text(2, "\u{1F3FA} Annuaire ");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275repeaterCreate(6, SearchResultsComponent_Conditional_12_Conditional_2_For_7_Template, 11, 7, "a", 22, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", ctx_r0.results().annuaire.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.results().annuaire);
  }
}
function SearchResultsComponent_Conditional_12_Conditional_3_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", p_r4.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.t(p_r4.name));
  }
}
function SearchResultsComponent_Conditional_12_Conditional_3_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "\u{1F30D}");
    \u0275\u0275elementEnd();
  }
}
function SearchResultsComponent_Conditional_12_Conditional_3_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "div", 15);
    \u0275\u0275template(2, SearchResultsComponent_Conditional_12_Conditional_3_For_7_Conditional_2_Template, 1, 2, "img", 16)(3, SearchResultsComponent_Conditional_12_Conditional_3_For_7_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c2, p_r4.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, p_r4.coverImage ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r4.locationType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.t(p_r4.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", (p_r4.location == null ? null : p_r4.location.city) || "", "");
  }
}
function SearchResultsComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "h2");
    \u0275\u0275text(2, "\u{1F30D} Destinations touristiques ");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275repeaterCreate(6, SearchResultsComponent_Conditional_12_Conditional_3_For_7_Template, 11, 7, "a", 14, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", ctx_r0.results().tourism.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.results().tourism);
  }
}
function SearchResultsComponent_Conditional_12_Conditional_4_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const b_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", b_r5.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.t(b_r5.title));
  }
}
function SearchResultsComponent_Conditional_12_Conditional_4_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "\u{1F4F0}");
    \u0275\u0275elementEnd();
  }
}
function SearchResultsComponent_Conditional_12_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "div", 23);
    \u0275\u0275template(2, SearchResultsComponent_Conditional_12_Conditional_4_For_7_Conditional_2_Template, 1, 2, "img", 16)(3, SearchResultsComponent_Conditional_12_Conditional_4_For_7_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c3, b_r5.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, b_r5.coverImage ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.t(b_r5.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.category);
  }
}
function SearchResultsComponent_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "h2");
    \u0275\u0275text(2, "\u{1F4F0} Articles ");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275repeaterCreate(6, SearchResultsComponent_Conditional_12_Conditional_4_For_7_Template, 11, 6, "a", 22, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("(", ctx_r0.results().blogs.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.results().blogs);
  }
}
function SearchResultsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, SearchResultsComponent_Conditional_12_Conditional_1_Template, 8, 1, "section", 11)(2, SearchResultsComponent_Conditional_12_Conditional_2_Template, 8, 1, "section", 11)(3, SearchResultsComponent_Conditional_12_Conditional_3_Template, 8, 1, "section", 11)(4, SearchResultsComponent_Conditional_12_Conditional_4_Template, 8, 1, "section", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ((tmp_1_0 = ctx_r0.results().products) == null ? null : tmp_1_0.length) > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ((tmp_2_0 = ctx_r0.results().annuaire) == null ? null : tmp_2_0.length) > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ((tmp_3_0 = ctx_r0.results().tourism) == null ? null : tmp_3_0.length) > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ((tmp_4_0 = ctx_r0.results().blogs) == null ? null : tmp_4_0.length) > 0 ? 4 : -1);
  }
}
var SearchResultsComponent = class _SearchResultsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.lang = inject(LanguageService);
    this.query = "";
    this.results = signal(null);
    this.isLoading = signal(false);
    this.totalCount = signal(0);
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.query = params["q"] || "";
      if (this.query)
        this.doSearch();
    });
  }
  t(f) {
    if (!f)
      return "";
    const l = this.lang.current();
    return f[l] || f["fr"] || "";
  }
  doSearch() {
    if (!this.query.trim())
      return;
    this.isLoading.set(true);
    this.api.get("/search", { q: this.query, limit: 8 }).subscribe({
      next: (res) => {
        this.results.set(res.data);
        const d = res.data;
        this.totalCount.set((d.products?.length || 0) + (d.annuaire?.length || 0) + (d.tourism?.length || 0) + (d.blogs?.length || 0));
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function SearchResultsComponent_Factory(t) {
      return new (t || _SearchResultsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchResultsComponent, selectors: [["app-search-results"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 3, consts: [[1, "search-page"], [1, "container"], [1, "search-header"], [1, "search-bar"], ["placeholder", "Rechercher\u2026", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "search-btn", 3, "click"], [1, "result-info"], [1, "loading"], [1, "empty-state"], [1, "es-icon"], [1, "results-layout"], [1, "result-section"], [1, "cnt"], [1, "result-grid"], [1, "result-card", 3, "routerLink"], [1, "rc-img"], ["loading", "lazy", 3, "src", "alt"], [1, "rc-body"], [1, "rc-type"], [1, "rc-price"], [1, "rc-ph"], [1, "result-list"], [1, "result-row", 3, "routerLink"], [1, "rr-img"], [1, "rr-body"], [1, "rr-arrow"], [1, "rr-ph"], [1, "rc-loc"]], template: function SearchResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "R\xE9sultats de recherche");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SearchResultsComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function SearchResultsComponent_Template_input_keyup_enter_6_listener() {
          return ctx.doSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function SearchResultsComponent_Template_button_click_7_listener() {
          return ctx.doSearch();
        });
        \u0275\u0275text(8, "\u{1F50D} Rechercher");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, SearchResultsComponent_Conditional_9_Template, 4, 2, "p", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, SearchResultsComponent_Conditional_10_Template, 2, 0, "div", 7)(11, SearchResultsComponent_Conditional_11_Template, 7, 0)(12, SearchResultsComponent_Conditional_12_Template, 5, 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.query);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(9, ctx.query && !ctx.isLoading() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.isLoading() ? 10 : ctx.query && ctx.totalCount() === 0 ? 11 : ctx.results() ? 12 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.search-page[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  padding: 2rem 0 4rem;\n}\n.search-header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  margin: 0;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  max-width: 560px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.6rem 1rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 10px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\n.search-btn[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.25rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.result-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.result-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.loading[_ngcontent-%COMP%] {\n  padding: 4rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 1rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem;\n  text-align: center;\n}\n.es-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.results-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n.result-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cnt[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.result-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));\n  gap: 1rem;\n}\n.result-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.result-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.09);\n}\n.rc-img[_ngcontent-%COMP%] {\n  height: 130px;\n  background: var(--bg-tertiary);\n  overflow: hidden;\n}\n.rc-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.rc-ph[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n}\n.rc-body[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.rc-type[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #8B4513;\n  text-transform: uppercase;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.rc-price[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #8B4513;\n}\n.rc-loc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.result-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.result-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n  text-decoration: none;\n  transition: box-shadow 0.2s;\n}\n.result-row[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.07);\n}\n.rr-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: var(--bg-tertiary);\n  flex-shrink: 0;\n}\n.rr-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.rr-ph[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.rr-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.rr-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.rr-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.rr-arrow[_ngcontent-%COMP%] {\n  color: #8B4513;\n  font-weight: 700;\n}\n/*# sourceMappingURL=search-results.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchResultsComponent, { className: "SearchResultsComponent", filePath: "src\\app\\features\\client\\search\\search-results.component.ts", lineNumber: 177 });
})();
export {
  SearchResultsComponent
};
//# sourceMappingURL=chunk-CC3ZUVRW.js.map
