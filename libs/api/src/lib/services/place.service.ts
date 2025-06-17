import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PLACES_MOCK } from '../constants/places';
import { Place } from '../types';

@Injectable()
export class PlaceService {
  getPlaces(): Observable<Place[]> {
    return of(PLACES_MOCK);
  }
}
