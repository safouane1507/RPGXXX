import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const proGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  const user = auth.currentUser();
  if (!user)                                          return router.createUrlTree(['/auth/login']);
  if (user.role === 'pro' || user.role === 'admin')   return true;
  return router.createUrlTree(['/']);
};
