import { HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, Observable, of } from 'rxjs';

import { EVENTS } from '../constants';
import { ApiHttpClient } from '../http/api-http.client';
import { Event } from '../types';

const DELAY = 500;
const PAGE_SIZE = 15;

export interface GetEventsRequest {
  offset?: number;
  search?: string;
  limit?: number;
}

@Injectable()
export class EventService {
  private readonly httpClient = inject(ApiHttpClient);

  getEvents(req: GetEventsRequest = {}): Observable<Event[]> {
    const { offset = 0, search = '', limit = PAGE_SIZE } = req;
    const term = search.trim().toLowerCase();

    let events = EVENTS;

    if (term) {
      events = events.filter((e) => e.name.toLowerCase().includes(term));
    }

    const page = events.slice(offset, offset + limit);

    return this.httpClient
      .get<Event[]>('/events', {
        params: new HttpParams()
          .set('offset', offset)
          .set('limit', limit)
          .set('search', term),
      })
      .pipe(
        delay(DELAY),
        catchError(() => of(page)),
      );
  }
}
