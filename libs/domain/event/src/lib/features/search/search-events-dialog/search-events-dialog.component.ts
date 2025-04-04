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

import { EventEntityFacade } from '../../../entity';
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
  protected readonly eventEntityFacade = inject(EventEntityFacade);

  @Output()
  closeEvent: EventEmitter<void> = new EventEmitter();

  handleCancel(): void {
    const searchDefaultValue =
      this.searchEventsService.form.getRawValue().searchDefault;

    this.searchEventsService.form.controls.search.setValue(searchDefaultValue);
    this.closeEvent.emit();
  }

  handleSubmit(): void {
    const searchValue = this.searchEventsService.form.getRawValue().search;

    this.searchEventsService.form.controls.searchDefault.setValue(searchValue);
    this.eventEntityFacade.loadEvents(searchValue);
    this.closeEvent.emit();
  }
}
