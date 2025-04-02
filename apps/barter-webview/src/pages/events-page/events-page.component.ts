import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventService } from '@libs/api';
import {
  EventCardComponent,
  EventEntityFacade,
  EventEntityStore,
  EventsSearchInputComponent,
} from '@libs/domain/event';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'barter-events-page',
  standalone: true,
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventService, EventEntityStore, EventEntityFacade],
  imports: [EventCardComponent, EventsSearchInputComponent, FormsModule],
})
export class EventsPageComponent {
  protected readonly eventEntityFacade = inject(EventEntityFacade);

  constructor() {
    this.eventEntityFacade.loadEvents();
  }
}
