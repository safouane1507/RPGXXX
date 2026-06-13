import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-JXVZJL7I.js";
import {
  AuthService
} from "./chunk-SCCTXVTR.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4ELZIBL4.js";

// src/app/features/client/profile/client-profile.component.ts
var _forTrack0 = ($index, $item) => $item.code;
function ClientProfileComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2, "\u{1F4DE}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx_r0.user()) == null ? null : tmp_1_0.phone, "");
  }
}
function ClientProfileComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx_r0.user()) == null ? null : tmp_1_0.address == null ? null : tmp_1_0.address.city, "");
  }
}
function ClientProfileComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r0.infoSuccess(), "");
  }
}
function ClientProfileComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.infoError());
  }
}
function ClientProfileComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function ClientProfileComponent_For_51_Template_button_click_0_listener() {
      const l_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.infoForm.patchValue({ preferredLanguage: l_r3.code }));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.infoForm.value.preferredLanguage === l_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", l_r3.flag, " ", l_r3.label, " ");
  }
}
function ClientProfileComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function ClientProfileComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r0.pwdSuccess(), "");
  }
}
function ClientProfileComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pwdError());
  }
}
function ClientProfileComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "8 caract\xE8res minimum");
    \u0275\u0275elementEnd();
  }
}
function ClientProfileComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Les mots de passe ne correspondent pas");
    \u0275\u0275elementEnd();
  }
}
function ClientProfileComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function pwdMatch(ctrl) {
  const a = ctrl.get("newPassword")?.value;
  const b = ctrl.get("confirmPassword")?.value;
  return a && b && a !== b ? { mismatch: true } : null;
}
var LANGS = [
  { code: "fr", label: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", flag: "\u{1F1F2}\u{1F1E6}" },
  { code: "en", label: "English", flag: "\u{1F1EC}\u{1F1E7}" },
  { code: "darija", label: "Darija", flag: "\u{1F31F}" }
];
var ClientProfileComponent = class _ClientProfileComponent {
  constructor() {
    this.api = inject(ApiService);
    this.auth = inject(AuthService);
    this.fb = inject(FormBuilder);
    this.user = signal(null);
    this.infoSuccess = signal("");
    this.infoError = signal("");
    this.pwdSuccess = signal("");
    this.pwdError = signal("");
    this.savingInfo = signal(false);
    this.savingPwd = signal(false);
    this.showCurrent = signal(false);
    this.showNew = signal(false);
    this.showConfirm = signal(false);
    this.langs = LANGS;
    this.infoForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      phone: [""],
      preferredLanguage: ["fr"]
    });
    this.pwdForm = this.fb.group({
      currentPassword: ["", Validators.required],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    }, { validators: pwdMatch });
  }
  ngOnInit() {
    this.api.get("/auth/me").subscribe({
      next: (res) => {
        const u = res.user;
        this.user.set(u);
        this.infoForm.patchValue({
          firstName: u.firstName || "",
          lastName: u.lastName || "",
          phone: u.phone || "",
          preferredLanguage: u.preferredLanguage || "fr"
        });
      }
    });
  }
  initials() {
    const u = this.user();
    if (!u)
      return "?";
    const fn = u.firstName?.[0] || "";
    const ln = u.lastName?.[0] || "";
    return (fn + ln).toUpperCase() || u.email?.[0]?.toUpperCase() || "?";
  }
  roleLabel() {
    const roles = { admin: "\u{1F534} Admin", pro: "\u{1F7E0} Acteur Pro", client: "\u{1F7E2} Client" };
    return roles[this.user()?.role] || "Membre";
  }
  langLabel(code) {
    return LANGS.find((l) => l.code === code)?.label || code;
  }
  inv(form, field) {
    const c = form.get(field);
    return !!(c?.invalid && c?.touched);
  }
  saveInfo() {
    if (this.infoForm.invalid)
      return;
    this.savingInfo.set(true);
    this.infoError.set("");
    const v = this.infoForm.getRawValue();
    this.api.put("/auth/me", v).subscribe({
      next: (res) => {
        if (res?.user) {
          this.user.set(res.user);
          this.auth.currentUser.set(res.user);
        }
        this.savingInfo.set(false);
        this.infoSuccess.set("Profil mis \xE0 jour avec succ\xE8s !");
        setTimeout(() => this.infoSuccess.set(""), 4e3);
      },
      error: (err) => {
        this.savingInfo.set(false);
        this.infoError.set(err.error?.error || "Erreur lors de la mise \xE0 jour");
      }
    });
  }
  savePwd() {
    if (this.pwdForm.invalid) {
      this.pwdForm.markAllAsTouched();
      return;
    }
    this.savingPwd.set(true);
    this.pwdError.set("");
    const v = this.pwdForm.getRawValue();
    this.api.patch("/auth/change-password", {
      currentPassword: v.currentPassword,
      newPassword: v.newPassword
    }).subscribe({
      next: () => {
        this.savingPwd.set(false);
        this.pwdSuccess.set("Mot de passe modifi\xE9 avec succ\xE8s !");
        this.pwdForm.reset();
        setTimeout(() => this.pwdSuccess.set(""), 4e3);
      },
      error: (err) => {
        this.savingPwd.set(false);
        this.pwdError.set(err.error?.error || "Erreur lors du changement de mot de passe");
      }
    });
  }
  static {
    this.\u0275fac = function ClientProfileComponent_Factory(t) {
      return new (t || _ClientProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientProfileComponent, selectors: [["app-client-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 89, vars: 33, consts: [[1, "profile-page"], [1, "container"], [1, "page-header"], ["routerLink", "/", 1, "btn-back"], [1, "profile-layout"], [1, "profile-card"], [1, "avatar-circle"], [1, "role-badge"], [1, "profile-meta"], [1, "meta-row"], [1, "profile-forms"], [1, "form-section"], [1, "alert", "success"], [1, "alert", "error"], [3, "ngSubmit", "formGroup"], [1, "row-2"], [1, "field"], ["formControlName", "firstName"], ["formControlName", "lastName"], ["formControlName", "phone", "type", "tel"], [1, "lang-chips"], ["type", "button", 1, "lang-chip", 3, "active"], [1, "form-footer"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "spinner"], [1, "pwd-wrap"], ["formControlName", "currentPassword", 3, "type"], ["type", "button", 1, "eye", 3, "click"], ["formControlName", "newPassword", "placeholder", "8 caract\xE8res minimum", 3, "type"], [1, "err"], ["formControlName", "confirmPassword", 3, "type"], ["type", "button", 1, "lang-chip", 3, "click"]], template: function ClientProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Mon Profil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 3);
        \u0275\u0275text(6, "\u2190 Retour \xE0 l'accueil");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "aside", 5)(9, "div", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h2");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 7);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "span");
        \u0275\u0275text(18, "\u{1F4E7}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, ClientProfileComponent_Conditional_20_Template, 4, 1, "div", 9)(21, ClientProfileComponent_Conditional_21_Template, 4, 1, "div", 9);
        \u0275\u0275elementStart(22, "div", 9)(23, "span");
        \u0275\u0275text(24, "\u{1F310}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 10)(27, "section", 11)(28, "h3");
        \u0275\u0275text(29, "\u270F\uFE0F Informations personnelles");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, ClientProfileComponent_Conditional_30_Template, 2, 1, "div", 12)(31, ClientProfileComponent_Conditional_31_Template, 2, 1, "div", 13);
        \u0275\u0275elementStart(32, "form", 14);
        \u0275\u0275listener("ngSubmit", function ClientProfileComponent_Template_form_ngSubmit_32_listener() {
          return ctx.saveInfo();
        });
        \u0275\u0275elementStart(33, "div", 15)(34, "div", 16)(35, "label");
        \u0275\u0275text(36, "Pr\xE9nom");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 16)(39, "label");
        \u0275\u0275text(40, "Nom");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "input", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 16)(43, "label");
        \u0275\u0275text(44, "T\xE9l\xE9phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "input", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 16)(47, "label");
        \u0275\u0275text(48, "Langue pr\xE9f\xE9r\xE9e");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 20);
        \u0275\u0275repeaterCreate(50, ClientProfileComponent_For_51_Template, 2, 4, "button", 21, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 22)(53, "button", 23);
        \u0275\u0275template(54, ClientProfileComponent_Conditional_54_Template, 1, 0, "span", 24);
        \u0275\u0275text(55, " Enregistrer les modifications ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "section", 11)(57, "h3");
        \u0275\u0275text(58, "\u{1F510} Changer le mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275template(59, ClientProfileComponent_Conditional_59_Template, 2, 1, "div", 12)(60, ClientProfileComponent_Conditional_60_Template, 2, 1, "div", 13);
        \u0275\u0275elementStart(61, "form", 14);
        \u0275\u0275listener("ngSubmit", function ClientProfileComponent_Template_form_ngSubmit_61_listener() {
          return ctx.savePwd();
        });
        \u0275\u0275elementStart(62, "div", 16)(63, "label");
        \u0275\u0275text(64, "Mot de passe actuel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 25);
        \u0275\u0275element(66, "input", 26);
        \u0275\u0275elementStart(67, "button", 27);
        \u0275\u0275listener("click", function ClientProfileComponent_Template_button_click_67_listener() {
          return ctx.showCurrent.set(!ctx.showCurrent());
        });
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "div", 16)(70, "label");
        \u0275\u0275text(71, "Nouveau mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 25);
        \u0275\u0275element(73, "input", 28);
        \u0275\u0275elementStart(74, "button", 27);
        \u0275\u0275listener("click", function ClientProfileComponent_Template_button_click_74_listener() {
          return ctx.showNew.set(!ctx.showNew());
        });
        \u0275\u0275text(75);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(76, ClientProfileComponent_Conditional_76_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 16)(78, "label");
        \u0275\u0275text(79, "Confirmer le nouveau mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 25);
        \u0275\u0275element(81, "input", 30);
        \u0275\u0275elementStart(82, "button", 27);
        \u0275\u0275listener("click", function ClientProfileComponent_Template_button_click_82_listener() {
          return ctx.showConfirm.set(!ctx.showConfirm());
        });
        \u0275\u0275text(83);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(84, ClientProfileComponent_Conditional_84_Template, 2, 0, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 22)(86, "button", 23);
        \u0275\u0275template(87, ClientProfileComponent_Conditional_87_Template, 1, 0, "span", 24);
        \u0275\u0275text(88, " Changer le mot de passe ");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_24_0;
        let tmp_27_0;
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.initials(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(((tmp_1_0 = ctx.user()) == null ? null : tmp_1_0.fullName) || ((tmp_1_0 = ctx.user()) == null ? null : tmp_1_0.email));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.roleLabel());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.email, "");
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ((tmp_4_0 = ctx.user()) == null ? null : tmp_4_0.phone) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(21, ((tmp_5_0 = ctx.user()) == null ? null : tmp_5_0.address == null ? null : tmp_5_0.address.city) ? 21 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.langLabel((tmp_6_0 = ctx.user()) == null ? null : tmp_6_0.preferredLanguage), "");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(30, ctx.infoSuccess() ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ctx.infoError() ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.infoForm);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("invalid", ctx.inv(ctx.infoForm, "firstName"));
        \u0275\u0275advance(4);
        \u0275\u0275classProp("invalid", ctx.inv(ctx.infoForm, "lastName"));
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.langs);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.savingInfo());
        \u0275\u0275advance();
        \u0275\u0275conditional(54, ctx.savingInfo() ? 54 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(59, ctx.pwdSuccess() ? 59 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(60, ctx.pwdError() ? 60 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.pwdForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("type", ctx.showCurrent() ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.showCurrent() ? "\u{1F648}" : "\u{1F441}\uFE0F");
        \u0275\u0275advance();
        \u0275\u0275classProp("invalid", ctx.inv(ctx.pwdForm, "newPassword"));
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.showNew() ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.showNew() ? "\u{1F648}" : "\u{1F441}\uFE0F");
        \u0275\u0275advance();
        \u0275\u0275conditional(76, ctx.inv(ctx.pwdForm, "newPassword") ? 76 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("invalid", ctx.pwdForm.hasError("mismatch") && ((tmp_24_0 = ctx.pwdForm.get("confirmPassword")) == null ? null : tmp_24_0.touched));
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.showConfirm() ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.showConfirm() ? "\u{1F648}" : "\u{1F441}\uFE0F");
        \u0275\u0275advance();
        \u0275\u0275conditional(84, ctx.pwdForm.hasError("mismatch") && ((tmp_27_0 = ctx.pwdForm.get("confirmPassword")) == null ? null : tmp_27_0.touched) ? 84 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.savingPwd());
        \u0275\u0275advance();
        \u0275\u0275conditional(87, ctx.savingPwd() ? 87 : -1);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  padding: 2rem 0 4rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #8B4513;\n  text-decoration: none;\n  font-weight: 600;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.profile-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 1.75rem;\n  align-items: start;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 16px;\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  text-align: center;\n  position: sticky;\n  top: 80px;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513,\n      #D4AF6A);\n  color: #fff;\n  font-size: 1.75rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.975rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.role-badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.65rem;\n  background: rgba(139, 69, 19, 0.1);\n  color: #8B4513;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.profile-meta[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  border-top: 1px solid var(--card-border);\n  padding-top: 1rem;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n}\n.profile-forms[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 14px;\n  padding: 1.5rem;\n}\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 1.25rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.83rem;\n  font-weight: 500;\n  margin-bottom: 0.875rem;\n}\n.alert.success[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  border: 1px solid rgba(39, 174, 96, 0.2);\n  color: #27ae60;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.8rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 9px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\n.field.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #e74c3c;\n}\n.lang-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n}\n.lang-chip[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.65rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 20px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.78rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.lang-chip.active[_ngcontent-%COMP%] {\n  background: #8B4513;\n  color: #fff;\n  border-color: #8B4513;\n}\n.pwd-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pwd-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 2.5rem;\n}\n.eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.6rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0.375rem;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 0.55rem 1.25rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 9px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .profile-card[_ngcontent-%COMP%] {\n    position: relative;\n    top: 0;\n  }\n  .row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=client-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientProfileComponent, { className: "ClientProfileComponent", filePath: "src\\app\\features\\client\\profile\\client-profile.component.ts", lineNumber: 186 });
})();
export {
  ClientProfileComponent
};
//# sourceMappingURL=chunk-OAGR65RF.js.map
