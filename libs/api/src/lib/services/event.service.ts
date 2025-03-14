import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EVENTS } from '../constants/events';
import { Event } from '../types/event';

@Injectable()
export class UserService {
  getEvents(): Observable<Event[]> {
    return of(EVENTS);
  }
}
