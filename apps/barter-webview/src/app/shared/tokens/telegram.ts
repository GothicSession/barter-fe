import { inject, InjectionToken } from '@angular/core';
import { Telegram, WINDOW } from '@libs/core';

export const TELEGRAM = new InjectionToken<Telegram>('telegram', {
  factory: () => {
    const window = inject(WINDOW);
    const telegram = window.Telegram;

    if (!telegram) {
      throw new Error('Telegram is not available');
    }

    return telegram;
  },
});
