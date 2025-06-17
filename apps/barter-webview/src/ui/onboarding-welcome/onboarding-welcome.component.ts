import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlideScreen } from '@libs/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';

import { OnboardingListItemComponent } from '../onboarding-list-item/onboarding-list-item.component';

@Component({
  selector: 'barter-onboarding-welcome',
  standalone: true,
  templateUrl: './onboarding-welcome.component.html',
  styleUrl: './onboarding-welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiTitle, OnboardingListItemComponent, TuiButton],
})
export class OnboardingWelcomeComponent extends SlideScreen {}
