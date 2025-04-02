import { inject, Injectable, Signal } from '@angular/core';
import { PlatformSharedStore } from './platform.store';
import { Platform } from '../../enums';

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
