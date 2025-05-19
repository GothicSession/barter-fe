import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazySrcDirective } from '@libs/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'barter-non-telegram-page',
  standalone: true,
  templateUrl: './non-telegram-page.component.html',
  styleUrl: './non-telegram-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LazySrcDirective, TuiButton],
})
export class NonTelegramPageComponent {}
