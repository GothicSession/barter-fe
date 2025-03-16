import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'barter-onboarding-list-item',
  standalone: true,
  templateUrl: './onboarding-list-item.component.html',
  styleUrl: './onboarding-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiIcon],
})
export class OnboardingListItemComponent {
  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  icon!: string;

  @Input({ required: true })
  description!: string;
}
