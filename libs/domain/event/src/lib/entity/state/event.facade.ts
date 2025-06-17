import { inject, Injectable, Signal } from '@angular/core';
import { Event, GetEventsRequest } from '@libs/api';
import { Unsubscribable } from 'rxjs';

import { EventEntityStore } from './event.store';

@Injectable()
export class EventEntityFacade {
  private readonly eventEntityStore = inject(EventEntityStore);

  getEvents(): Signal<Event[]> {
    return this.eventEntityStore.events;
  }

  getIsLoading(): Signal<boolean> {
    return this.eventEntityStore.isLoading;
  }

  getIsWholeListLoaded(): Signal<boolean> {
    return this.eventEntityStore.isWholeListLoaded;
  }

  loadEvents(request?: GetEventsRequest): Unsubscribable {
    return this.eventEntityStore.loadEvents(request || {});
  }
}
