import { inject, Injectable, Signal } from '@angular/core';
import { Event } from '@libs/api';
import { Unsubscribable } from 'rxjs';

import { EventStore } from './event.store';

@Injectable()
export class EventFacade {
  private readonly eventStore = inject(EventStore);

  getEvents(): Signal<Event[]> {
    return this.eventStore.events;
  }

  getIsLoading(): Signal<boolean> {
    return this.eventStore.isLoading;
  }

  loadEvents(): Unsubscribable {
    return this.eventStore.loadEvents();
  }
}
