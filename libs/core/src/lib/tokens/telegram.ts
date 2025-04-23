import { inject, InjectionToken } from '@angular/core';

import { Telegram } from '../types';
import { WINDOW } from './window';

export const TELEGRAM = new InjectionToken<Telegram>('telegram', {
  factory: () => {
    const telegram = inject(WINDOW).Telegram;

    if (!telegram) {
      throw new Error('Telegram is not available');
    }

    return telegram;
  },
});
