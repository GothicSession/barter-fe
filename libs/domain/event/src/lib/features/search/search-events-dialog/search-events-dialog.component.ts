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
  selector: 'barter-search-events-dialog',
  standalone: true,
  templateUrl: './search-events-dialog.component.html',
  styleUrl: './search-events-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiInputModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiButton,
  ],
})
export class SearchEventsDialogComponent {
  protected readonly searchEventsService = inject(SearchEventsFeatureService);

  @Output()
  cancelEvent: EventEmitter<void> = new EventEmitter();

  emitCancelEvent(): void {
    this.cancelEvent.emit();
  }
}
