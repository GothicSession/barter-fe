import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventService } from '@libs/api';
import {
  EventCardComponent,
  EventEntityFacade,
  EventEntityStore,
  EventsSearchInputComponent,
  SearchEventsFeatureService,
} from '@libs/domain/event';

@Component({
  selector: 'barter-events-page',
  standalone: true,
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    EventService,
    EventEntityStore,
    EventEntityFacade,
    SearchEventsFeatureService,
  ],
  imports: [EventCardComponent, EventsSearchInputComponent, FormsModule],
})
export class EventsPageComponent {
  protected readonly eventEntityFacade = inject(EventEntityFacade);

  constructor() {
    this.eventEntityFacade.loadEvents();
  }
}
