import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(localeRu, 'ru');

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
