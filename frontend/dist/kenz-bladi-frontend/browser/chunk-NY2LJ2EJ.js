import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-JXVZJL7I.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  CommonModule,
  __spreadProps,
  __spreadValues,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/annuaire/annuaire-admin.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item._id;
function AnnuaireAdminComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
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
function AnnuaireAdminComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function AnnuaireAdminComponent_Conditional_32_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "\u2B50 Mis en avant");
    \u0275\u0275elementEnd();
  }
}
function AnnuaireAdminComponent_Conditional_32_For_18_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "\u2713 V\xE9rifi\xE9");
    \u0275\u0275elementEnd();
  }
}
function AnnuaireAdminComponent_Conditional_32_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 20)(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AnnuaireAdminComponent_Conditional_32_For_18_Conditional_7_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 26);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AnnuaireAdminComponent_Conditional_32_For_18_Conditional_19_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 28)(21, "button", 29);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_32_For_18_Template_button_click_21_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openDetail(row_r3._id));
    });
    \u0275\u0275text(22, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 30);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_32_For_18_Template_button_click_23_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggle(row_r3));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 31);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_32_For_18_Template_button_click_25_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleFeature(row_r3));
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.structureName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.structureName);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, row_r3.isFeatured ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.domainLabel(row_r3.domain));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.structureType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.contact.city || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", row_r3.isActive)("pending", !row_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.isActive ? "Actif" : "En attente", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(19, row_r3.isVerified ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("activate", !row_r3.isActive)("deactivate", row_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.isActive ? "D\xE9sactiver" : "Activer", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r3.isFeatured ? "\u2605" : "\u2606", " ");
  }
}
function AnnuaireAdminComponent_Conditional_32_Conditional_19_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_32_Conditional_19_For_4_Template_button_click_0_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goTo($index_r7 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r7 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cur", $index_r7 + 1 === ctx_r3.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate($index_r7 + 1);
  }
}
function AnnuaireAdminComponent_Conditional_32_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 32);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_32_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goTo(ctx_r3.page() - 1));
    });
    \u0275\u0275text(2, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AnnuaireAdminComponent_Conditional_32_Conditional_19_For_4_Template, 2, 3, "button", 33, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_32_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goTo(ctx_r3.page() + 1));
    });
    \u0275\u0275text(6, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.pagesArray());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.page() === ctx_r3.pages());
  }
}
function AnnuaireAdminComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, AnnuaireAdminComponent_Conditional_32_For_18_Template, 27, 18, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, AnnuaireAdminComponent_Conditional_32_Conditional_19_Template, 7, 2, "div", 19);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r3.entries());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(19, ctx_r3.pages() > 1 ? 19 : -1);
  }
}
function AnnuaireAdminComponent_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function AnnuaireAdminComponent_Conditional_33_Conditional_3_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "strong");
    \u0275\u0275text(2, "Description (FR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.detail().description.fr);
  }
}
function AnnuaireAdminComponent_Conditional_33_Conditional_3_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "strong");
    \u0275\u0275text(2, "Slogan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.detail().slogan.fr);
  }
}
function AnnuaireAdminComponent_Conditional_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 39);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_33_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.detailOpen.set(false));
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 40)(6, "div", 41)(7, "div", 42)(8, "span");
    \u0275\u0275text(9, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 42)(13, "span");
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 42)(18, "span");
    \u0275\u0275text(19, "Fond\xE9e en");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 42)(23, "span");
    \u0275\u0275text(24, "Employ\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 42)(28, "span");
    \u0275\u0275text(29, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 42)(33, "span");
    \u0275\u0275text(34, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 42)(38, "span");
    \u0275\u0275text(39, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 42)(43, "span");
    \u0275\u0275text(44, "R\xE9gion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 42)(48, "span");
    \u0275\u0275text(49, "Compte Pro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(52, AnnuaireAdminComponent_Conditional_33_Conditional_3_Conditional_52_Template, 5, 1, "div", 43)(53, AnnuaireAdminComponent_Conditional_33_Conditional_3_Conditional_53_Template, 5, 1, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 44)(55, "button", 45);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_33_Conditional_3_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.detailOpen.set(false));
    });
    \u0275\u0275text(56, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 46);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_33_Conditional_3_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleFromDetail());
    });
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.detail().structureName);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.domainLabel(ctx_r3.detail().domain));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detail().structureType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detail().foundedYear || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detail().employeeCount || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detail().contact.email || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detail().contact.phone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detail().contact.city || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detail().contact.region || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detail().proActor.email || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(52, ctx_r3.detail().description.fr ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(53, ctx_r3.detail().slogan.fr ? 53 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("activate", !ctx_r3.detail().isActive)("deactivate", ctx_r3.detail().isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.detail().isActive ? "D\xE9sactiver la fiche" : "Activer la fiche", " ");
  }
}
function AnnuaireAdminComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.detailOpen.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275template(2, AnnuaireAdminComponent_Conditional_33_Conditional_2_Template, 2, 0, "div", 37)(3, AnnuaireAdminComponent_Conditional_33_Conditional_3_Template, 59, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx_r3.loadingDetail() ? 2 : ctx_r3.detail() ? 3 : -1);
  }
}
function AnnuaireAdminComponent_Conditional_34_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r11 = ctx.$implicit;
    \u0275\u0275property("value", d_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r11.label);
  }
}
function AnnuaireAdminComponent_Conditional_34_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.createError());
  }
}
function AnnuaireAdminComponent_Conditional_34_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 65);
  }
}
function AnnuaireAdminComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createOpen.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 38)(3, "h3");
    \u0275\u0275text(4, "Cr\xE9er une fiche manuellement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 39);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createOpen.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 47);
    \u0275\u0275listener("ngSubmit", function AnnuaireAdminComponent_Conditional_34_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitCreate());
    });
    \u0275\u0275elementStart(8, "div", 48)(9, "label");
    \u0275\u0275text(10, "Nom de la structure *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 50)(13, "div", 48)(14, "label");
    \u0275\u0275text(15, "Domaine *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 51)(17, "option", 11);
    \u0275\u0275text(18, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, AnnuaireAdminComponent_Conditional_34_For_20_Template, 2, 2, "option", 12, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 48)(22, "label");
    \u0275\u0275text(23, "Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 52)(25, "option", 11);
    \u0275\u0275text(26, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 53);
    \u0275\u0275text(28, "Coop\xE9rative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 54);
    \u0275\u0275text(30, "SARL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 55);
    \u0275\u0275text(32, "Association");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 56);
    \u0275\u0275text(34, "Artisan ind\xE9pendant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 57);
    \u0275\u0275text(36, "Entreprise individuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 58);
    \u0275\u0275text(38, "GIE");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 50)(40, "div", 48)(41, "label");
    \u0275\u0275text(42, "Email de contact");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 48)(45, "label");
    \u0275\u0275text(46, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 48)(49, "label");
    \u0275\u0275text(50, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, AnnuaireAdminComponent_Conditional_34_Conditional_52_Template, 2, 1, "div", 62);
    \u0275\u0275elementStart(53, "div", 44)(54, "button", 63);
    \u0275\u0275listener("click", function AnnuaireAdminComponent_Conditional_34_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createOpen.set(false));
    });
    \u0275\u0275text(55, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 64);
    \u0275\u0275template(57, AnnuaireAdminComponent_Conditional_34_Conditional_57_Template, 1, 0, "span", 65);
    \u0275\u0275text(58, " Cr\xE9er la fiche ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r3.createForm);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r3.domains);
    \u0275\u0275advance(33);
    \u0275\u0275conditional(52, ctx_r3.createError() ? 52 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.creating());
    \u0275\u0275advance();
    \u0275\u0275conditional(57, ctx_r3.creating() ? 57 : -1);
  }
}
var DOMAINS = [
  { id: "artisanat_service", label: "Artisanat de Service" },
  { id: "produits_mer", label: "Produits de la Mer" },
  { id: "habillement_mode", label: "Habillement & Mode" },
  { id: "tourisme_rural", label: "Tourisme Rural" },
  { id: "artisanat_art", label: "Artisanat d'art" },
  { id: "agriculture_bio", label: "Agriculture Bio" },
  { id: "soin_beaute", label: "Soin & Beaut\xE9" },
  { id: "produit_terroir", label: "Produit de Terroir" },
  { id: "artisanat_culinaire", label: "Artisanat Culinaire" }
];
var AnnuaireAdminComponent = class _AnnuaireAdminComponent {
  constructor() {
    this.api = inject(ApiService);
    this.fb = inject(FormBuilder);
    this.entries = signal([]);
    this.isLoading = signal(true);
    this.total = signal(0);
    this.activeCount = signal(0);
    this.pendingCount = signal(0);
    this.page = signal(1);
    this.limit = 20;
    this.filterDomain = signal("");
    this.filterActive = signal("");
    this.filterSearch = signal("");
    this.detailOpen = signal(false);
    this.detail = signal(null);
    this.loadingDetail = signal(false);
    this.createOpen = signal(false);
    this.creating = signal(false);
    this.createError = signal("");
    this.domains = DOMAINS;
    this.pages = signal(1);
    this.pagesArray = signal([]);
    this.createForm = this.fb.group({
      structureName: ["", Validators.required],
      domain: ["", Validators.required],
      structureType: ["", Validators.required],
      email: ["", Validators.email],
      phone: [""],
      city: [""]
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    const params = { page: this.page(), limit: this.limit };
    if (this.filterDomain())
      params["domain"] = this.filterDomain();
    if (this.filterActive())
      params["isActive"] = this.filterActive();
    if (this.filterSearch())
      params["search"] = this.filterSearch();
    this.api.get("/admin/annuaire", params).subscribe({
      next: (res) => {
        this.entries.set(res.data);
        this.total.set(res.pagination.total);
        const p = res.pagination.pages;
        this.pages.set(p);
        this.pagesArray.set(Array.from({ length: p }, (_, i) => i));
        this.activeCount.set(res.data.filter((e) => e.isActive).length);
        this.pendingCount.set(res.data.filter((e) => !e.isActive).length);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  goTo(p) {
    this.page.set(p);
    this.load();
  }
  toggle(row) {
    this.api.patch(`/annuaire/${row._id}/toggle-active`).subscribe((res) => {
      row.isActive = res.isActive;
    });
  }
  toggleFeature(row) {
    this.api.patch(`/admin/annuaire/${row._id}/feature`).subscribe((res) => {
      row.isFeatured = res.isFeatured;
    });
  }
  openDetail(id) {
    this.detailOpen.set(true);
    this.detail.set(null);
    this.loadingDetail.set(true);
    this.api.get(`/admin/annuaire/${id}`).subscribe({
      next: (res) => {
        this.detail.set(res.data);
        this.loadingDetail.set(false);
      },
      error: () => this.loadingDetail.set(false)
    });
  }
  toggleFromDetail() {
    const d = this.detail();
    if (!d)
      return;
    this.api.patch(`/annuaire/${d._id}/toggle-active`).subscribe((res) => {
      this.detail.update((prev) => prev ? __spreadProps(__spreadValues({}, prev), { isActive: res.isActive }) : prev);
      this.entries.update((list) => list.map((e) => e._id === d._id ? __spreadProps(__spreadValues({}, e), { isActive: res.isActive }) : e));
    });
  }
  openCreateForm() {
    this.createForm.reset();
    this.createError.set("");
    this.createOpen.set(true);
  }
  submitCreate() {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
    this.creating.set(true);
    this.createError.set("");
    const v = this.createForm.getRawValue();
    const payload = {
      structureName: v.structureName,
      domain: v.domain,
      structureType: v.structureType,
      contact: { email: v.email, phone: v.phone, city: v.city }
    };
    this.api.post("/annuaire", payload).subscribe({
      next: () => {
        this.creating.set(false);
        this.createOpen.set(false);
        this.load();
      },
      error: (err) => {
        this.creating.set(false);
        this.createError.set(err.error?.error || "Erreur lors de la cr\xE9ation");
      }
    });
  }
  domainLabel(id) {
    return DOMAINS.find((d) => d.id === id)?.label ?? id;
  }
  exportCsv() {
    const rows = this.entries();
    const header = "Nom;Domaine;Type;Ville;Email;T\xE9l\xE9phone;Statut";
    const lines = rows.map((r) => [
      r.structureName,
      this.domainLabel(r.domain),
      r.structureType,
      r.contact.city || "",
      r.contact.email || "",
      r.contact.phone || "",
      r.isActive ? "Actif" : "En attente"
    ].join(";"));
    const csv = [header, ...lines].join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "annuaire-kenzbladi.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function AnnuaireAdminComponent_Factory(t) {
      return new (t || _AnnuaireAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnuaireAdminComponent, selectors: [["app-annuaire-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 7, consts: [[1, "annuaire-admin"], [1, "page-header"], [1, "kpis"], [1, "kpi", "total"], [1, "kpi", "active"], [1, "kpi", "pending"], [1, "header-actions"], ["title", "Exporter CSV", 1, "btn-export", 3, "click"], [1, "btn-add", 3, "click"], [1, "filter-bar"], [1, "fs", 3, "change"], ["value", ""], [3, "value"], ["value", "true"], ["value", "false"], ["type", "text", "placeholder", "\u{1F50D} Rechercher\u2026", 1, "search-input", 3, "keyup.enter", "value"], [1, "loading"], [1, "table-wrap"], [1, "table"], [1, "pagination"], [1, "col-name"], [1, "av"], [1, "name"], [1, "feat-badge"], [1, "chip", "domain"], [1, "chip", "type"], [1, "badge"], [1, "chip", "verified"], [1, "actions"], ["title", "Voir d\xE9tail", 1, "act-btn", "detail", 3, "click"], [1, "act-btn", 3, "click"], ["title", "Mise en avant", 1, "act-btn", "feature", 3, "click"], [3, "click", "disabled"], [3, "cur"], [3, "click"], [1, "overlay", 3, "click"], [1, "modal"], [1, "modal-loading"], [1, "modal-header"], [1, "close", 3, "click"], [1, "modal-body"], [1, "detail-grid"], [1, "detail-row"], [1, "detail-desc"], [1, "modal-footer"], [1, "btn-ghost", 3, "click"], [1, "btn-toggle", 3, "click"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["formControlName", "structureName", "placeholder", "Coop\xE9rative Argane de l'Atlas"], [1, "row-2"], ["formControlName", "domain"], ["formControlName", "structureType"], ["value", "cooperative"], ["value", "sarl"], ["value", "association"], ["value", "artisan_independant"], ["value", "entreprise_individuelle"], ["value", "groupement_interet_economique"], ["formControlName", "email", "type", "email", "placeholder", "contact@structure.ma"], ["formControlName", "phone", "placeholder", "+212 6XX XXX XXX"], ["formControlName", "city", "placeholder", "Marrakech"], [1, "alert", "error"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-add", 3, "disabled"], [1, "spinner"]], template: function AnnuaireAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Gestion des Annuaires");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "span", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 5);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 6)(13, "button", 7);
        \u0275\u0275listener("click", function AnnuaireAdminComponent_Template_button_click_13_listener() {
          return ctx.exportCsv();
        });
        \u0275\u0275text(14, "\u{1F4E5} CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 8);
        \u0275\u0275listener("click", function AnnuaireAdminComponent_Template_button_click_15_listener() {
          return ctx.openCreateForm();
        });
        \u0275\u0275text(16, "+ Cr\xE9er une fiche");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 9)(18, "select", 10);
        \u0275\u0275listener("change", function AnnuaireAdminComponent_Template_select_change_18_listener($event) {
          ctx.filterDomain.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(19, "option", 11);
        \u0275\u0275text(20, "Tous les domaines");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(21, AnnuaireAdminComponent_For_22_Template, 2, 2, "option", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "select", 10);
        \u0275\u0275listener("change", function AnnuaireAdminComponent_Template_select_change_23_listener($event) {
          ctx.filterActive.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(24, "option", 11);
        \u0275\u0275text(25, "Tous les statuts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option", 13);
        \u0275\u0275text(27, "Actifs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option", 14);
        \u0275\u0275text(29, "En attente");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "input", 15);
        \u0275\u0275listener("keyup.enter", function AnnuaireAdminComponent_Template_input_keyup_enter_30_listener($event) {
          ctx.filterSearch.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, AnnuaireAdminComponent_Conditional_31_Template, 2, 0, "div", 16)(32, AnnuaireAdminComponent_Conditional_32_Template, 20, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, AnnuaireAdminComponent_Conditional_33_Template, 4, 1)(34, AnnuaireAdminComponent_Conditional_34_Template, 59, 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("Total : ", ctx.total(), "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Actifs : ", ctx.activeCount(), "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("En attente : ", ctx.pendingCount(), "");
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.domains);
        \u0275\u0275advance(9);
        \u0275\u0275property("value", ctx.filterSearch());
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ctx.isLoading() ? 31 : 32);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(33, ctx.detailOpen() ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(34, ctx.createOpen() ? 34 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.annuaire-admin[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.375rem;\n}\n.kpis[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.kpi[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.625rem;\n  border-radius: 12px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.kpi.total[_ngcontent-%COMP%] {\n  background: rgba(139, 69, 19, 0.07);\n  color: #8B4513;\n}\n.kpi.active[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.07);\n  color: #27ae60;\n}\n.kpi.pending[_ngcontent-%COMP%] {\n  background: rgba(243, 156, 18, 0.07);\n  color: #d68910;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-export[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.875rem;\n  border: 1px solid var(--card-border);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.875rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  flex-wrap: wrap;\n}\n.fs[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.625rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n  min-width: 200px;\n}\n.loading[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  text-align: start;\n  font-weight: 600;\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  border-top: 1px solid var(--card-border);\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(139, 69, 19, 0.02);\n}\n.col-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.av[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513,\n      #d4af6a);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.feat-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #d4af6a;\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 0.18rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.chip.domain[_ngcontent-%COMP%] {\n  background: rgba(139, 69, 19, 0.07);\n  color: #8B4513;\n}\n.chip.type[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-secondary);\n  text-transform: capitalize;\n}\n.chip.verified[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  color: #27ae60;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.18rem 0.5rem;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.badge.active[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.badge.pending[_ngcontent-%COMP%] {\n  background: rgba(243, 156, 18, 0.1);\n  color: #d68910;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.3rem;\n  align-items: center;\n}\n.act-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.6rem;\n  border-radius: 6px;\n  border: 1px solid;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n  transition: background 0.15s;\n}\n.act-btn.detail[_ngcontent-%COMP%] {\n  border-color: rgba(52, 152, 219, 0.3);\n  color: #3498db;\n}\n.act-btn.activate[_ngcontent-%COMP%] {\n  border-color: rgba(39, 174, 96, 0.3);\n  color: #27ae60;\n}\n.act-btn.deactivate[_ngcontent-%COMP%] {\n  border-color: rgba(231, 76, 60, 0.3);\n  color: #e74c3c;\n}\n.act-btn.feature[_ngcontent-%COMP%] {\n  border-color: rgba(212, 175, 106, 0.4);\n  color: #d4af6a;\n  font-size: 0.9rem;\n}\n.act-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  justify-content: center;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.65rem;\n  border: 1px solid var(--card-border);\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.pagination[_ngcontent-%COMP%]   button.cur[_ngcontent-%COMP%] {\n  background: #8B4513;\n  color: #fff;\n  border-color: #8B4513;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(600px, 95vw);\n  max-height: 85vh;\n  overflow-y: auto;\n  background: var(--card-bg);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 51;\n  display: flex;\n  flex-direction: column;\n}\n.modal-loading[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--card-border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  padding: 0.5rem 0.75rem;\n  background: var(--bg-secondary);\n  border-radius: 6px;\n  font-size: 0.82rem;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  text-transform: uppercase;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--text-primary);\n}\n.detail-desc[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.85rem;\n}\n.detail-desc[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.78rem;\n}\n.detail-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.6;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--card-border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  cursor: pointer;\n}\n.btn-toggle[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-toggle.activate[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.btn-toggle.deactivate[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  color: #e74c3c;\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.875rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.8rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n  padding: 0.6rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.84rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=annuaire-admin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnuaireAdminComponent, { className: "AnnuaireAdminComponent", filePath: "src\\app\\features\\admin\\annuaire\\annuaire-admin.component.ts", lineNumber: 325 });
})();
export {
  AnnuaireAdminComponent
};
//# sourceMappingURL=chunk-NY2LJ2EJ.js.map
