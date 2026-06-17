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
  LanguageService
} from "./chunk-XFLHW3ED.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/tourism/tourism-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item._id;
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ["/tourism", a0];
function TourismListComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function TourismListComponent_For_17_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setType(tab_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeType() === tab_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.t(tab_r2.label), " ");
  }
}
function TourismListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " destination(s) ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.total());
  }
}
function TourismListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aucune destination trouv\xE9e ");
  }
}
function TourismListComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275property("value", r_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4);
  }
}
function TourismListComponent_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
}
function TourismListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, TourismListComponent_Conditional_28_For_2_Template, 1, 0, "div", 17, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function TourismListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2, "\u{1F30D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune destination ne correspond \xE0 votre recherche.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function TourismListComponent_Conditional_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(6, "R\xE9initialiser les filtres");
    \u0275\u0275elementEnd()();
  }
}
function TourismListComponent_Conditional_30_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const place_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", place_r6.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r2.t(place_r6.name));
  }
}
function TourismListComponent_Conditional_30_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
}
function TourismListComponent_Conditional_30_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "\u2B50 Coup de c\u0153ur");
    \u0275\u0275elementEnd();
  }
}
function TourismListComponent_Conditional_30_For_2_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const place_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", place_r6.location.region, "");
  }
}
function TourismListComponent_Conditional_30_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275template(2, TourismListComponent_Conditional_30_For_2_Conditional_12_Conditional_2_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const place_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CD} ", (place_r6.location == null ? null : place_r6.location.city) || (place_r6.location == null ? null : place_r6.location.region), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (place_r6.location == null ? null : place_r6.location.city) && (place_r6.location == null ? null : place_r6.location.region) ? 2 : -1);
  }
}
function TourismListComponent_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "div", 24);
    \u0275\u0275template(2, TourismListComponent_Conditional_30_For_2_Conditional_2_Template, 1, 2, "img", 25)(3, TourismListComponent_Conditional_30_For_2_Conditional_3_Template, 1, 0)(4, TourismListComponent_Conditional_30_For_2_Conditional_4_Template, 2, 0, "div", 26);
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 28)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, TourismListComponent_Conditional_30_For_2_Conditional_12_Template, 3, 2, "span", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const place_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, place_r6.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, place_r6.coverImage ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, place_r6.isFeatured ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.typeLabel(place_r6.locationType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.t(place_r6.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t(place_r6.shortDescription));
    \u0275\u0275advance();
    \u0275\u0275conditional(12, (place_r6.location == null ? null : place_r6.location.city) || (place_r6.location == null ? null : place_r6.location.region) ? 12 : -1);
  }
}
function TourismListComponent_Conditional_30_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function TourismListComponent_Conditional_30_Conditional_3_For_4_Template_button_click_0_listener() {
      const n_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goPage(n_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", n_r9 === ctx_r2.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r9);
  }
}
function TourismListComponent_Conditional_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 32);
    \u0275\u0275listener("click", function TourismListComponent_Conditional_30_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goPage(ctx_r2.page() - 1));
    });
    \u0275\u0275text(2, "\u2039 Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TourismListComponent_Conditional_30_Conditional_3_For_4_Template, 2, 3, "button", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function TourismListComponent_Conditional_30_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goPage(ctx_r2.page() + 1));
    });
    \u0275\u0275text(6, "Suivant \u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.pagesArray());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.page() === ctx_r2.pages());
  }
}
function TourismListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, TourismListComponent_Conditional_30_For_2_Template, 13, 9, "a", 22, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TourismListComponent_Conditional_30_Conditional_3_Template, 7, 2, "div", 23);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.places());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.pages() > 1 ? 3 : -1);
  }
}
var LOCATION_TYPES = [
  { id: "", label: { fr: "Tout voir", ar: "\u0627\u0644\u0643\u0644", en: "All" } },
  { id: "city", label: { fr: "Villes", ar: "\u0645\u062F\u0646", en: "Cities" } },
  { id: "medina", label: { fr: "M\xE9dinas", ar: "\u0645\u062F\u064A\u0646\u0629 \u0642\u062F\u064A\u0645\u0629", en: "Medinas" } },
  { id: "monument", label: { fr: "Monuments", ar: "\u0645\u0639\u0627\u0644\u0645", en: "Monuments" } },
  { id: "nature", label: { fr: "Nature", ar: "\u0637\u0628\u064A\u0639\u0629", en: "Nature" } },
  { id: "beach", label: { fr: "Plages", ar: "\u0634\u0648\u0627\u0637\u0626", en: "Beaches" } },
  { id: "mountain", label: { fr: "Montagnes", ar: "\u062C\u0628\u0627\u0644", en: "Mountains" } },
  { id: "oasis", label: { fr: "Oasis", ar: "\u0648\u0627\u062D\u0629", en: "Oases" } },
  { id: "souk", label: { fr: "Souks", ar: "\u0623\u0633\u0648\u0627\u0642", en: "Souks" } },
  { id: "rural_region", label: { fr: "R\xE9gions Rurales", ar: "\u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0642\u0631\u0648\u064A\u0629", en: "Rural Regions" } },
  { id: "museum", label: { fr: "Mus\xE9es", ar: "\u0645\u062A\u0627\u062D\u0641", en: "Museums" } },
  { id: "festival", label: { fr: "Festivals", ar: "\u0645\u0647\u0631\u062C\u0627\u0646\u0627\u062A", en: "Festivals" } }
];
var MOROCCAN_REGIONS = [
  "Tanger-T\xE9touan-Al Hoce\xEFma",
  "Oriental",
  "F\xE8s-Mekn\xE8s",
  "Rabat-Sal\xE9-K\xE9nitra",
  "B\xE9ni Mellal-Kh\xE9nifra",
  "Casablanca-Settat",
  "Marrakech-Safi",
  "Dr\xE2a-Tafilalet",
  "Souss-Massa",
  "Guelmim-Oued Noun",
  "La\xE2youne-Sakia El Hamra",
  "Dakhla-Oued Ed-Dahab"
];
var TourismListComponent = class _TourismListComponent {
  constructor() {
    this.api = inject(ApiService);
    this.lang = inject(LanguageService);
    this.places = signal([]);
    this.total = signal(0);
    this.page = signal(1);
    this.pages = signal(1);
    this.pagesArray = signal([]);
    this.isLoading = signal(true);
    this.activeType = signal("");
    this.searchInput = "";
    this.activeRegion = "";
    this.locationTypes = LOCATION_TYPES;
    this.moroccanRegions = MOROCCAN_REGIONS;
  }
  typeLabel(id) {
    const l = this.lang.current();
    const found = LOCATION_TYPES.find((t) => t.id === id);
    return found ? found.label[l] || found.label.fr : id;
  }
  ngOnInit() {
    this.load();
  }
  t(f) {
    const l = this.lang.current();
    return f?.[l] || f?.["fr"] || "";
  }
  load() {
    this.isLoading.set(true);
    const params = { page: this.page(), limit: 12 };
    if (this.activeType())
      params["locationType"] = this.activeType();
    if (this.activeRegion)
      params["region"] = this.activeRegion;
    if (this.searchInput)
      params["search"] = this.searchInput;
    this.api.get("/tourism", params).subscribe({
      next: (res) => {
        this.places.set(res.data);
        this.total.set(res.pagination.total);
        this.pages.set(res.pagination.pages || 1);
        this.pagesArray.set(Array.from({ length: res.pagination.pages || 1 }, (_, i) => i + 1));
        this.isLoading.set(false);
      },
      error: () => {
        this.places.set([]);
        this.isLoading.set(false);
      }
    });
  }
  setType(id) {
    this.activeType.set(id);
    this.page.set(1);
    this.load();
  }
  onRegionChange() {
    this.page.set(1);
    this.load();
  }
  doSearch() {
    this.page.set(1);
    this.load();
  }
  goPage(n) {
    this.page.set(n);
    this.load();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  resetFilters() {
    this.activeType.set("");
    this.activeRegion = "";
    this.searchInput = "";
    this.page.set(1);
    this.load();
  }
  static {
    this.\u0275fac = function TourismListComponent_Factory(t) {
      return new (t || _TourismListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TourismListComponent, selectors: [["app-tourism-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 10, consts: [[1, "tourism-page"], [1, "tourism-hero"], [1, "container"], [1, "hero-search"], ["placeholder", "Rechercher une destination\u2026", 1, "hero-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "hero-btn", 3, "click"], [1, "type-tabs-wrap"], [1, "type-tabs"], [1, "type-tab", 3, "active"], [1, "container", "section-spacing"], [1, "list-toolbar"], [1, "result-count"], [1, "region-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "loading-grid"], [1, "type-tab", 3, "click"], [1, "skeleton-card"], [1, "empty-state"], [1, "empty-icon"], [1, "btn-reset", 3, "click"], [1, "tourism-grid"], [1, "tourism-card", 3, "routerLink"], [1, "pagination"], [1, "tc-cover"], ["loading", "lazy", 3, "src", "alt"], [1, "featured-badge"], [1, "tc-type-pill"], [1, "tc-body"], [1, "tc-loc"], [1, "tc-cover-ph"], [1, "tc-region"], [3, "click", "disabled"], [3, "active"], [3, "click"]], template: function TourismListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 3)(10, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function TourismListComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchInput, $event) || (ctx.searchInput = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function TourismListComponent_Template_input_keyup_enter_10_listener() {
          return ctx.doSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function TourismListComponent_Template_button_click_11_listener() {
          return ctx.doSearch();
        });
        \u0275\u0275text(12, "\u{1F50D}");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 2)(15, "div", 7);
        \u0275\u0275repeaterCreate(16, TourismListComponent_For_17_Template, 2, 3, "button", 8, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "p", 11);
        \u0275\u0275template(21, TourismListComponent_Conditional_21_Template, 3, 1)(22, TourismListComponent_Conditional_22_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function TourismListComponent_Template_select_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.activeRegion, $event) || (ctx.activeRegion = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function TourismListComponent_Template_select_ngModelChange_23_listener() {
          return ctx.onRegionChange();
        });
        \u0275\u0275elementStart(24, "option", 13);
        \u0275\u0275text(25, "Toutes les r\xE9gions");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(26, TourismListComponent_For_27_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, TourismListComponent_Conditional_28_Template, 3, 1, "div", 15)(29, TourismListComponent_Conditional_29_Template, 7, 0)(30, TourismListComponent_Conditional_30_Template, 4, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "TOURISM.TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "TOURISM.SUBTITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchInput);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.locationTypes);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(21, ctx.total() > 0 ? 21 : 22);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.activeRegion);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.moroccanRegions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(28, ctx.isLoading() ? 28 : ctx.places().length === 0 ? 29 : 30);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, TranslateModule, TranslatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.tourism-page[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\n.tourism-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #0d2818,\n      #1a4731);\n  padding: 3.5rem 0 2.5rem;\n  color: #fff;\n}\n.tourism-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: var(--zellige-pattern);\n  background-repeat: repeat;\n  background-size: 40px 12px;\n  opacity: 0.15;\n  pointer-events: none;\n}\n.tourism-hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.tourism-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 900;\n  margin-bottom: 0.5rem;\n  color: #f8f1e7 !important;\n}\n.tourism-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.95rem;\n  margin-bottom: 1.5rem;\n  color: #f8f1e7 !important;\n}\n.hero-search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  max-width: 480px;\n}\n.hero-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.65rem 1rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  outline: none;\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.hero-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n.hero-btn[_ngcontent-%COMP%] {\n  padding: 0.65rem 1.1rem;\n  background: #27ae60;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 1rem;\n}\n.type-tabs-wrap[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-bottom: 1px solid var(--card-border);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.type-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  overflow-x: auto;\n  padding: 0.5rem 0;\n  scrollbar-width: none;\n}\n.type-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.type-tab[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.875rem;\n  border: none;\n  border-radius: 20px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.type-tab.active[_ngcontent-%COMP%], .type-tab[_ngcontent-%COMP%]:hover {\n  background: #27ae60;\n  color: #fff;\n}\n.section-spacing[_ngcontent-%COMP%] {\n  padding-top: 1.75rem;\n  padding-bottom: 3rem;\n}\n.list-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.result-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.result-count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.region-select[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.75rem;\n  border: 1px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n}\n.loading-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 300px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-secondary) 25%,\n      var(--bg-tertiary) 50%,\n      var(--bg-secondary) 75%);\n  background-size: 200% 100%;\n  border-radius: 14px;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200%;\n  }\n  100% {\n    background-position: -200%;\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 1rem;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.925rem;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  background: #27ae60;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.tourism-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.tourism-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 14px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n  display: flex;\n  flex-direction: column;\n}\n.tourism-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.tc-cover[_ngcontent-%COMP%] {\n  height: 200px;\n  background: var(--bg-tertiary);\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n.tc-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n}\n.tourism-card[_ngcontent-%COMP%]:hover   .tc-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.tc-cover-ph[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(39, 174, 96, 0.08),\n      rgba(39, 77, 22, 0.12));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n}\n.tc-cover-ph[_ngcontent-%COMP%]::after {\n  content: "\\1f30d";\n}\n.featured-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.625rem;\n  left: 0.625rem;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffd700;\n  padding: 0.2rem 0.6rem;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.tc-type-pill[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.625rem;\n  right: 0.625rem;\n  background: rgba(39, 174, 96, 0.85);\n  color: #fff;\n  padding: 0.2rem 0.6rem;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.tc-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 0.975rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n  flex: 1;\n}\n.tc-loc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 0.25rem;\n}\n.tc-region[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  justify-content: center;\n  margin-top: 2rem;\n  flex-wrap: wrap;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.875rem;\n  border: 1px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #27ae60;\n  color: #fff;\n  border-color: #27ae60;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .tourism-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .tourism-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 420px) {\n  .tourism-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=tourism-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TourismListComponent, { className: "TourismListComponent", filePath: "src\\app\\features\\client\\tourism\\tourism-list.component.ts", lineNumber: 199 });
})();
export {
  TourismListComponent
};
//# sourceMappingURL=chunk-XOBLIZN2.js.map
