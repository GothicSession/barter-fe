import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { Routes } from '../types/routes';

const UNAUTHORIZED_STATUS = 401;

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getAuthToken();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req).pipe(
    catchError((error: unknown) => {
      if (
        error instanceof HttpErrorResponse &&
        error.status === UNAUTHORIZED_STATUS
      ) {
        if (error.url?.includes('/auth/tokens/refresh')) {
          authService.logout();
          void router.navigate([Routes.AUTH]);
        }

        return handle401Error(req, next, authService, router);
      }

      return throwError(() => error);
    }),
  );
};

function handle401Error(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authService: AuthService,
  router: Router,
): Observable<HttpEvent<unknown>> {
  return authService.refreshToken().pipe(
    switchMap(() => {
      const newToken = authService.getAuthToken();

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${newToken}`,
        },
      });

      return next(req);
    }),
    catchError((error: unknown) => {
      if (
        error instanceof HttpErrorResponse &&
        error.url?.includes('/auth/tokens/refresh')
      ) {
        authService.logout();
        void router.navigate([Routes.AUTH]);
      }

      return throwError(() => error);
    }),
  );
}
