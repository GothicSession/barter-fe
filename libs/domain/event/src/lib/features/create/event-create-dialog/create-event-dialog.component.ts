import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Place } from '@libs/api';
import { PlaceEntityFacade } from '@libs/domain/place';
import { TuiButton, TuiDialogContext } from '@taiga-ui/core';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiSelectModule,
  TuiTextareaModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { injectContext } from '@taiga-ui/polymorpheus';

import { EventPhotoItemComponent } from '../../../ui';
import { CreateEventDialogData } from '../types/create-event-dialog-data';

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
    NgTemplateOutlet,
  ],
})
export class CreateEventDialogComponent {
  protected readonly placeFacade = inject(PlaceEntityFacade);
  protected readonly context =
    injectContext<TuiDialogContext<boolean, CreateEventDialogData>>();

  constructor() {
    this.placeFacade.loadPlaces();
  }

  logPlace(place: Place): void {
    console.log(place);
  }
}
