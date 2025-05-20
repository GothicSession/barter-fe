import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventService, PlaceService } from '@libs/api';
import {
  LazyVisibleLoaderDirective,
  ScrolledToBottomDirective,
} from '@libs/core';
import {
  EventCardComponent,
  EventCardSkeletonComponent,
  EventEntityFacade,
  EventEntityStore,
  SearchEventsFeatureDirective,
  SearchEventsFeatureService,
} from '@libs/domain/event';
import { PlaceEntityFacade, PlaceEntityStore } from '@libs/domain/place';
import { TuiElasticSticky } from '@taiga-ui/addon-mobile';
import { TuiButton, TuiIcon, TuiScrollbar } from '@taiga-ui/core';

import { CreateEventButtonComponent } from '../../ui';

const SKELETON_EVENTS_LIST_LENGTH = 10;

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
    SearchEventsFeatureService,
  ],
  imports: [
    EventCardComponent,
    SearchEventsFeatureDirective,
    FormsModule,
    TuiButton,
    CreateEventButtonComponent,
    EventCardSkeletonComponent,
    LazyVisibleLoaderDirective,
    ScrolledToBottomDirective,
    TuiElasticSticky,
    TuiScrollbar,
    TuiIcon,
  ],
})
export class EventsPageComponent {
  protected readonly eventEntityFacade = inject(EventEntityFacade);
  protected readonly isHeaderScrolled = signal(false);
  protected readonly SKELETON_EVENTS_LIST = new Array(
    SKELETON_EVENTS_LIST_LENGTH,
  );

  protected readonly searchDefaultControl = inject(SearchEventsFeatureService)
    .form.controls.searchDefault;

  constructor() {
    this.eventEntityFacade.loadEvents();
  }

  onNearBottom(): void {
    if (!this.eventEntityFacade.getIsLoading()())
      this.eventEntityFacade.loadEvents();
  }

  onElastic(visibility: number): void {
    this.isHeaderScrolled.set(!visibility);
  }
}
