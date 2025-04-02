import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { NavigationEnd } from '@angular/router';
import { map, pipe } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export interface RouteStore {
  activeRoute: string | null;
}

export const RouteStore = signalStore(
  withState<RouteStore>({
    activeRoute: null,
  }),
  withMethods((store) => ({
    observeRoutes: rxMethod<NavigationEnd>(
      pipe(
        map((navigationEnd) =>
          navigationEnd.url[0] === '/'
            ? navigationEnd.url.slice(1)
            : navigationEnd.url,
        ),
        tapResponse({
          next: (navigationUrl: string) => {
            patchState(store, { activeRoute: navigationUrl });
          },
          error: () => {},
          finalize: () => {},
        }),
      ),
    ),
  })),
);
