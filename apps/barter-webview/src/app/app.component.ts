import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

import { environment } from '../environments/environment';
import { PlatformSharedFacade, Routes, TELEGRAM } from './shared';

@Component({
  imports: [RouterModule, TuiRoot],
  selector: 'barter-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected platformFacade = inject(PlatformSharedFacade);
  protected telegram = inject(TELEGRAM);
  protected readonly router = inject(Router);

  constructor() {
    try {
      this.telegram?.WebApp?.requestFullscreen();
    } catch (e) {
      if (environment.production) {
        void this.router.navigate([Routes.NON_TELEGRAM]);
      } else {
        console.error('Run app via Telegram');
      }
    }
  }
}
