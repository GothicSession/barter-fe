import { NavigationEnd } from '@angular/router';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { map, pipe } from 'rxjs';

export interface RouteStore {
  activeRoute: string | null;
}

const FIRST_INDEX = 1;

export const RouteStore = signalStore(
  withState<RouteStore>({
    activeRoute: null,
  }),
  withMethods((store) => ({
    observeRoutes: rxMethod<NavigationEnd>(
      pipe(
        map((navigationEnd) =>
          navigationEnd.url[0] === '/'
            ? navigationEnd.url.slice(FIRST_INDEX)
            : navigationEnd.url,
        ),
        tapResponse({
          next: (navigationUrl: string) => {
            patchState(store, { activeRoute: navigationUrl });
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          error: () => {},
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          finalize: () => {},
        }),
      ),
    ),
  })),
);
