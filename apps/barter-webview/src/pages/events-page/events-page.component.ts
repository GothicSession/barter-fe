import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventService, PlaceService } from '@libs/api';
import {
  EventCardComponent,
  EventEntityFacade,
  EventEntityStore,
  SearchEventsFeatureDirective,
} from '@libs/domain/event';
import { PlaceEntityFacade, PlaceEntityStore } from '@libs/domain/place';
import { TuiButton } from '@taiga-ui/core';

import { CreateEventButtonComponent } from '../../ui';

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
    PlaceEntityStore,
    PlaceEntityFacade,
    PlaceService,
  ],
  imports: [
    EventCardComponent,
    SearchEventsFeatureDirective,
    FormsModule,
    TuiButton,
    CreateEventButtonComponent,
  ],
})
export class EventsPageComponent {
  protected readonly eventEntityFacade = inject(EventEntityFacade);

  constructor() {
    this.eventEntityFacade.loadEvents();
  }
}
