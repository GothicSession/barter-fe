import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

registerLocaleData(localeRu, 'ru');

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
