import { inject, Injectable, Signal } from '@angular/core';
import { RouteStore } from './route.store';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';

@Injectable()
export class RouteFacade<T> {
  private readonly routeStore = inject(RouteStore);
  private readonly router = inject(Router);
  private readonly navigationEndEvents$: Observable<NavigationEnd> =
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

  constructor() {
    this.routeStore.observeRoutes(this.navigationEndEvents$);
  }

  getActiveRoute(): Signal<T | null> {
    return this.routeStore.activeRoute as Signal<T>;
  }
}
