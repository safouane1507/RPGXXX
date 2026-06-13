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
  DatePipe,
  __spreadProps,
  __spreadValues,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/users/users-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item._id;
function UsersListComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275property("value", d_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.label);
  }
}
function UsersListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r1.successMsg(), "");
  }
}
function UsersListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_Conditional_24_For_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.domainLabel(u_r4.proProfile.domain));
  }
}
function UsersListComponent_Conditional_24_For_20_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_Conditional_24_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, UsersListComponent_Conditional_24_For_20_Conditional_12_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 21);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 22);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, UsersListComponent_Conditional_24_For_20_Conditional_22_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 24)(24, "button", 25);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_24_For_20_Template_button_click_24_listener() {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleUser(u_r4));
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 26);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_24_For_20_Template_button_click_26_listener() {
      const u_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(u_r4));
    });
    \u0275\u0275text(27, "Voir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r4.email.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", u_r4.firstName, " ", u_r4.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((u_r4.proProfile == null ? null : u_r4.proProfile.companyName) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(12, (u_r4.proProfile == null ? null : u_r4.proProfile.domain) ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap((u_r4.proProfile == null ? null : u_r4.proProfile.subscriptionPlan) || "gratuit");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (u_r4.proProfile == null ? null : u_r4.proProfile.subscriptionPlan) || "gratuit", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.lastLogin ? \u0275\u0275pipeBind2(18, 21, u_r4.lastLogin, "dd/MM/yy HH:mm") : "Jamais");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("on", u_r4.isActive)("off", !u_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r4.isActive ? "Actif" : "D\xE9sactiv\xE9", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(22, (u_r4.proProfile == null ? null : u_r4.proProfile.isVerified) ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("activate", !u_r4.isActive)("deactivate", u_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r4.isActive ? "D\xE9sactiver" : "Activer", " ");
  }
}
function UsersListComponent_Conditional_24_Conditional_21_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_24_Conditional_21_For_4_Template_button_click_0_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goTo($index_r7 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cur", $index_r7 + 1 === ctx_r1.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate($index_r7 + 1);
  }
}
function UsersListComponent_Conditional_24_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 27);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_24_Conditional_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goTo(ctx_r1.page() - 1));
    });
    \u0275\u0275text(2, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, UsersListComponent_Conditional_24_Conditional_21_For_4_Template, 2, 3, "button", 28, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_24_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goTo(ctx_r1.page() + 1));
    });
    \u0275\u0275text(6, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pagesArr());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page() === ctx_r1.pages());
  }
}
function UsersListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Acteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Abonnement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Derni\xE8re connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, UsersListComponent_Conditional_24_For_20_Template, 28, 24, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, UsersListComponent_Conditional_24_Conditional_21_Template, 7, 2, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.users());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(21, ctx_r1.pages() > 1 ? 21 : -1);
  }
}
function UsersListComponent_Conditional_25_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Email valide requis");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_Conditional_25_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "8 caract\xE8res minimum");
    \u0275\u0275elementEnd();
  }
}
function UsersListComponent_Conditional_25_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r9 = ctx.$implicit;
    \u0275\u0275property("value", d_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r9.label);
  }
}
function UsersListComponent_Conditional_25_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError());
  }
}
function UsersListComponent_Conditional_25_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
function UsersListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createOpen.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 32)(3, "h3");
    \u0275\u0275text(4, "Cr\xE9er un compte Acteur Pro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createOpen.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 34);
    \u0275\u0275listener("ngSubmit", function UsersListComponent_Conditional_25_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCreate());
    });
    \u0275\u0275elementStart(8, "div", 35)(9, "div", 36)(10, "label");
    \u0275\u0275text(11, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 36)(14, "label");
    \u0275\u0275text(15, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 36)(18, "label");
    \u0275\u0275text(19, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 39);
    \u0275\u0275template(21, UsersListComponent_Conditional_25_Conditional_21_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 36)(23, "label");
    \u0275\u0275text(24, "Mot de passe *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 41);
    \u0275\u0275template(26, UsersListComponent_Conditional_25_Conditional_26_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 36)(28, "label");
    \u0275\u0275text(29, "Nom de la structure");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 35)(32, "div", 36)(33, "label");
    \u0275\u0275text(34, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 43)(36, "option", 6);
    \u0275\u0275text(37, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(38, UsersListComponent_Conditional_25_For_39_Template, 2, 2, "option", 9, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 36)(41, "label");
    \u0275\u0275text(42, "Type de structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 44)(44, "option", 6);
    \u0275\u0275text(45, "\u2014 Type \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 45);
    \u0275\u0275text(47, "Coop\xE9rative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 46);
    \u0275\u0275text(49, "SARL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 47);
    \u0275\u0275text(51, "Association");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 48);
    \u0275\u0275text(53, "Artisan ind\xE9pendant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 49);
    \u0275\u0275text(55, "Entreprise individuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 50);
    \u0275\u0275text(57, "GIE");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(58, UsersListComponent_Conditional_25_Conditional_58_Template, 2, 1, "div", 51);
    \u0275\u0275elementStart(59, "div", 52)(60, "button", 53);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_25_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createOpen.set(false));
    });
    \u0275\u0275text(61, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 54);
    \u0275\u0275template(63, UsersListComponent_Conditional_25_Conditional_63_Template, 1, 0, "span", 55);
    \u0275\u0275text(64, " Cr\xE9er le compte ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.createForm);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(21, ((tmp_2_0 = ctx_r1.cf("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.cf("email")) == null ? null : tmp_2_0.touched) ? 21 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(26, ((tmp_3_0 = ctx_r1.cf("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.cf("password")) == null ? null : tmp_3_0.touched) ? 26 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.domains);
    \u0275\u0275advance(20);
    \u0275\u0275conditional(58, ctx_r1.createError() ? 58 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.creating());
    \u0275\u0275advance();
    \u0275\u0275conditional(63, ctx_r1.creating() ? 63 : -1);
  }
}
function UsersListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.detailUser.set(null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 32)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.detailUser.set(null));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 56)(8, "div", 57)(9, "div", 58)(10, "span");
    \u0275\u0275text(11, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 58)(15, "span");
    \u0275\u0275text(16, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 58)(20, "span");
    \u0275\u0275text(21, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 58)(25, "span");
    \u0275\u0275text(26, "Structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 58)(30, "span");
    \u0275\u0275text(31, "Domaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 58)(35, "span");
    \u0275\u0275text(36, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 58)(40, "span");
    \u0275\u0275text(41, "Abonnement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 58)(45, "span");
    \u0275\u0275text(46, "V\xE9rifi\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 58)(50, "span");
    \u0275\u0275text(51, "Inscrit le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 58)(56, "span");
    \u0275\u0275text(57, "Derni\xE8re connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "div", 52)(62, "button", 59);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_26_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.detailUser.set(null));
    });
    \u0275\u0275text(63, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 60);
    \u0275\u0275listener("click", function UsersListComponent_Conditional_26_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUser(ctx_r1.detailUser()));
    });
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.detailUser().email);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.detailUser().firstName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailUser().lastName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailUser().email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r1.detailUser().proProfile) == null ? null : tmp_5_0.companyName) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.domainLabel(((tmp_6_0 = ctx_r1.detailUser().proProfile) == null ? null : tmp_6_0.domain) || ""));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r1.detailUser().proProfile) == null ? null : tmp_7_0.structureType) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_8_0 = ctx_r1.detailUser().proProfile) == null ? null : tmp_8_0.subscriptionPlan) || "gratuit");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_9_0 = ctx_r1.detailUser().proProfile) == null ? null : tmp_9_0.isVerified) ? "Oui" : "Non");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 16, ctx_r1.detailUser().createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.detailUser().lastLogin ? \u0275\u0275pipeBind2(60, 19, ctx_r1.detailUser().lastLogin, "dd/MM/yy HH:mm") : "Jamais");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("activate", !ctx_r1.detailUser().isActive)("deactivate", ctx_r1.detailUser().isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailUser().isActive ? "D\xE9sactiver le compte" : "Activer le compte", " ");
  }
}
var DOMAINS = [
  { value: "artisanat_service", label: "Artisanat de Service" },
  { value: "produits_mer", label: "Produits de la Mer" },
  { value: "habillement_mode", label: "Habillement & Mode" },
  { value: "tourisme_rural", label: "Tourisme Rural" },
  { value: "artisanat_art", label: "Artisanat d'art" },
  { value: "agriculture_bio", label: "Agriculture Bio" },
  { value: "soin_beaute", label: "Soin & Beaut\xE9" },
  { value: "produit_terroir", label: "Produit de Terroir" },
  { value: "artisanat_culinaire", label: "Artisanat Culinaire" }
];
var UsersListComponent = class _UsersListComponent {
  constructor() {
    this.api = inject(ApiService);
    this.fb = inject(FormBuilder);
    this.users = signal([]);
    this.total = signal(0);
    this.isLoading = signal(true);
    this.page = signal(1);
    this.pages = signal(1);
    this.pagesArr = signal([]);
    this.filterActive = signal("");
    this.filterDomain = signal("");
    this.successMsg = signal("");
    this.createOpen = signal(false);
    this.creating = signal(false);
    this.createError = signal("");
    this.detailUser = signal(null);
    this.domains = DOMAINS;
    this.limit = 20;
    this.createForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      companyName: [""],
      domain: [""],
      structureType: [""]
    });
  }
  cf(name) {
    return this.createForm.get(name);
  }
  domainLabel(id) {
    return DOMAINS.find((d) => d.value === id)?.label ?? id;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    const params = { role: "pro", page: this.page(), limit: this.limit };
    if (this.filterActive())
      params["isActive"] = this.filterActive();
    this.api.get("/admin/users", params).subscribe({
      next: (res) => {
        this.users.set(res.data);
        this.total.set(res.pagination.total);
        const p = res.pagination.pages;
        this.pages.set(p);
        this.pagesArr.set(Array.from({ length: p }, (_, i) => i));
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }
  goTo(p) {
    this.page.set(p);
    this.load();
  }
  toggleUser(u) {
    this.api.patch(`/admin/users/${u._id}/toggle`).subscribe((res) => {
      u.isActive = res.isActive;
      this.successMsg.set(`Compte ${res.isActive ? "activ\xE9" : "d\xE9sactiv\xE9"} : ${u.email}`);
      if (this.detailUser()?._id === u._id) {
        this.detailUser.update((d) => d ? __spreadProps(__spreadValues({}, d), { isActive: res.isActive }) : d);
      }
      setTimeout(() => this.successMsg.set(""), 3e3);
    });
  }
  openCreate() {
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
    const { email, password, companyName, domain, structureType, firstName, lastName } = this.createForm.getRawValue();
    this.api.post("/admin/users/pro", { email, password, companyName, domain, structureType, firstName, lastName }).subscribe({
      next: () => {
        this.creating.set(false);
        this.createOpen.set(false);
        this.successMsg.set("Compte Pro cr\xE9\xE9 avec succ\xE8s !");
        this.load();
        setTimeout(() => this.successMsg.set(""), 4e3);
      },
      error: (err) => {
        this.creating.set(false);
        this.createError.set(err.error?.error || "Erreur lors de la cr\xE9ation");
      }
    });
  }
  openDetail(u) {
    this.detailUser.set(u);
  }
  static {
    this.\u0275fac = function UsersListComponent_Factory(t) {
      return new (t || _UsersListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersListComponent, selectors: [["app-users-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 5, consts: [[1, "users-page"], [1, "page-header"], [1, "sub"], [1, "btn-add", 3, "click"], [1, "filter-bar"], [1, "fs", 3, "change"], ["value", ""], ["value", "true"], ["value", "false"], [3, "value"], [1, "alert", "success"], [1, "loading"], [1, "table-wrap"], [1, "table"], [1, "pagination"], [1, "col-user"], [1, "av"], [1, "name"], [1, "email"], [1, "chip", "domain"], [1, "chip", "sub"], [1, "date"], [1, "badge"], [1, "chip", "verified"], [1, "actions"], [1, "act-btn", 3, "click"], [1, "act-btn", "detail", 3, "click"], [3, "click", "disabled"], [3, "cur"], [3, "click"], [1, "overlay", 3, "click"], [1, "modal"], [1, "modal-header"], [1, "close", 3, "click"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "row-2"], [1, "field"], ["formControlName", "firstName", "placeholder", "Pr\xE9nom"], ["formControlName", "lastName", "placeholder", "Nom"], ["formControlName", "email", "type", "email", "placeholder", "acteur@structure.ma"], [1, "err"], ["formControlName", "password", "type", "password", "placeholder", "8 caract\xE8res minimum"], ["formControlName", "companyName", "placeholder", "Coop\xE9rative / Entreprise\u2026"], ["formControlName", "domain"], ["formControlName", "structureType"], ["value", "cooperative"], ["value", "sarl"], ["value", "association"], ["value", "artisan_independant"], ["value", "entreprise_individuelle"], ["value", "groupement_interet_economique"], [1, "alert", "error"], [1, "modal-footer"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "spinner"], [1, "modal-body"], [1, "detail-grid"], [1, "detail-row"], [1, "btn-ghost", 3, "click"], [1, "btn-toggle", 3, "click"]], template: function UsersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Gestion des Acteurs Pro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function UsersListComponent_Template_button_click_7_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(8, "+ Cr\xE9er un compte Pro");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "select", 5);
        \u0275\u0275listener("change", function UsersListComponent_Template_select_change_10_listener($event) {
          ctx.filterActive.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(11, "option", 6);
        \u0275\u0275text(12, "Tous les statuts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option", 7);
        \u0275\u0275text(14, "Actifs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 8);
        \u0275\u0275text(16, "D\xE9sactiv\xE9s");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "select", 5);
        \u0275\u0275listener("change", function UsersListComponent_Template_select_change_17_listener($event) {
          ctx.filterDomain.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(18, "option", 6);
        \u0275\u0275text(19, "Tous les domaines");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(20, UsersListComponent_For_21_Template, 2, 2, "option", 9, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, UsersListComponent_Conditional_22_Template, 2, 1, "div", 10)(23, UsersListComponent_Conditional_23_Template, 2, 0, "div", 11)(24, UsersListComponent_Conditional_24_Template, 22, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, UsersListComponent_Conditional_25_Template, 65, 6)(26, UsersListComponent_Conditional_26_Template, 66, 22);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.total(), " compte(s) Pro enregistr\xE9(s)");
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.domains);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(22, ctx.successMsg() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(23, ctx.isLoading() ? 23 : 24);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(25, ctx.createOpen() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(26, ctx.detailUser() ? 26 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.users-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.2rem;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  flex-wrap: wrap;\n}\n.fs[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.625rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.84rem;\n  font-weight: 500;\n}\n.alert.success[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  border: 1px solid rgba(39, 174, 96, 0.2);\n  color: #27ae60;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n}\n.loading[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  text-align: start;\n  font-weight: 600;\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  border-top: 1px solid var(--card-border);\n  vertical-align: middle;\n}\n.col-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.av[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513,\n      #d4af6a);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 0.82rem;\n}\n.email[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 0.18rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.chip.domain[_ngcontent-%COMP%] {\n  background: rgba(139, 69, 19, 0.07);\n  color: #8B4513;\n}\n.chip.verified[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  color: #27ae60;\n  margin-left: 0.25rem;\n}\n.chip.sub[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-secondary);\n  text-transform: capitalize;\n}\n.chip.sub.premium[_ngcontent-%COMP%] {\n  background: rgba(212, 175, 106, 0.12);\n  color: #d4af6a;\n}\n.chip.sub.basic[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.08);\n  color: #3498db;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.18rem 0.55rem;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.badge.on[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.badge.off[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  color: #e74c3c;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.3rem;\n}\n.act-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.6rem;\n  border-radius: 6px;\n  border: 1px solid;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n}\n.act-btn.activate[_ngcontent-%COMP%] {\n  border-color: rgba(39, 174, 96, 0.3);\n  color: #27ae60;\n}\n.act-btn.deactivate[_ngcontent-%COMP%] {\n  border-color: rgba(231, 76, 60, 0.3);\n  color: #e74c3c;\n}\n.act-btn.detail[_ngcontent-%COMP%] {\n  border-color: rgba(52, 152, 219, 0.3);\n  color: #3498db;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  justify-content: center;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.65rem;\n  border: 1px solid var(--card-border);\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.pagination[_ngcontent-%COMP%]   button.cur[_ngcontent-%COMP%] {\n  background: #8B4513;\n  color: #fff;\n  border-color: #8B4513;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(560px, 95vw);\n  max-height: 85vh;\n  overflow-y: auto;\n  background: var(--card-bg);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 51;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--card-border);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.875rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.8rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #e74c3c;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  padding: 0.5rem 0.75rem;\n  background: var(--bg-secondary);\n  border-radius: 6px;\n  font-size: 0.82rem;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  text-transform: uppercase;\n}\n.detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--text-primary);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--card-border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn-toggle[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-toggle.activate[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.btn-toggle.deactivate[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  color: #e74c3c;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=users-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersListComponent, { className: "UsersListComponent", filePath: "src\\app\\features\\admin\\users\\users-list.component.ts", lineNumber: 305 });
})();
export {
  UsersListComponent
};
//# sourceMappingURL=chunk-LZ5CA6DU.js.map
