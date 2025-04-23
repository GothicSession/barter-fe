import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TELEGRAM } from '@libs/core';
import { TuiRoot } from '@taiga-ui/core';

import { PlatformSharedFacade } from './shared';

@Component({
  imports: [RouterModule, TuiRoot],
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
      console.error('Run app via Telegram');
    }
  }
}
