import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Place, PlaceService } from '@libs/api';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

interface PlaceEntityStore {
  places: Place[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const PlaceEntityStore = signalStore(
  withState<PlaceEntityStore>(() => ({
    isLoading: false,
    error: null,
    places: [],
  })),
  withMethods((store, placeService = inject(PlaceService)) => ({
    loadPlaces: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          placeService.getPlaces().pipe(
            tapResponse({
              next: (places: Place[]) => patchState(store, { places }),
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
