import {
  Router
} from "./chunk-PTMK54BH.js";
import {
  ApiService
} from "./chunk-V274X4JC.js";
import {
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-4ELZIBL4.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.api = inject(ApiService);
    this.router = inject(Router);
    this.TOKEN_KEY = "kb_token";
    this.USER_KEY = "kb_user";
    this.currentUser = signal(this.restoreUser());
    this.isLoggedIn = signal(!!this.getToken());
    if (this.getToken())
      this.loadProfile();
  }
  login(email, password) {
    return this.api.post("/auth/login", { email, password }).pipe(tap((res) => this.persistSession(res.token, res.user)));
  }
  register(data) {
    return this.api.post("/auth/register", data).pipe(tap((res) => this.persistSession(res.token, res.user)));
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
    this.router.navigate(["/auth/login"]);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  isAdmin() {
    return this.currentUser()?.role === "admin";
  }
  isPro() {
    return this.currentUser()?.role === "pro";
  }
  // Persiste le token ET le profil utilisateur dans localStorage afin qu'ils
  // survivent aux rafraîchissements de page et soient partagés entre tous
  // les onglets jusqu'à une déconnexion explicite ou l'expiration du token.
  persistSession(token, user) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUser.set(user);
    this.isLoggedIn.set(true);
  }
  // Rafraîchit le profil en arrière-plan (rôle, avatar...) sans bloquer
  // l'état "connecté" déjà restauré de façon synchrone au démarrage.
  loadProfile() {
    this.api.get("/auth/me").subscribe({
      next: (res) => {
        this.currentUser.set(res.user);
        this.isLoggedIn.set(true);
        localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
      },
      error: () => this.logout()
    });
  }
  restoreUser() {
    try {
      const raw = localStorage.getItem(this.USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-SCCTXVTR.js.map
