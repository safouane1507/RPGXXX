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
import "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  CommonModule,
  __objRest,
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
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/pro/profile/pro-profile.component.ts
var _forTrack0 = ($index, $item) => $item.code;
function ProProfileComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r0.infoSuccess(), "");
  }
}
function ProProfileComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.infoError());
  }
}
function ProProfileComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ProProfileComponent_For_32_Template_button_click_0_listener() {
      let tmp_11_0;
      const l_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_11_0 = ctx_r0.infoForm.get("preferredLanguage")) == null ? null : tmp_11_0.setValue(l_r3.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const l_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ((tmp_10_0 = ctx_r0.infoForm.get("preferredLanguage")) == null ? null : tmp_10_0.value) === l_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r3.label, " ");
  }
}
function ProProfileComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
function ProProfileComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r0.pwdSuccess(), "");
  }
}
function ProProfileComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pwdError());
  }
}
function ProProfileComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function ProProfileComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "8 caract\xE8res minimum");
    \u0275\u0275elementEnd();
  }
}
function ProProfileComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Les mots de passe ne correspondent pas");
    \u0275\u0275elementEnd();
  }
}
function ProProfileComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
function pwdMatchValidator(g) {
  const pwd = g.get("newPassword")?.value;
  const confirm = g.get("confirmPassword")?.value;
  return pwd && confirm && pwd !== confirm ? { mismatch: true } : null;
}
var ProProfileComponent = class _ProProfileComponent {
  constructor() {
    this.api = inject(ApiService);
    this.auth = inject(AuthService);
    this.fb = inject(FormBuilder);
    this.savingInfo = signal(false);
    this.savingPwd = signal(false);
    this.infoSuccess = signal("");
    this.infoError = signal("");
    this.pwdSuccess = signal("");
    this.pwdError = signal("");
    this.languages = [
      { code: "fr", label: "Fran\xE7ais" },
      { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
      { code: "en", label: "English" },
      { code: "darija", label: "\u0627\u0644\u062F\u0627\u0631\u062C\u0629" }
    ];
    this.infoForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      email: ["", Validators.email],
      phone: [""],
      preferredLanguage: ["fr"]
    });
    this.pwdForm = this.fb.group({
      currentPassword: ["", Validators.required],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    }, { validators: pwdMatchValidator });
  }
  pf(name) {
    return this.pwdForm.get(name);
  }
  ngOnInit() {
    this.api.get("/auth/me").subscribe({
      next: (res) => {
        const u = res.user;
        this.infoForm.patchValue({
          firstName: u.fullName?.split(" ")[0] || "",
          lastName: u.fullName?.split(" ").slice(1).join(" ") || "",
          email: u.email,
          preferredLanguage: u.preferredLanguage || "fr"
        });
      }
    });
  }
  saveInfo() {
    this.savingInfo.set(true);
    this.infoSuccess.set("");
    this.infoError.set("");
    const _a = this.infoForm.getRawValue(), { preferredLanguage } = _a, rest = __objRest(_a, ["preferredLanguage"]);
    const calls = [
      this.api.patch("/auth/preferences", { preferredLanguage })
    ];
    this.api.patch("/auth/preferences", { preferredLanguage }).subscribe({
      next: () => {
        this.savingInfo.set(false);
        this.infoSuccess.set("Informations mises \xE0 jour avec succ\xE8s.");
      },
      error: (err) => {
        this.savingInfo.set(false);
        this.infoError.set(err.error?.error || "Erreur lors de la sauvegarde");
      }
    });
  }
  savePwd() {
    if (this.pwdForm.invalid) {
      this.pwdForm.markAllAsTouched();
      return;
    }
    this.savingPwd.set(true);
    this.pwdSuccess.set("");
    this.pwdError.set("");
    const { currentPassword, newPassword } = this.pwdForm.getRawValue();
    this.api.patch("/auth/change-password", { currentPassword, newPassword }).subscribe({
      next: () => {
        this.savingPwd.set(false);
        this.pwdSuccess.set("Mot de passe modifi\xE9 avec succ\xE8s.");
        this.pwdForm.reset();
      },
      error: (err) => {
        this.savingPwd.set(false);
        this.pwdError.set(err.error?.error || "Mot de passe actuel incorrect");
      }
    });
  }
  static {
    this.\u0275fac = function ProProfileComponent_Factory(t) {
      return new (t || _ProProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProProfileComponent, selectors: [["app-pro-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 13, consts: [[1, "pro-profile"], [1, "section-card"], [1, "section-title"], [1, "alert", "success"], [1, "alert", "error"], [1, "profile-form", 3, "ngSubmit", "formGroup"], [1, "row-2"], [1, "field"], ["formControlName", "firstName", "placeholder", "Pr\xE9nom"], ["formControlName", "lastName", "placeholder", "Nom de famille"], ["formControlName", "email", "type", "email", "placeholder", "email@exemple.ma"], ["formControlName", "phone", "placeholder", "+212 6XX XXX XXX"], [1, "lang-chips"], ["type", "button", 1, "lang-chip", 3, "active"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "spinner"], ["type", "password", "formControlName", "currentPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password"], [1, "err"], ["type", "password", "formControlName", "newPassword", "placeholder", "8 caract\xE8res minimum", "autocomplete", "new-password"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "new-password"], ["type", "button", 1, "lang-chip", 3, "click"]], template: function ProProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Mon Profil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "h3", 2);
        \u0275\u0275text(5, "Informations personnelles");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ProProfileComponent_Conditional_6_Template, 2, 1, "div", 3)(7, ProProfileComponent_Conditional_7_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(8, "form", 5);
        \u0275\u0275listener("ngSubmit", function ProProfileComponent_Template_form_ngSubmit_8_listener() {
          return ctx.saveInfo();
        });
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "label");
        \u0275\u0275text(12, "Pr\xE9nom");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "label");
        \u0275\u0275text(16, "Nom");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "div", 7)(20, "label");
        \u0275\u0275text(21, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7)(24, "label");
        \u0275\u0275text(25, "T\xE9l\xE9phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 7)(28, "label");
        \u0275\u0275text(29, "Langue pr\xE9f\xE9r\xE9e");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 12);
        \u0275\u0275repeaterCreate(31, ProProfileComponent_For_32_Template, 2, 3, "button", 13, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "button", 14);
        \u0275\u0275template(34, ProProfileComponent_Conditional_34_Template, 1, 0, "span", 15);
        \u0275\u0275text(35, " Sauvegarder les informations ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 1)(37, "h3", 2);
        \u0275\u0275text(38, "Modifier le mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, ProProfileComponent_Conditional_39_Template, 2, 1, "div", 3)(40, ProProfileComponent_Conditional_40_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(41, "form", 5);
        \u0275\u0275listener("ngSubmit", function ProProfileComponent_Template_form_ngSubmit_41_listener() {
          return ctx.savePwd();
        });
        \u0275\u0275elementStart(42, "div", 7)(43, "label");
        \u0275\u0275text(44, "Mot de passe actuel");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "input", 16);
        \u0275\u0275template(46, ProProfileComponent_Conditional_46_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 6)(48, "div", 7)(49, "label");
        \u0275\u0275text(50, "Nouveau mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "input", 18);
        \u0275\u0275template(52, ProProfileComponent_Conditional_52_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 7)(54, "label");
        \u0275\u0275text(55, "Confirmer le mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275element(56, "input", 19);
        \u0275\u0275template(57, ProProfileComponent_Conditional_57_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "button", 14);
        \u0275\u0275template(59, ProProfileComponent_Conditional_59_Template, 1, 0, "span", 15);
        \u0275\u0275text(60, " Changer le mot de passe ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.infoSuccess() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.infoError() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.infoForm);
        \u0275\u0275advance(23);
        \u0275\u0275repeater(ctx.languages);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.savingInfo());
        \u0275\u0275advance();
        \u0275\u0275conditional(34, ctx.savingInfo() ? 34 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(39, ctx.pwdSuccess() ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(40, ctx.pwdError() ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.pwdForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(46, ((tmp_9_0 = ctx.pf("currentPassword")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.pf("currentPassword")) == null ? null : tmp_9_0.touched) ? 46 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(52, ((tmp_10_0 = ctx.pf("newPassword")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.pf("newPassword")) == null ? null : tmp_10_0.touched) ? 52 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(57, (ctx.pwdForm.errors == null ? null : ctx.pwdForm.errors["mismatch"]) && ((tmp_11_0 = ctx.pf("confirmPassword")) == null ? null : tmp_11_0.touched) ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.savingPwd());
        \u0275\u0275advance();
        \u0275\u0275conditional(59, ctx.savingPwd() ? 59 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.pro-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.5rem;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.25rem;\n  padding-bottom: 0.625rem;\n  border-bottom: 1px solid var(--card-border);\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.84rem;\n  font-weight: 500;\n}\n.alert.success[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.08);\n  border: 1px solid rgba(39, 174, 96, 0.2);\n  color: #27ae60;\n}\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n}\n.profile-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.875rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 0.575rem 0.8rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #e74c3c;\n}\n.lang-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.lang-chip[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.875rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 20px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.lang-chip.active[_ngcontent-%COMP%] {\n  border-color: #8B4513;\n  background: rgba(139, 69, 19, 0.07);\n  color: #8B4513;\n}\n.btn-save[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 0.575rem 1.25rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  transition: opacity 0.2s;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 600px) {\n  .row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=pro-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProProfileComponent, { className: "ProProfileComponent", filePath: "src\\app\\features\\pro\\profile\\pro-profile.component.ts", lineNumber: 139 });
})();
export {
  ProProfileComponent
};
//# sourceMappingURL=chunk-T4CPJLNM.js.map
