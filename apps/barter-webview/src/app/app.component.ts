import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

import { LoadingGlobalComponent } from '../ui';
import { PlatformSharedFacade } from './shared';
import { TELEGRAM } from './shared/tokens';

@Component({
  imports: [RouterModule, TuiRoot, LoadingGlobalComponent],
  selector: 'barter-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected platformFacade = inject(PlatformSharedFacade);
  protected telegram = inject(TELEGRAM);

  constructor() {
    try {
      this.telegram?.WebApp?.requestFullscreen();
    } catch (e) {
      console.error('Run app via Telegram', e);
    }
  }
}
