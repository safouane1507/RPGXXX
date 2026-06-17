import {
  LanguageService
} from "./chunk-XFLHW3ED.js";
import {
  ActivatedRoute,
  DomSanitizer,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/tourism/tourism-detail.component.ts
var _forTrack0 = ($index, $item) => $item._id;
var _c0 = (a0) => ["/annuaire", a0];
var _c1 = (a0) => ["/tourism", a0];
function TourismDetailComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "\u2B50 Coup de c\u0153ur");
    \u0275\u0275elementEnd();
  }
}
function TourismDetailComponent_Conditional_1_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.place().location.region, "");
  }
}
function TourismDetailComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275template(2, TourismDetailComponent_Conditional_1_Conditional_12_Conditional_2_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r0.place().location.city, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ((tmp_3_0 = ctx_r0.place().location) == null ? null : tmp_3_0.region) ? 2 : -1);
  }
}
function TourismDetailComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r0.t(ctx_r0.place().fullArticle), \u0275\u0275sanitizeHtml);
  }
}
function TourismDetailComponent_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.t(ctx_r0.place().shortDescription));
  }
}
function TourismDetailComponent_Conditional_1_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function TourismDetailComponent_Conditional_1_Conditional_17_For_5_Template_div_click_0_listener() {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openLightbox($index_r3));
    });
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275text(3, "\u{1F50D}");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const photo_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", photo_r4.url, \u0275\u0275sanitizeUrl)("alt", ctx_r0.t(photo_r4.caption) || "Photo");
  }
}
function TourismDetailComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "h2");
    \u0275\u0275text(2, "Galerie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275repeaterCreate(4, TourismDetailComponent_Conditional_1_Conditional_17_For_5_Template, 4, 2, "div", 20, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.place().photos);
  }
}
function TourismDetailComponent_Conditional_1_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 27);
    \u0275\u0275text(2, "\u{1F324}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "TOURISM.BEST_SEASON"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.t(ctx_r0.place().practicalInfo.bestSeason));
  }
}
function TourismDetailComponent_Conditional_1_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 27);
    \u0275\u0275text(2, "\u{1F3AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Tarif d'entr\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.t(ctx_r0.place().practicalInfo.entryFee));
  }
}
function TourismDetailComponent_Conditional_1_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 27);
    \u0275\u0275text(2, "\u{1F550}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Horaires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.t(ctx_r0.place().practicalInfo.openingHours));
  }
}
function TourismDetailComponent_Conditional_1_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "\u{1F68C}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "TOURISM.HOW_TO_GET"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.t(ctx_r0.place().practicalInfo.howToGet));
  }
}
function TourismDetailComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275template(5, TourismDetailComponent_Conditional_1_Conditional_18_Conditional_5_Template, 9, 4, "div", 25)(6, TourismDetailComponent_Conditional_1_Conditional_18_Conditional_6_Template, 8, 1, "div", 25)(7, TourismDetailComponent_Conditional_1_Conditional_18_Conditional_7_Template, 8, 1, "div", 25)(8, TourismDetailComponent_Conditional_1_Conditional_18_Conditional_8_Template, 9, 4, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "TOURISM.PRACTICAL_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(5, ctx_r0.t((tmp_3_0 = ctx_r0.place().practicalInfo) == null ? null : tmp_3_0.bestSeason) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r0.t((tmp_4_0 = ctx_r0.place().practicalInfo) == null ? null : tmp_4_0.entryFee) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r0.t((tmp_5_0 = ctx_r0.place().practicalInfo) == null ? null : tmp_5_0.openingHours) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, ctx_r0.t((tmp_6_0 = ctx_r0.place().practicalInfo) == null ? null : tmp_6_0.howToGet) ? 8 : -1);
  }
}
function TourismDetailComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "h2");
    \u0275\u0275text(2, "\u{1F4CD} Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275element(4, "iframe", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 30);
    \u0275\u0275text(6, " \u{1F5FA}\uFE0F Ouvrir dans OpenStreetMap ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.mapUrl(), \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.osmLink(), \u0275\u0275sanitizeUrl);
  }
}
function TourismDetailComponent_Conditional_1_Conditional_20_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const coop_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", coop_r5.logo, \u0275\u0275sanitizeUrl)("alt", coop_r5.structureName);
  }
}
function TourismDetailComponent_Conditional_1_Conditional_20_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "\u{1F3FA}");
    \u0275\u0275elementEnd();
  }
}
function TourismDetailComponent_Conditional_1_Conditional_20_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coop_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", coop_r5.contact.city, "");
  }
}
function TourismDetailComponent_Conditional_1_Conditional_20_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const coop_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(coop_r5.description.fr);
  }
}
function TourismDetailComponent_Conditional_1_Conditional_20_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33)(1, "div", 34);
    \u0275\u0275template(2, TourismDetailComponent_Conditional_1_Conditional_20_For_7_Conditional_2_Template, 1, 2, "img", 35)(3, TourismDetailComponent_Conditional_1_Conditional_20_For_7_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TourismDetailComponent_Conditional_1_Conditional_20_For_7_Conditional_7_Template, 2, 1, "span")(8, TourismDetailComponent_Conditional_1_Conditional_20_For_7_Conditional_8_Template, 2, 1, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const coop_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, coop_r5.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, coop_r5.logo ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(coop_r5.structureName);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, (coop_r5.contact == null ? null : coop_r5.contact.city) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, (coop_r5.description == null ? null : coop_r5.description.fr) ? 8 : -1);
  }
}
function TourismDetailComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "h2");
    \u0275\u0275text(2, "\u{1F91D} Coop\xE9ratives \xE0 proximit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4, "D\xE9couvrez les artisans et producteurs locaux autour de ce site.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275repeaterCreate(6, TourismDetailComponent_Conditional_1_Conditional_20_For_7_Template, 9, 7, "a", 33, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.place().nearbyCooperatives);
  }
}
function TourismDetailComponent_Conditional_1_Conditional_21_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", r_r6.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.t(r_r6.name));
  }
}
function TourismDetailComponent_Conditional_1_Conditional_21_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, "\u{1F30D}");
    \u0275\u0275elementEnd();
  }
}
function TourismDetailComponent_Conditional_1_Conditional_21_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39)(1, "div", 40);
    \u0275\u0275template(2, TourismDetailComponent_Conditional_1_Conditional_21_For_6_Conditional_2_Template, 1, 2, "img", 22)(3, TourismDetailComponent_Conditional_1_Conditional_21_For_6_Conditional_3_Template, 2, 0);
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c1, r_r6.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, r_r6.coverImage ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r6.locationType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.t(r_r6.name));
  }
}
function TourismDetailComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275repeaterCreate(5, TourismDetailComponent_Conditional_1_Conditional_21_For_6_Template, 8, 6, "a", 39, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "TOURISM.OTHER_PLACES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.place().relatedPlaces);
  }
}
function TourismDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "a", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TourismDetailComponent_Conditional_1_Conditional_9_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h1");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, TourismDetailComponent_Conditional_1_Conditional_12_Template, 3, 2, "span", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 10)(14, "section", 11);
    \u0275\u0275template(15, TourismDetailComponent_Conditional_1_Conditional_15_Template, 1, 1, "div", 12)(16, TourismDetailComponent_Conditional_1_Conditional_16_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, TourismDetailComponent_Conditional_1_Conditional_17_Template, 6, 0, "section", 13)(18, TourismDetailComponent_Conditional_1_Conditional_18_Template, 9, 7, "section", 14)(19, TourismDetailComponent_Conditional_1_Conditional_19_Template, 7, 2, "section", 15)(20, TourismDetailComponent_Conditional_1_Conditional_20_Template, 8, 0, "section", 16)(21, TourismDetailComponent_Conditional_1_Conditional_21_Template, 7, 3, "section", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", "url(" + (ctx_r0.place().coverImage || "") + ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2190 ", \u0275\u0275pipeBind1(5, 13, "TOURISM.TITLE"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.place().locationType);
    \u0275\u0275advance();
    \u0275\u0275conditional(9, ctx_r0.place().isFeatured ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.t(ctx_r0.place().name));
    \u0275\u0275advance();
    \u0275\u0275conditional(12, ((tmp_6_0 = ctx_r0.place().location) == null ? null : tmp_6_0.city) ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(15, ctx_r0.t(ctx_r0.place().fullArticle) ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(17, ((tmp_8_0 = ctx_r0.place().photos) == null ? null : tmp_8_0.length) > 0 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(18, ctx_r0.place().practicalInfo ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(19, ctx_r0.mapCoords() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(20, ((tmp_11_0 = ctx_r0.place().nearbyCooperatives) == null ? null : tmp_11_0.length) > 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, ((tmp_12_0 = ctx_r0.place().relatedPlaces) == null ? null : tmp_12_0.length) > 0 ? 21 : -1);
  }
}
function TourismDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2, "\u{1F30D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Lieu introuvable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Ce lieu n'existe pas ou n'est plus disponible.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 46);
    \u0275\u0275text(8, "\u2190 Retour au tourisme");
    \u0275\u0275elementEnd()();
  }
}
function TourismDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div", 48);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de la destination\u2026");
    \u0275\u0275elementEnd()();
  }
}
function TourismDetailComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function TourismDetailComponent_Conditional_4_Conditional_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.lbNav(-1, $event));
    });
    \u0275\u0275text(1, "\u2039");
    \u0275\u0275elementEnd();
  }
}
function TourismDetailComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function TourismDetailComponent_Conditional_4_Conditional_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.lbNav(1, $event));
    });
    \u0275\u0275text(1, "\u203A");
    \u0275\u0275elementEnd();
  }
}
function TourismDetailComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.t((tmp_2_0 = ctx_r0.place()) == null ? null : (tmp_2_0 = tmp_2_0.photos[ctx_r0.lightboxIdx()]) == null ? null : tmp_2_0.caption));
  }
}
function TourismDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function TourismDetailComponent_Conditional_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeLightbox());
    });
    \u0275\u0275elementStart(1, "button", 50);
    \u0275\u0275listener("click", function TourismDetailComponent_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeLightbox());
    });
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TourismDetailComponent_Conditional_4_Conditional_3_Template, 2, 0, "button", 51)(4, TourismDetailComponent_Conditional_4_Conditional_4_Template, 2, 0, "button", 52);
    \u0275\u0275elementStart(5, "div", 53);
    \u0275\u0275listener("click", function TourismDetailComponent_Conditional_4_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(6, "img", 35);
    \u0275\u0275template(7, TourismDetailComponent_Conditional_4_Conditional_7_Template, 2, 1, "p", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 55);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r0.lightboxIdx() > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r0.lightboxIdx() < (((tmp_2_0 = ctx_r0.place()) == null ? null : tmp_2_0.photos == null ? null : tmp_2_0.photos.length) || 0) - 1 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (tmp_3_0 = ctx_r0.place()) == null ? null : (tmp_3_0 = tmp_3_0.photos[ctx_r0.lightboxIdx()]) == null ? null : tmp_3_0.url, \u0275\u0275sanitizeUrl)("alt", ctx_r0.t((tmp_4_0 = ctx_r0.place()) == null ? null : (tmp_4_0 = tmp_4_0.photos[ctx_r0.lightboxIdx()]) == null ? null : tmp_4_0.caption) || "");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r0.t((tmp_5_0 = ctx_r0.place()) == null ? null : (tmp_5_0 = tmp_5_0.photos[ctx_r0.lightboxIdx()]) == null ? null : tmp_5_0.caption) ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.lightboxIdx() + 1, " / ", (tmp_6_0 = ctx_r0.place()) == null ? null : tmp_6_0.photos == null ? null : tmp_6_0.photos.length, "");
  }
}
var TourismDetailComponent = class _TourismDetailComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.lang = inject(LanguageService);
    this.sanitizer = inject(DomSanitizer);
    this.place = signal(null);
    this.notFound = signal(false);
    this.lightboxIdx = signal(null);
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug) {
      this.api.get(`/tourism/${slug}`).subscribe({
        next: (r) => this.place.set(r.data),
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
  mapCoords() {
    const coords = this.place()?.location?.coordinates?.coordinates;
    if (coords && coords.length === 2)
      return [coords[1], coords[0]];
    return null;
  }
  mapUrl() {
    const c = this.mapCoords();
    if (!c)
      return null;
    const [lat, lng] = c;
    const url = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.02},${lat - 0.02},${lng + 0.02},${lat + 0.02}&layer=mapnik&marker=${lat},${lng}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  osmLink() {
    const c = this.mapCoords();
    if (!c)
      return "";
    const [lat, lng] = c;
    return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`;
  }
  openLightbox(idx) {
    this.lightboxIdx.set(idx);
  }
  closeLightbox() {
    this.lightboxIdx.set(null);
  }
  lbNav(delta, e) {
    e.stopPropagation();
    const current = this.lightboxIdx();
    const max = (this.place()?.photos?.length || 0) - 1;
    const next = current + delta;
    if (next >= 0 && next <= max)
      this.lightboxIdx.set(next);
  }
  static {
    this.\u0275fac = function TourismDetailComponent_Factory(t) {
      return new (t || _TourismDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TourismDetailComponent, selectors: [["app-tourism-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[1, "tourism-detail"], [1, "lightbox"], [1, "detail-cover"], [1, "cover-overlay"], [1, "container"], ["routerLink", "/tourism", 1, "back-link"], [1, "cover-meta"], [1, "loc-type-badge"], [1, "feat-badge"], [1, "location-badge"], [1, "container", "detail-body"], [1, "article-text"], [3, "innerHTML"], [1, "photo-gallery"], [1, "practical-info"], [1, "map-section"], [1, "nearby-coops"], [1, "related-places"], [1, "region-txt"], [1, "gallery-grid"], [1, "gallery-item"], [1, "gallery-item", 3, "click"], ["loading", "lazy", 3, "src", "alt"], [1, "gallery-overlay"], [1, "info-grid"], [1, "info-item"], [1, "info-item", "info-item--full"], [1, "info-icon"], [1, "map-wrap"], ["width", "100%", "height", "350", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0", "border-radius", "12px", 3, "src"], ["target", "_blank", "rel", "noopener", 1, "osm-link", 3, "href"], [1, "nearby-sub"], [1, "coops-grid"], [1, "coop-card", 3, "routerLink"], [1, "coop-logo"], [3, "src", "alt"], [1, "coop-info"], [1, "coop-logo-ph"], [1, "related-grid"], [1, "related-card", 3, "routerLink"], [1, "related-img-wrap"], [1, "related-type"], [1, "related-name"], [1, "related-ph"], [1, "not-found"], [1, "nf-icon"], ["routerLink", "/tourism", 1, "btn-back"], [1, "page-loader"], [1, "loader-ring"], [1, "lightbox", 3, "click"], [1, "lb-close", 3, "click"], [1, "lb-nav", "lb-prev"], [1, "lb-nav", "lb-next"], [1, "lb-content", 3, "click"], [1, "lb-caption"], [1, "lb-counter"], [1, "lb-nav", "lb-prev", 3, "click"], [1, "lb-nav", "lb-next", 3, "click"]], template: function TourismDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "article", 0);
        \u0275\u0275template(1, TourismDetailComponent_Conditional_1_Template, 22, 15)(2, TourismDetailComponent_Conditional_2_Template, 9, 0)(3, TourismDetailComponent_Conditional_3_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, TourismDetailComponent_Conditional_4_Template, 10, 7, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.place() ? 1 : ctx.notFound() ? 2 : 3);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(4, ctx.lightboxIdx() !== null ? 4 : -1);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.tourism-detail[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\n.detail-cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 480px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--bg-tertiary);\n}\n.cover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.78) 0%,\n      rgba(0, 0, 0, 0.2) 50%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n}\n.cover-overlay[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-bottom: 2.5rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.75);\n  text-decoration: none;\n  display: inline-block;\n  margin-bottom: 0.75rem;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.cover-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.loc-type-badge[_ngcontent-%COMP%], .feat-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.7rem;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.loc-type-badge[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.7);\n  color: #fff;\n  text-transform: capitalize;\n}\n.feat-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  color: #ffd700;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 900;\n  color: #fff;\n  margin: 0 0 0.5rem;\n}\n.location-badge[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(255, 255, 255, 0.8);\n}\n.region-txt[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.detail-body[_ngcontent-%COMP%] {\n  padding: 2.5rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  max-width: 960px;\n  margin: 0 auto;\n}\n.article-text[_ngcontent-%COMP%] {\n  font-size: 0.96rem;\n  line-height: 1.9;\n  color: var(--text-secondary);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 1.25rem;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.75rem;\n}\n.gallery-item[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 4/3;\n  overflow: hidden;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.gallery-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.gallery-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.gallery-item[_ngcontent-%COMP%]:hover   .gallery-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.info-item[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 1rem;\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.info-item--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n}\n.info-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-primary);\n}\n.map-wrap[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 0.875rem;\n}\n.osm-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.85rem;\n  color: #27ae60;\n  text-decoration: none;\n  font-weight: 600;\n}\n.osm-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.nearby-sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin: -0.75rem 0 1.25rem;\n}\n.coops-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.coop-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 1rem;\n  text-decoration: none;\n  transition: box-shadow 0.2s, transform 0.2s;\n  align-items: flex-start;\n}\n.coop-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.coop-logo[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 10px;\n  overflow: hidden;\n  flex-shrink: 0;\n  background: var(--bg-tertiary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.coop-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.coop-logo-ph[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.coop-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.coop-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.coop-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.coop-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n}\n.related-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n  padding-bottom: 0.625rem;\n  scrollbar-width: thin;\n}\n.related-card[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 175px;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.related-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 175px;\n  height: 120px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.related-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.related-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.related-ph[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: var(--bg-tertiary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n.related-type[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.375rem;\n  left: 0.375rem;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 0.15rem 0.45rem;\n  border-radius: 5px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.related-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.not-found[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 5rem 2rem;\n  text-align: center;\n}\n.nf-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.btn-back[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.5rem;\n  background: #27ae60;\n  color: #fff;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: 700;\n}\n.page-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 6rem 2rem;\n}\n.loader-ring[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 4px solid var(--card-border);\n  border-top-color: #27ae60;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.page-loader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.93);\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lb-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(255, 255, 255, 0.12);\n  border: none;\n  color: #fff;\n  font-size: 1.25rem;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 2;\n}\n.lb-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.12);\n  border: none;\n  color: #fff;\n  font-size: 2rem;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 2;\n  transition: background 0.2s;\n}\n.lb-nav[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n.lb-prev[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n.lb-next[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n.lb-content[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.lb-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 78vh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.lb-caption[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 0.85rem;\n  text-align: center;\n}\n.lb-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.8rem;\n}\n@media (max-width: 768px) {\n  .detail-cover[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .detail-body[_ngcontent-%COMP%] {\n    padding: 1.75rem 1rem;\n  }\n  .gallery-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .coops-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=tourism-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TourismDetailComponent, { className: "TourismDetailComponent", filePath: "src\\app\\features\\client\\tourism\\tourism-detail.component.ts", lineNumber: 297 });
})();
export {
  TourismDetailComponent
};
//# sourceMappingURL=chunk-LP2YILMQ.js.map
