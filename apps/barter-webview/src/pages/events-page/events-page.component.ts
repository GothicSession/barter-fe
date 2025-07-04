import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Event, EventService, PlaceService } from '@libs/api';
import {
  LazyVisibleLoaderDirective,
  RouteFacade,
  ScrolledToBottomDirective,
} from '@libs/core';
import {
  EventCardComponent,
  EventCardSkeletonComponent,
  EventEntityFacade,
  EventEntityStore,
  OpenEventFeatureDirective,
  SearchEventsFeatureDirective,
} from '@libs/domain/event';
import { PlaceEntityFacade, PlaceEntityStore } from '@libs/domain/place';
import { TuiButton } from '@taiga-ui/core';

import { Routes } from '../../app/shared';
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
    OpenEventFeatureDirective,
  ],
})
export class EventsPageComponent implements AfterViewInit {
  @ViewChild('eventsList')
  protected eventsListElement!: ElementRef<HTMLDivElement>;

  protected readonly eventEntityFacade = inject(EventEntityFacade);
  protected readonly routeFacade = inject(RouteFacade);
  protected readonly destroyRef = inject(DestroyRef);
  protected readonly SKELETON_EVENTS_LIST = new Array(
    SKELETON_EVENTS_LIST_LENGTH,
  );

  protected readonly mappedEvents = computed(() =>
    this.eventEntityFacade
      .getEvents()()
      .map((event: Event) => ({
        ...event,
        creatorRouterLink: [
          '/',
          Routes.PROFILE,
          String(event.participants[0].id),
        ],
      })),
  );

  constructor() {
    this.eventEntityFacade.loadEvents();
  }

  ngAfterViewInit(): void {
    this.routeFacade
      .scrollBlockOnSameUrlNavigation$(this.eventsListElement?.nativeElement)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  onNearBottom(): void {
    if (!this.eventEntityFacade.getIsLoading()())
      this.eventEntityFacade.loadEvents();
  }
}
