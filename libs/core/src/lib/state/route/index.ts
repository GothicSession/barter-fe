import { RouteFacade } from './route.facade';
import { RouteStore } from './route.store';

export * from './route.store';
export * from './route.facade';

export const provideRoutesState = <T>() => [
  { provide: RouteFacade<T> },
  { provide: RouteStore },
];
