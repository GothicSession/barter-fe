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
      const platform = window.Telegram?.WebApp.platform;

      patchState(store, {
        currentPlatform:
          platform && Object.values(Platform).includes(platform as Platform)
            ? (platform as Platform)
            : Platform.UNKNOWN,
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
