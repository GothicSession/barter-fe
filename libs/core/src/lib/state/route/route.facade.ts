import { inject, Injectable, Signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';

import { RouteStore } from './route.store';

@Injectable()
export class RouteFacade<T> {
  private readonly routeStore = inject(RouteStore);
  private readonly router = inject(Router);
  private readonly navigationEndEvents$: Observable<NavigationEnd> =
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

  constructor() {
    this.routeStore.observeRoutes(this.navigationEndEvents$);
  }

  getNavigationEndEvents$(): Observable<NavigationEnd> {
    return this.navigationEndEvents$;
  }

  getActiveRoute(): Signal<T | null> {
    return this.routeStore.activeRoute as Signal<T>;
  }
}
