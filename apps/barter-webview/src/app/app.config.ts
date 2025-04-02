import { DatePipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideRoutesState } from '@libs/core';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

import { appRoutes } from './app.routes';
import { PlatformSharedFacade, PlatformSharedStore, Routes } from './shared';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
    ),
    provideHttpClient(),
    NG_EVENT_PLUGINS,
    DatePipe,
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    provideRoutesState<Routes>(),
    PlatformSharedFacade,
    PlatformSharedStore,
  ],
};
