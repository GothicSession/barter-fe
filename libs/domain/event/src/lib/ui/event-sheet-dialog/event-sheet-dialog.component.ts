import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Event } from '@libs/api';
import { CarouselSliderComponent, NounsDeclensionPipe } from '@libs/core';
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
    NounsDeclensionPipe,
    DatePipe,
    TuiAvatar,
    TuiAvatarStack,
    TuiButton,
    RouterLink,
  ],
})
export class EventSheetDialogComponent {
  protected readonly event =
    injectContext<
      TuiDialogContext<boolean, Event & { creatorRouterLink: string[] }>
    >().data;

  protected readonly nouns = ['человек', 'человека', 'человек'];
}
