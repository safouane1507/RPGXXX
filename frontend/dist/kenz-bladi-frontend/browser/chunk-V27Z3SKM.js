import {
  CheckboxControlValueAccessor,
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
  Router,
  RouterLink,
  RouterModule
} from "./chunk-PTMK54BH.js";
import "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  TranslateModule
} from "./chunk-AJRT7THN.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Pr\xE9nom requis");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Nom requis");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Email invalide");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "8 caract\xE8res minimum requis");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.pwdStrength().score / 5 * 100 + "%")("background", ctx_r0.pwdStrength().color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.pwdStrength().color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pwdStrength().label, " ");
  }
}
function RegisterComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Les mots de passe ne correspondent pas");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Vous devez accepter les conditions");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function RegisterComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 29);
    \u0275\u0275text(1, " Cr\xE9ation en cours\u2026 ");
  }
}
function RegisterComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cr\xE9er mon compte ");
  }
}
function passwordMatchValidator(ctrl) {
  const pwd = ctrl.get("password")?.value;
  const confirm = ctrl.get("confirmPassword")?.value;
  return pwd && confirm && pwd !== confirm ? { passwordMismatch: true } : null;
}
function passwordStrength(pwd) {
  let score = 0;
  if (pwd.length >= 8)
    score++;
  if (pwd.length >= 12)
    score++;
  if (/[A-Z]/.test(pwd))
    score++;
  if (/[0-9]/.test(pwd))
    score++;
  if (/[^A-Za-z0-9]/.test(pwd))
    score++;
  if (score <= 1)
    return { score, label: "Faible", color: "#e74c3c" };
  if (score <= 3)
    return { score, label: "Moyen", color: "#f39c12" };
  return { score, label: "Fort", color: "#27ae60" };
}
var RegisterComponent = class _RegisterComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.loading = signal(false);
    this.errorMsg = signal("");
    this.showPwd = signal(false);
    this.showConfirm = signal(false);
    this.form = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: passwordMatchValidator });
  }
  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      const role = this.auth.currentUser()?.role;
      this.router.navigate([role === "admin" ? "/admin/dashboard" : role === "pro" ? "/pro/dashboard" : "/"]);
    }
  }
  invalid(field) {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
  pwdStrength() {
    return passwordStrength(this.form.value.password || "");
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMsg.set("");
    const v = this.form.getRawValue();
    this.auth.register({
      firstName: v.firstName,
      lastName: v.lastName,
      email: v.email,
      password: v.password,
      phone: v.phone || void 0
    }).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMsg.set(err.error?.error || err.error?.errors?.[0]?.msg || "Erreur lors de la cr\xE9ation du compte");
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 66, vars: 25, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-brand"], [1, "brand-ar"], [1, "brand-fr"], [1, "auth-title"], [1, "auth-sub"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "row-2"], [1, "field"], ["formControlName", "firstName", "placeholder", "Amina", "autocomplete", "given-name"], [1, "err"], ["formControlName", "lastName", "placeholder", "Benkhalil", "autocomplete", "family-name"], ["formControlName", "email", "type", "email", "placeholder", "vous@exemple.com", "autocomplete", "email"], ["formControlName", "phone", "type", "tel", "placeholder", "+212 6XX XXX XXX", "autocomplete", "tel"], [1, "pwd-wrap"], ["formControlName", "password", "placeholder", "8 caract\xE8res minimum", "autocomplete", "new-password", 3, "type"], ["type", "button", 1, "eye-btn", 3, "click"], ["formControlName", "confirmPassword", "placeholder", "Retapez votre mot de passe", "autocomplete", "new-password", 3, "type"], [1, "cgu-label"], ["type", "checkbox", "formControlName", "acceptTerms"], ["routerLink", "/cgu", "target", "_blank"], [1, "alert-error"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/auth/login"], [1, "strength-bar"], [1, "strength-fill"], [1, "strength-label"], [1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "KENZ BLADI");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Cr\xE9er un compte");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Rejoignez la communaut\xE9 du patrimoine marocain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 7);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_11_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "label");
        \u0275\u0275text(15, "Pr\xE9nom *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 10);
        \u0275\u0275template(17, RegisterComponent_Conditional_17_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 9)(19, "label");
        \u0275\u0275text(20, "Nom *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 12);
        \u0275\u0275template(22, RegisterComponent_Conditional_22_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 9)(24, "label");
        \u0275\u0275text(25, "Email *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 13);
        \u0275\u0275template(27, RegisterComponent_Conditional_27_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 9)(29, "label");
        \u0275\u0275text(30, "T\xE9l\xE9phone ");
        \u0275\u0275elementStart(31, "small");
        \u0275\u0275text(32, "(optionnel)");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 9)(35, "label");
        \u0275\u0275text(36, "Mot de passe *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 15);
        \u0275\u0275element(38, "input", 16);
        \u0275\u0275elementStart(39, "button", 17);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_39_listener() {
          return ctx.showPwd.set(!ctx.showPwd());
        });
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, RegisterComponent_Conditional_41_Template, 2, 0, "span", 11)(42, RegisterComponent_Conditional_42_Template, 4, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 9)(44, "label");
        \u0275\u0275text(45, "Confirmer le mot de passe *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 15);
        \u0275\u0275element(47, "input", 18);
        \u0275\u0275elementStart(48, "button", 17);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_48_listener() {
          return ctx.showConfirm.set(!ctx.showConfirm());
        });
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(50, RegisterComponent_Conditional_50_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "label", 19);
        \u0275\u0275element(52, "input", 20);
        \u0275\u0275elementStart(53, "span");
        \u0275\u0275text(54, "J'accepte les ");
        \u0275\u0275elementStart(55, "a", 21);
        \u0275\u0275text(56, "conditions d'utilisation");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(57, RegisterComponent_Conditional_57_Template, 2, 0, "span", 11)(58, RegisterComponent_Conditional_58_Template, 2, 1, "div", 22);
        \u0275\u0275elementStart(59, "button", 23);
        \u0275\u0275template(60, RegisterComponent_Conditional_60_Template, 2, 0)(61, RegisterComponent_Conditional_61_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "p", 24);
        \u0275\u0275text(63, " D\xE9j\xE0 un compte ? ");
        \u0275\u0275elementStart(64, "a", 25);
        \u0275\u0275text(65, "Se connecter");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_15_0;
        let tmp_16_0;
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("invalid", ctx.invalid("firstName"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(17, ctx.invalid("firstName") ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("invalid", ctx.invalid("lastName"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(22, ctx.invalid("lastName") ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("invalid", ctx.invalid("email"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(27, ctx.invalid("email") ? 27 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("invalid", ctx.invalid("password"));
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.showPwd() ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.showPwd() ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(41, ctx.invalid("password") ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(42, ctx.form.value.password ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("invalid", ctx.invalid("confirmPassword") || ctx.form.hasError("passwordMismatch"));
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.showConfirm() ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.showConfirm() ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(50, ctx.form.hasError("passwordMismatch") && ((tmp_15_0 = ctx.form.get("confirmPassword")) == null ? null : tmp_15_0.touched) ? 50 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(57, ((tmp_16_0 = ctx.form.get("acceptTerms")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.form.get("acceptTerms")) == null ? null : tmp_16_0.touched) ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(58, ctx.errorMsg() ? 58 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(60, ctx.loading() ? 60 : 61);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-primary);\n  padding: 2rem 1rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 20px;\n  padding: 2.25rem;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.15rem;\n  margin-bottom: 1.25rem;\n}\n.brand-ar[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #8B4513;\n  font-family:\n    "Amiri",\n    "Arial",\n    serif;\n  direction: rtl;\n}\n.brand-fr[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 900;\n  color: var(--text-primary);\n  text-align: center;\n  margin: 0 0 0.25rem;\n}\n.auth-sub[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  text-align: center;\n  margin: 0 0 1.75rem;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\nlabel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--text-muted);\n}\ninput[_ngcontent-%COMP%] {\n  padding: 0.58rem 0.85rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 9px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n}\n.field.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #e74c3c;\n}\n.pwd-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pwd-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 2.5rem;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.6rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.95rem;\n  padding: 0;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: var(--bg-tertiary);\n  border-radius: 2px;\n  margin-top: 0.375rem;\n  overflow: hidden;\n}\n.strength-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.3s, background 0.3s;\n}\n.strength-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.cgu-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n  cursor: pointer;\n}\n.cgu-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n  margin-top: 0.1rem;\n  flex-shrink: 0;\n}\n.cgu-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8B4513;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.2);\n  color: #e74c3c;\n  padding: 0.6rem 0.875rem;\n  border-radius: 8px;\n  font-size: 0.83rem;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  background: #8B4513;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n  transition: background 0.2s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #7a3a10;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.83rem;\n  color: var(--text-muted);\n  margin-top: 1.25rem;\n  margin-bottom: 0;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8B4513;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\features\\auth\\register\\register.component.ts", lineNumber: 183 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-V27Z3SKM.js.map
