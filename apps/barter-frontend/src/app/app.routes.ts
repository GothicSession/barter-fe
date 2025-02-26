import { Route } from '@angular/router';
import { NonAuthenticatedLayoutComponent } from './containers/non-authenticated-layout/non-authenticated-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NonAuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@libs/domains/auth/feature').then((m) => m.LoginPageComponent),
      },
    ],
  },
];
