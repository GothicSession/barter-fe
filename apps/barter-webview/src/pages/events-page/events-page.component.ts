import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Event, EventService } from '@libs/api';
import { EventCardComponent } from '@libs/domain/event';

@Component({
  selector: 'barter-events-page',
  standalone: true,
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventService],
  imports: [EventCardComponent],
})
export class EventsPageComponent {
  protected readonly eventService: EventService = inject(EventService);
  protected readonly events: WritableSignal<Event[]> = signal<Event[]>([]);
  protected readonly destroyRef = inject(DestroyRef);

  constructor() {
    // TODO: Switch to nxsignals store.
    this.eventService
      .getEvents()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((eventsList: Event[]) => this.events.set(eventsList));
  }
}
