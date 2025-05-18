import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Event, EventService, GetEventsRequest } from '@libs/api';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

interface EventEntityStore {
  events: Event[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
  isWholeListLoaded: boolean;
  search: string;
}

const DEFAULT_LIMIT = 15;

export const EventEntityStore = signalStore(
  withState<EventEntityStore>(() => ({
    isLoading: false,
    error: null,
    events: [],
    isWholeListLoaded: false,
    search: '',
  })),
  withMethods((store, eventService = inject(EventService)) => ({
    loadEvents: rxMethod<GetEventsRequest>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((requestBody) =>
          eventService
            .getEvents({
              ...requestBody,
              offset:
                requestBody.search === store.search()
                  ? store.events().length
                  : 0,
            })
            .pipe(
              tapResponse({
                next: (events: Event[]) =>
                  patchState(store, {
                    events:
                      requestBody.search === store.search()
                        ? [...store.events(), ...events]
                        : events,
                    isWholeListLoaded:
                      (requestBody?.limit ?? DEFAULT_LIMIT) > events.length,
                    search: requestBody?.search,
                  }),
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
