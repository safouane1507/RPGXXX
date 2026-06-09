import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  const user = auth.currentUser();
  if (!user) return router.createUrlTree(['/auth/login']);

  const required: string[] = route.data?.['roles'] ?? [];
  if (required.length === 0 || required.includes(user.role)) return true;

  return router.createUrlTree(['/']);
};
