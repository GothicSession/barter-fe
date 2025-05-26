import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'barter-subscribe-user-button',
  standalone: true,
  templateUrl: './subscribe-user-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiButton],
})
export class SubscribeUserButtonComponent {
  @Input()
  isSubscribed = false;
}
