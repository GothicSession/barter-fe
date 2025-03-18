import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Event } from '@libs/api';
import { EventDatePipe } from '@libs/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarStack } from '@taiga-ui/kit';

@Component({
  selector: 'barter-event-card',
  standalone: true,
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiIcon, TuiButton, TuiAvatar, TuiAvatarStack, EventDatePipe],
})
export class EventCardComponent {
  @Input({ required: true })
  event!: Event;
}
