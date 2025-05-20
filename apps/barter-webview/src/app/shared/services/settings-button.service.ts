import { inject, Injectable } from '@angular/core';

import { TELEGRAM } from '../tokens';

@Injectable()
export class SettingsButtonService {
  private readonly telegram = inject(TELEGRAM);
  private readonly backButton = this.telegram?.WebApp?.SettingsButton;

  show(): void {
    this.backButton?.show();
  }

  hide(): void {
    this.backButton?.hide();
  }

  isVisible(): boolean {
    return this.backButton?.isVisible;
  }
}
