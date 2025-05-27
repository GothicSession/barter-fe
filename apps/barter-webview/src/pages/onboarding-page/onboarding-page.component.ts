import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@libs/api';
import {
  CreateUserFeatureService,
  UserMainInfoComponent,
  UserPhotosUploadComponent,
} from '@libs/domain/user';

import { Routes } from '../../app/shared';
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
  providers: [CreateUserFeatureService],
})
export class OnboardingPageComponent implements OnInit {
  private readonly createUserService = inject(CreateUserFeatureService);
  protected readonly ActivePageEnum = ActivePageEnum;
  protected readonly router = inject(Router);
  protected readonly activatedRoute = inject(ActivatedRoute);
  protected activePage: WritableSignal<ActivePageEnum> = signal(
    ActivePageEnum.WELCOME,
  );

  ngOnInit(): void {
    const user = this.activatedRoute.snapshot.data['user'] as User;

    this.createUserService.initialUserInfo = user;
  }

  changeActiveScreen(activePage: ActivePageEnum) {
    this.activePage.set(activePage);
  }

  redirectToEventPage(): void {
    void this.router.navigate([Routes.EVENTS]);
  }
}
