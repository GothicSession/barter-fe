import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'barter-non-telegram-page',
  standalone: true,
  imports: [TuiButton],
  template: `
    <div class="container">
      <h1>Приложение доступно только в Telegram</h1>
      <a tuiButton href="https://t.me/communitio_bot" target="_blank">
        Открыть в Telegram
      </a>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        padding: 20px;
      }
      h1 {
        margin-bottom: 20px;
        line-height: 1.2;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NonTelegramPageComponent {}
