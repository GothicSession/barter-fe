import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, Observable, of } from 'rxjs';

import { EVENTS } from '../constants';
import { Event } from '../types';

const DELAY = 1500;
@Injectable()
export class EventService {
  private readonly httpClient = inject(HttpClient);

  getEvents(search?: string): Observable<Event[]> {
    let params = new HttpParams();

    if (search) {
      params = params.set('search', search);
    }

    return this.httpClient.get<Event[]>('/events', { params }).pipe(
      delay(DELAY),
      catchError(() => of(EVENTS).pipe(delay(DELAY))),
    );
  }
}
