import {
  ThemeService
} from "./chunk-JRQKPO2B.js";
import {
  CartService
} from "./chunk-WWFTIXOC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JXVZJL7I.js";
import {
  AuthService
} from "./chunk-SCCTXVTR.js";
import {
  LanguageService
} from "./chunk-XFLHW3ED.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet
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
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  inject,
  of,
  signal,
  switchMap,
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
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
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

// src/app/features/client/layout/navbar/navbar.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.code;
var _forTrack2 = ($index, $item) => $item._id;
var _c0 = () => ["/search"];
var _c1 = (a0) => ({ q: a0 });
var _c2 = (a0) => ["/marketplace", a0];
var _c3 = (a0) => ["/annuaire", a0];
var _c4 = (a0) => ["/tourism", a0];
var _c5 = (a0) => ["/blog", a0];
function NavbarComponent_For_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36);
    \u0275\u0275element(1, "path", 37);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 35);
    \u0275\u0275listener("click", function NavbarComponent_For_14_Template_a_click_1_listener($event) {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleNavClick(link_r2, $event));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275template(4, NavbarComponent_For_14_Conditional_4_Template, 2, 0, ":svg:svg", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.isActive(link_r2))("external", link_r2.openNewTab);
    \u0275\u0275property("href", link_r2.route, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, link_r2.i18nKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, link_r2.openNewTab ? 4 : -1);
  }
}
function NavbarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "circle", 39)(3, "path", 40);
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_1_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", p_r8.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r2.t(p_r8.name));
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_1_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "\u{1F6CD}\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 52);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_17_Conditional_8_Conditional_1_For_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.closeSearch());
    });
    \u0275\u0275template(1, NavbarComponent_Conditional_17_Conditional_8_Conditional_1_For_4_Conditional_1_Template, 1, 2, "img", 53)(2, NavbarComponent_Conditional_17_Conditional_8_Conditional_1_For_4_Conditional_2_Template, 2, 0);
    \u0275\u0275elementStart(3, "div", 54)(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c2, p_r8.slug));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, p_r8.coverImage ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.t(p_r8.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 4, p_r8.price, "1.0-0"), " MAD");
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 50);
    \u0275\u0275text(2, "\u{1F6CD}\uFE0F Produits");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, NavbarComponent_Conditional_17_Conditional_8_Conditional_1_For_4_Template, 9, 9, "a", 51, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.searchResults().products);
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_2_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const a_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", a_r10.logo, \u0275\u0275sanitizeUrl)("alt", a_r10.structureName);
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_2_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "\u{1F3FA}");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 52);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_17_Conditional_8_Conditional_2_For_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.closeSearch());
    });
    \u0275\u0275template(1, NavbarComponent_Conditional_17_Conditional_8_Conditional_2_For_4_Conditional_1_Template, 1, 2, "img", 53)(2, NavbarComponent_Conditional_17_Conditional_8_Conditional_2_For_4_Conditional_2_Template, 2, 0);
    \u0275\u0275elementStart(3, "div", 54)(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c3, a_r10.slug));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, a_r10.logo ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r10.structureName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((a_r10.contact == null ? null : a_r10.contact.city) || "");
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 50);
    \u0275\u0275text(2, "\u{1F3FA} Annuaire");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, NavbarComponent_Conditional_17_Conditional_8_Conditional_2_For_4_Template, 8, 6, "a", 51, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.searchResults().annuaire);
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_3_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", p_r12.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r2.t(p_r12.name));
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_3_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "\u{1F30D}");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 52);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_17_Conditional_8_Conditional_3_For_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.closeSearch());
    });
    \u0275\u0275template(1, NavbarComponent_Conditional_17_Conditional_8_Conditional_3_For_4_Conditional_1_Template, 1, 2, "img", 53)(2, NavbarComponent_Conditional_17_Conditional_8_Conditional_3_For_4_Conditional_2_Template, 2, 0);
    \u0275\u0275elementStart(3, "div", 54)(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c4, p_r12.slug));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, p_r12.coverImage ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.t(p_r12.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.locationType);
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 50);
    \u0275\u0275text(2, "\u{1F30D} Tourisme");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, NavbarComponent_Conditional_17_Conditional_8_Conditional_3_For_4_Template, 8, 6, "a", 51, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.searchResults().tourism);
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_4_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const b_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", b_r14.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r2.t(b_r14.title));
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_4_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "\u{1F4F0}");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 52);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_17_Conditional_8_Conditional_4_For_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.closeSearch());
    });
    \u0275\u0275template(1, NavbarComponent_Conditional_17_Conditional_8_Conditional_4_For_4_Conditional_1_Template, 1, 2, "img", 53)(2, NavbarComponent_Conditional_17_Conditional_8_Conditional_4_For_4_Conditional_2_Template, 2, 0);
    \u0275\u0275elementStart(3, "div", 54)(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c5, b_r14.slug));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, b_r14.coverImage ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.t(b_r14.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r14.category);
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 50);
    \u0275\u0275text(2, "\u{1F4F0} Articles");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, NavbarComponent_Conditional_17_Conditional_8_Conditional_4_For_4_Template, 8, 6, "a", 51, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.searchResults().blogs);
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Aucun r\xE9sultat pour \xAB ", ctx_r2.searchQuery, " \xBB");
  }
}
function NavbarComponent_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, NavbarComponent_Conditional_17_Conditional_8_Conditional_1_Template, 5, 0, "div", 47)(2, NavbarComponent_Conditional_17_Conditional_8_Conditional_2_Template, 5, 0, "div", 47)(3, NavbarComponent_Conditional_17_Conditional_8_Conditional_3_Template, 5, 0, "div", 47)(4, NavbarComponent_Conditional_17_Conditional_8_Conditional_4_Template, 5, 0, "div", 47)(5, NavbarComponent_Conditional_17_Conditional_8_Conditional_5_Template, 2, 1, "div", 48);
    \u0275\u0275elementStart(6, "a", 49);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_17_Conditional_8_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeSearch());
    });
    \u0275\u0275text(7, " Voir tous les r\xE9sultats \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ((tmp_2_0 = ctx_r2.searchResults().products) == null ? null : tmp_2_0.length) > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ((tmp_3_0 = ctx_r2.searchResults().annuaire) == null ? null : tmp_3_0.length) > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ((tmp_4_0 = ctx_r2.searchResults().tourism) == null ? null : tmp_4_0.length) > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ((tmp_5_0 = ctx_r2.searchResults().blogs) == null ? null : tmp_5_0.length) > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ((tmp_6_0 = ctx_r2.searchResults().products) == null ? null : tmp_6_0.length) === 0 && ((tmp_6_0 = ctx_r2.searchResults().annuaire) == null ? null : tmp_6_0.length) === 0 && ((tmp_6_0 = ctx_r2.searchResults().tourism) == null ? null : tmp_6_0.length) === 0 && ((tmp_6_0 = ctx_r2.searchResults().blogs) == null ? null : tmp_6_0.length) === 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0))("queryParams", \u0275\u0275pureFunction1(8, _c1, ctx_r2.searchQuery));
  }
}
function NavbarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 42);
    \u0275\u0275element(2, "circle", 39)(3, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_Conditional_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NavbarComponent_Conditional_17_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearchInput());
    })("keyup.enter", function NavbarComponent_Conditional_17_Template_input_keyup_enter_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, NavbarComponent_Conditional_17_Conditional_5_Template, 1, 0, "span", 44);
    \u0275\u0275elementStart(6, "button", 45);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSearch());
    });
    \u0275\u0275text(7, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, NavbarComponent_Conditional_17_Conditional_8_Template, 8, 10, "div", 46);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx_r2.searchLoading() ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(8, ctx_r2.searchResults() && ctx_r2.searchQuery.length >= 2 ? 8 : -1);
  }
}
function NavbarComponent_Conditional_19_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 66);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_19_Conditional_7_Conditional_4_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.isUserMenuOpen.set(false));
    });
    \u0275\u0275text(2, "\u{1F527} Administration");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_Conditional_19_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 67);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_19_Conditional_7_Conditional_5_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.isUserMenuOpen.set(false));
    });
    \u0275\u0275text(2, "\u{1F4CA} Espace Pro");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_Conditional_19_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 62)(1, "li")(2, "a", 63);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_19_Conditional_7_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.isUserMenuOpen.set(false));
    });
    \u0275\u0275text(3, "\u{1F464} Mon profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, NavbarComponent_Conditional_19_Conditional_7_Conditional_4_Template, 3, 0, "li")(5, NavbarComponent_Conditional_19_Conditional_7_Conditional_5_Template, 3, 0, "li");
    \u0275\u0275element(6, "li", 64);
    \u0275\u0275elementStart(7, "li")(8, "button", 65);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_19_Conditional_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.auth.logout());
    });
    \u0275\u0275text(9, "\u{1F6AA} D\xE9connexion");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, ctx_r2.auth.isAdmin() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx_r2.auth.isPro() ? 5 : -1);
  }
}
function NavbarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_19_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleUserMenu($event));
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 61);
    \u0275\u0275element(6, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NavbarComponent_Conditional_19_Conditional_7_Template, 10, 2, "ul", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r2.isUserMenuOpen());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.userInitials());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((((tmp_3_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_3_0.fullName) || "Profil").split(" ")[0]);
    \u0275\u0275advance();
    \u0275\u0275classProp("flipped", ctx_r2.isUserMenuOpen());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, ctx_r2.isUserMenuOpen() ? 7 : -1);
  }
}
function NavbarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "a", 69);
    \u0275\u0275text(2, "Connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 70);
    \u0275\u0275text(4, "S'inscrire");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_Conditional_30_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 74);
    \u0275\u0275element(1, "path", 75);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 72);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_30_For_2_Template_li_click_0_listener() {
      const lang_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectLang(lang_r20.code));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, NavbarComponent_Conditional_30_For_2_Conditional_5_Template, 2, 0, ":svg:svg", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", lang_r20.code === ctx_r2.currentLang());
    \u0275\u0275attribute("aria-selected", lang_r20.code === ctx_r2.currentLang());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lang_r20.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lang_r20.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, lang_r20.code === ctx_r2.currentLang() ? 5 : -1);
  }
}
function NavbarComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 20);
    \u0275\u0275repeaterCreate(1, NavbarComponent_Conditional_30_For_2_Template, 6, 6, "li", 71, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.languages);
  }
}
function NavbarComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "circle", 76)(2, "path", 77);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "path", 78);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.cart.itemCount());
  }
}
function NavbarComponent_For_49_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1, "\u2197");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 35);
    \u0275\u0275listener("click", function NavbarComponent_For_49_Template_a_click_1_listener($event) {
      const link_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleNavClick(link_r22, $event));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275template(4, NavbarComponent_For_49_Conditional_4_Template, 2, 0, "span", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.isActive(link_r22))("external", link_r22.openNewTab);
    \u0275\u0275property("href", link_r22.route, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, link_r22.i18nKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, link_r22.openNewTab ? 4 : -1);
  }
}
function NavbarComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function NavbarComponent_For_53_Template_button_click_0_listener() {
      const lang_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectLang(lang_r24.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", lang_r24.code === ctx_r2.currentLang());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", lang_r24.flag, " ", lang_r24.nativeLabel, " ");
  }
}
function NavbarComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2600\uFE0F Mode Clair ");
  }
}
function NavbarComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F319} Mode Sombre ");
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.themeService = inject(ThemeService);
    this.langService = inject(LanguageService);
    this.router = inject(Router);
    this.api = inject(ApiService);
    this.auth = inject(AuthService);
    this.cart = inject(CartService);
    this.isDarkMode = this.themeService.isDarkMode;
    this.currentLang = this.langService.current;
    this.langInfo = this.langService.currentInfo;
    this.languages = this.langService.languages;
    this.isRTL = this.langService.isRTL;
    this.isScrolled = signal(false);
    this.isMobileOpen = signal(false);
    this.isLangOpen = signal(false);
    this.currentUrl = signal("");
    this.isSearchOpen = signal(false);
    this.isUserMenuOpen = signal(false);
    this.searchQuery = "";
    this.searchResults = signal(null);
    this.searchLoading = signal(false);
    this.search$ = new Subject();
    this.navLinks = [
      { key: "home", i18nKey: "NAV.HOME", route: "/", exact: true, openNewTab: false },
      { key: "about", i18nKey: "NAV.ABOUT", route: "/about", exact: false, openNewTab: false },
      { key: "services", i18nKey: "NAV.SERVICES", route: "/services", exact: false, openNewTab: false },
      { key: "blog", i18nKey: "NAV.BLOG", route: "/blog", exact: false, openNewTab: false },
      // Boutique & Tourisme s'ouvrent dans un nouvel onglet
      { key: "marketplace", i18nKey: "NAV.MARKETPLACE", route: "/marketplace", exact: false, openNewTab: true },
      { key: "tourism", i18nKey: "NAV.TOURISM", route: "/tourism", exact: false, openNewTab: true },
      { key: "faq", i18nKey: "NAV.FAQ", route: "/faq", exact: false, openNewTab: false }
    ];
  }
  ngOnInit() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.currentUrl.set(e.urlAfterRedirects);
      this.isMobileOpen.set(false);
      this.closeSearch();
    });
    this.currentUrl.set(this.router.url);
    this.search$.pipe(debounceTime(350), distinctUntilChanged(), switchMap((q) => {
      if (q.length < 2) {
        this.searchResults.set(null);
        return of(null);
      }
      this.searchLoading.set(true);
      return this.api.get("/search", { q, limit: 4 });
    })).subscribe({
      next: (res) => {
        this.searchLoading.set(false);
        if (res)
          this.searchResults.set(res.data);
      },
      error: () => {
        this.searchLoading.set(false);
      }
    });
  }
  // ── Scroll listener ──────────────────────────────────────
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }
  // ── Close on outside click ───────────────────────────────
  onDocClick(e) {
    const target = e.target;
    if (!target.closest(".lang-selector"))
      this.isLangOpen.set(false);
    if (!target.closest(".search-wrapper")) {
      this.searchResults.set(null);
    }
    if (!target.closest(".auth-user"))
      this.isUserMenuOpen.set(false);
    if (!target.closest(".navbar") && this.isMobileOpen())
      this.isMobileOpen.set(false);
  }
  onEscape() {
    this.closeSearch();
  }
  // ── Public actions ────────────────────────────────────────
  toggleTheme() {
    this.themeService.toggle();
  }
  toggleMobile() {
    this.isMobileOpen.update((v) => !v);
  }
  toggleLang(e) {
    e.stopPropagation();
    this.isLangOpen.update((v) => !v);
  }
  toggleUserMenu(e) {
    e.stopPropagation();
    this.isUserMenuOpen.update((v) => !v);
  }
  userInitials() {
    const u = this.auth.currentUser();
    if (!u)
      return "?";
    const parts = (u.fullName || "").trim().split(" ");
    return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase() || u.email?.[0]?.toUpperCase() || "?";
  }
  // ── Search actions ────────────────────────────────────────
  openSearch() {
    this.isSearchOpen.set(true);
  }
  closeSearch() {
    this.isSearchOpen.set(false);
    this.searchQuery = "";
    this.searchResults.set(null);
  }
  onSearchInput() {
    this.search$.next(this.searchQuery);
  }
  goSearch() {
    if (!this.searchQuery.trim())
      return;
    this.router.navigate(["/search"], { queryParams: { q: this.searchQuery.trim() } });
    this.closeSearch();
  }
  t(f) {
    if (!f)
      return "";
    const l = this.langService.current();
    return f[l] || f["fr"] || "";
  }
  selectLang(lang) {
    this.langService.set(lang);
    this.isLangOpen.set(false);
  }
  handleNavClick(link, e) {
    if (link.openNewTab) {
      e.preventDefault();
      window.open(link.route, "_blank", "noopener,noreferrer");
    } else {
      this.router.navigateByUrl(link.route);
    }
    this.isMobileOpen.set(false);
  }
  isActive(link) {
    const url = this.currentUrl();
    return link.exact ? url === link.route : url.startsWith(link.route) && link.route !== "/";
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow)("click", function NavbarComponent_click_HostBindingHandler($event) {
          return ctx.onDocClick($event);
        }, false, \u0275\u0275resolveDocument)("keydown.escape", function NavbarComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 40, consts: [[1, "navbar"], [1, "navbar-container"], ["routerLink", "/", 1, "brand", 3, "click"], ["src", "assets/logo/logo1-1.png", "alt", "KENZ BLADI \u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A", 1, "brand-logo"], [1, "brand-text"], [1, "brand-ar"], [1, "brand-fr"], [1, "brand-subtitle"], ["role", "menubar", 1, "nav-links"], ["role", "none"], [1, "search-wrapper"], ["title", "Rechercher", "aria-label", "Ouvrir la recherche", 1, "search-icon-btn"], [1, "controls"], [1, "auth-user", 3, "open"], ["role", "combobox", 1, "lang-selector"], [1, "lang-btn", 3, "click"], [1, "lang-flag"], [1, "lang-code"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "chevron"], ["d", "M6 9L12 15L18 9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["role", "listbox", 1, "lang-dropdown"], [1, "theme-toggle", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], [1, "hamburger", 3, "click"], ["title", "Panier", "aria-label", "Ouvrir le panier", 1, "cart-toggle", 3, "click"], ["cx", "9", "cy", "21", "r", "1", "stroke", "currentColor", "stroke-width", "2"], ["cx", "20", "cy", "21", "r", "1", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 1H5L7.68 14.39A2 2 0 0 0 9.66 16H19.4A2 2 0 0 0 21.38 14.39L23 6H6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "cart-badge"], ["role", "dialog", 1, "mobile-menu"], ["role", "menu"], [1, "mobile-controls"], [1, "mobile-langs"], [3, "active"], [1, "mobile-theme-btn", 3, "click"], ["role", "menuitem", 3, "click", "href"], ["viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", 1, "ext-icon"], ["d", "M2 10L10 2M10 2H5M10 2V7", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["title", "Rechercher", "aria-label", "Ouvrir la recherche", 1, "search-icon-btn", 3, "click"], ["cx", "11", "cy", "11", "r", "8", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 21L16.65 16.65", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "search-box"], ["viewBox", "0 0 24 24", "fill", "none", 1, "search-ico"], ["placeholder", "Rechercher produits, artisans, lieux\u2026", "autofocus", "", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "search-spinner"], ["aria-label", "Fermer", 1, "search-close", 3, "click"], [1, "search-dropdown"], [1, "sd-section"], [1, "sd-empty"], [1, "sd-all", 3, "click", "routerLink", "queryParams"], [1, "sd-label"], [1, "sd-item", 3, "routerLink"], [1, "sd-item", 3, "click", "routerLink"], [3, "src", "alt"], [1, "sd-info"], [1, "sd-name"], [1, "sd-meta"], [1, "sd-img-ph"], [1, "auth-user", 3, "click"], [1, "auth-avatar"], [1, "auth-name"], ["viewBox", "0 0 24 24", "fill", "none", 1, "chevron"], [1, "user-dropdown"], ["routerLink", "/profile", 3, "click"], [1, "divider"], [1, "logout-btn", 3, "click"], ["routerLink", "/admin", 3, "click"], ["routerLink", "/pro", 3, "click"], [1, "auth-links"], ["routerLink", "/auth/login", 1, "btn-login"], ["routerLink", "/auth/register", 1, "btn-register"], ["role", "option", 3, "selected"], ["role", "option", 3, "click"], [1, "lang-label"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "check"], ["d", "M5 13L9 17L19 7", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "5", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2V4M12 20V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H4M20 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "badge-new-tab"], [3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_2_listener() {
          return ctx.isMobileOpen.set(false);
        });
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "\u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "KENZ BLADI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "ul", 8);
        \u0275\u0275repeaterCreate(13, NavbarComponent_For_14_Template, 5, 9, "li", 9, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275template(16, NavbarComponent_Conditional_16_Template, 4, 0, "button", 11)(17, NavbarComponent_Conditional_17_Template, 9, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 12);
        \u0275\u0275template(19, NavbarComponent_Conditional_19_Template, 8, 7, "div", 13)(20, NavbarComponent_Conditional_20_Template, 5, 0);
        \u0275\u0275elementStart(21, "div", 14)(22, "button", 15);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_22_listener($event) {
          return ctx.toggleLang($event);
        });
        \u0275\u0275elementStart(24, "span", 16);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 17);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 18);
        \u0275\u0275element(29, "path", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, NavbarComponent_Conditional_30_Template, 3, 0, "ul", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "button", 21);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_31_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275template(33, NavbarComponent_Conditional_33_Template, 3, 0, ":svg:svg", 22)(34, NavbarComponent_Conditional_34_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 23);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_35_listener() {
          return ctx.toggleMobile();
        });
        \u0275\u0275element(37, "span")(38, "span")(39, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 24);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_40_listener() {
          return ctx.cart.toggleCart();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 22);
        \u0275\u0275element(42, "circle", 25)(43, "circle", 26)(44, "path", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, NavbarComponent_Conditional_45_Template, 2, 1, "span", 28);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(46, "div", 29)(47, "ul", 30);
        \u0275\u0275repeaterCreate(48, NavbarComponent_For_49_Template, 5, 9, "li", 9, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 31)(51, "div", 32);
        \u0275\u0275repeaterCreate(52, NavbarComponent_For_53_Template, 2, 4, "button", 33, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 34);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_54_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275template(55, NavbarComponent_Conditional_55_Template, 1, 0)(56, NavbarComponent_Conditional_56_Template, 1, 0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("scrolled", ctx.isScrolled())("mobile-open", ctx.isMobileOpen())("rtl", ctx.isRTL());
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 32, "NAV.SUBTITLE"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.navLinks);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("open", ctx.isSearchOpen());
        \u0275\u0275advance();
        \u0275\u0275conditional(16, !ctx.isSearchOpen() ? 16 : 17);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(19, ctx.auth.isLoggedIn() ? 19 : 20);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("open", ctx.isLangOpen());
        \u0275\u0275attribute("aria-expanded", ctx.isLangOpen());
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 34, "NAV.TOGGLE_MENU"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.langInfo().flag);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.langInfo().nativeLabel);
        \u0275\u0275advance();
        \u0275\u0275classProp("flipped", ctx.isLangOpen());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(30, ctx.isLangOpen() ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(32, 36, "NAV.TOGGLE_THEME"))("aria-pressed", ctx.isDarkMode());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(33, ctx.isDarkMode() ? 33 : 34);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.isMobileOpen());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(36, 38, "NAV.TOGGLE_MENU"))("aria-expanded", ctx.isMobileOpen());
        \u0275\u0275advance(10);
        \u0275\u0275conditional(45, ctx.cart.itemCount() > 0 ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.isMobileOpen());
        \u0275\u0275attribute("aria-hidden", !ctx.isMobileOpen());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.navLinks);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.languages);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(55, ctx.isDarkMode() ? 55 : 56);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink, TranslateModule, TranslatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  inset-inline: 0;\n  z-index: 1000;\n  height: 72px;\n  background: var(--nav-bg, rgba(255, 255, 255, 0.95));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--nav-border, rgba(0, 0, 0, 0.08));\n  transition:\n    height 0.25s ease,\n    box-shadow 0.25s ease,\n    background 0.25s ease;\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  height: 60px;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n  background: var(--nav-bg-scrolled, rgba(255, 255, 255, 0.98));\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .navbar[_ngcontent-%COMP%] {\n  --nav-bg: rgba(18, 18, 18, 0.95);\n  --nav-bg-scrolled: rgba(18, 18, 18, 0.99);\n  --nav-border: rgba(255, 255, 255, 0.08);\n  --nav-text: #f0f0f0;\n  --nav-link-hover: #d4af6a;\n  --nav-active: #d4af6a;\n}\n[_ngcontent-%COMP%]:root[data-theme=light]   .navbar[_ngcontent-%COMP%] {\n  --nav-bg: rgba(255, 255, 255, 0.95);\n  --nav-bg-scrolled: rgba(255, 255, 255, 0.99);\n  --nav-border: rgba(0, 0, 0, 0.08);\n  --nav-text: #2c2c2c;\n  --nav-link-hover: #8B4513;\n  --nav-active: #8B4513;\n}\n.navbar-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  text-decoration: none;\n  flex-shrink: 0;\n  transition: opacity 0.25s ease;\n}\n.brand[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 48px;\n  object-fit: contain;\n  transition: height 0.25s ease;\n}\n.scrolled[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.brand[_ngcontent-%COMP%]   .brand-ar[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--nav-active, #8B4513);\n  font-family:\n    "Amiri",\n    "Cairo",\n    serif;\n  direction: rtl;\n}\n.brand[_ngcontent-%COMP%]   .brand-fr[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: var(--nav-text, #2c2c2c);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.brand[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: var(--nav-text, #2c2c2c);\n  opacity: 0.6;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n  flex: 1;\n  justify-content: center;\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.5rem 0.75rem;\n  color: var(--nav-text, #2c2c2c);\n  font-size: 0.88rem;\n  font-weight: 500;\n  text-decoration: none;\n  border-radius: 8px;\n  transition: color 0.25s ease, background 0.25s ease;\n  white-space: nowrap;\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--nav-link-hover, #8B4513);\n  background: rgba(139, 69, 19, 0.06);\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--nav-active, #8B4513);\n  font-weight: 700;\n  background: rgba(139, 69, 19, 0.08);\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.external[_ngcontent-%COMP%] {\n  color: var(--nav-active, #8B4513);\n  font-weight: 600;\n}\n.nav-links[_ngcontent-%COMP%]   .ext-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  opacity: 0.7;\n}\n.rtl[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 1024px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n  margin-inline-start: auto;\n}\n.lang-selector[_ngcontent-%COMP%] {\n  position: relative;\n}\n.lang-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.375rem 0.625rem;\n  border: 1px solid var(--nav-border, rgba(0, 0, 0, 0.12));\n  border-radius: 8px;\n  background: transparent;\n  color: var(--nav-text, #2c2c2c);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.25s ease, border-color 0.25s ease;\n}\n.lang-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.06);\n  border-color: var(--nav-active, #8B4513);\n}\n.lang-btn[_ngcontent-%COMP%]   .lang-flag[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.lang-btn[_ngcontent-%COMP%]   .lang-code[_ngcontent-%COMP%] {\n  letter-spacing: 0.05em;\n}\n.lang-btn[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  transition: transform 0.25s ease;\n}\n.lang-btn[_ngcontent-%COMP%]   .chevron.flipped[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.lang-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  inset-inline-start: 0;\n  min-width: 160px;\n  background: var(--surface, #fff);\n  border: 1px solid var(--nav-border, rgba(0, 0, 0, 0.1));\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n  list-style: none;\n  padding: 0.5rem;\n  margin: 0;\n  z-index: 10;\n  animation: _ngcontent-%COMP%_dropIn 0.15s ease;\n}\n.lang-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: var(--nav-text, #2c2c2c);\n  transition: background 0.25s ease;\n}\n.lang-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.06);\n}\n.lang-dropdown[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  color: var(--nav-active, #8B4513);\n  font-weight: 600;\n}\n.lang-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .lang-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lang-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: var(--nav-active, #8B4513);\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .lang-dropdown[_ngcontent-%COMP%] {\n  background: #1e1e1e;\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n@keyframes _ngcontent-%COMP%_dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: 1px solid var(--nav-border, rgba(0, 0, 0, 0.12));\n  background: transparent;\n  color: var(--nav-text, #2c2c2c);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.25s ease,\n    transform 0.25s ease,\n    border-color 0.25s ease;\n}\n.theme-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  transition: transform 0.3s ease;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.08);\n  border-color: var(--nav-active, #8B4513);\n}\n.theme-toggle[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: rotate(20deg);\n}\n.cart-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: 1px solid var(--nav-border, rgba(0, 0, 0, 0.12));\n  background: transparent;\n  color: var(--nav-text, #2c2c2c);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.25s ease,\n    border-color 0.25s ease,\n    transform 0.25s ease;\n}\n.cart-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.cart-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 175, 106, 0.12);\n  border-color: var(--brand-gold, #d4af6a);\n  transform: translateY(-1px);\n}\n.cart-toggle[_ngcontent-%COMP%]   .cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 17px;\n  height: 17px;\n  padding: 0 4px;\n  border-radius: 9px;\n  background: var(--brand-gold, #d4af6a);\n  color: #2c1a05;\n  font-size: 0.65rem;\n  font-weight: 800;\n  line-height: 17px;\n  text-align: center;\n  box-shadow: 0 0 0 2px var(--nav-bg, #fff);\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 38px;\n  height: 38px;\n  background: transparent;\n  border: 1px solid var(--nav-border, rgba(0, 0, 0, 0.12));\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 0 8px;\n  transition: border-color 0.25s ease;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 2px;\n  width: 100%;\n  background: var(--nav-text, #2c2c2c);\n  border-radius: 2px;\n  transition: transform 0.25s ease, opacity 0.25s ease;\n}\n.hamburger.active[_ngcontent-%COMP%] {\n  border-color: var(--nav-active, #8B4513);\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n@media (max-width: 1024px) {\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  background: var(--nav-bg-scrolled, #fff);\n  border-top: 1px solid var(--nav-border, rgba(0, 0, 0, 0.08));\n  padding: 1rem;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease, padding 0.3s ease;\n}\n@media (max-width: 1024px) {\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  color: var(--nav-text, #2c2c2c);\n  font-size: 0.95rem;\n  font-weight: 500;\n  text-decoration: none;\n  border-radius: 8px;\n  transition: background 0.25s ease, color 0.25s ease;\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.06);\n  color: var(--nav-active, #8B4513);\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(139, 69, 19, 0.1);\n  color: var(--nav-active, #8B4513);\n  font-weight: 700;\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge-new-tab[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.6;\n}\n[_ngcontent-%COMP%]:root[data-theme=dark]   .mobile-menu[_ngcontent-%COMP%] {\n  background: #161616;\n}\n.mobile-controls[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--nav-border, rgba(0, 0, 0, 0.08));\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.mobile-langs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.mobile-langs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border-radius: 20px;\n  border: 1px solid var(--nav-border, rgba(0, 0, 0, 0.12));\n  background: transparent;\n  color: var(--nav-text, #2c2c2c);\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.mobile-langs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--nav-active, #8B4513);\n  color: #fff;\n  border-color: var(--nav-active, #8B4513);\n}\n.mobile-theme-btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  border: 1px solid var(--nav-border, rgba(0, 0, 0, 0.12));\n  background: transparent;\n  color: var(--nav-text, #2c2c2c);\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.mobile-theme-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.06);\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--nav-text, #2c2c2c);\n  padding: 6px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  transition: color 0.25s ease, background 0.25s ease;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.08);\n  color: #8B4513;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--card-bg, #fff);\n  border: 1.5px solid #8B4513;\n  border-radius: 10px;\n  padding: 5px 10px;\n  min-width: 280px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-ico[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 0.875rem;\n  color: var(--text-primary, #1a1a1a);\n  min-width: 0;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(139, 69, 19, 0.2);\n  border-top-color: #8B4513;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_navSpin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  padding: 0 2px;\n  flex-shrink: 0;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 0;\n  right: 0;\n  min-width: 320px;\n  background: var(--card-bg, #fff);\n  border: 1px solid var(--card-border, #e8e0d8);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);\n  z-index: 1010;\n  overflow: hidden;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-section[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--card-border, #f0ebe4);\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  padding: 0.25rem 0.875rem 0.375rem;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0.45rem 0.875rem;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #faf7f4);\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-item[_ngcontent-%COMP%]   .sd-img-ph[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 6px;\n  object-fit: cover;\n  flex-shrink: 0;\n  background: var(--bg-tertiary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-item[_ngcontent-%COMP%]   .sd-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-item[_ngcontent-%COMP%]   .sd-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-item[_ngcontent-%COMP%]   .sd-meta[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-empty[_ngcontent-%COMP%] {\n  padding: 1.25rem 0.875rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.83rem;\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-all[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.625rem 0.875rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #8B4513;\n  text-decoration: none;\n  text-align: center;\n  background: var(--bg-secondary, #faf7f4);\n}\n.search-wrapper[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .sd-all[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 640px) {\n  .search-wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n    min-width: 180px;\n  }\n}\n@keyframes _ngcontent-%COMP%_navSpin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.auth-links[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.85rem;\n  border: 1.5px solid var(--card-border, rgba(0, 0, 0, 0.12));\n  border-radius: 8px;\n  background: transparent;\n  color: var(--nav-text, #222);\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: border-color 0.2s, color 0.2s;\n}\n.auth-links[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]:hover {\n  border-color: #8B4513;\n  color: #8B4513;\n}\n.auth-links[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.85rem;\n  background: #8B4513;\n  color: #fff;\n  border: 1.5px solid #8B4513;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.auth-links[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%]:hover {\n  background: #7a3a10;\n}\n.auth-user[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  padding: 0.3rem 0.5rem;\n  border-radius: 10px;\n  transition: background 0.2s;\n}\n.auth-user[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, rgba(0, 0, 0, 0.05));\n}\n.auth-user[_ngcontent-%COMP%]   .auth-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513,\n      #D4AF6A);\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.auth-user[_ngcontent-%COMP%]   .auth-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--nav-text, #222);\n  max-width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.auth-user[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: var(--text-muted, #888);\n  transition: transform 0.2s;\n}\n.auth-user[_ngcontent-%COMP%]   .chevron.flipped[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.auth-user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 185px;\n  background: var(--card-bg, #fff);\n  border: 1px solid var(--card-border, rgba(0, 0, 0, 0.1));\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  list-style: none;\n  margin: 0;\n  padding: 0.375rem 0;\n  z-index: 1001;\n  overflow: hidden;\n}\n.auth-user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.auth-user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .auth-user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.55rem 1rem;\n  font-size: 0.82rem;\n  font-weight: 500;\n  color: var(--text-primary, #222);\n  text-decoration: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s;\n  text-align: left;\n}\n.auth-user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .auth-user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, rgba(0, 0, 0, 0.04));\n}\n.auth-user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   li.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--card-border, rgba(0, 0, 0, 0.08));\n  margin: 0.25rem 0;\n}\n.auth-user[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.rtl[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.rtl[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  margin-inline-start: 0;\n  margin-inline-end: auto;\n}\n.rtl[_ngcontent-%COMP%]   .lang-dropdown[_ngcontent-%COMP%] {\n  inset-inline-start: auto;\n  inset-inline-end: 0;\n}\n.rtl[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0;\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\features\\client\\layout\\navbar\\navbar.component.ts", lineNumber: 30 });
})();

// src/app/core/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 24, consts: [[1, "app-footer"], [1, "container", "footer-grid"], [1, "footer-col", "footer-brand"], ["routerLink", "/", 1, "footer-logo"], ["src", "assets/logo/logo1-1.png", "alt", "KENZ BLADI \u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A"], [1, "footer-brand-text"], [1, "brand-ar"], [1, "brand-fr"], [1, "footer-tagline"], [1, "footer-col"], [1, "footer-links"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/services"], ["routerLink", "/faq"], [1, "footer-contact"], ["viewBox", "0 0 24 24", "fill", "none", "width", "16", "height", "16", "aria-hidden", "true"], ["d", "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 7l9 6 9-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "mailto:contact@kenzbladi.ma"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.44 12.5 19.79 19.79 0 0 1 1.37 3.93a2 2 0 0 1 1.94-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z", "stroke", "currentColor", "stroke-width", "2"], ["href", "tel:+212530000000"], [1, "footer-bottom"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "\u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 7);
        \u0275\u0275text(9, "KENZ BLADI");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 9)(14, "h4");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ul", 10)(18, "li")(19, "a", 11);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li")(23, "a", 12);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "li")(27, "a", 13);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "li")(31, "a", 14);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 9)(35, "h4");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul", 15)(39, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(40, "svg", 16);
        \u0275\u0275element(41, "path", 17)(42, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "a", 19);
        \u0275\u0275text(44, "contact@kenzbladi.ma");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 16);
        \u0275\u0275element(47, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "a", 21);
        \u0275\u0275text(49, "+212 5 30 00 00 00");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(50, "div", 22)(51, "p");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "FOOTER.TAGLINE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 10, "FOOTER.QUICK_LINKS"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 12, "NAV.HOME"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 14, "NAV.ABOUT"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 16, "NAV.SERVICES"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 18, "NAV.FAQ"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 20, "FOOTER.CONTACT"));
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1("\xA9 2026 KENZ BLADI - All in Earth. ", \u0275\u0275pipeBind1(53, 22, "FOOTER.RIGHTS"), "");
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ['\n\n.app-footer[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1512 0%,\n      #0d0a08 100%);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  margin-top: 4rem;\n  color: #e4e4e4;\n}\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 2.5rem;\n  padding: 3rem 1.5rem;\n}\n@media (max-width: 768px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    padding: 2.5rem 1.5rem;\n  }\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #d4af37;\n  margin: 0 0 1rem;\n}\n.footer-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.625rem;\n  text-decoration: none;\n  margin-bottom: 0.875rem;\n}\n.footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: contain;\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 8px;\n  padding: 4px;\n}\n.footer-logo[_ngcontent-%COMP%]   .footer-brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.25;\n}\n.footer-logo[_ngcontent-%COMP%]   .footer-brand-text[_ngcontent-%COMP%]   .brand-ar[_ngcontent-%COMP%] {\n  font-family:\n    "Cairo",\n    "Inter",\n    serif;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.footer-logo[_ngcontent-%COMP%]   .footer-brand-text[_ngcontent-%COMP%]   .brand-fr[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: #d4af37;\n}\n.footer-tagline[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(228, 228, 228, 0.7);\n  line-height: 1.6;\n  max-width: 320px;\n  margin: 0;\n}\n.footer-links[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #e4e4e4;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d4af37;\n  text-decoration: underline;\n}\n.footer-contact[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #e4e4e4;\n}\n.footer-contact[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #d4af37;\n}\n.footer-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #e4e4e4;\n  text-decoration: none;\n}\n.footer-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d4af37;\n  text-decoration: underline;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 1.25rem 1.5rem;\n  text-align: center;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: rgba(228, 228, 228, 0.6);\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\core\\components\\footer\\footer.component.ts", lineNumber: 13 });
})();

// src/app/shared/components/cart-drawer/cart-drawer.component.ts
var _forTrack02 = ($index, $item) => $item.productId;
var _c02 = (a0) => ["/marketplace", a0];
function CartDrawerComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F6CD}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Votre panier est vide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "D\xE9couvrez nos tr\xE9sors artisanaux et ajoutez-les ici");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 10);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_10_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8, "D\xE9couvrir la boutique");
    \u0275\u0275elementEnd()();
  }
}
function CartDrawerComponent_Conditional_11_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", item_r4.coverImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.t(item_r4.name));
  }
}
function CartDrawerComponent_Conditional_11_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "\u{1F6CD}\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function CartDrawerComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 12)(1, "a", 13);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_11_For_2_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275template(2, CartDrawerComponent_Conditional_11_For_2_Conditional_2_Template, 1, 2, "img", 14)(3, CartDrawerComponent_Conditional_11_For_2_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "a", 16);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_11_For_2_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 18)(11, "button", 19);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_11_For_2_Template_button_click_11_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cart.updateQuantity(item_r4.productId, item_r4.quantity - 1));
    });
    \u0275\u0275text(12, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_11_For_2_Template_button_click_15_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cart.updateQuantity(item_r4.productId, item_r4.quantity + 1));
    });
    \u0275\u0275text(16, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 21);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_11_For_2_Template_button_click_17_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cart.removeFromCart(item_r4.productId));
    });
    \u0275\u0275text(18, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c02, item_r4.slug));
    \u0275\u0275advance();
    \u0275\u0275conditional(2, item_r4.coverImage ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c02, item_r4.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.t(item_r4.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 7, item_r4.price, "1.0-0"), " MAD");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r4.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !item_r4.isInfiniteStock && item_r4.quantity >= item_r4.stock);
  }
}
function CartDrawerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275repeaterCreate(1, CartDrawerComponent_Conditional_11_For_2_Template, 19, 14, "li", 12, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.cart.cartItems());
  }
}
function CartDrawerComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 7)(1, "div", 23)(2, "span");
    \u0275\u0275text(3, "Sous-total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkout());
    });
    \u0275\u0275text(8, "Passer la commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 25);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_12_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(10, "Continuer mes achats");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 1, ctx_r1.cart.getTotal(), "1.0-0"), " MAD");
  }
}
var CartDrawerComponent = class _CartDrawerComponent {
  constructor() {
    this.cart = inject(CartService);
    this.lang = inject(LanguageService);
    this.router = inject(Router);
  }
  t(f) {
    if (!f)
      return "";
    const l = this.lang.current();
    return f[l] || f["fr"] || "";
  }
  close() {
    this.cart.isCartOpen.set(false);
  }
  checkout() {
    this.close();
    this.router.navigate(["/checkout"]);
  }
  static {
    this.\u0275fac = function CartDrawerComponent_Factory(t) {
      return new (t || _CartDrawerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartDrawerComponent, selectors: [["app-cart-drawer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 8, consts: [[1, "cart-overlay", 3, "click"], ["role", "dialog", "aria-label", "Panier d'achat", 1, "cart-drawer"], [1, "cart-header"], [1, "cart-count"], ["aria-label", "Fermer le panier", 1, "cart-close", 3, "click"], [1, "cart-body"], [1, "cart-empty"], [1, "cart-footer"], [1, "empty-icon"], [1, "empty-sub"], ["routerLink", "/marketplace", 1, "btn-browse", 3, "click"], [1, "cart-items"], [1, "cart-item"], [1, "ci-thumb", 3, "click", "routerLink"], [3, "src", "alt"], [1, "ci-info"], [1, "ci-name", 3, "click", "routerLink"], [1, "ci-price"], [1, "ci-qty"], ["aria-label", "Diminuer la quantit\xE9", 3, "click"], ["aria-label", "Augmenter la quantit\xE9", 3, "click", "disabled"], ["title", "Retirer du panier", "aria-label", "Retirer du panier", 1, "ci-remove", 3, "click"], [1, "ci-thumb-ph"], [1, "cart-subtotal"], [1, "btn-checkout", 3, "click"], ["routerLink", "/marketplace", 1, "link-continue", 3, "click"]], template: function CartDrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function CartDrawerComponent_Template_div_click_0_listener() {
          return ctx.close();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "aside", 1)(2, "header", 2)(3, "h2");
        \u0275\u0275text(4, "\u{1F6D2} Mon Panier ");
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function CartDrawerComponent_Template_button_click_7_listener() {
          return ctx.close();
        });
        \u0275\u0275text(8, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275template(10, CartDrawerComponent_Conditional_10_Template, 9, 0, "div", 6)(11, CartDrawerComponent_Conditional_11_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, CartDrawerComponent_Conditional_12_Template, 11, 4, "footer", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("open", ctx.cart.isCartOpen());
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.cart.isCartOpen());
        \u0275\u0275attribute("aria-hidden", !ctx.cart.isCartOpen());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("(", ctx.cart.itemCount(), ")");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(10, ctx.cart.cartItems().length === 0 ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(12, ctx.cart.cartItems().length > 0 ? 12 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterModule, RouterLink], styles: [`

.cart-overlay[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(20, 10, 0, 0.55);
  z-index: 1990;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
.cart-overlay.open[_ngcontent-%COMP%] {
  opacity: 1;
  visibility: visible;
}
.cart-drawer[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 420px;
  max-width: 100vw;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  background: var(--surface, #fff);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
}
.cart-drawer.open[_ngcontent-%COMP%] {
  transform: translateX(0);
}
.cart-drawer[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%238B4513' stroke-width='1.5'%3E%3Cpath d='M50 4 L96 50 L50 96 L4 50 Z'/%3E%3Cpath d='M50 4 L50 96 M4 50 L96 50'/%3E%3Cpath d='M24 24 L76 76 M76 24 L24 76'/%3E%3Ccircle cx='50' cy='50' r='18'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 100px 100px;
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}
@media (max-width: 480px) {
  .cart-drawer[_ngcontent-%COMP%] {
    width: 100vw;
  }
}
.cart-header[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 1.5rem 1.5rem 1.25rem;
  background:
    linear-gradient(
      135deg,
      var(--brand-primary, #8B4513),
      #4a2308);
  color: #fff;
}
.cart-header[_ngcontent-%COMP%]::before, .cart-header[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='12' viewBox='0 0 40 12'%3E%3Cg fill='none' stroke='%23d4af6a' stroke-width='1.5'%3E%3Cpath d='M10 1 L19 6 L10 11 L1 6 Z'/%3E%3Cpath d='M30 1 L39 6 L30 11 L21 6 Z'/%3E%3C/g%3E%3Ccircle cx='10' cy='6' r='1.4' fill='%23d4af6a'/%3E%3Ccircle cx='30' cy='6' r='1.4' fill='%23d4af6a'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-size: 40px 12px;
  opacity: 0.85;
}
.cart-header[_ngcontent-%COMP%]::before {
  top: 0;
}
.cart-header[_ngcontent-%COMP%]::after {
  bottom: 0;
  transform: scaleY(-1);
}
.cart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}
.cart-header[_ngcontent-%COMP%]   .cart-count[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--brand-gold, #d4af6a);
}
.cart-close[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}
.cart-close[_ngcontent-%COMP%]:hover {
  background: var(--brand-gold, #d4af6a);
  border-color: var(--brand-gold, #d4af6a);
  color: #2c1a05;
}
.cart-body[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
}
.cart-empty[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.625rem;
  padding: 4rem 2rem;
  height: 100%;
}
.cart-empty[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {
  font-size: 3.5rem;
  opacity: 0.6;
}
.cart-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary, #1a1a1a);
  margin: 0;
}
.cart-empty[_ngcontent-%COMP%]   .empty-sub[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: var(--text-muted, #888);
  max-width: 240px;
}
.cart-empty[_ngcontent-%COMP%]   .btn-browse[_ngcontent-%COMP%] {
  margin-top: 0.75rem;
  padding: 0.6rem 1.5rem;
  background: var(--brand-gold, #d4af6a);
  color: #2c1a05;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.875rem;
  text-decoration: none;
  transition: background 0.2s;
}
.cart-empty[_ngcontent-%COMP%]   .btn-browse[_ngcontent-%COMP%]:hover {
  background: #c49a52;
}
.cart-items[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.cart-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding-bottom: 0.875rem;
  border-bottom: 1px solid var(--card-border, #eee);
}
.cart-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.ci-thumb[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 10px;
  overflow: hidden;
  background: var(--bg-tertiary, #f4f4f4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.ci-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ci-thumb[_ngcontent-%COMP%]   .ci-thumb-ph[_ngcontent-%COMP%] {
  font-size: 1.5rem;
}
.ci-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.ci-name[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary, #1a1a1a);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ci-name[_ngcontent-%COMP%]:hover {
  color: var(--brand-primary, #8B4513);
  text-decoration: underline;
}
.ci-price[_ngcontent-%COMP%] {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--brand-primary, #8B4513);
}
.ci-qty[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-top: 0.125rem;
}
.ci-qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--card-border, #ddd);
  background: var(--bg-secondary, #f7f7f7);
  color: var(--text-primary, #1a1a1a);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.ci-qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--brand-gold, #d4af6a);
  border-color: var(--brand-gold, #d4af6a);
  color: #2c1a05;
}
.ci-qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.ci-qty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  min-width: 1.25rem;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary, #1a1a1a);
}
.ci-remove[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: var(--text-muted, #999);
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}
.ci-remove[_ngcontent-%COMP%]:hover {
  background: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
}
.cart-footer[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  padding: 1.25rem 1.5rem 1.5rem;
  border-top: 1px solid var(--card-border, #eee);
  background: var(--surface, #fff);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.cart-subtotal[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
  color: var(--text-secondary, #555);
}
.cart-subtotal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--brand-primary, #8B4513);
}
.btn-checkout[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.85rem;
  background:
    linear-gradient(
      135deg,
      var(--brand-gold, #d4af6a),
      #c49a52);
  color: #2c1a05;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(212, 175, 106, 0.35);
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-checkout[_ngcontent-%COMP%]:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(212, 175, 106, 0.45);
}
.link-continue[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted, #888);
  text-decoration: none;
}
.link-continue[_ngcontent-%COMP%]:hover {
  color: var(--brand-primary, #8B4513);
  text-decoration: underline;
}
/*# sourceMappingURL=cart-drawer.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartDrawerComponent, { className: "CartDrawerComponent", filePath: "src\\app\\shared\\components\\cart-drawer\\cart-drawer.component.ts", lineNumber: 14 });
})();

// src/app/features/client/layout/client-layout.component.ts
var ClientLayoutComponent = class _ClientLayoutComponent {
  static {
    this.\u0275fac = function ClientLayoutComponent_Factory(t) {
      return new (t || _ClientLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientLayoutComponent, selectors: [["app-client-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "main-content"]], template: function ClientLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "app-footer")(4, "app-cart-drawer");
      }
    }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent, CartDrawerComponent], styles: ["\n\n.main-content[_ngcontent-%COMP%] {\n  padding-top: 72px;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=client-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientLayoutComponent, { className: "ClientLayoutComponent", filePath: "src\\app\\features\\client\\layout\\client-layout.component.ts", lineNumber: 26 });
})();
export {
  ClientLayoutComponent
};
//# sourceMappingURL=chunk-DMVKD42F.js.map
