import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
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
  ɵɵattribute,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/admin/tourism/tourism-admin.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item._id;
function TourismAdminComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.label);
  }
}
function TourismAdminComponent_Conditional_18_Template(rf, ctx) {
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
function TourismAdminComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function TourismAdminComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Aucun lieu trouv\xE9. Ajoutez le premier !");
    \u0275\u0275elementEnd();
  }
}
function TourismAdminComponent_Conditional_21_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r4.coverImage, \u0275\u0275sanitizeUrl)("alt", p_r4.name == null ? null : p_r4.name.fr);
  }
}
function TourismAdminComponent_Conditional_21_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "\u{1F5FA}\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function TourismAdminComponent_Conditional_21_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.name.ar);
  }
}
function TourismAdminComponent_Conditional_21_For_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "\u2605 Mis en avant");
    \u0275\u0275elementEnd();
  }
}
function TourismAdminComponent_Conditional_21_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.location.region);
  }
}
function TourismAdminComponent_Conditional_21_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275template(2, TourismAdminComponent_Conditional_21_For_18_Conditional_2_Template, 1, 2, "img", 17)(3, TourismAdminComponent_Conditional_21_For_18_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TourismAdminComponent_Conditional_21_For_18_Conditional_7_Template, 2, 1, "small", 18)(8, TourismAdminComponent_Conditional_21_For_18_Conditional_8_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 21);
    \u0275\u0275text(13);
    \u0275\u0275template(14, TourismAdminComponent_Conditional_21_For_18_Conditional_14_Template, 2, 1, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 22);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 23)(19, "button", 24);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_21_For_18_Template_button_click_19_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openForm(p_r4));
    });
    \u0275\u0275text(20, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 25);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_21_For_18_Template_button_click_21_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleActive(p_r4));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 26);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_21_For_18_Template_button_click_23_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeatured(p_r4));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 27);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_21_For_18_Template_button_click_25_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deletePlace(p_r4._id));
    });
    \u0275\u0275text(26, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, p_r4.coverImage ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((p_r4.name == null ? null : p_r4.name.fr) || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(7, (p_r4.name == null ? null : p_r4.name.ar) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, p_r4.isFeatured ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-type", p_r4.locationType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(p_r4.locationType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (p_r4.location == null ? null : p_r4.location.city) || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(14, (p_r4.location == null ? null : p_r4.location.region) ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", p_r4.isActive)("inactive", !p_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.isActive ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", p_r4.isActive ? "D\xE9sactiver" : "Activer");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.isActive ? "\u{1F534}" : "\u{1F7E2}");
    \u0275\u0275advance();
    \u0275\u0275property("title", p_r4.isFeatured ? "Retirer vedette" : "Mettre en avant");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.isFeatured ? "\u2B50" : "\u2606");
  }
}
function TourismAdminComponent_Conditional_21_Conditional_19_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_21_Conditional_19_For_4_Template_button_click_0_listener() {
      const n_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goPage(n_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", n_r7 === ctx_r1.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r7);
  }
}
function TourismAdminComponent_Conditional_21_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 29);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_21_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goPage(ctx_r1.page() - 1));
    });
    \u0275\u0275text(2, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TourismAdminComponent_Conditional_21_Conditional_19_For_4_Template, 2, 3, "button", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_21_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goPage(ctx_r1.page() + 1));
    });
    \u0275\u0275text(6, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pagesArray());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page() === ctx_r1.pages());
  }
}
function TourismAdminComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, TourismAdminComponent_Conditional_21_For_18_Template, 27, 17, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, TourismAdminComponent_Conditional_21_Conditional_19_Template, 7, 2, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.places());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(19, ctx_r1.pages() > 1 ? 19 : -1);
  }
}
function TourismAdminComponent_Conditional_22_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275property("value", t_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r9.label);
  }
}
function TourismAdminComponent_Conditional_22_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275property("value", r_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r10);
  }
}
function TourismAdminComponent_Conditional_22_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "img", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.form.value.coverImage, \u0275\u0275sanitizeUrl);
  }
}
function TourismAdminComponent_Conditional_22_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError());
  }
}
function TourismAdminComponent_Conditional_22_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 62);
  }
}
function TourismAdminComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 34)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 36);
    \u0275\u0275listener("ngSubmit", function TourismAdminComponent_Conditional_22_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275text(9, "Nom du lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 38)(11, "div", 39)(12, "label");
    \u0275\u0275text(13, "Nom (FR) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 39)(16, "label");
    \u0275\u0275text(17, "\u0627\u0644\u0627\u0633\u0645 (AR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 38)(20, "div", 39)(21, "label");
    \u0275\u0275text(22, "Type de lieu *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 42)(24, "option", 6);
    \u0275\u0275text(25, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, TourismAdminComponent_Conditional_22_For_27_Template, 2, 2, "option", 7, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 39)(29, "label");
    \u0275\u0275text(30, "R\xE9gion *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 43)(32, "option", 6);
    \u0275\u0275text(33, "\u2014 R\xE9gion \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(34, TourismAdminComponent_Conditional_22_For_35_Template, 2, 2, "option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 39)(37, "label");
    \u0275\u0275text(38, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 39)(41, "label");
    \u0275\u0275text(42, "Image de couverture (URL)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 45);
    \u0275\u0275template(44, TourismAdminComponent_Conditional_22_Conditional_44_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 37);
    \u0275\u0275text(46, "Descriptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 39)(48, "label");
    \u0275\u0275text(49, "Description courte (FR) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 39)(52, "label");
    \u0275\u0275text(53, "\u0648\u0635\u0641 \u0645\u062E\u062A\u0635\u0631 (AR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "textarea", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 39)(56, "label");
    \u0275\u0275text(57, "Article complet (FR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "textarea", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 37);
    \u0275\u0275text(60, "Informations pratiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 38)(62, "div", 39)(63, "label");
    \u0275\u0275text(64, "Meilleure saison (FR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 39)(67, "label");
    \u0275\u0275text(68, "Droits d'entr\xE9e (FR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 39)(71, "label");
    \u0275\u0275text(72, "Comment y acc\xE9der (FR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "textarea", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 37);
    \u0275\u0275text(75, "Coordonn\xE9es GPS (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 38)(77, "div", 39)(78, "label");
    \u0275\u0275text(79, "Latitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 39)(82, "label");
    \u0275\u0275text(83, "Longitude");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 39)(86, "label");
    \u0275\u0275text(87, "Activer imm\xE9diatement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 55);
    \u0275\u0275element(89, "input", 56);
    \u0275\u0275elementStart(90, "label", 57);
    \u0275\u0275text(91, "Lieu visible sur le site public");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(92, TourismAdminComponent_Conditional_22_Conditional_92_Template, 2, 1, "div", 58);
    \u0275\u0275elementStart(93, "div", 59)(94, "button", 60);
    \u0275\u0275listener("click", function TourismAdminComponent_Conditional_22_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(95, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 61);
    \u0275\u0275template(97, TourismAdminComponent_Conditional_22_Conditional_97_Template, 1, 0, "span", 62);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editId() ? "Modifier le lieu" : "Nouveau lieu touristique");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.locationTypes);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.moroccanRegions);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(44, ctx_r1.form.value.coverImage ? 44 : -1);
    \u0275\u0275advance(48);
    \u0275\u0275conditional(92, ctx_r1.formError() ? 92 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(97, ctx_r1.saving() ? 97 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editId() ? "Mettre \xE0 jour" : "Cr\xE9er le lieu", " ");
  }
}
var LOCATION_TYPES = [
  { id: "city", label: "Ville" },
  { id: "medina", label: "M\xE9dina" },
  { id: "rural_region", label: "R\xE9gion Rurale" },
  { id: "monument", label: "Monument" },
  { id: "nature", label: "Nature" },
  { id: "beach", label: "Plage" },
  { id: "mountain", label: "Montagne" },
  { id: "oasis", label: "Oasis" },
  { id: "souk", label: "Souk" },
  { id: "museum", label: "Mus\xE9e" },
  { id: "festival", label: "Festival" }
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
var TourismAdminComponent = class _TourismAdminComponent {
  constructor() {
    this.api = inject(ApiService);
    this.fb = inject(FormBuilder);
    this.places = signal([]);
    this.total = signal(0);
    this.page = signal(1);
    this.pages = signal(1);
    this.pagesArray = signal([]);
    this.isLoading = signal(true);
    this.filterType = signal("");
    this.searchTerm = signal("");
    this.formOpen = signal(false);
    this.editId = signal(null);
    this.saving = signal(false);
    this.successMsg = signal("");
    this.formError = signal("");
    this.locationTypes = LOCATION_TYPES;
    this.moroccanRegions = MOROCCAN_REGIONS;
    this.form = this.fb.group({
      nameFr: ["", Validators.required],
      nameAr: [""],
      locationType: ["", Validators.required],
      region: ["", Validators.required],
      city: [""],
      coverImage: [""],
      shortDescFr: ["", Validators.required],
      shortDescAr: [""],
      fullArticleFr: [""],
      bestSeasonFr: [""],
      entryFeeFr: [""],
      howToGetFr: [""],
      lat: [null],
      lng: [null],
      isActive: [false]
    });
  }
  typeLabel(id) {
    return LOCATION_TYPES.find((t) => t.id === id)?.label || id;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.isLoading.set(true);
    const params = { page: this.page(), limit: 20 };
    if (this.filterType())
      params["locationType"] = this.filterType();
    if (this.searchTerm())
      params["search"] = this.searchTerm();
    this.api.get("/tourism/admin-all", params).subscribe({
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
  goPage(n) {
    this.page.set(n);
    this.load();
  }
  openForm(place) {
    this.formError.set("");
    if (place) {
      this.editId.set(place._id);
      const lat = place.location?.coordinates?.coordinates?.[1] ?? null;
      const lng = place.location?.coordinates?.coordinates?.[0] ?? null;
      this.form.patchValue({
        nameFr: place.name?.fr || "",
        nameAr: place.name?.ar || "",
        locationType: place.locationType || "",
        region: place.location?.region || "",
        city: place.location?.city || "",
        coverImage: place.coverImage || "",
        shortDescFr: place.shortDescription?.fr || "",
        shortDescAr: place.shortDescription?.ar || "",
        fullArticleFr: place.fullArticle?.fr || "",
        bestSeasonFr: place.practicalInfo?.bestSeason?.fr || "",
        entryFeeFr: place.practicalInfo?.entryFee?.fr || "",
        howToGetFr: place.practicalInfo?.howToGet?.fr || "",
        lat,
        lng,
        isActive: place.isActive ?? false
      });
    } else {
      this.editId.set(null);
      this.form.reset({ isActive: false });
    }
    this.formOpen.set(true);
  }
  closeForm() {
    this.formOpen.set(false);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.formError.set("");
    const v = this.form.getRawValue();
    const payload = {
      name: { fr: v.nameFr, ar: v.nameAr },
      locationType: v.locationType,
      coverImage: v.coverImage || null,
      shortDescription: { fr: v.shortDescFr, ar: v.shortDescAr },
      fullArticle: { fr: v.fullArticleFr },
      location: {
        region: v.region,
        city: v.city
      },
      practicalInfo: {
        bestSeason: { fr: v.bestSeasonFr },
        entryFee: { fr: v.entryFeeFr },
        howToGet: { fr: v.howToGetFr }
      },
      isActive: v.isActive
    };
    if (v.lat && v.lng) {
      payload.location.coordinates = {
        type: "Point",
        coordinates: [Number(v.lng), Number(v.lat)]
      };
    }
    const req = this.editId() ? this.api.put(`/tourism/${this.editId()}`, payload) : this.api.post("/tourism", payload);
    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.successMsg.set(this.editId() ? "Lieu mis \xE0 jour !" : "Lieu cr\xE9\xE9 avec succ\xE8s !");
        this.closeForm();
        this.load();
        setTimeout(() => this.successMsg.set(""), 4e3);
      },
      error: (err) => {
        this.saving.set(false);
        this.formError.set(err.error?.error || "Erreur lors de l'enregistrement");
      }
    });
  }
  toggleActive(place) {
    this.api.patch(`/tourism/${place._id}/toggle`, {}).subscribe({
      next: (res) => {
        const updated = res.data;
        this.places.update((list) => list.map((p) => p._id === updated._id ? __spreadProps(__spreadValues({}, p), { isActive: updated.isActive }) : p));
        this.successMsg.set(updated.isActive ? "Lieu activ\xE9." : "Lieu d\xE9sactiv\xE9.");
        setTimeout(() => this.successMsg.set(""), 3e3);
      }
    });
  }
  toggleFeatured(place) {
    this.api.patch(`/tourism/${place._id}/feature`, {}).subscribe({
      next: (res) => {
        const updated = res.data;
        this.places.update((list) => list.map((p) => p._id === updated._id ? __spreadProps(__spreadValues({}, p), { isFeatured: updated.isFeatured }) : p));
        this.successMsg.set(updated.isFeatured ? "\u2605 Mis en avant." : "Retir\xE9 de la vedette.");
        setTimeout(() => this.successMsg.set(""), 3e3);
      }
    });
  }
  deletePlace(id) {
    if (!confirm("Supprimer ce lieu touristique ?"))
      return;
    this.api.delete(`/tourism/${id}`).subscribe({
      next: () => {
        this.places.update((list) => list.filter((p) => p._id !== id));
        this.total.update((n) => n - 1);
        this.successMsg.set("Lieu supprim\xE9.");
        setTimeout(() => this.successMsg.set(""), 3e3);
      }
    });
  }
  static {
    this.\u0275fac = function TourismAdminComponent_Factory(t) {
      return new (t || _TourismAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TourismAdminComponent, selectors: [["app-tourism-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 4, consts: [[1, "tourism-admin"], [1, "page-header"], [1, "sub"], [1, "btn-add", 3, "click"], [1, "filter-bar"], [1, "fs", 3, "change"], ["value", ""], [3, "value"], ["type", "text", "placeholder", "Rechercher\u2026", 1, "fs", "search-in", 3, "input", "keyup.enter"], [1, "btn-search", 3, "click"], [1, "alert", "success"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [1, "admin-table"], [1, "pagination"], [1, "td-thumb"], [3, "src", "alt"], [1, "ar-name"], [1, "feat-tag"], [1, "type-chip"], [1, "td-loc"], [1, "status-dot"], [1, "td-actions"], ["title", "Modifier", 1, "act", "edit", 3, "click"], [1, "act", "toggle", 3, "click", "title"], [1, "act", "feat", 3, "click", "title"], ["title", "Supprimer", 1, "act", "del", 3, "click"], [1, "thumb-ph"], [3, "click", "disabled"], [3, "active"], [3, "click"], [1, "overlay", 3, "click"], [1, "modal"], [1, "modal-header"], [1, "close", 3, "click"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "section-title"], [1, "row-2"], [1, "field"], ["formControlName", "nameFr", "placeholder", "M\xE9dina de F\xE8s\u2026"], ["formControlName", "nameAr", "placeholder", "\u0645\u062F\u064A\u0646\u0629 \u0641\u0627\u0633\u2026", "dir", "rtl"], ["formControlName", "locationType"], ["formControlName", "region"], ["formControlName", "city", "placeholder", "Marrakech, Chefchaouen\u2026"], ["formControlName", "coverImage", "placeholder", "https://\u2026/photo.jpg"], [1, "img-preview"], ["formControlName", "shortDescFr", "rows", "2", "placeholder", "Courte pr\xE9sentation du lieu\u2026"], ["formControlName", "shortDescAr", "rows", "2", "placeholder", "\u0648\u0635\u0641 \u0645\u062E\u062A\u0635\u0631\u2026", "dir", "rtl"], ["formControlName", "fullArticleFr", "rows", "5", "placeholder", "Article d\xE9taill\xE9 sur le lieu\u2026"], ["formControlName", "bestSeasonFr", "placeholder", "Printemps, Automne\u2026"], ["formControlName", "entryFeeFr", "placeholder", "Gratuit / 20 MAD\u2026"], ["formControlName", "howToGetFr", "rows", "2", "placeholder", "Bus n\xB07 depuis Bab Doukala\u2026"], ["formControlName", "lat", "type", "number", "step", "0.000001", "placeholder", "31.6295"], ["formControlName", "lng", "type", "number", "step", "0.000001", "placeholder", "-7.9811"], [1, "toggle-row"], ["type", "checkbox", "formControlName", "isActive", "id", "isActiveChk"], ["for", "isActiveChk", 1, "toggle-label"], [1, "alert", "error"], [1, "modal-footer"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "spinner"], ["alt", "preview", 3, "src"]], template: function TourismAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Gestion du Tourisme");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function TourismAdminComponent_Template_button_click_7_listener() {
          return ctx.openForm();
        });
        \u0275\u0275text(8, "+ Nouveau lieu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "select", 5);
        \u0275\u0275listener("change", function TourismAdminComponent_Template_select_change_10_listener($event) {
          ctx.filterType.set($event.target.value);
          return ctx.load();
        });
        \u0275\u0275elementStart(11, "option", 6);
        \u0275\u0275text(12, "Tous les types");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(13, TourismAdminComponent_For_14_Template, 2, 2, "option", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 8);
        \u0275\u0275listener("input", function TourismAdminComponent_Template_input_input_15_listener($event) {
          return ctx.searchTerm.set($event.target.value);
        })("keyup.enter", function TourismAdminComponent_Template_input_keyup_enter_15_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function TourismAdminComponent_Template_button_click_16_listener() {
          return ctx.load();
        });
        \u0275\u0275text(17, "\u{1F50D}");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, TourismAdminComponent_Conditional_18_Template, 2, 1, "div", 10)(19, TourismAdminComponent_Conditional_19_Template, 2, 0, "div", 11)(20, TourismAdminComponent_Conditional_20_Template, 2, 0)(21, TourismAdminComponent_Conditional_21_Template, 20, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, TourismAdminComponent_Conditional_22_Template, 99, 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.total(), " lieu(x) au total");
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.locationTypes);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(18, ctx.successMsg() ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ctx.isLoading() ? 19 : ctx.places().length === 0 ? 20 : 21);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(22, ctx.formOpen() ? 22 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.tourism-admin[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.2rem;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-add[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background: #27ae60;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.fs[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.625rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.82rem;\n  outline: none;\n}\n.search-in[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.btn-search[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  background: var(--bg-tertiary);\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.85rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.84rem;\n  font-weight: 500;\n}\n.alert.success[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  border: 1px solid rgba(39, 174, 96, 0.2);\n  color: #27ae60;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n}\n.loading[_ngcontent-%COMP%], .empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.admin-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.admin-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.875rem;\n  text-align: left;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 2px solid var(--card-border);\n  white-space: nowrap;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--card-border);\n  transition: background 0.15s;\n}\n.admin-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n}\n.admin-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.875rem;\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.td-thumb[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.td-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 6px;\n  display: block;\n}\n.thumb-ph[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 40px;\n  background: var(--bg-tertiary);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.ar-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.73rem;\n  color: var(--text-muted);\n  direction: rtl;\n}\n.feat-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.4rem;\n  padding: 0.1rem 0.4rem;\n  background: rgba(243, 156, 18, 0.1);\n  color: #f39c12;\n  border-radius: 4px;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.type-chip[_ngcontent-%COMP%] {\n  padding: 0.18rem 0.5rem;\n  border-radius: 5px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(39, 174, 96, 0.08);\n  color: #27ae60;\n}\n.td-loc[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  color: var(--text-muted);\n}\n.status-dot[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.55rem;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.status-dot.active[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n.status-dot.inactive[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-muted);\n}\n.td-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.3rem;\n}\n.act[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.25rem 0.4rem;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  transition: background 0.15s;\n}\n.act[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.7rem;\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #27ae60;\n  color: #fff;\n  border-color: #27ae60;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(640px, 96vw);\n  max-height: 90vh;\n  overflow-y: auto;\n  background: var(--card-bg);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);\n  z-index: 51;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--card-border);\n  position: sticky;\n  top: 0;\n  background: var(--card-bg);\n  z-index: 1;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #27ae60;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding-bottom: 0.25rem;\n  border-bottom: 1px solid var(--card-border);\n  margin-top: 0.25rem;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.875rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.8rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: inherit;\n}\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: #27ae60;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.img-preview[_ngcontent-%COMP%] {\n  margin-top: 0.375rem;\n}\n.img-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.toggle-row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: auto;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  cursor: pointer;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--card-border);\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem;\n  background: var(--bg-secondary);\n  border: 1px solid var(--card-border);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  background: #27ae60;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 520px) {\n  .row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=tourism-admin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TourismAdminComponent, { className: "TourismAdminComponent", filePath: "src\\app\\features\\admin\\tourism\\tourism-admin.component.ts", lineNumber: 309 });
})();
export {
  TourismAdminComponent
};
//# sourceMappingURL=chunk-NIC5GOLE.js.map
