import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

import { Platform } from '../../enums';

export interface PlatformStore {
  currentPlatform: Platform;
}

export const PlatformSharedStore = signalStore(
  withState<PlatformStore>(() => ({
    currentPlatform: Platform.UNKNOWN,
  })),
  withMethods((store) => ({
    initCurrentPlatform: () => {
      patchState(store, {
        currentPlatform:
          (window.Telegram?.WebApp.platform as Platform) || Platform.UNKNOWN,
      });
    },
  })),
  withComputed(({ currentPlatform }) => ({
    isOpenedInMobile: computed(
      () =>
        currentPlatform() === Platform.IOS ||
        currentPlatform() === Platform.ANDROID,
    ),
  })),
);
