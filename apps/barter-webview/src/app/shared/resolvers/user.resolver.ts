import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ResolveFn, Router } from '@angular/router';
import { User } from '@libs/api';
import { AuthenticatedUserFacade } from '@libs/core';
import { catchError, filter, finalize, firstValueFrom, map, of } from 'rxjs';

import { LoadingService } from '../services/loading.service';
import { Routes } from '../types/routes';

export const userResolver: ResolveFn<User> = async (route) => {
  const router = inject(Router);
  const loadingService = inject(LoadingService);
  const userFacade = inject(AuthenticatedUserFacade);

  loadingService.show();
  userFacade.loadUser();

  // Тут указываем какие поля нужны чтоб можно было скипнуть onboarding
  const checkUserData = (user: User): boolean => {
    if (
      user.telegramUserID &&
      user.name &&
      user.birthDate &&
      user.profileImages.length &&
      user.sex
    ) {
      return true;
    }

    return false;
  };

  return firstValueFrom(
    toObservable(userFacade.getUser()).pipe(
      filter((user): user is User => user !== null),
      map((user) => {
        const isOnboardingRoute = route.url[0]?.path === Routes.ONBOARDING;
        const isUserComplete = checkUserData(user);

        if (isOnboardingRoute && isUserComplete) {
          void router.navigate([Routes.MAIN]);
        }

        if (!isOnboardingRoute && !isUserComplete) {
          void router.navigate([Routes.ONBOARDING]);
        }

        return user;
      }),
      catchError(() => {
        return of(null as unknown as User);
      }),
      finalize(() => loadingService.hide()),
    ),
  );
};
