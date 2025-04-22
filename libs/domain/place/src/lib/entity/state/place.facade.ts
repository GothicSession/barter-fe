import { inject, Injectable, Signal } from '@angular/core';
import { Place } from '@libs/api';
import { Unsubscribable } from 'rxjs';

import { PlaceEntityStore } from './place.store';

@Injectable()
export class PlaceEntityFacade {
  private readonly placeEntityStore = inject(PlaceEntityStore);

  getPlaces(): Signal<Place[]> {
    return this.placeEntityStore.places;
  }

  getIsLoading(): Signal<boolean> {
    return this.placeEntityStore.isLoading;
  }

  loadPlaces(): Unsubscribable {
    return this.placeEntityStore.loadPlaces();
  }
}
