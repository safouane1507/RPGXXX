import {
  CartService
} from "./chunk-WWFTIXOC.js";
import {
  AuthService
} from "./chunk-SCCTXVTR.js";
import {
  LanguageService
} from "./chunk-XFLHW3ED.js";
import {
  ActivatedRoute,
  Meta,
  Router,
  RouterLink,
  RouterModule,
  Title
} from "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  TranslateModule
} from "./chunk-AJRT7THN.js";
import {
  CommonModule,
  DecimalPipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/marketplace/product-detail.component.ts
var _forTrack0 = ($index, $item) => $item._id;
var _c0 = (a0) => ["/marketplace", a0];
function ProductDetailComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.activeImg(), \u0275\u0275sanitizeUrl)("alt", ctx_r1.t(ctx_r1.product().name));
  }
}
function ProductDetailComponent_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "\u{1F6CD}\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "\u2B50 Mis en avant");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r1.discountPct(), "%");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_1_Conditional_19_For_2_Template_div_click_0_listener() {
      const img_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.activeImg.set(img_r4));
    });
    \u0275\u0275element(1, "img", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.activeImg() === img_r4);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r4, \u0275\u0275sanitizeUrl)("alt", ctx_r1.t(ctx_r1.product().name));
  }
}
function ProductDetailComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_1_Conditional_19_For_2_Template, 2, 4, "div", 33, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.allImages());
  }
}
function ProductDetailComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "\u{1F33F} Bio & Naturel");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u{1F932} Fait main");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_1_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", cert_r5, "");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.product().reviewCount, " avis)");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProductDetailComponent_Conditional_1_Conditional_30_Conditional_6_Template, 2, 1, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.starsDisplay(ctx_r1.product().rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 3, ctx_r1.product().rating, "1.1-1"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, ctx_r1.product().reviewCount > 0 ? 6 : -1);
  }
}
function ProductDetailComponent_Conditional_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 3, ctx_r1.product().price, "1.0-0"), " MAD");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 6, ctx_r1.product().priceDiscount, "1.0-0"), " MAD");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xC9conomisez ", \u0275\u0275pipeBind2(8, 9, ctx_r1.product().price - ctx_r1.product().priceDiscount, "1.0-0"), " MAD");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, ctx_r1.product().price, "1.0-0"), " MAD");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 En stock (", ctx_r1.product().stock, " disponibles)");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "\u2715 Rupture de stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, ProductDetailComponent_Conditional_1_Conditional_34_Conditional_1_Template, 2, 1, "span")(2, ProductDetailComponent_Conditional_1_Conditional_34_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("low", ctx_r1.product().stock < 10);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.product().stock > 0 ? 1 : 2);
  }
}
function ProductDetailComponent_Conditional_1_Conditional_35_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r1.product().origin.region, "");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " \u{1F4CD} Origine : ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductDetailComponent_Conditional_1_Conditional_35_Conditional_4_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r1.product().origin) == null ? null : tmp_2_0.city) || ((tmp_2_0 = ctx_r1.product().origin) == null ? null : tmp_2_0.region));
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ((tmp_3_0 = ctx_r1.product().origin) == null ? null : tmp_3_0.region) && ((tmp_3_0 = ctx_r1.product().origin) == null ? null : tmp_3_0.city) ? 4 : -1);
  }
}
function ProductDetailComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t(ctx_r1.product().shortDescription));
  }
}
function ProductDetailComponent_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 45);
    \u0275\u0275text(2, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "button", 47);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_1_Conditional_37_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decQty());
    });
    \u0275\u0275text(5, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 48);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_1_Conditional_37_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incQty());
    });
    \u0275\u0275text(9, "+");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.qty() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.qty());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.product().isInfiniteStock && ctx_r1.qty() >= ctx_r1.product().stock);
  }
}
function ProductDetailComponent_Conditional_1_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 49);
    \u0275\u0275text(2, "\u{1F3FA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Acteur local certifi\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 51);
    \u0275\u0275text(9, "Voir la fiche \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r1.product().proActor) == null ? null : tmp_2_0.proProfile == null ? null : tmp_2_0.proProfile.companyName) || "Artisan");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 29)(1, "h2");
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r1.t(ctx_r1.product().description), \u0275\u0275sanitizeHtml);
  }
}
function ProductDetailComponent_Conditional_1_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r7, "");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_1_Conditional_45_For_2_Template, 2, 1, "span", 53, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.product().tags);
  }
}
function ProductDetailComponent_Conditional_1_Conditional_46_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", p_r8.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.t(p_r8.name));
  }
}
function ProductDetailComponent_Conditional_1_Conditional_46_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, "\u{1F6CD}\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_1_Conditional_46_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55)(1, "div", 56);
    \u0275\u0275template(2, ProductDetailComponent_Conditional_1_Conditional_46_For_5_Conditional_2_Template, 1, 2, "img", 35)(3, ProductDetailComponent_Conditional_1_Conditional_46_For_5_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 57)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong", 58);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, p_r8.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, p_r8.coverImage ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t(p_r8.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 4, p_r8.price, "1.0-0"), " MAD");
  }
}
function ProductDetailComponent_Conditional_1_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 31)(1, "h2");
    \u0275\u0275text(2, "Produits similaires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275repeaterCreate(4, ProductDetailComponent_Conditional_1_Conditional_46_For_5_Template, 10, 9, "a", 55, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.similar());
  }
}
function ProductDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 2);
    \u0275\u0275text(2, "Boutique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 4);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "div", 8);
    \u0275\u0275template(15, ProductDetailComponent_Conditional_1_Conditional_15_Template, 1, 2, "img", 9)(16, ProductDetailComponent_Conditional_1_Conditional_16_Template, 2, 0)(17, ProductDetailComponent_Conditional_1_Conditional_17_Template, 2, 0, "div", 10)(18, ProductDetailComponent_Conditional_1_Conditional_18_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ProductDetailComponent_Conditional_1_Conditional_19_Template, 3, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13)(21, "span", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h1");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15);
    \u0275\u0275template(26, ProductDetailComponent_Conditional_1_Conditional_26_Template, 2, 0, "span", 16)(27, ProductDetailComponent_Conditional_1_Conditional_27_Template, 2, 0, "span", 17);
    \u0275\u0275repeaterCreate(28, ProductDetailComponent_Conditional_1_For_29_Template, 2, 1, "span", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ProductDetailComponent_Conditional_1_Conditional_30_Template, 7, 6, "div", 19);
    \u0275\u0275elementStart(31, "div", 20);
    \u0275\u0275template(32, ProductDetailComponent_Conditional_1_Conditional_32_Template, 9, 12)(33, ProductDetailComponent_Conditional_1_Conditional_33_Template, 3, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ProductDetailComponent_Conditional_1_Conditional_34_Template, 3, 3, "div", 21)(35, ProductDetailComponent_Conditional_1_Conditional_35_Template, 5, 2, "div", 22)(36, ProductDetailComponent_Conditional_1_Conditional_36_Template, 2, 1, "p", 23)(37, ProductDetailComponent_Conditional_1_Conditional_37_Template, 10, 3, "div", 24);
    \u0275\u0275elementStart(38, "div", 25)(39, "button", 26);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_1_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "a", 27);
    \u0275\u0275text(42, "\u2709\uFE0F Contacter le vendeur");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, ProductDetailComponent_Conditional_1_Conditional_43_Template, 10, 1, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, ProductDetailComponent_Conditional_1_Conditional_44_Template, 4, 1, "section", 29)(45, ProductDetailComponent_Conditional_1_Conditional_45_Template, 3, 0, "div", 30)(46, ProductDetailComponent_Conditional_1_Conditional_46_Template, 6, 0, "section", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_22_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.domainLabel(ctx_r1.product().domain));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.t(ctx_r1.product().name));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(15, ctx_r1.activeImg() ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(17, ctx_r1.product().isFeatured ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(18, ctx_r1.product().priceDiscount ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(19, ctx_r1.allImages().length > 1 ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.domainLabel(ctx_r1.product().domain));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.t(ctx_r1.product().name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(26, ctx_r1.product().isOrganic ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(27, ctx_r1.product().isHandmade ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.product().certifications);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(30, ctx_r1.product().rating > 0 ? 30 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(32, ctx_r1.product().priceDiscount ? 32 : 33);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(34, !ctx_r1.product().isInfiniteStock ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(35, ((tmp_15_0 = ctx_r1.product().origin) == null ? null : tmp_15_0.city) || ((tmp_15_0 = ctx_r1.product().origin) == null ? null : tmp_15_0.region) ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(36, ctx_r1.t(ctx_r1.product().shortDescription) ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(37, ctx_r1.product().isInfiniteStock || ctx_r1.product().stock > 0 ? 37 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.product().isInfiniteStock && ctx_r1.product().stock <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F6D2} ", !ctx_r1.product().isInfiniteStock && ctx_r1.product().stock <= 0 ? "Rupture de stock" : "Ajouter au panier", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(43, ctx_r1.product().proActor ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(44, ctx_r1.t(ctx_r1.product().description) ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(45, ((tmp_22_0 = ctx_r1.product().tags) == null ? null : tmp_22_0.length) > 0 ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(46, ctx_r1.similar().length > 0 ? 46 : -1);
  }
}
function ProductDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2, "\u{1F6CD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Produit introuvable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Ce produit n'existe pas ou n'est plus disponible.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 62);
    \u0275\u0275text(8, "\u2190 Retour \xE0 la boutique");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "div", 64);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement du produit\u2026");
    \u0275\u0275elementEnd()();
  }
}
var DOMAIN_LABELS = {
  artisanat_art: "Artisanat d'art",
  produit_terroir: "Produits du terroir",
  soin_beaute: "Soin & Beaut\xE9",
  habillement_mode: "Mode Marocaine",
  artisanat_culinaire: "Artisanat Culinaire",
  agriculture_bio: "Agriculture Bio",
  produits_mer: "Produits de la mer",
  artisanat_service: "Artisanat Service",
  tourisme_rural: "Tourisme Rural"
};
var ProductDetailComponent = class _ProductDetailComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.lang = inject(LanguageService);
    this.title = inject(Title);
    this.meta = inject(Meta);
    this.router = inject(Router);
    this.auth = inject(AuthService);
    this.cart = inject(CartService);
    this.product = signal(null);
    this.similar = signal([]);
    this.notFound = signal(false);
    this.activeImg = signal(null);
    this.allImages = signal([]);
    this.qty = signal(1);
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug) {
      this.api.get(`/products/${slug}`).subscribe({
        next: (r) => {
          const p = r.data;
          this.product.set(p);
          const nameFr = this.t(p.name);
          const descFr = this.t(p.shortDescription) || this.t(p.description) || "";
          this.title.setTitle(`${nameFr} - KENZ BLADI`);
          this.meta.updateTag({ name: "description", content: descFr.replace(/<[^>]*>/g, "").slice(0, 160) });
          this.meta.updateTag({ property: "og:title", content: `${nameFr} - KENZ BLADI` });
          this.meta.updateTag({ property: "og:description", content: descFr.replace(/<[^>]*>/g, "").slice(0, 200) });
          this.meta.updateTag({ property: "og:image", content: p.coverImage || "" });
          this.meta.updateTag({ property: "og:type", content: "product" });
          this.meta.updateTag({ name: "twitter:card", content: "summary_large_image" });
          const imgs = [];
          if (p.coverImage)
            imgs.push(p.coverImage);
          if (p.images?.length)
            p.images.forEach((img) => {
              if (img.url && !imgs.includes(img.url))
                imgs.push(img.url);
            });
          this.allImages.set(imgs);
          this.activeImg.set(imgs[0] || null);
          this.api.get("/products", { domain: p.domain, limit: 5 }).subscribe({
            next: (res) => this.similar.set(res.data.filter((s) => s._id !== p._id).slice(0, 4)),
            error: () => {
            }
          });
        },
        error: () => this.notFound.set(true)
      });
    }
  }
  t(f) {
    if (!f)
      return "";
    const l = this.lang.current();
    return f[l] || f["fr"] || "";
  }
  domainLabel(id) {
    return DOMAIN_LABELS[id] || id;
  }
  discountPct() {
    const p = this.product();
    if (!p || !p.priceDiscount)
      return 0;
    return Math.round((1 - p.priceDiscount / p.price) * 100);
  }
  starsDisplay(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return "\u2605".repeat(full) + (half ? "\xBD" : "") + "\u2606".repeat(empty);
  }
  incQty() {
    const p = this.product();
    const max = p.isInfiniteStock ? Infinity : p.stock;
    this.qty.update((v) => Math.min(v + 1, max));
  }
  decQty() {
    this.qty.update((v) => Math.max(1, v - 1));
  }
  addToCart() {
    if (!this.auth.isLoggedIn() || this.auth.currentUser()?.role !== "client") {
      this.router.navigate(["/auth/login"], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    this.cart.addToCart(this.product(), this.qty());
    this.cart.isCartOpen.set(true);
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(t) {
      return new (t || _ProductDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "product-detail-page"], [1, "container", "breadcrumb"], ["routerLink", "/marketplace"], [1, "bc-domain"], [1, "bc-current"], [1, "container", "pd-body"], [1, "pd-layout"], [1, "pd-gallery"], [1, "pd-main-img"], [3, "src", "alt"], [1, "pd-feat"], [1, "pd-discount"], [1, "pd-thumbs"], [1, "pd-info"], [1, "pd-domain"], [1, "pd-badges"], [1, "badge", "green"], [1, "badge", "amber"], [1, "badge", "blue"], [1, "pd-rating"], [1, "pd-price-block"], [1, "pd-stock", 3, "low"], [1, "pd-origin"], [1, "pd-short-desc"], [1, "pd-qty"], [1, "pd-cta"], [1, "btn-add-cart", 3, "click", "disabled"], ["routerLink", "/annuaire", 1, "btn-contact"], [1, "vendor-card"], [1, "pd-desc-section"], [1, "pd-tags"], [1, "pd-similar"], [1, "pd-img-ph"], [1, "pd-thumb", 3, "active"], [1, "pd-thumb", 3, "click"], ["loading", "lazy", 3, "src", "alt"], [1, "stars"], [1, "rating-val"], [1, "review-count"], [1, "pd-old-price"], [1, "pd-price"], [1, "pd-economy"], [1, "pd-stock"], [1, "out"], [1, "origin-region"], [1, "pd-qty-label"], [1, "pd-qty-stepper"], ["aria-label", "Diminuer", 3, "click", "disabled"], ["aria-label", "Augmenter", 3, "click", "disabled"], [1, "vendor-avatar"], [1, "vendor-info"], ["routerLink", "/annuaire", 1, "vendor-link"], [1, "pd-desc-body", 3, "innerHTML"], [1, "tag"], [1, "similar-grid"], [1, "sim-card", 3, "routerLink"], [1, "sim-thumb"], [1, "sim-body"], [1, "sim-price"], [1, "sim-ph"], [1, "not-found"], [1, "nf-icon"], ["routerLink", "/marketplace", 1, "btn-back"], [1, "page-loader"], [1, "loader-ring"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ProductDetailComponent_Conditional_1_Template, 47, 22)(2, ProductDetailComponent_Conditional_2_Template, 9, 0)(3, ProductDetailComponent_Conditional_3_Template, 4, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.product() ? 1 : ctx.notFound() ? 2 : 3);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink, TranslateModule], styles: ["\n\n.product-detail-page[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8B4513;\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.bc-domain[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.bc-current[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.pd-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem 3.5rem;\n}\n.pd-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem;\n  margin-bottom: 3rem;\n}\n.pd-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.pd-main-img[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 4/3;\n  background: var(--bg-tertiary);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.pd-main-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.pd-img-ph[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 4rem;\n}\n.pd-feat[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffd700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.pd-discount[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: #e74c3c;\n  color: #fff;\n  padding: 0.25rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 800;\n}\n.pd-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.pd-thumbs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.pd-thumb[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 56px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  flex-shrink: 0;\n  border: 2px solid transparent;\n  transition: border-color 0.2s;\n}\n.pd-thumb.active[_ngcontent-%COMP%] {\n  border-color: #8B4513;\n}\n.pd-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.pd-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.pd-domain[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #8B4513;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.3;\n}\n.pd-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.65rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.badge.green[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.badge.amber[_ngcontent-%COMP%] {\n  background: rgba(243, 156, 18, 0.1);\n  color: #f39c12;\n}\n.badge.blue[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.1);\n  color: #3498db;\n}\n.pd-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.stars[_ngcontent-%COMP%] {\n  color: #f39c12;\n  font-size: 1rem;\n  letter-spacing: 0.05em;\n}\n.rating-val[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.review-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.pd-price-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.pd-old-price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-muted);\n  text-decoration: line-through;\n}\n.pd-price[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 900;\n  color: #8B4513;\n}\n.pd-economy[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #27ae60;\n  font-weight: 600;\n}\n.pd-stock[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.pd-stock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n.pd-stock.low[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n.pd-stock[_ngcontent-%COMP%]   .out[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.pd-origin[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.pd-origin[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.origin-region[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.pd-short-desc[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.75;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.pd-qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n}\n.pd-qty-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.pd-qty-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 0.35rem 0.9rem;\n}\n.pd-qty-stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 1px solid var(--card-border);\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.pd-qty-stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-gold, #d4af6a);\n  color: #2c1a05;\n  border-color: var(--brand-gold, #d4af6a);\n}\n.pd-qty-stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.pd-qty-stepper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 1.5rem;\n  text-align: center;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.pd-cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.btn-add-cart[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.7rem 1.5rem;\n  background: var(--brand-gold, #d4af6a);\n  color: #2c1a05;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-add-cart[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c49a52;\n}\n.btn-add-cart[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-contact[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.7rem 1.5rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-contact[_ngcontent-%COMP%]:hover {\n  background: #7a3a10;\n}\n.vendor-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 0.875rem 1rem;\n}\n.vendor-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: var(--bg-tertiary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.vendor-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.vendor-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.vendor-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n.vendor-link[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #8B4513;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.vendor-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.pd-desc-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 1rem;\n}\n.pd-desc-body[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.85;\n  color: var(--text-secondary);\n}\n.pd-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n  margin-top: 1.5rem;\n}\n.tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.65rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n.pd-similar[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n.pd-similar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 1.25rem;\n}\n.similar-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));\n  gap: 1rem;\n}\n.sim-card[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.sim-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);\n}\n.sim-thumb[_ngcontent-%COMP%] {\n  height: 130px;\n  background: var(--bg-tertiary);\n  overflow: hidden;\n}\n.sim-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.sim-card[_ngcontent-%COMP%]:hover   .sim-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.sim-ph[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n}\n.sim-body[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sim-price[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #8B4513;\n}\n.not-found[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 5rem 2rem;\n  text-align: center;\n}\n.nf-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.btn-back[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.5rem;\n  background: #8B4513;\n  color: #fff;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 700;\n}\n.page-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 6rem 2rem;\n}\n.loader-ring[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 4px solid var(--card-border);\n  border-top-color: #8B4513;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.page-loader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n@media (max-width: 768px) {\n  .pd-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pd-body[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem 2.5rem;\n  }\n}\n@media (max-width: 480px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .pd-price[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\features\\client\\marketplace\\product-detail.component.ts", lineNumber: 322 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-ASOHQ2PI.js.map
