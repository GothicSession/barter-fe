import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { TELEGRAM } from '../tokens/telegram';
import { Routes } from '../types/routes';

@Injectable({
  providedIn: 'root',
})
export class TelegramGuard implements CanActivate {
  private readonly router = inject(Router);
  private readonly telegram = inject(TELEGRAM);

  canActivate(): boolean {
    if (!environment.production) {
      return true;
    }

    if (!this.telegram.WebApp.initData) {
      void this.router.navigate([Routes.NON_TELEGRAM]);

      return false;
    }

    return true;
  }
}
