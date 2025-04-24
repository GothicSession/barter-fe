import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@libs/api';
import {
  AvatarComponent,
  AvatarSkeletonComponent,
  EditUserButtonComponent,
  UserEntityFacade,
  UserEntityStore,
} from '@libs/domain/user';
import { TuiSkeleton } from '@taiga-ui/kit';
import { map } from 'rxjs';

import {
  ProfileEventsListComponent,
  ProfileEventsListSkeletonComponent,
} from '../../ui';

@Component({
  selector: 'barter-profile-page',
  standalone: true,
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AvatarComponent,
    EditUserButtonComponent,
    ProfileEventsListComponent,
    AvatarSkeletonComponent,
    NgTemplateOutlet,
    ProfileEventsListSkeletonComponent,
    TuiSkeleton,
  ],
  providers: [UserEntityStore, UserEntityFacade, UserService],
})
export class ProfilePageComponent {
  protected readonly userEntityFacade = inject(UserEntityFacade);
  protected readonly activatedRoute = inject(ActivatedRoute);
  protected readonly destroyRef = inject(DestroyRef);
  protected readonly currentId: WritableSignal<number> = signal(
    Number(this.activatedRoute.snapshot.params['id']),
  );

  constructor() {
    this.activatedRoute.params
      .pipe(
        map(({ id }) => Number(id)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((id: number) => {
        this.currentId.set(id);
      });

    this.userEntityFacade.loadUserById(this.currentId);
  }
}
