import { inject, Injectable, Signal } from '@angular/core';
import { Event } from '@libs/api';
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

  loadEvents(search?: string): Unsubscribable {
    return this.eventEntityStore.loadEvents({ search });
  }
}
