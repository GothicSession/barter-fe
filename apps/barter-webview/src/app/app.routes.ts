import { Route } from '@angular/router';

import { AuthPageComponent } from '../pages/auth-page/auth-page.component';
import { AuthenticatedLayoutComponent } from './containers/authenticated-layout/authenticated-layout.component';
import { NonAuthenticatedLayoutComponent } from './containers/non-authenticated-layout/non-authenticated-layout.component';
import { Routes } from './shared';
import { AuthGuard } from './shared/guards/auth.guard';
import { TelegramGuard } from './shared/guards/telegram.guard';
import { userResolver } from './shared/resolvers/user.resolver';

export const appRoutes: Route[] = [
  {
    path: Routes.NON_TELEGRAM,
    loadComponent: async () =>
      import('../pages').then((m) => m.NonTelegramPageComponent),
  },
  {
    path: Routes.AUTH,
    component: NonAuthenticatedLayoutComponent,
    canActivate: [TelegramGuard],
    children: [
      {
        path: '',
        component: AuthPageComponent,
      },
    ],
  },
  {
    path: Routes.MAIN,
    resolve: {
      user: userResolver,
    },
    canActivate: [AuthGuard, TelegramGuard],
    children: [
      {
        path: '',
        component: AuthenticatedLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: Routes.EVENTS,
            pathMatch: 'full',
          },
          {
            path: Routes.EVENTS,
            loadComponent: async () =>
              import('../pages').then((m) => m.EventsPageComponent),
          },
          {
            path: Routes.PROFILE,
            loadComponent: async () =>
              import('../pages').then((m) => m.ProfilePageComponent),
          },
          {
            path: Routes.PROFILE_EXACT,
            loadComponent: async () =>
              import('../pages').then((m) => m.ProfilePageComponent),
          },
        ],
      },
    ],
  },
  {
    path: Routes.ONBOARDING,
    resolve: {
      user: userResolver,
    },
    // тут по неймингу несостыковка, мне кажется надо изменить названия Authenticated/NonAuthenticated
    // а то тут под AuthGuard'ом NonAuthenticated layout
    canActivate: [AuthGuard, TelegramGuard],
    component: NonAuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: async () =>
          import('../pages').then((m) => m.OnboardingPageComponent),
      },
    ],
  },
  {
    path: '',
    redirectTo: Routes.MAIN,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: Routes.MAIN,
  },
];
