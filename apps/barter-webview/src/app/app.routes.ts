import { Route } from '@angular/router';

import { AuthenticatedLayoutComponent } from './containers/authenticated-layout/authenticated-layout.component';
import { NonAuthenticatedLayoutComponent } from './containers/non-authenticated-layout/non-authenticated-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NonAuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: async () =>
          import('../pages').then((m) => m.OnboardingPageComponent),
      },
    ],
  },
  // TODO: Сменить path на '' и покрыть guard'ом как будет готов бекенд
  {
    path: 'events',
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: async () =>
          import('../pages').then((m) => m.EventsPageComponent),
      },
    ],
  },
];
