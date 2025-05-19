import { Location } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { RouteFacade } from '@libs/core';

import { TELEGRAM } from '../tokens';
import { Routes } from '../types';

@Injectable()
export class BackButtonService {
  private readonly telegram = inject(TELEGRAM);
  private readonly routeFacade = inject(RouteFacade);
  private readonly location = inject(Location);
  private readonly backButton = this.telegram?.WebApp?.BackButton;

  constructor() {
    this.routeFacade
      .getNavigationEndEvents$()
      .subscribe((ev) => this.updateButton(ev.urlAfterRedirects));

    this.backButton.onClick(() => this.onBackClick());
  }

  private updateButton(url: string): void {
    if (!this.backButton) return;

    if (url === Routes.MAIN) {
      this.backButton.hide();
    } else {
      // Показать, когда необходимо (например на странице редактирования профиля и тд)
      // this.backButton.show();
    }
  }

  private onBackClick() {
    this.location.back();
  }
}
