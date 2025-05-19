import { DatePipe, I18nPluralPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Event } from '@libs/api';
import { CarouselSliderComponent } from '@libs/core';
import { TuiButton, TuiDialogContext, TuiIcon } from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarStack } from '@taiga-ui/kit';
import { injectContext } from '@taiga-ui/polymorpheus';

@Component({
  selector: 'barter-event-sheet-dialog',
  standalone: true,
  templateUrl: './event-sheet-dialog.component.html',
  styleUrl: './event-sheet-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CarouselSliderComponent,
    TuiIcon,
    DatePipe,
    TuiAvatar,
    TuiAvatarStack,
    TuiButton,
    RouterLink,
    I18nPluralPipe,
  ],
})
export class EventSheetDialogComponent {
  protected readonly event =
    injectContext<
      TuiDialogContext<boolean, Event & { creatorRouterLink: string[] }>
    >().data;

  protected readonly pluralMap: Record<string, string> = {
    one: 'человек',
    few: 'человека',
    many: 'человек',
    other: 'человека',
  };
}
