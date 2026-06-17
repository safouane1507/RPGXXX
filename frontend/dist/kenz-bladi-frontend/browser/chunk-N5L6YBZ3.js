import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-JXVZJL7I.js";
import {
  AuthService
} from "./chunk-SCCTXVTR.js";
import "./chunk-PTMK54BH.js";
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/pro/annuaire/pro-annuaire.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.code;
var _forTrack2 = ($index, $item) => $item.key;
function ProAnnuaireComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.isActive())("pending", !ctx_r0.isActive());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isActive() ? "\u2713 Fiche active" : "\u23F3 En attente de validation", " ");
  }
}
function ProAnnuaireComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20)(3, "polyline", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg(), " ");
  }
}
function ProAnnuaireComponent_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function ProAnnuaireComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ProAnnuaireComponent_For_11_Template_button_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeTab.set(i_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProAnnuaireComponent_For_11_Conditional_2_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeTab() === i_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, i_r3 === 0 && ctx_r0.hasTabError(0) ? 2 : -1);
  }
}
function ProAnnuaireComponent_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Nom requis");
    \u0275\u0275elementEnd();
  }
}
function ProAnnuaireComponent_Conditional_13_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275property("value", t_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5.label);
  }
}
function ProAnnuaireComponent_Conditional_13_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    \u0275\u0275property("value", d_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.label);
  }
}
function ProAnnuaireComponent_Conditional_13_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("rtl", lang_r7.rtl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r7.label);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", lang_r7.code)("dir", lang_r7.rtl ? "rtl" : "ltr")("placeholder", lang_r7.placeholder);
  }
}
function ProAnnuaireComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 24)(2, "div", 25)(3, "label");
    \u0275\u0275text(4, "Nom de la structure");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 26);
    \u0275\u0275template(6, ProAnnuaireComponent_Conditional_13_Conditional_6_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 28)(8, "div", 25)(9, "label");
    \u0275\u0275text(10, "Type de structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 29)(12, "option", 30);
    \u0275\u0275text(13, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, ProAnnuaireComponent_Conditional_13_For_15_Template, 2, 2, "option", 31, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 25)(17, "label");
    \u0275\u0275text(18, "Domaine principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 32)(20, "option", 30);
    \u0275\u0275text(21, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, ProAnnuaireComponent_Conditional_13_For_23_Template, 2, 2, "option", 31, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 28)(25, "div", 33)(26, "label");
    \u0275\u0275text(27, "Ann\xE9e de cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 33)(30, "label");
    \u0275\u0275text(31, "Nombre d'employ\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 36)(34, "div", 37);
    \u0275\u0275text(35, "Slogan ");
    \u0275\u0275elementStart(36, "span", 38);
    \u0275\u0275text(37, "(multilingue)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 39);
    \u0275\u0275repeaterCreate(39, ProAnnuaireComponent_Conditional_13_For_40_Template, 4, 6, "div", 40, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(6, ((tmp_1_0 = ctx_r0.f("identity.structureName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.f("identity.structureName")) == null ? null : tmp_1_0.touched) ? 6 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.structureTypes);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.domains);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.langs);
  }
}
function ProAnnuaireComponent_Conditional_14_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275property("value", r_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r8);
  }
}
function ProAnnuaireComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 28)(2, "div", 33)(3, "label");
    \u0275\u0275text(4, "T\xE9l\xE9phone principal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33)(7, "label");
    \u0275\u0275text(8, "T\xE9l\xE9phone fixe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 28)(11, "div", 33)(12, "label");
    \u0275\u0275text(13, "Email de contact");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 33)(16, "label");
    \u0275\u0275text(17, "Site web");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "label");
    \u0275\u0275text(21, "Adresse compl\xE8te");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 48)(24, "div", 33)(25, "label");
    \u0275\u0275text(26, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 33)(29, "label");
    \u0275\u0275text(30, "Province");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 33)(33, "label");
    \u0275\u0275text(34, "R\xE9gion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 51)(36, "option", 30);
    \u0275\u0275text(37, "\u2014 R\xE9gion \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(38, ProAnnuaireComponent_Conditional_14_For_39_Template, 2, 2, "option", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 28)(41, "div", 52)(42, "label");
    \u0275\u0275text(43, "Latitude GPS");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 52)(46, "label");
    \u0275\u0275text(47, "Longitude GPS");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(38);
    \u0275\u0275repeater(ctx_r0.regions);
  }
}
function ProAnnuaireComponent_Conditional_15_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "textarea", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("rtl", lang_r9.rtl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r9.label);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", lang_r9.code)("dir", lang_r9.rtl ? "rtl" : "ltr")("placeholder", lang_r9.placeholder);
  }
}
function ProAnnuaireComponent_Conditional_15_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "textarea", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("rtl", lang_r10.rtl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r10.label);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", lang_r10.code)("dir", lang_r10.rtl ? "rtl" : "ltr")("placeholder", lang_r10.placeholder);
  }
}
function ProAnnuaireComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 36)(2, "div", 37);
    \u0275\u0275text(3, "Description courte ");
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5, "(r\xE9sum\xE9 affich\xE9 sur les cartes)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 55);
    \u0275\u0275repeaterCreate(7, ProAnnuaireComponent_Conditional_15_For_8_Template, 4, 6, "div", 56, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 36)(10, "div", 37);
    \u0275\u0275text(11, "Pr\xE9sentation compl\xE8te ");
    \u0275\u0275elementStart(12, "span", 38);
    \u0275\u0275text(13, "(page de d\xE9tail)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 57);
    \u0275\u0275repeaterCreate(15, ProAnnuaireComponent_Conditional_15_For_16_Template, 4, 6, "div", 56, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.langs);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.langs);
  }
}
function ProAnnuaireComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62)(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const social_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(social_r11.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(social_r11.label);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", social_r11.key)("placeholder", social_r11.placeholder);
  }
}
function ProAnnuaireComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, ProAnnuaireComponent_Conditional_16_For_2_Template, 7, 4, "div", 60, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.socials);
  }
}
function ProAnnuaireComponent_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1, "Aucune question pour l'instant. Cliquez sur \xAB Ajouter \xBB.");
    \u0275\u0275elementEnd();
  }
}
function ProAnnuaireComponent_Conditional_17_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 71);
    \u0275\u0275listener("click", function ProAnnuaireComponent_Conditional_17_For_9_Template_button_click_4_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFaq(i_r14));
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 72)(7, "div", 73)(8, "label", 41);
    \u0275\u0275text(9, "FR");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 73)(12, "label", 75);
    \u0275\u0275text(13, "AR");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 77)(16, "div", 78)(17, "label", 41);
    \u0275\u0275text(18, "R\xE9ponse FR");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 78)(21, "label", 75);
    \u0275\u0275text(22, "\u0627\u0644\u062C\u0648\u0627\u0628 AR");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r14 = ctx.$index;
    \u0275\u0275property("formGroupName", i_r14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Question ", i_r14 + 1, "");
  }
}
function ProAnnuaireComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 64)(2, "p", 65);
    \u0275\u0275text(3, "Questions/r\xE9ponses affich\xE9es sur votre fiche publique.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 66);
    \u0275\u0275listener("click", function ProAnnuaireComponent_Conditional_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addFaq());
    });
    \u0275\u0275text(5, "+ Ajouter une question");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProAnnuaireComponent_Conditional_17_Conditional_6_Template, 2, 0, "div", 67);
    \u0275\u0275elementStart(7, "div", 68);
    \u0275\u0275repeaterCreate(8, ProAnnuaireComponent_Conditional_17_For_9_Template, 24, 2, "div", 69, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(6, ctx_r0.faqArray.length === 0 ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.faqArray.controls);
  }
}
function ProAnnuaireComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function ProAnnuaireComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeTab.set(ctx_r0.activeTab() - 1));
    });
    \u0275\u0275text(1, "\u2039 Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
  }
}
function ProAnnuaireComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function ProAnnuaireComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeTab.set(ctx_r0.activeTab() + 1));
    });
    \u0275\u0275text(1, "Suivant \u203A");
    \u0275\u0275elementEnd();
  }
}
function ProAnnuaireComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 83);
    \u0275\u0275text(1, " Enregistrement\u2026 ");
  }
}
function ProAnnuaireComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.annuaireId() ? "Mettre \xE0 jour" : "Soumettre la fiche", " ");
  }
}
function ProAnnuaireComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.apiError());
  }
}
var TABS = ["Identit\xE9", "Contact", "Descriptions", "R\xE9seaux sociaux", "FAQ"];
var STRUCTURE_TYPES = [
  { value: "cooperative", label: "Coop\xE9rative" },
  { value: "sarl", label: "SARL" },
  { value: "association", label: "Association" },
  { value: "artisan_independant", label: "Artisan ind\xE9pendant" },
  { value: "entreprise_individuelle", label: "Entreprise individuelle" },
  { value: "groupement_interet_economique", label: "GIE" }
];
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
var REGIONS = [
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
var ProAnnuaireComponent = class _ProAnnuaireComponent {
  constructor() {
    this.api = inject(ApiService);
    this.auth = inject(AuthService);
    this.fb = inject(FormBuilder);
    this.tabs = TABS;
    this.structureTypes = STRUCTURE_TYPES;
    this.domains = DOMAINS;
    this.regions = REGIONS;
    this.activeTab = signal(0);
    this.isSaving = signal(false);
    this.isActive = signal(false);
    this.annuaireId = signal(null);
    this.successMsg = signal("");
    this.apiError = signal("");
    this.langs = [
      { code: "fr", label: "Fran\xE7ais", rtl: false, placeholder: "En fran\xE7ais\u2026" },
      { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", rtl: true, placeholder: "\u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629\u2026" },
      { code: "en", label: "English", rtl: false, placeholder: "In English\u2026" },
      { code: "darija", label: "\u0627\u0644\u062F\u0627\u0631\u062C\u0629", rtl: true, placeholder: "\u0628\u0627\u0644\u062F\u0627\u0631\u062C\u0629\u2026" }
    ];
    this.socials = [
      { key: "facebook", label: "Facebook", icon: "\u{1F4D8}", placeholder: "https://facebook.com/..." },
      { key: "instagram", label: "Instagram", icon: "\u{1F4F8}", placeholder: "https://instagram.com/..." },
      { key: "youtube", label: "YouTube", icon: "\u25B6\uFE0F", placeholder: "https://youtube.com/..." },
      { key: "twitter", label: "Twitter/X", icon: "\u{1F426}", placeholder: "https://twitter.com/..." },
      { key: "linkedin", label: "LinkedIn", icon: "\u{1F4BC}", placeholder: "https://linkedin.com/..." },
      { key: "tiktok", label: "TikTok", icon: "\u{1F3B5}", placeholder: "https://tiktok.com/..." }
    ];
    this.form = this.fb.group({
      identity: this.fb.group({
        structureName: ["", Validators.required],
        structureType: ["", Validators.required],
        domain: ["", Validators.required],
        foundedYear: [null],
        employeeCount: [null],
        slogan: this.mlGroup()
      }),
      contact: this.fb.group({
        phone: [""],
        fixPhone: [""],
        email: ["", Validators.email],
        website: [""],
        address: [""],
        city: [""],
        province: [""],
        region: [""],
        postalCode: [""],
        coordinates: this.fb.group({ lat: [null], lng: [null] })
      }),
      description: this.mlGroup(),
      presentation: this.mlGroup(),
      socialMedia: this.fb.group({
        facebook: [""],
        instagram: [""],
        youtube: [""],
        twitter: [""],
        linkedin: [""],
        tiktok: [""]
      }),
      faq: this.fb.array([])
    });
  }
  mlGroup() {
    return this.fb.group({ fr: [""], ar: [""], en: [""], darija: [""] });
  }
  get faqArray() {
    return this.form.get("faq");
  }
  f(path) {
    return this.form.get(path);
  }
  hasTabError(tab) {
    if (tab === 0) {
      const g = this.form.get("identity");
      return !!(g?.touched && g?.invalid);
    }
    return false;
  }
  ngOnInit() {
    this.api.get("/annuaire/my").subscribe({
      next: (res) => {
        const a = res.data;
        this.annuaireId.set(a._id);
        this.isActive.set(a.isActive);
        this.patchForm(a);
      },
      error: () => {
      }
    });
  }
  patchForm(a) {
    this.form.get("identity")?.patchValue({
      structureName: a.structureName,
      structureType: a.structureType,
      domain: a.domain,
      foundedYear: a.foundedYear,
      employeeCount: a.employeeCount,
      slogan: a.slogan || {}
    });
    this.form.get("contact")?.patchValue(__spreadProps(__spreadValues({}, a.contact), {
      coordinates: a.contact?.coordinates || { lat: null, lng: null }
    }));
    this.form.get("description")?.patchValue(a.description || {});
    this.form.get("presentation")?.patchValue(a.presentation || {});
    this.form.get("socialMedia")?.patchValue(a.socialMedia || {});
    (a.faq || []).forEach((item) => this.addFaq(item));
  }
  addFaq(data) {
    this.faqArray.push(this.fb.group({
      question: this.fb.group({ fr: [data?.question?.fr || ""], ar: [data?.question?.ar || ""] }),
      answer: this.fb.group({ fr: [data?.answer?.fr || ""], ar: [data?.answer?.ar || ""] })
    }));
  }
  removeFaq(i) {
    this.faqArray.removeAt(i);
  }
  submit() {
    const identity = this.form.get("identity");
    if (identity?.invalid) {
      identity.markAllAsTouched();
      this.activeTab.set(0);
      return;
    }
    this.isSaving.set(true);
    this.apiError.set("");
    this.successMsg.set("");
    const raw = this.form.getRawValue();
    const payload = {
      structureName: raw.identity.structureName,
      structureType: raw.identity.structureType,
      domain: raw.identity.domain,
      foundedYear: raw.identity.foundedYear,
      employeeCount: raw.identity.employeeCount,
      slogan: raw.identity.slogan,
      contact: raw.contact,
      description: raw.description,
      presentation: raw.presentation,
      socialMedia: raw.socialMedia,
      faq: raw.faq
    };
    const request = this.annuaireId() ? this.api.put(`/annuaire/${this.annuaireId()}`, payload) : this.api.post("/annuaire", payload);
    request.subscribe({
      next: (res) => {
        this.isSaving.set(false);
        if (!this.annuaireId()) {
          this.annuaireId.set(res.data?._id);
          this.successMsg.set("Fiche soumise avec succ\xE8s ! Elle est en attente de validation par l'administrateur.");
        } else {
          this.successMsg.set("Fiche mise \xE0 jour avec succ\xE8s !");
        }
      },
      error: (err) => {
        this.isSaving.set(false);
        this.apiError.set(err.error?.error || "Erreur lors de l'enregistrement");
      }
    });
  }
  static {
    this.\u0275fac = function ProAnnuaireComponent_Factory(t) {
      return new (t || _ProAnnuaireComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProAnnuaireComponent, selectors: [["app-pro-annuaire"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 14, consts: [[1, "pro-annuaire"], [1, "page-header"], [1, "sub"], [1, "status-badge", 3, "active", "pending"], [1, "alert", "success"], [1, "tabs-nav"], [1, "tab-btn", 3, "active"], [3, "ngSubmit", "formGroup"], ["formGroupName", "identity", 1, "tab-panel"], ["formGroupName", "contact", 1, "tab-panel"], [1, "tab-panel"], ["formGroupName", "socialMedia", 1, "tab-panel"], [1, "form-footer"], [1, "footer-nav"], ["type", "button", 1, "btn-ghost"], ["type", "button", 1, "btn-primary"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "alert", "error"], [1, "status-badge"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "18", "height", "18"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "tab-btn", 3, "click"], [1, "tab-err"], [1, "form-row"], [1, "field", "required"], ["formControlName", "structureName", "placeholder", "Ex: Coop\xE9rative Argane de l'Atlas"], [1, "err"], [1, "form-row", "two"], ["formControlName", "structureType"], ["value", ""], [3, "value"], ["formControlName", "domain"], [1, "field"], ["type", "number", "formControlName", "foundedYear", "placeholder", "Ex: 2010", "min", "1900", "max", "2025"], ["type", "number", "formControlName", "employeeCount", "placeholder", "Ex: 12", "min", "0"], [1, "ml-group"], [1, "ml-header"], [1, "hint"], ["formGroupName", "slogan", 1, "ml-fields"], [1, "ml-field"], [1, "lang-label"], [3, "formControlName", "dir", "placeholder"], ["formControlName", "phone", "placeholder", "+212 6XX XXX XXX"], ["formControlName", "fixPhone", "placeholder", "+212 5XX XXX XXX"], ["type", "email", "formControlName", "email", "placeholder", "contact@structure.ma"], ["formControlName", "website", "placeholder", "https://www.structure.ma"], ["formControlName", "address", "placeholder", "N\xB0 rue, quartier\u2026"], [1, "form-row", "three"], ["formControlName", "city", "placeholder", "Marrakech"], ["formControlName", "province", "placeholder", "Province"], ["formControlName", "region"], ["formGroupName", "coordinates", 1, "field"], ["type", "number", "formControlName", "lat", "placeholder", "31.6295", "step", "any"], ["type", "number", "formControlName", "lng", "placeholder", "-7.9811", "step", "any"], ["formGroupName", "description", 1, "ml-fields", "vertical"], [1, "ml-field", "wide"], ["formGroupName", "presentation", 1, "ml-fields", "vertical"], ["rows", "2", 3, "formControlName", "dir", "placeholder"], ["rows", "4", 3, "formControlName", "dir", "placeholder"], [1, "social-row"], [1, "social-icon"], [1, "field", "grow"], [3, "formControlName", "placeholder"], [1, "faq-header"], [1, "hint-text"], ["type", "button", 1, "btn-outline-sm", 3, "click"], [1, "empty-faq"], ["formArrayName", "faq", 1, "faq-list"], [1, "faq-item", 3, "formGroupName"], [1, "faq-item-header"], ["type", "button", 1, "btn-remove", 3, "click"], [1, "ml-fields"], ["formGroupName", "question", 1, "ml-field"], ["formControlName", "fr", "placeholder", "Question en fran\xE7ais\u2026"], [1, "lang-label", "rtl"], ["formControlName", "ar", "dir", "rtl", "placeholder", "\u0627\u0644\u0633\u0624\u0627\u0644 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629\u2026"], [1, "ml-fields", "mt-sm"], ["formGroupName", "answer", 1, "ml-field"], ["formControlName", "fr", "rows", "2", "placeholder", "R\xE9ponse en fran\xE7ais\u2026"], ["formControlName", "ar", "dir", "rtl", "rows", "2", "placeholder", "\u0627\u0644\u062C\u0648\u0627\u0628 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629\u2026"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "spinner"]], template: function ProAnnuaireComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Ma Fiche Annuaire");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ProAnnuaireComponent_Conditional_7_Template, 2, 5, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, ProAnnuaireComponent_Conditional_8_Template, 5, 1, "div", 4);
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275repeaterCreate(10, ProAnnuaireComponent_For_11_Template, 3, 4, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "form", 7);
        \u0275\u0275listener("ngSubmit", function ProAnnuaireComponent_Template_form_ngSubmit_12_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(13, ProAnnuaireComponent_Conditional_13_Template, 41, 1, "div", 8)(14, ProAnnuaireComponent_Conditional_14_Template, 49, 0, "div", 9)(15, ProAnnuaireComponent_Conditional_15_Template, 17, 0, "div", 10)(16, ProAnnuaireComponent_Conditional_16_Template, 3, 0, "div", 11)(17, ProAnnuaireComponent_Conditional_17_Template, 10, 1, "div", 10);
        \u0275\u0275elementStart(18, "div", 12)(19, "div", 13);
        \u0275\u0275template(20, ProAnnuaireComponent_Conditional_20_Template, 2, 0, "button", 14)(21, ProAnnuaireComponent_Conditional_21_Template, 2, 0, "button", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 16);
        \u0275\u0275template(23, ProAnnuaireComponent_Conditional_23_Template, 2, 0)(24, ProAnnuaireComponent_Conditional_24_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, ProAnnuaireComponent_Conditional_25_Template, 2, 1, "div", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.annuaireId() ? "Modifier votre fiche" : "Cr\xE9er votre fiche publique");
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.annuaireId() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.successMsg() ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(13, ctx.activeTab() === 0 ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ctx.activeTab() === 1 ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.activeTab() === 2 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(16, ctx.activeTab() === 3 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.activeTab() === 4 ? 17 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(20, ctx.activeTab() > 0 ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(21, ctx.activeTab() < ctx.tabs.length - 1 ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isSaving());
        \u0275\u0275advance();
        \u0275\u0275conditional(23, ctx.isSaving() ? 23 : 24);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(25, ctx.apiError() ? 25 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], styles: ['\n\n.pro-annuaire[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: 1.25rem 1.5rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.2rem;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: rgba(243, 156, 18, 0.1);\n  color: #d68910;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  font-size: 0.85rem;\n}\n.alert.success[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  border: 1px solid rgba(39, 174, 96, 0.2);\n  color: #27ae60;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n}\n.tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  border-bottom: 2px solid var(--card-border);\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem;\n  background: none;\n  border: none;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.2s, border-color 0.2s;\n  position: relative;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #8B4513;\n  border-bottom-color: #8B4513;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--text-primary);\n}\n.tab-err[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #e74c3c;\n}\n.tab-panel[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 0 var(--radius-lg) var(--radius-lg) var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-row.two[_ngcontent-%COMP%]    > .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.form-row.three[_ngcontent-%COMP%]    > .field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  flex: 1;\n}\n.field.required[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]::after {\n  content: " *";\n  color: #e74c3c;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.8rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: inherit;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 70px;\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #e74c3c;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  font-weight: 400;\n}\n.ml-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.ml-header[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  border-left: 3px solid #8B4513;\n  padding-left: 0.625rem;\n}\n.ml-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.ml-fields.vertical[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.ml-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.ml-field.wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.lang-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #8B4513;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.lang-label.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.social-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.875rem;\n}\n.social-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  padding-bottom: 0.45rem;\n}\n.grow[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.faq-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.hint-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-outline-sm[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.875rem;\n  border: 1.5px solid #8B4513;\n  color: #8B4513;\n  background: transparent;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-outline-sm[_ngcontent-%COMP%]:hover {\n  background: rgba(139, 69, 19, 0.06);\n}\n.empty-faq[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  border: 1.5px dashed var(--card-border);\n  border-radius: 10px;\n}\n.faq-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.faq-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--card-border);\n  border-radius: 10px;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.faq-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #e74c3c;\n  cursor: pointer;\n  font-size: 0.9rem;\n  padding: 0.1rem 0.4rem;\n}\n.mt-sm[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 0;\n  gap: 1rem;\n}\n.footer-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 0.55rem 1rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: #8B4513;\n  color: #8B4513;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 0.55rem 1rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513,\n      #d4af6a);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition:\n    opacity 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n  box-shadow: var(--shadow-sm);\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-md);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=pro-annuaire.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProAnnuaireComponent, { className: "ProAnnuaireComponent", filePath: "src\\app\\features\\pro\\annuaire\\pro-annuaire.component.ts", lineNumber: 388 });
})();
export {
  ProAnnuaireComponent
};
//# sourceMappingURL=chunk-N5L6YBZ3.js.map
