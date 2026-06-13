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
  DatePipe,
  DecimalPipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/home/home.component.ts
var _c0 = ["marketplaceTrack"];
var _c1 = ["annuaireTrack"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item._id;
var _c2 = (a0) => ["/blog", a0];
var _c3 = () => [1, 2, 3, 4];
var _c4 = () => ["/marketplace"];
var _c5 = () => [1, 2, 3, 4, 5, 6];
var _c6 = (a0) => ["/annuaire", a0];
function HomeComponent_Conditional_23_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const post_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", post_r1.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.getLocalizedText(post_r1.title));
  }
}
function HomeComponent_Conditional_23_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 38);
  }
}
function HomeComponent_Conditional_23_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33)(1, "div", 34);
    \u0275\u0275template(2, HomeComponent_Conditional_23_For_11_Conditional_2_Template, 1, 2, "img", 35)(3, HomeComponent_Conditional_23_For_11_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c2, post_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, post_r1.coverImage ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getLocalizedText(post_r1.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getLocalizedText(post_r1.excerpt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 5, post_r1.publishedAt, "dd MMM yyyy"));
  }
}
function HomeComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 17)(2, "div", 18)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 31);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275repeaterCreate(10, HomeComponent_Conditional_23_For_11_Template, 12, 10, "a", 33, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "HOME.ARTICLES_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 4, "HOME.SEE_ALL"), " \u2192");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.blogPosts());
  }
}
function HomeComponent_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
}
function HomeComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_41_For_2_Template, 1, 0, "div", 39, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c3));
  }
}
function HomeComponent_Conditional_42_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const product_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", product_r4.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.getLocalizedText(product_r4.name));
  }
}
function HomeComponent_Conditional_42_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 55);
    \u0275\u0275element(2, "path", 56);
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_42_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 45)(1, "div", 48);
    \u0275\u0275template(2, HomeComponent_Conditional_42_For_8_Conditional_2_Template, 1, 2, "img", 35)(3, HomeComponent_Conditional_42_For_8_Conditional_3_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 51)(8, "span", 52);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c4));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, product_r4.coverImage ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getLocalizedText(product_r4.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 5, product_r4.price, "1.0-0"), " MAD");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r4.proActor.proProfile.companyName);
  }
}
function HomeComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 41);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function HomeComponent_Conditional_42_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollCarousel("prev"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 42);
    \u0275\u0275element(4, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 44, 0);
    \u0275\u0275repeaterCreate(7, HomeComponent_Conditional_42_For_8_Template, 13, 9, "a", 45, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 46);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function HomeComponent_Conditional_42_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollCarousel("next"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 42);
    \u0275\u0275element(12, "path", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 2, "CAROUSEL.PREV"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.featuredProducts());
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 4, "CAROUSEL.NEXT"));
  }
}
function HomeComponent_For_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function HomeComponent_For_58_Template_button_click_0_listener() {
      const domain_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAnnuaire(domain_r6.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--chip-color", domain_r6.color);
    \u0275\u0275classProp("active", ctx_r1.activeDomain() === domain_r6.id);
    \u0275\u0275attribute("aria-selected", ctx_r1.activeDomain() === domain_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, domain_r6.labelKey), " ");
  }
}
function HomeComponent_Conditional_59_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
}
function HomeComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_59_For_2_Template, 1, 0, "div", 58, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c5));
  }
}
function HomeComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "HOME.NO_RESULTS"));
  }
}
function HomeComponent_Conditional_61_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const actor_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", actor_r8.logo, \u0275\u0275sanitizeUrl)("alt", actor_r8.structureName);
  }
}
function HomeComponent_Conditional_61_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const actor_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(actor_r8.structureName.charAt(0).toUpperCase());
  }
}
function HomeComponent_Conditional_61_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 65);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "path", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(1, 1, "ANNUAIRE.VERIFIED"));
  }
}
function HomeComponent_Conditional_61_For_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 75);
    \u0275\u0275element(2, "path", 76)(3, "circle", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const actor_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", actor_r8.contact.city, " ");
  }
}
function HomeComponent_Conditional_61_For_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 75);
    \u0275\u0275element(2, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const actor_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", actor_r8.contact.phone, " ");
  }
}
function HomeComponent_Conditional_61_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 60)(1, "div", 61);
    \u0275\u0275template(2, HomeComponent_Conditional_61_For_8_Conditional_2_Template, 1, 2, "img", 35)(3, HomeComponent_Conditional_61_For_8_Conditional_3_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62)(5, "div", 63)(6, "h4", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, HomeComponent_Conditional_61_For_8_Conditional_8_Template, 3, 3, ":svg:svg", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 66);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 67)(12, "span", 68);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 69);
    \u0275\u0275template(15, HomeComponent_Conditional_61_For_8_Conditional_15_Template, 5, 1, "span", 70)(16, HomeComponent_Conditional_61_For_8_Conditional_16_Template, 4, 1, "span", 71);
    \u0275\u0275elementStart(17, "span", 72);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const actor_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c6, actor_r8.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, actor_r8.logo ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(actor_r8.structureName);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, actor_r8.isVerified ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getLocalizedText(actor_r8.description));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(actor_r8.structureType);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, actor_r8.contact.city ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, actor_r8.contact.phone ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 9, "HOME.VIEW_DETAIL"), " \u2192");
  }
}
function HomeComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 41);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function HomeComponent_Conditional_61_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollAnnuaire("prev"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 42);
    \u0275\u0275element(4, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 30, 1);
    \u0275\u0275repeaterCreate(7, HomeComponent_Conditional_61_For_8_Template, 20, 13, "a", 60, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 46);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function HomeComponent_Conditional_61_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollAnnuaire("next"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 42);
    \u0275\u0275element(12, "path", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 2, "CAROUSEL.PREV"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.annuaireList());
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 4, "CAROUSEL.NEXT"));
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.api = inject(ApiService);
    this.langService = inject(LanguageService);
    this.currentLang = this.langService.current;
    this.isRTL = this.langService.isRTL;
    this.annuaireList = signal([]);
    this.featuredProducts = signal([]);
    this.blogPosts = signal([]);
    this.activeDomain = signal("all");
    this.isLoadingAnnuaire = signal(true);
    this.isLoadingProducts = signal(true);
    this.domains = [
      { id: "all", labelKey: "HOME.FILTER_ALL", color: "#8B4513" },
      { id: "artisanat_service", labelKey: "DOMAINS.artisanat_service", color: "#8B4513" },
      { id: "produits_mer", labelKey: "DOMAINS.produits_mer", color: "#006994" },
      { id: "habillement_mode", labelKey: "DOMAINS.habillement_mode", color: "#C0392B" },
      { id: "tourisme_rural", labelKey: "DOMAINS.tourisme_rural", color: "#27AE60" },
      { id: "artisanat_art", labelKey: "DOMAINS.artisanat_art", color: "#8E44AD" },
      { id: "agriculture_bio", labelKey: "DOMAINS.agriculture_bio", color: "#2ECC71" },
      { id: "soin_beaute", labelKey: "DOMAINS.soin_beaute", color: "#E91E8C" },
      { id: "produit_terroir", labelKey: "DOMAINS.produit_terroir", color: "#F39C12" },
      { id: "artisanat_culinaire", labelKey: "DOMAINS.artisanat_culinaire", color: "#E74C3C" }
    ];
  }
  ngOnInit() {
    this.loadAnnuaire("all");
    this.loadFeaturedProducts();
    this.loadBlogPosts();
  }
  // ── Data Loaders ──────────────────────────────────────────
  loadAnnuaire(domain) {
    this.activeDomain.set(domain);
    this.isLoadingAnnuaire.set(true);
    const params = { limit: 10 };
    if (domain) {
      params["domain"] = domain;
    }
    this.api.get("/annuaire", params).subscribe({
      next: (res) => {
        this.annuaireList.set(res.data);
        this.isLoadingAnnuaire.set(false);
      },
      error: () => {
        this.annuaireList.set([]);
        this.isLoadingAnnuaire.set(false);
      }
    });
  }
  loadFeaturedProducts() {
    this.isLoadingProducts.set(true);
    this.api.get("/products/featured").subscribe({
      next: (res) => {
        this.featuredProducts.set(res.data);
        this.isLoadingProducts.set(false);
      },
      error: () => {
        this.featuredProducts.set([]);
        this.isLoadingProducts.set(false);
      }
    });
  }
  loadBlogPosts() {
    this.api.get("/blog", { limit: 3 }).subscribe({
      next: (res) => this.blogPosts.set(res.data),
      error: () => this.blogPosts.set([])
    });
  }
  // ── Carousel ──────────────────────────────────────────────
  scrollCarousel(direction) {
    const el = this.marketplaceTrack?.nativeElement;
    if (!el)
      return;
    const amount = el.clientWidth * 0.8;
    const sign = this.isRTL() ? -1 : 1;
    const delta = direction === "next" ? amount * sign : -amount * sign;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }
  scrollAnnuaire(direction) {
    const el = this.annuaireTrack?.nativeElement;
    if (!el)
      return;
    const amount = el.clientWidth * 0.8;
    const sign = this.isRTL() ? -1 : 1;
    const delta = direction === "next" ? amount * sign : -amount * sign;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }
  // ── Helpers ───────────────────────────────────────────────
  getLocalizedText(field) {
    const lang = this.currentLang();
    return field?.[lang] || field?.["fr"] || field?.["ar"] || "";
  }
  openInNewTab(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.marketplaceTrack = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.annuaireTrack = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 35, consts: [["marketplaceTrack", ""], ["annuaireTrack", ""], [1, "hero"], [1, "hero-overlay"], [1, "container", "hero-content"], [1, "hero-badge"], ["src", "assets/logo/logo16-9.png", "alt", "", 1, "hero-badge-logo"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-ctas"], [1, "btn-primary", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "width", "16", "height", "16"], ["d", "M5 12h14M12 5l7 7-7 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "/annuaire", 1, "btn-secondary"], ["aria-hidden", "true", 1, "hero-pattern"], [1, "section-articles"], [1, "section-marketplace"], [1, "container"], [1, "section-heading"], [1, "section-sub"], [1, "btn-outline", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "width", "14", "height", "14"], ["d", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,3 21,3 21,9", "stroke", "currentColor", "stroke-width", "2"], ["x1", "10", "y1", "14", "x2", "21", "y2", "3", "stroke", "currentColor", "stroke-width", "2"], [1, "carousel-skeleton"], [1, "section-annuaire"], ["routerLink", "/annuaire", 1, "btn-outline"], ["role", "tablist", 1, "domain-filters"], ["role", "tab", 1, "domain-chip", 3, "active", "--chip-color"], [1, "annuaire-grid"], ["routerLink", "/blog", 1, "see-all-link"], [1, "blog-grid"], [1, "blog-card", 3, "routerLink"], [1, "blog-thumb"], ["loading", "lazy", 3, "src", "alt"], [1, "blog-info"], [1, "blog-date"], [1, "blog-thumb-placeholder"], [1, "skeleton-card"], [1, "carousel-wrapper"], [1, "carousel-btn", "carousel-prev", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "width", "20", "height", "20"], ["d", "M15 18l-6-6 6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "carousel-track"], [1, "product-card", 3, "routerLink"], [1, "carousel-btn", "carousel-next", 3, "click"], ["d", "M9 18l6-6-6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "product-thumb"], [1, "product-info"], [1, "product-name"], [1, "product-footer"], [1, "product-price"], [1, "product-seller"], [1, "product-thumb-placeholder"], ["viewBox", "0 0 24 24", "fill", "none", "width", "32", "height", "32", "opacity", "0.3"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", "stroke", "currentColor", "stroke-width", "1.5"], ["role", "tab", 1, "domain-chip", 3, "click"], [1, "annuaire-skeleton"], [1, "empty-state"], [1, "annuaire-card", 3, "routerLink"], [1, "actor-logo"], [1, "actor-info"], [1, "actor-header"], [1, "actor-name"], ["viewBox", "0 0 24 24", "fill", "none", 1, "verified-icon", 3, "title"], [1, "actor-description"], [1, "actor-tags"], [1, "actor-type"], [1, "actor-footer"], [1, "actor-location"], [1, "actor-phone"], [1, "view-detail-arrow"], [1, "actor-initials"], ["d", "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z", "stroke", "#27ae60", "stroke-width", "2"], ["viewBox", "0 0 24 24", "fill", "none", "width", "12", "height", "12"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "10", "r", "3", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.44 12.5 19.79 19.79 0 0 1 1.37 3.93a2 2 0 0 1 1.94-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z", "stroke", "currentColor", "stroke-width", "2"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 2);
        \u0275\u0275element(1, "div", 3);
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
        \u0275\u0275element(4, "img", 6);
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "\u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A \xB7 KENZ BLADI");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 7);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_14_listener() {
          return ctx.openInNewTab("/marketplace");
        });
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 11);
        \u0275\u0275element(18, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "a", 13);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(22, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, HomeComponent_Conditional_23_Template, 12, 6, "section", 15);
        \u0275\u0275elementStart(24, "section", 16)(25, "div", 17)(26, "div", 18)(27, "div")(28, "h2");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 19);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 20);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_34_listener() {
          return ctx.openInNewTab("/marketplace");
        });
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 21);
        \u0275\u0275element(38, "path", 22)(39, "polyline", 23)(40, "line", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(41, HomeComponent_Conditional_41_Template, 3, 1, "div", 25)(42, HomeComponent_Conditional_42_Template, 13, 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "section", 26)(44, "div", 17)(45, "div", 18)(46, "div")(47, "h2");
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "p", 19);
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "a", 27);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 28);
        \u0275\u0275repeaterCreate(57, HomeComponent_For_58_Template, 3, 8, "button", 29, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(59, HomeComponent_Conditional_59_Template, 3, 1, "div", 30)(60, HomeComponent_Conditional_60_Template, 4, 3)(61, HomeComponent_Conditional_61_Template, 13, 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, "HERO.TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 17, "HERO.SUBTITLE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 19, "HERO.CTA_EXPLORE"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 21, "HERO.CTA_ANNUAIRE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(23, ctx.blogPosts().length > 0 ? 23 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 23, "HOME.MARKETPLACE_TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 25, "HOME.MARKETPLACE_SUBTITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 27, "HOME.SEE_ALL"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(41, ctx.isLoadingProducts() ? 41 : ctx.featuredProducts().length > 0 ? 42 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 29, "HOME.ANNUAIRE_TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 31, "HOME.ANNUAIRE_SUBTITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(55, 33, "HOME.SEE_ALL"), " \u2192");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("rtl", ctx.isRTL());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.domains);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(59, ctx.isLoadingAnnuaire() ? 59 : ctx.annuaireList().length === 0 ? 60 : 61);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 90vh;\n  display: flex;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1a0a00 0%,\n      #3d1a00 40%,\n      #1a1a2e 100%);\n  overflow: hidden;\n}\n.hero[_ngcontent-%COMP%]   .hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 60% 50%,\n      rgba(212, 175, 106, 0.12) 0%,\n      transparent 70%);\n}\n.hero[_ngcontent-%COMP%]   .hero-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: -100px;\n  bottom: -100px;\n  width: 600px;\n  height: 600px;\n  opacity: 0.04;\n  background-image:\n    repeating-linear-gradient(\n      45deg,\n      #d4af6a 0,\n      #d4af6a 1px,\n      transparent 0,\n      transparent 50%),\n    repeating-linear-gradient(\n      -45deg,\n      #d4af6a 0,\n      #d4af6a 1px,\n      transparent 0,\n      transparent 50%);\n  background-size: 20px 20px;\n  border-radius: 50%;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 4rem 1.5rem;\n  max-width: 700px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.875rem;\n  background: rgba(212, 175, 106, 0.15);\n  border: 1px solid rgba(212, 175, 106, 0.3);\n  border-radius: 20px;\n  color: #d4af6a;\n  font-size: 0.82rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  margin-bottom: 1.5rem;\n}\n.hero-badge[_ngcontent-%COMP%]   .hero-badge-logo[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  object-fit: contain;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 5vw, 3.2rem);\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.2;\n  margin-bottom: 1rem;\n  font-family:\n    "Cairo",\n    "Inter",\n    serif;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 2vw, 1.2rem);\n  color: rgba(255, 255, 255, 0.75);\n  margin-bottom: 2rem;\n  line-height: 1.6;\n}\n.hero-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513,\n      #d4af6a);\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.9rem;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  background: transparent;\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.9rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n  text-decoration: none;\n  transition: background 0.2s ease, border-color 0.2s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.5);\n  text-decoration: none;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--border, #e8eaed);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #8B4513;\n  color: #8B4513;\n  text-decoration: none;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.25rem, 3vw, 1.75rem);\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.25rem;\n}\n.section-sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.see-all-link[_ngcontent-%COMP%] {\n  color: #8B4513;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.see-all-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.section-articles[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--bg-primary);\n}\n.blog-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 900px) {\n  .blog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .blog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.blog-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  text-decoration: none;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.blog-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n  text-decoration: none;\n}\n.blog-card[_ngcontent-%COMP%]   .blog-thumb[_ngcontent-%COMP%] {\n  height: 180px;\n  overflow: hidden;\n}\n.blog-card[_ngcontent-%COMP%]   .blog-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.blog-card[_ngcontent-%COMP%]   .blog-thumb[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.blog-card[_ngcontent-%COMP%]   .blog-thumb-placeholder[_ngcontent-%COMP%] {\n  height: 180px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.1),\n      rgba(212, 175, 106, 0.1));\n}\n.blog-card[_ngcontent-%COMP%]   .blog-info[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.blog-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.blog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 0.5rem;\n}\n.blog-card[_ngcontent-%COMP%]   .blog-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.section-marketplace[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--bg-secondary);\n}\n.carousel-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  overflow: hidden;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  min-width: 220px;\n  height: 280px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-tertiary) 0%,\n      var(--bg-secondary) 50%,\n      var(--bg-tertiary) 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.carousel-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.carousel-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid var(--border);\n  background: var(--card-bg);\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 2;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.2s ease;\n}\n.carousel-btn[_ngcontent-%COMP%]:hover {\n  border-color: #8B4513;\n  color: #8B4513;\n}\n.carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex: 1;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.carousel-track[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.product-card[_ngcontent-%COMP%] {\n  min-width: 200px;\n  max-width: 220px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  text-decoration: none;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  flex-shrink: 0;\n  scroll-snap-align: start;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.product-card[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n  height: 160px;\n  overflow: hidden;\n  background: var(--bg-tertiary);\n}\n.product-card[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product-card[_ngcontent-%COMP%]   .product-thumb-placeholder[_ngcontent-%COMP%] {\n  height: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary);\n  color: var(--text-muted);\n}\n.product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n}\n.product-card[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-card[_ngcontent-%COMP%]   .product-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.product-card[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.9rem;\n  color: #8B4513;\n}\n.product-card[_ngcontent-%COMP%]   .product-seller[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.section-annuaire[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n  background: var(--bg-primary);\n}\n.domain-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.domain-chip[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.875rem;\n  border-radius: 20px;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.domain-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--chip-color, #8B4513);\n  color: var(--chip-color, #8B4513);\n  background: color-mix(in srgb, var(--chip-color, #8B4513) 6%, transparent);\n}\n.domain-chip.active[_ngcontent-%COMP%] {\n  background: var(--chip-color, #8B4513);\n  border-color: var(--chip-color, #8B4513);\n  color: #fff;\n  font-weight: 600;\n}\n.annuaire-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  flex: 1;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.annuaire-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.annuaire-skeleton[_ngcontent-%COMP%] {\n  min-width: 320px;\n  flex-shrink: 0;\n  height: 220px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-tertiary) 0%,\n      var(--bg-secondary) 50%,\n      var(--bg-tertiary) 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.annuaire-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 320px;\n  max-width: 320px;\n  flex-shrink: 0;\n  scroll-snap-align: start;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 14px;\n  padding: 1.25rem;\n  text-decoration: none;\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.annuaire-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n  border-color: rgba(139, 69, 19, 0.2);\n  text-decoration: none;\n}\n.actor-logo[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.1),\n      rgba(212, 175, 106, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.875rem;\n  flex-shrink: 0;\n}\n.actor-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.actor-logo[_ngcontent-%COMP%]   .actor-initials[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #8B4513;\n}\n.actor-info[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 0.875rem;\n}\n.actor-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.375rem;\n}\n.actor-header[_ngcontent-%COMP%]   .actor-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  flex: 1;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.actor-header[_ngcontent-%COMP%]   .verified-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.actor-description[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 1.5;\n  margin-bottom: 0.5rem;\n}\n.actor-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.actor-type[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.15rem 0.5rem;\n  background: rgba(139, 69, 19, 0.07);\n  color: #8B4513;\n  border-radius: 10px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.actor-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding-top: 0.875rem;\n  border-top: 1px solid var(--card-border);\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  flex-wrap: wrap;\n}\n.actor-location[_ngcontent-%COMP%], .actor-phone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.view-detail-arrow[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  color: #8B4513;\n  font-weight: 600;\n  font-size: 0.78rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\client\\home\\home.component.ts", lineNumber: 47 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-TFNCB4GQ.js.map
