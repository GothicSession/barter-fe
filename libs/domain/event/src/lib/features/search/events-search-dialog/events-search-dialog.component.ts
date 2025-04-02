import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

import { SearchEventsFeatureService } from '../search-events.service';

@Component({
  selector: 'barter-user-events-search-dialog',
  standalone: true,
  templateUrl: './events-search-dialog.component.html',
  styleUrl: './events-search-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiInputModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiButton,
  ],
})
export class EventsSearchDialogComponent {
  protected readonly searchEventsService = inject(SearchEventsFeatureService);

  @Output()
  cancelEvent: EventEmitter<void> = new EventEmitter();

  emitCancelEvent(): void {
    this.cancelEvent.emit();
  }
}
