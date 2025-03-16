import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

@Component({
  imports: [RouterModule, TuiRoot],
  selector: 'barter-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected platform = '';

  constructor() {
    try {
      window.Telegram?.WebApp?.requestFullscreen();
    } catch (e) {
      console.error('Run app via Telegram');
    }

    this.platform = window.Telegram?.WebApp?.platform;
  }
}
