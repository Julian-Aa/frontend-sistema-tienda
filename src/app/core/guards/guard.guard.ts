import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Utils } from '../utils/utils';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const rol = Utils.getRole();
  if (rol !== '') {
    return true;
  }
  return false;
};
