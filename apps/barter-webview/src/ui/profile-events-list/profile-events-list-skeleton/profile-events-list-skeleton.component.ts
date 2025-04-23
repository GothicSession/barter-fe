import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkeletonComponent } from '@libs/core';
import { EventCardSkeletonComponent } from '@libs/domain/event';

const EVENTS_CARD_SKELETON_LENGTH = 5;

@Component({
  selector: 'barter-profile-events-list-skeleton',
  standalone: true,
  templateUrl: './profile-events-list-skeleton.component.html',
  styleUrls: [
    './profile-events-list-skeleton.component.scss',
    './../profile-events-list.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EventCardSkeletonComponent, SkeletonComponent],
})
export class ProfileEventsListSkeletonComponent {
  protected readonly EVENTS_CARD_SKELETON = new Array(
    EVENTS_CARD_SKELETON_LENGTH,
  );
}
