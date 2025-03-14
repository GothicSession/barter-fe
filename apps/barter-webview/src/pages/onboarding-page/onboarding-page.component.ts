import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  UserMainInfoComponent,
  UserPhotosUploadComponent,
} from '@libs/domain/user';

import { OnboardingWelcomeComponent } from '../../ui';

enum ActivePageEnum {
  WELCOME = 'WELCOME',
  USER_MAIN_INFO = 'USER_MAIN_INFO',
  PHOTO = 'PHOTO',
}

@Component({
  selector: 'barter-onboarding-page',
  standalone: true,
  templateUrl: './onboarding-page.component.html',
  styleUrl: './onboarding-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    OnboardingWelcomeComponent,
    UserMainInfoComponent,
    UserPhotosUploadComponent,
  ],
})
export class OnboardingPageComponent {
  protected readonly ActivePageEnum = ActivePageEnum;
  protected readonly router = inject(Router);
  protected activePage: WritableSignal<ActivePageEnum> = signal(
    ActivePageEnum.WELCOME,
  );

  changeActiveScreen(activePage: ActivePageEnum) {
    this.activePage.set(activePage);
  }

  redirectToEventPage(): void {
    void this.router.navigate(['events']);
  }
}
