import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { bootstrapApplication } from '@angular/platform-browser';
import { Telegram } from '@libs/core';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

export async function waitForTelegramScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.querySelector('script[src*="telegram-web-app.js"]');

    if (!script) {
      reject(new Error('Telegram script not found'));

      return;
    }

    if ((window as Window & { Telegram: Telegram }).Telegram) {
      resolve();

      return;
    }

    script.addEventListener('load', () => resolve());
    script.addEventListener('error', () =>
      reject(new Error('Failed to load Telegram script')),
    );
  });
}

registerLocaleData(localeRu, 'ru');

waitForTelegramScript()
  .then(async () => {
    if (!(window as Window & { Telegram: Telegram }).Telegram) {
      throw new Error('Telegram is not available after script load');
    }

    return bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err) => {
    console.error('Failed to load Telegram:', err);
  });
