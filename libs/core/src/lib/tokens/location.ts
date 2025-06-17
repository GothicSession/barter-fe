import { inject, InjectionToken } from '@angular/core';

import { WINDOW } from './window';

export const LOCATION = new InjectionToken<Location>('location', {
  factory: () => {
    const location = inject(WINDOW).location;

    if (!location) {
      throw new Error('Location is not available');
    }

    return location;
  },
});
