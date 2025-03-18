import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Event, EventService } from '@libs/api';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

interface EventEntityStore {
  events: Event[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const EventEntityStore = signalStore(
  withState<EventEntityStore>(() => ({
    isLoading: false,
    error: null,
    events: [],
  })),
  withMethods((store, eventService = inject(EventService)) => ({
    loadEvents: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          eventService.getEvents().pipe(
            tapResponse({
              next: (events: Event[]) => patchState(store, { events }),
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
