import { inject, Injectable, Signal } from '@angular/core';

import { Platform } from '../../enums';
import { PlatformSharedStore } from './platform.store';

@Injectable()
export class PlatformSharedFacade {
  protected readonly platformStore = inject(PlatformSharedStore);

  constructor() {
    this.platformStore.initCurrentPlatform();
  }

  get currentPlatform(): Signal<Platform> {
    return this.platformStore.currentPlatform;
  }

  get isOpenedInMobile(): Signal<boolean> {
    return this.platformStore.isOpenedInMobile;
  }
}
