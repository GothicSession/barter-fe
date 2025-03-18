import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EVENTS } from '../constants';
import { Event } from '../types';

@Injectable()
export class EventService {
  getEvents(): Observable<Event[]> {
    return of(EVENTS);
  }
}
