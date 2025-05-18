import { NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export const outsideZone =
  <T>(zone: NgZone) =>
  (source: Observable<T>): Observable<T> =>
    new Observable((observer) => {
      let sub: Subscription;

      return zone.runOutsideAngular(() => {
        sub = source.subscribe(observer);

        return sub;
      });
    });
