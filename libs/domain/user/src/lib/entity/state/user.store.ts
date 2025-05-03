import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { User, UserService } from '@libs/api';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

interface UserEntityStore {
  // TODO: Подумать над неймингом - это юзер на странице открытого профиля
  currentUser: User | null;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

const MY_PROFILE_ID = 1;

export const UserEntityStore = signalStore(
  withState<UserEntityStore>(() => ({
    isLoading: false,
    error: null,
    currentUser: null,
  })),
  withComputed(({ currentUser }) => ({
    isMyProfile: computed(() => currentUser()?.id === MY_PROFILE_ID),
  })),
  withMethods((store, userService = inject(UserService)) => ({
    loadUserById: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((id: number) =>
          userService.getUserById(id).pipe(
            tapResponse({
              next: (user: User) => patchState(store, { currentUser: user }),
              error: (error: HttpErrorResponse) => {
                patchState(store, { error });
              },
              finalize: () => {
                patchState(store, { isLoading: false });
              },
            }),
          ),
        ),
      ),
    ),
  })),
);
