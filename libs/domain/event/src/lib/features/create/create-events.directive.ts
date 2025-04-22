import { Directive, Input } from '@angular/core';
import { BaseSheetDialogDirective, DialogConfig } from '@libs/core';
import { TuiSheetDialogOptions } from '@taiga-ui/addon-mobile';

import { CreateEventFeatureService } from './create-event.service';
import { CreateEventDialogComponent } from './event-create-dialog/create-event-dialog.component';
import { CreateEventDialogData } from './types/create-event-dialog-data';

@Directive({
  selector: '[createEvent]',
  standalone: true,
  providers: [CreateEventFeatureService],
})
export class CreateEventsDirective extends BaseSheetDialogDirective<
  CreateEventDialogComponent,
  CreateEventDialogData,
  boolean
> {
  protected override readonly defaultComponent = CreateEventDialogComponent;

  protected override readonly defaultDialogOptions: Partial<
    TuiSheetDialogOptions<CreateEventDialogData>
  > = {
    bar: false,
  };

  @Input({ required: true })
  createEvent!: DialogConfig<TuiSheetDialogOptions<CreateEventDialogData>>;

  protected get inputConfig(): DialogConfig<
    TuiSheetDialogOptions<CreateEventDialogData>
  > {
    return this.createEvent;
  }
}
