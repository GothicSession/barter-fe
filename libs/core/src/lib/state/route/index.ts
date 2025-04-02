import { RouteFacade } from './route.facade';
import { RouteStore } from './route.store';

export * from './route.facade';
export * from './route.store';

export const provideRoutesState = <T>() => [
  { provide: RouteFacade<T> },
  { provide: RouteStore },
];
