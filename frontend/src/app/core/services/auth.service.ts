import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

export interface AuthUser {
  id:               string;
  email:            string;
  role:             'admin' | 'pro' | 'client';
  fullName:         string;
  preferredLanguage:string;
  avatar:           string | null;
  proProfile?:      { companyName: string; domain: string; annuaireRef: string | null };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api    = inject(ApiService);
  private router = inject(Router);

  private readonly TOKEN_KEY = 'kb_token';
  private readonly USER_KEY  = 'kb_user';

  // Restaurés de façon SYNCHRONE depuis localStorage : disponibles dès la
  // construction du service, avant même que les guards (authGuard, adminGuard...)
  // ne s'exécutent sur la première navigation. Sans ça, isLoggedIn() vaut `false`
  // le temps que l'appel /auth/me (asynchrone) réponde, et les guards
  // redirigent à tort vers /auth/login à chaque rechargement / nouvel onglet.
  currentUser = signal<AuthUser | null>(this.restoreUser());
  isLoggedIn  = signal<boolean>(!!this.getToken());

  constructor() {
    if (this.getToken()) this.loadProfile();
  }

  login(email: string, password: string) {
    return this.api.post<{ token: string; user: AuthUser }>('/auth/login', { email, password })
      .pipe(
        tap(res => this.persistSession(res.token, res.user))
      );
  }

  register(data: { email: string; password: string; firstName: string; lastName: string; phone?: string }) {
    return this.api.post<{ token: string; user: AuthUser; message: string }>('/auth/register', data)
      .pipe(
        tap(res => this.persistSession(res.token, res.user))
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAdmin(): boolean { return this.currentUser()?.role === 'admin'; }
  isPro():   boolean { return this.currentUser()?.role === 'pro'; }

  // Persiste le token ET le profil utilisateur dans localStorage afin qu'ils
  // survivent aux rafraîchissements de page et soient partagés entre tous
  // les onglets jusqu'à une déconnexion explicite ou l'expiration du token.
  private persistSession(token: string, user: AuthUser): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUser.set(user);
    this.isLoggedIn.set(true);
  }

  // Rafraîchit le profil en arrière-plan (rôle, avatar...) sans bloquer
  // l'état "connecté" déjà restauré de façon synchrone au démarrage.
  private loadProfile(): void {
    this.api.get<{ user: AuthUser }>('/auth/me').subscribe({
      next: res => {
        this.currentUser.set(res.user);
        this.isLoggedIn.set(true);
        localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
      },
      error: () => this.logout()
    });
  }

  private restoreUser(): AuthUser | null {
    try {
      const raw = localStorage.getItem(this.USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
}
