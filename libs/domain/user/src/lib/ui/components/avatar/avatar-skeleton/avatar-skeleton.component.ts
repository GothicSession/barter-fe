import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AvatarSize, SkeletonComponent } from '@libs/core';
import { TuiAvatar, TuiAvatarOutline } from '@taiga-ui/kit';

@Component({
  selector: 'barter-avatar-skeleton',
  standalone: true,
  templateUrl: './avatar-skeleton.component.html',
  styleUrls: ['./avatar-skeleton.component.scss', './../avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiAvatar, TuiAvatarOutline, SkeletonComponent],
})
export class AvatarSkeletonComponent {
  @Input()
  round = true;

  @Input()
  size: AvatarSize = 'xxl';
}
