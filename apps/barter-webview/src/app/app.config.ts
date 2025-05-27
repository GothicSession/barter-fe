import { DatePipe } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withRouterConfig } from '@angular/router';
import { API_BASE_URL, ApiHttpClient, AuthApiService } from '@libs/api';
import {
  LazyViewport,
  provideAuthenticatedUserState,
  provideRoutesState,
} from '@libs/core';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { PlatformSharedFacade, PlatformSharedStore, Routes } from './shared';
import { authInterceptor } from './shared/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
    ),
    provideHttpClient(withInterceptors([authInterceptor])),
    NG_EVENT_PLUGINS,
    DatePipe,
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    provideRoutesState<Routes>(),
    provideAuthenticatedUserState(),
    PlatformSharedFacade,
    PlatformSharedStore,
    LazyViewport,
    { provide: API_BASE_URL, useValue: environment.apiUrl },
    ApiHttpClient,
    AuthApiService,
  ],
};
