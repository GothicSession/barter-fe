import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAvatar, TuiAvatarStack, TuiSkeleton } from '@taiga-ui/kit';

const AVATARS_ARRAY_LENGTH = 5;

@Component({
  selector: 'barter-event-card-skeleton',
  standalone: true,
  templateUrl: './event-card-skeleton.component.html',
  styleUrls: [
    './event-card-skeleton.component.scss',
    './../event-card.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiAvatarStack, TuiAvatar, TuiSkeleton],
})
export class EventCardSkeletonComponent {
  protected readonly AVATARS_ARRAY = new Array(AVATARS_ARRAY_LENGTH);
}
