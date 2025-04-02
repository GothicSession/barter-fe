import { Route } from '@angular/router';

import { AuthenticatedLayoutComponent } from './containers/authenticated-layout/authenticated-layout.component';
import { NonAuthenticatedLayoutComponent } from './containers/non-authenticated-layout/non-authenticated-layout.component';
import { Routes } from './shared';

export const appRoutes: Route[] = [
  {
    path: Routes.MAIN,
    component: NonAuthenticatedLayoutComponent,
    children: [
      {
        path: Routes.MAIN,
        loadComponent: async () =>
          import('../pages').then((m) => m.OnboardingPageComponent),
      },
    ],
  },
  // TODO: Сменить path на '' и покрыть guard'ом как будет готов бекенд
  {
    path: Routes.MAIN,
    component: AuthenticatedLayoutComponent,
    children: [
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
    ],
  },
];
