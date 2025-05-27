import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { EditUserRequestData, User, UserService } from '@libs/api';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

interface AuthenticatedUserState {
  user: User | null;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const AuthenticatedUserStore = signalStore(
  withState<AuthenticatedUserState>(() => ({
    isLoading: false,
    user: null,
    error: null,
  })),
  withMethods((store, userService = inject(UserService)) => ({
    loadUser: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          userService.getUser().pipe(
            tapResponse({
              next: (user: User) => patchState(store, { user }),
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
    editUser: (userData: EditUserRequestData) => {
      patchState(store, { isLoading: true });

      return userService.editUser(userData).pipe(
        tapResponse({
          next: (user: User) => {
            patchState(store, {
              user,
            });
          },
          error: (error: HttpErrorResponse) => {
            patchState(store, { error });
          },
          finalize: () => {
            patchState(store, { isLoading: false });
          },
        }),
      );
    },
  })),
);
