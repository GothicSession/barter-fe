import { Directive, Input } from '@angular/core';
import { BaseSheetDialogDirective, DialogConfig } from '@libs/core';
import { TuiSheetDialogOptions } from '@taiga-ui/addon-mobile';

import { CreateEventService } from './create-event.service';
import { CreateEventDialogComponent } from './event-create-dialog/create-event-dialog.component';

@Directive({
  selector: '[createEvent]',
  standalone: true,
  providers: [CreateEventService],
})
export class CreateEventsDirective extends BaseSheetDialogDirective<
  CreateEventDialogComponent,
  never,
  boolean
> {
  protected override readonly defaultComponent = CreateEventDialogComponent;

  protected override readonly defaultDialogOptions: Partial<
    TuiSheetDialogOptions<never>
  > = {
    bar: false,
  };

  @Input({ required: true })
  createEvent!: DialogConfig<TuiSheetDialogOptions>;

  protected get inputConfig(): DialogConfig<TuiSheetDialogOptions> {
    return this.createEvent;
  }
}
