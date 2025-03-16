import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventService } from '@libs/api';
import {
  EventCardComponent,
  EventFacade,
  EventStore,
} from '@libs/domain/event';

@Component({
  selector: 'barter-events-page',
  standalone: true,
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventService, EventStore, EventFacade],
  imports: [EventCardComponent],
})
export class EventsPageComponent {
  protected readonly eventFacade = inject(EventFacade);

  constructor() {
    this.eventFacade.loadEvents();
  }
}
