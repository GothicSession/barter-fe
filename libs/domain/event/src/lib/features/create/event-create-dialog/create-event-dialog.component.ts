import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceService } from '@libs/api';
import { PlaceEntityFacade, PlaceEntityStore } from '@libs/domain/place';
import { TuiButton } from '@taiga-ui/core';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiSelectModule,
  TuiTextareaModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

import { EventPhotoItemComponent } from '../../../ui';

@Component({
  selector: 'barter-create-event-dialog',
  standalone: true,
  templateUrl: './create-event-dialog.component.html',
  styleUrl: './create-event-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    EventPhotoItemComponent,
    TuiButton,
    TuiInputModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiTextareaModule,
    TuiInputDateModule,
  ],
})
export class CreateEventDialogComponent {
  protected readonly placeFacade = inject(PlaceEntityFacade);

  constructor() {
    this.placeFacade.loadPlaces();
  }
}
