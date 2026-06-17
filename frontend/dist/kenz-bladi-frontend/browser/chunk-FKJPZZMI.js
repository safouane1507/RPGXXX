import {
  CartService
} from "./chunk-WWFTIXOC.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JXVZJL7I.js";
import {
  AuthService
} from "./chunk-SCCTXVTR.js";
import {
  LanguageService
} from "./chunk-XFLHW3ED.js";
import {
  Router,
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
  DecimalPipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
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

// src/app/features/client/marketplace/marketplace.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item._id;
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c1 = (a0) => ["/marketplace", a0];
function MarketplaceComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function MarketplaceComponent_For_17_Template_button_click_0_listener() {
      const d_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setDomain(d_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeDomain() === d_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.label);
  }
}
function MarketplaceComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
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
function MarketplaceComponent_Conditional_51_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
    \u0275\u0275elementStart(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.domainLabel(ctx_r2.activeDomain()));
  }
}
function MarketplaceComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " produit(s) ");
    \u0275\u0275template(3, MarketplaceComponent_Conditional_51_Conditional_3_Template, 3, 1, "em");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.total());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.activeDomain() ? 3 : -1);
  }
}
function MarketplaceComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aucun produit ");
  }
}
function MarketplaceComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275property("value", s_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5.label);
  }
}
function MarketplaceComponent_Conditional_62_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function MarketplaceComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, MarketplaceComponent_Conditional_62_For_2_Template, 1, 0, "div", 33, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function MarketplaceComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275text(2, "\u{1F6CD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucun produit trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Essayez d'\xE9largir votre recherche ou de modifier les filtres.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 36);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_63_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetAll());
    });
    \u0275\u0275text(8, "R\xE9initialiser les filtres");
    \u0275\u0275elementEnd()();
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", p_r8.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r2.t(p_r8.name));
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.domainIcon(p_r8.domain));
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "\u2B50");
    \u0275\u0275elementEnd();
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "\u{1F33F} Bio");
    \u0275\u0275elementEnd();
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r2.discountPct(p_r8), "%");
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.t(p_r8.shortDescription));
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 57);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 2, p_r8.price, "1.0-0"), " MAD");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 5, p_r8.priceDiscount, "1.0-0"), " MAD");
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, p_r8.price, "1.0-0"), " MAD");
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", (p_r8.origin == null ? null : p_r8.origin.city) || (p_r8.origin == null ? null : p_r8.origin.region), "");
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 38)(1, "div", 39);
    \u0275\u0275template(2, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_2_Template, 1, 2, "img", 40)(3, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_3_Template, 2, 1)(4, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_4_Template, 2, 0, "div", 41)(5, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_5_Template, 2, 0, "div", 42)(6, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_6_Template, 2, 1, "div", 43);
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_64_For_2_Conditional_0_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const p_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart($event, p_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 45);
    \u0275\u0275element(9, "circle", 46)(10, "circle", 47)(11, "path", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 49)(13, "span", 50);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h3");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_17_Template, 2, 1, "p", 51);
    \u0275\u0275elementStart(18, "div", 52)(19, "div", 53);
    \u0275\u0275template(20, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_20_Template, 6, 8)(21, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_21_Template, 3, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Conditional_22_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, p_r8.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, p_r8.coverImage ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, p_r8.isFeatured ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, p_r8.isOrganic ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, p_r8.priceDiscount ? 6 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.domainLabel(p_r8.domain));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t(p_r8.name));
    \u0275\u0275advance();
    \u0275\u0275conditional(17, ctx_r2.t(p_r8.shortDescription) ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(20, p_r8.priceDiscount ? 20 : 21);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(22, (p_r8.origin == null ? null : p_r8.origin.city) || (p_r8.origin == null ? null : p_r8.origin.region) ? 22 : -1);
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", p_r8.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r2.t(p_r8.name));
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.domainIcon(p_r8.domain));
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", (p_r8.origin == null ? null : p_r8.origin.city) || (p_r8.origin == null ? null : p_r8.origin.region), "");
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "\u{1F33F} Bio");
    \u0275\u0275elementEnd();
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "\u{1F932} Fait main");
    \u0275\u0275elementEnd();
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 57);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 2, p_r8.price, "1.0-0"), " MAD");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 5, p_r8.priceDiscount, "1.0-0"), " MAD");
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, p_r8.price, "1.0-0"), " MAD");
  }
}
function MarketplaceComponent_Conditional_64_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 58)(1, "div", 59);
    \u0275\u0275template(2, MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_2_Template, 1, 2, "img", 40)(3, MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_3_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 60)(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 61);
    \u0275\u0275template(12, MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_12_Template, 2, 1, "span", 54)(13, MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_13_Template, 2, 0, "span", 62)(14, MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_14_Template, 2, 0, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 64);
    \u0275\u0275template(16, MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_16_Template, 6, 8)(17, MarketplaceComponent_Conditional_64_For_2_Conditional_1_Conditional_17_Template, 3, 4);
    \u0275\u0275elementStart(18, "button", 65);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_64_For_2_Conditional_1_Template_button_click_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const p_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart($event, p_r8));
    });
    \u0275\u0275text(19, "\u{1F6D2} Ajouter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 66);
    \u0275\u0275text(21, "Voir le produit \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c1, p_r8.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, p_r8.coverImage ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.domainLabel(p_r8.domain));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t(p_r8.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.t(p_r8.shortDescription) || ctx_r2.t(p_r8.description));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, (p_r8.origin == null ? null : p_r8.origin.city) || (p_r8.origin == null ? null : p_r8.origin.region) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, p_r8.isOrganic ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, p_r8.isHandmade ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(16, p_r8.priceDiscount ? 16 : 17);
  }
}
function MarketplaceComponent_Conditional_64_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MarketplaceComponent_Conditional_64_For_2_Conditional_0_Template, 23, 12, "a", 38)(1, MarketplaceComponent_Conditional_64_For_2_Conditional_1_Template, 22, 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, ctx_r2.viewMode() === "grid" ? 0 : 1);
  }
}
function MarketplaceComponent_Conditional_64_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_64_Conditional_3_For_4_Template_button_click_0_listener() {
      const n_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goPage(n_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", n_r12 === ctx_r2.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r12);
  }
}
function MarketplaceComponent_Conditional_64_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 68);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_64_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goPage(ctx_r2.page() - 1));
    });
    \u0275\u0275text(2, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, MarketplaceComponent_Conditional_64_Conditional_3_For_4_Template, 2, 3, "button", 69, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_64_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goPage(ctx_r2.page() + 1));
    });
    \u0275\u0275text(6, "\u203A");
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
function MarketplaceComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, MarketplaceComponent_Conditional_64_For_2_Template, 2, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MarketplaceComponent_Conditional_64_Conditional_3_Template, 7, 2, "div", 37);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.viewMode() === "grid" ? "products-grid" : "products-list");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.products());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.pages() > 1 ? 3 : -1);
  }
}
var DOMAINS = [
  { id: "", label: "Tout", icon: "\u{1F6CD}\uFE0F", color: "#8B4513" },
  { id: "artisanat_art", label: "Artisanat d'art", icon: "\u{1F3A8}", color: "#8E44AD" },
  { id: "produit_terroir", label: "Produits du terroir", icon: "\u{1F33E}", color: "#F39C12" },
  { id: "soin_beaute", label: "Soin & Beaut\xE9", icon: "\u{1F338}", color: "#E91E8C" },
  { id: "habillement_mode", label: "Mode Marocaine", icon: "\u{1F458}", color: "#C0392B" },
  { id: "artisanat_culinaire", label: "Artisanat Culinaire", icon: "\u{1F36F}", color: "#E74C3C" },
  { id: "agriculture_bio", label: "Agriculture Bio", icon: "\u{1F33F}", color: "#2ECC71" },
  { id: "produits_mer", label: "Produits de la mer", icon: "\u{1F41F}", color: "#006994" },
  { id: "artisanat_service", label: "Artisanat Service", icon: "\u{1F6E0}\uFE0F", color: "#8B4513" },
  { id: "tourisme_rural", label: "Tourisme Rural", icon: "\u{1F333}", color: "#27AE60" }
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
var SORT_OPTIONS = [
  { value: "-isFeatured -createdAt", label: "Mis en avant" },
  { value: "-createdAt", label: "Plus r\xE9cents" },
  { value: "price", label: "Prix croissant" },
  { value: "-price", label: "Prix d\xE9croissant" },
  { value: "-rating", label: "Mieux not\xE9s" }
];
var MarketplaceComponent = class _MarketplaceComponent {
  constructor() {
    this.api = inject(ApiService);
    this.lang = inject(LanguageService);
    this.router = inject(Router);
    this.auth = inject(AuthService);
    this.cart = inject(CartService);
    this.products = signal([]);
    this.total = signal(0);
    this.page = signal(1);
    this.pages = signal(1);
    this.pagesArray = signal([]);
    this.isLoading = signal(true);
    this.activeDomain = signal("");
    this.viewMode = signal("grid");
    this.searchInput = "";
    this.activeRegion = "";
    this.activeSort = "-isFeatured -createdAt";
    this.minPrice = null;
    this.maxPrice = null;
    this.filterOrganic = false;
    this.filterHandmade = false;
    this.domains = DOMAINS;
    this.moroccanRegions = MOROCCAN_REGIONS;
    this.sortOptions = SORT_OPTIONS;
  }
  domainLabel(id) {
    return DOMAINS.find((d) => d.id === id)?.label || id;
  }
  domainIcon(id) {
    return DOMAINS.find((d) => d.id === id)?.icon || "\u{1F6CD}\uFE0F";
  }
  discountPct(p) {
    return Math.round((1 - p.priceDiscount / p.price) * 100);
  }
  addToCart(e, p) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.auth.isLoggedIn() || this.auth.currentUser()?.role !== "client") {
      this.router.navigate(["/auth/login"], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    this.cart.addToCart(p);
    this.cart.isCartOpen.set(true);
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
    const params = {
      page: this.page(),
      limit: 16,
      sort: this.activeSort
    };
    if (this.activeDomain())
      params["domain"] = this.activeDomain();
    if (this.activeRegion)
      params["region"] = this.activeRegion;
    if (this.searchInput)
      params["search"] = this.searchInput;
    if (this.minPrice != null && this.minPrice > 0)
      params["minPrice"] = this.minPrice;
    if (this.maxPrice != null && this.maxPrice > 0)
      params["maxPrice"] = this.maxPrice;
    if (this.filterOrganic)
      params["organic"] = true;
    if (this.filterHandmade)
      params["handmade"] = true;
    this.api.get("/products", params).subscribe({
      next: (res) => {
        this.products.set(res.data);
        this.total.set(res.pagination.total);
        this.pages.set(res.pagination.pages || 1);
        this.pagesArray.set(Array.from({ length: res.pagination.pages || 1 }, (_, i) => i + 1));
        this.isLoading.set(false);
      },
      error: () => {
        this.products.set([]);
        this.isLoading.set(false);
      }
    });
  }
  setDomain(id) {
    this.activeDomain.set(id);
    this.page.set(1);
    this.load();
  }
  applyFilters() {
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
  resetAll() {
    this.activeDomain.set("");
    this.activeRegion = "";
    this.searchInput = "";
    this.activeSort = "-isFeatured -createdAt";
    this.minPrice = null;
    this.maxPrice = null;
    this.filterOrganic = false;
    this.filterHandmade = false;
    this.page.set(1);
    this.load();
  }
  static {
    this.\u0275fac = function MarketplaceComponent_Factory(t) {
      return new (t || _MarketplaceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarketplaceComponent, selectors: [["app-marketplace"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 19, consts: [[1, "marketplace-page"], [1, "mp-hero"], [1, "container"], [1, "hero-search"], ["placeholder", "Rechercher un produit, artisan\u2026", 1, "hero-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "hero-btn", 3, "click"], [1, "domain-tabs-wrap"], [1, "domain-tabs"], [1, "domain-tab", 3, "active"], [1, "container", "mp-body"], [1, "mp-layout"], [1, "mp-sidebar"], [1, "sidebar-section"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "price-inputs"], ["type", "number", "placeholder", "Min", "min", "0", 3, "ngModelChange", "blur", "ngModel"], ["type", "number", "placeholder", "Max", "min", "0", 3, "ngModelChange", "blur", "ngModel"], [1, "check-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "btn-reset-all", 3, "click"], [1, "mp-main"], [1, "mp-toolbar"], [1, "result-count"], [1, "toolbar-right"], [1, "view-toggle"], ["title", "Grille", 3, "click"], ["title", "Liste", 3, "click"], [1, "products-grid"], [1, "domain-tab", 3, "click"], [1, "tab-icon"], [1, "tab-label"], [1, "skeleton-card"], [1, "empty-state"], [1, "empty-icon"], [1, "btn-reset", 3, "click"], [1, "pagination"], [1, "mp-card", 3, "routerLink"], [1, "mp-thumb"], ["loading", "lazy", 3, "src", "alt"], [1, "mp-feat-badge"], [1, "mp-organic-badge"], [1, "mp-discount-badge"], ["title", "Ajouter au panier", "aria-label", "Ajouter au panier", 1, "mp-cart-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "9", "cy", "21", "r", "1", "stroke", "currentColor", "stroke-width", "2"], ["cx", "20", "cy", "21", "r", "1", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 1H5L7.68 14.39A2 2 0 0 0 9.66 16H19.4A2 2 0 0 0 21.38 14.39L23 6H6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mp-body"], [1, "mp-domain"], [1, "mp-desc"], [1, "mp-footer"], [1, "mp-pricing"], [1, "mp-origin"], [1, "mp-thumb-ph"], [1, "mp-old-price"], [1, "mp-price"], [1, "mp-list-item", 3, "routerLink"], [1, "mli-thumb"], [1, "mli-body"], [1, "mli-meta"], [1, "badge-sm", "green"], [1, "badge-sm", "amber"], [1, "mli-price"], [1, "mli-cart-btn", 3, "click"], [1, "mli-voir"], [1, "mli-thumb-ph"], [3, "click", "disabled"], [3, "active"], [3, "click"]], template: function MarketplaceComponent_Template(rf, ctx) {
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
        \u0275\u0275twoWayListener("ngModelChange", function MarketplaceComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchInput, $event) || (ctx.searchInput = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function MarketplaceComponent_Template_input_keyup_enter_10_listener() {
          return ctx.doSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function MarketplaceComponent_Template_button_click_11_listener() {
          return ctx.doSearch();
        });
        \u0275\u0275text(12, "\u{1F50D} Rechercher");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 2)(15, "div", 7);
        \u0275\u0275repeaterCreate(16, MarketplaceComponent_For_17_Template, 5, 4, "button", 8, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "aside", 11)(21, "div", 12)(22, "h4");
        \u0275\u0275text(23, "R\xE9gion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function MarketplaceComponent_Template_select_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.activeRegion, $event) || (ctx.activeRegion = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function MarketplaceComponent_Template_select_ngModelChange_24_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(25, "option", 14);
        \u0275\u0275text(26, "Toutes les r\xE9gions");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(27, MarketplaceComponent_For_28_Template, 2, 2, "option", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 12)(30, "h4");
        \u0275\u0275text(31, "Prix (MAD)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 16)(33, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function MarketplaceComponent_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.minPrice, $event) || (ctx.minPrice = $event);
          return $event;
        });
        \u0275\u0275listener("blur", function MarketplaceComponent_Template_input_blur_33_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "\u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function MarketplaceComponent_Template_input_ngModelChange_36_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.maxPrice, $event) || (ctx.maxPrice = $event);
          return $event;
        });
        \u0275\u0275listener("blur", function MarketplaceComponent_Template_input_blur_36_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 12)(38, "h4");
        \u0275\u0275text(39, "Labels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "label", 19)(41, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function MarketplaceComponent_Template_input_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterOrganic, $event) || (ctx.filterOrganic = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function MarketplaceComponent_Template_input_ngModelChange_41_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " \u{1F33F} Bio & Naturel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "label", 19)(44, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function MarketplaceComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterHandmade, $event) || (ctx.filterHandmade = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function MarketplaceComponent_Template_input_ngModelChange_44_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, " \u{1F932} Fait main ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "button", 21);
        \u0275\u0275listener("click", function MarketplaceComponent_Template_button_click_46_listener() {
          return ctx.resetAll();
        });
        \u0275\u0275text(47, "R\xE9initialiser les filtres");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 22)(49, "div", 23)(50, "p", 24);
        \u0275\u0275template(51, MarketplaceComponent_Conditional_51_Template, 4, 2)(52, MarketplaceComponent_Conditional_52_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 25)(54, "select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function MarketplaceComponent_Template_select_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.activeSort, $event) || (ctx.activeSort = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function MarketplaceComponent_Template_select_ngModelChange_54_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275repeaterCreate(55, MarketplaceComponent_For_56_Template, 2, 2, "option", 15, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 26)(58, "button", 27);
        \u0275\u0275listener("click", function MarketplaceComponent_Template_button_click_58_listener() {
          return ctx.viewMode.set("grid");
        });
        \u0275\u0275text(59, "\u229E");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "button", 28);
        \u0275\u0275listener("click", function MarketplaceComponent_Template_button_click_60_listener() {
          return ctx.viewMode.set("list");
        });
        \u0275\u0275text(61, "\u2630");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(62, MarketplaceComponent_Conditional_62_Template, 3, 1, "div", 29)(63, MarketplaceComponent_Conditional_63_Template, 9, 0)(64, MarketplaceComponent_Conditional_64_Template, 4, 3);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "HOME.MARKETPLACE_TITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 17, "HOME.MARKETPLACE_SUBTITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchInput);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.domains);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.activeRegion);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.moroccanRegions);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.minPrice);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.maxPrice);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterOrganic);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterHandmade);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(51, ctx.total() > 0 ? 51 : 52);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.activeSort);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.sortOptions);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.viewMode() === "grid");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.viewMode() === "list");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(62, ctx.isLoading() ? 62 : ctx.products().length === 0 ? 63 : 64);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink, TranslateModule, TranslatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n\n.mp-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #1a0a00,\n      #3d1a00);\n  padding: 3.5rem 0 2.5rem;\n  color: #fff;\n}\n.mp-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: var(--zellige-pattern);\n  background-repeat: repeat;\n  background-size: 40px 12px;\n  opacity: 0.15;\n  pointer-events: none;\n}\n.mp-hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.mp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 900;\n  margin-bottom: 0.5rem;\n  color: #f8f1e7 !important;\n}\n.mp-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.95rem;\n  margin-bottom: 1.5rem;\n  color: #f8f1e7 !important;\n}\n.hero-search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  max-width: 520px;\n}\n.hero-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.65rem 1rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  outline: none;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n}\n.hero-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.55);\n}\n.hero-btn[_ngcontent-%COMP%] {\n  padding: 0.65rem 1.25rem;\n  background: #8B4513;\n  border: none;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.875rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.domain-tabs-wrap[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-bottom: 1px solid var(--card-border);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.domain-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  overflow-x: auto;\n  padding: 0.5rem 0;\n  scrollbar-width: none;\n}\n.domain-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.domain-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.38rem 0.8rem;\n  border: none;\n  border-radius: 20px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.domain-tab.active[_ngcontent-%COMP%], .domain-tab[_ngcontent-%COMP%]:hover {\n  background: #8B4513;\n  color: #fff;\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.mp-body[_ngcontent-%COMP%] {\n  padding: 1.75rem 1.5rem 3rem;\n}\n.mp-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 1.75rem;\n  align-items: start;\n}\n.mp-sidebar[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 14px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  position: sticky;\n  top: 60px;\n}\n.sidebar-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 0 0 0.625rem;\n}\n.sidebar-section[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.45rem 0.65rem;\n  border: 1px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n}\n.price-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.price-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 0.42rem 0.6rem;\n  border: 1px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n  width: 100%;\n}\n.price-inputs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.check-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.84rem;\n  color: var(--text-primary);\n  cursor: pointer;\n  padding: 0.25rem 0;\n}\n.check-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n  cursor: pointer;\n}\n.btn-reset-all[_ngcontent-%COMP%] {\n  padding: 0.45rem;\n  background: var(--bg-tertiary);\n  border: 1px solid var(--card-border);\n  border-radius: 8px;\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  cursor: pointer;\n  text-align: center;\n}\n.mp-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.result-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.result-count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.result-count[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #8B4513;\n  font-style: normal;\n  font-weight: 600;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.toolbar-right[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.65rem;\n  border: 1px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--card-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.65rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #8B4513;\n  color: #fff;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));\n  gap: 1.125rem;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 280px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-secondary) 25%,\n      var(--bg-tertiary) 50%,\n      var(--bg-secondary) 75%);\n  background-size: 200% 100%;\n  border-radius: 12px;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200%;\n  }\n  100% {\n    background-position: -200%;\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 1rem;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin: 0;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.mp-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  overflow: hidden;\n  text-decoration: none;\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  display: flex;\n  flex-direction: column;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .mp-card[_ngcontent-%COMP%] {\n  background: #24201d;\n  border-color: rgba(255, 255, 255, 0.05);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);\n}\n.mp-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.mp-thumb[_ngcontent-%COMP%] {\n  height: 165px;\n  background: var(--bg-tertiary);\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n.mp-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.35s;\n}\n.mp-card[_ngcontent-%COMP%]:hover   .mp-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.mp-thumb-ph[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(139, 69, 19, 0.06),\n      rgba(212, 175, 106, 0.06));\n}\n.mp-feat-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n  background: rgba(0, 0, 0, 0.6);\n  color: #ffd700;\n  padding: 0.15rem 0.45rem;\n  border-radius: 5px;\n  font-size: 0.68rem;\n}\n.mp-organic-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  left: 0.5rem;\n  background: rgba(39, 174, 96, 0.8);\n  color: #fff;\n  padding: 0.15rem 0.45rem;\n  border-radius: 5px;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.mp-discount-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  background: #e74c3c;\n  color: #fff;\n  padding: 0.15rem 0.45rem;\n  border-radius: 5px;\n  font-size: 0.7rem;\n  font-weight: 800;\n}\n.mp-cart-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: none;\n  background: var(--brand-gold, #d4af6a);\n  color: #2c1a05;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  transition: transform 0.2s, background 0.2s;\n  opacity: 0;\n  transform: translateY(6px);\n}\n.mp-cart-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n}\n.mp-cart-btn[_ngcontent-%COMP%]:hover {\n  background: #c49a52;\n  transform: translateY(0) scale(1.08);\n}\n.mp-card[_ngcontent-%COMP%]:hover   .mp-cart-btn[_ngcontent-%COMP%], .mp-cart-btn[_ngcontent-%COMP%]:focus-visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n@media (max-width: 860px) {\n  .mp-cart-btn[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.mp-body[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.mp-domain[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #8B4513;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.mp-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n  flex: 1;\n}\n.mp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-top: 0.375rem;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.mp-pricing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.mp-old-price[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  text-decoration: line-through;\n}\n.mp-price[_ngcontent-%COMP%] {\n  color: #8B4513;\n  font-weight: 800;\n  font-size: 0.9rem;\n}\n.mp-origin[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n}\n.products-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.mp-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  overflow: hidden;\n  text-decoration: none;\n  transition: box-shadow 0.2s, background 0.2s;\n  align-items: stretch;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .mp-list-item[_ngcontent-%COMP%] {\n  background: #24201d;\n  border-color: rgba(255, 255, 255, 0.05);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);\n}\n.mp-list-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.mli-thumb[_ngcontent-%COMP%] {\n  width: 110px;\n  flex-shrink: 0;\n  background: var(--bg-tertiary);\n  overflow: hidden;\n}\n.mli-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.mli-thumb-ph[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 90px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n.mli-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.875rem 0.5rem 0.875rem 0;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.mli-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n  margin-top: 0.25rem;\n}\n.badge-sm[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.5rem;\n  border-radius: 5px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.badge-sm.green[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.badge-sm.amber[_ngcontent-%COMP%] {\n  background: rgba(243, 156, 18, 0.1);\n  color: #f39c12;\n}\n.mli-price[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 0.375rem;\n  flex-shrink: 0;\n}\n.mli-voir[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #8B4513;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.mli-cart-btn[_ngcontent-%COMP%] {\n  padding: 0.32rem 0.75rem;\n  background: var(--brand-gold, #d4af6a);\n  color: #2c1a05;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.mli-cart-btn[_ngcontent-%COMP%]:hover {\n  background: #c49a52;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  justify-content: center;\n  margin-top: 2rem;\n  flex-wrap: wrap;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.875rem;\n  border: 1px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  cursor: pointer;\n  font-size: 0.82rem;\n}\n.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #8B4513;\n  color: #fff;\n  border-color: #8B4513;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n@media (max-width: 860px) {\n  .mp-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mp-sidebar[_ngcontent-%COMP%] {\n    position: relative;\n    top: 0;\n  }\n}\n@media (max-width: 540px) {\n  .mp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 380px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=marketplace.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarketplaceComponent, { className: "MarketplaceComponent", filePath: "src\\app\\features\\client\\marketplace\\marketplace.component.ts", lineNumber: 358 });
})();
export {
  MarketplaceComponent
};
//# sourceMappingURL=chunk-FKJPZZMI.js.map
