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
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-PTMK54BH.js";
import "./chunk-V274X4JC.js";
import "./chunk-YMY25RDJ.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4ELZIBL4.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Email invalide");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 25)(2, "path", 26)(3, "line", 27);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 28)(2, "circle", 29);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "8 caract\xE8res minimum requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "circle", 30)(3, "line", 31)(4, "line", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
function LoginComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275text(1, " Connexion en cours\u2026 ");
  }
}
function LoginComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Se connecter ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.fb = inject(FormBuilder);
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
    this.isLoading = signal(false);
    this.apiError = signal("");
    this.showPassword = signal(false);
  }
  ngOnInit() {
    if (this.auth.isLoggedIn())
      this.redirectAfterLogin();
  }
  get emailInvalid() {
    const c = this.form.get("email");
    return c.invalid && (c.dirty || c.touched);
  }
  get passwordInvalid() {
    const c = this.form.get("password");
    return c.invalid && (c.dirty || c.touched);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.apiError.set("");
    const { email, password } = this.form.getRawValue();
    this.auth.login(email, password).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.redirectAfterLogin();
      },
      error: (err) => {
        this.isLoading.set(false);
        this.apiError.set(err.error?.error ?? "Email ou mot de passe incorrect");
      }
    });
  }
  // Si l'utilisateur a été redirigé vers /auth/login depuis une page précise
  // (ex: "Ajouter au panier" sur une fiche produit), ?returnUrl=... le ramène
  // exactement là où il était. Sinon, redirection par défaut selon son rôle.
  redirectAfterLogin() {
    const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    if (returnUrl) {
      this.router.navigateByUrl(returnUrl);
      return;
    }
    this.redirectByRole();
  }
  redirectByRole() {
    const role = this.auth.currentUser()?.role;
    if (role === "admin")
      this.router.navigate(["/admin/dashboard"]);
    else if (role === "pro")
      this.router.navigate(["/pro/dashboard"]);
    else
      this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 13, consts: [[1, "login-page"], [1, "login-card"], [1, "login-header"], ["src", "assets/logo.png", "alt", "KENZ BLADI", 1, "login-logo"], [1, "login-sub"], ["novalidate", "", 1, "login-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], [1, "input-wrap"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "field-icon"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,12 2,6"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "email@exemple.ma", "autocomplete", "email"], [1, "field-error"], ["for", "password"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "password", "formControlName", "password", "placeholder", "Minimum 8 caract\xE8res", "autocomplete", "current-password", 3, "type"], ["type", "button", 1, "toggle-pw", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["role", "alert", 1, "alert-error"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "login-footer"], ["href", "#", 1, "link-forgot", 3, "click"], ["routerLink", "/", 1, "link-back"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"], ["d", "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "KENZ BLADI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "\u0643\u0646\u0632 \u0628\u0644\u0627\u062F\u064A \xB7 Connexion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(9, "div", 6)(10, "label", 7);
        \u0275\u0275text(11, "Adresse email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 9);
        \u0275\u0275element(14, "path", 10)(15, "polyline", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(16, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, LoginComponent_Conditional_17_Template, 2, 0, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 6)(19, "label", 14);
        \u0275\u0275text(20, "Mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 9);
        \u0275\u0275element(23, "rect", 15)(24, "path", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(25, "input", 17);
        \u0275\u0275elementStart(26, "button", 18);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_26_listener() {
          return ctx.showPassword.set(!ctx.showPassword());
        });
        \u0275\u0275template(27, LoginComponent_Conditional_27_Template, 4, 0, ":svg:svg", 19)(28, LoginComponent_Conditional_28_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(29, LoginComponent_Conditional_29_Template, 2, 0, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, LoginComponent_Conditional_30_Template, 6, 1, "div", 20);
        \u0275\u0275elementStart(31, "button", 21);
        \u0275\u0275template(32, LoginComponent_Conditional_32_Template, 2, 0)(33, LoginComponent_Conditional_33_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 22)(35, "a", 23);
        \u0275\u0275listener("click", function LoginComponent_Template_a_click_35_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275text(36, " Mot de passe oubli\xE9 ? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "a", 24);
        \u0275\u0275text(38, "\u2190 Retour au site");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275classProp("has-error", ctx.emailInvalid);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(17, ctx.emailInvalid ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("has-error", ctx.passwordInvalid);
        \u0275\u0275advance(7);
        \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Masquer" : "Afficher");
        \u0275\u0275advance();
        \u0275\u0275conditional(27, ctx.showPassword() ? 27 : 28);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(29, ctx.passwordInvalid ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(30, ctx.apiError() ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.isLoading() ? 32 : 33);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-secondary);\n  padding: 1rem;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 20px;\n  padding: 2.5rem 2rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n}\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.login-logo[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  object-fit: contain;\n  margin: 0 auto 0.75rem;\n  display: block;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 0.25rem;\n}\n.login-sub[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  width: 16px;\n  height: 16px;\n  color: var(--text-muted);\n  pointer-events: none;\n  flex-shrink: 0;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.875rem 0.65rem 2.5rem;\n  border: 1.5px solid var(--card-border);\n  border-radius: 10px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #8B4513;\n  box-shadow: 0 0 0 3px rgba(139, 69, 19, 0.12);\n}\n.has-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.has-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.toggle-pw[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n}\n.toggle-pw[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.toggle-pw[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #e74c3c;\n  margin-top: 0.125rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(231, 76, 60, 0.08);\n  border: 1px solid rgba(231, 76, 60, 0.25);\n  color: #e74c3c;\n  padding: 0.625rem 0.875rem;\n  border-radius: 10px;\n  font-size: 0.84rem;\n  font-weight: 500;\n}\n.alert-error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #8B4513,\n      #d4af6a);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.1s;\n  margin-top: 0.25rem;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1.5rem;\n}\n.link-forgot[_ngcontent-%COMP%], .link-back[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.link-forgot[_ngcontent-%COMP%]:hover, .link-back[_ngcontent-%COMP%]:hover {\n  color: #8B4513;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 319 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-JM4LIQ5G.js.map
