import { inject, InjectionToken } from '@angular/core';
import { Telegram, WINDOW } from '@libs/core';

export const TELEGRAM = new InjectionToken<Telegram>('telegram', {
  factory: () => {
    const telegram = inject(WINDOW).Telegram;

    if (!telegram) {
      throw new Error('Telegram is not available');
    }

    return telegram;
  },
});
