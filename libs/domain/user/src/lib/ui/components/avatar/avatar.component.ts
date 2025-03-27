import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiAvatar, TuiAvatarOutline } from '@taiga-ui/kit';

@Component({
  selector: 'barter-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiAvatar, TuiAvatarOutline],
})
export class AvatarComponent {
  @Input()
  round = true;

  @Input({ required: true })
  src!: string;

  @Input()
  name?: string;
}
