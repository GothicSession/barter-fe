import { Directive, Input } from '@angular/core';
import { BaseSheetDialogDirective, DialogConfig } from '@libs/core';
import { TuiSheetDialogOptions } from '@taiga-ui/addon-mobile';

import { ModerateEventDialogComponent } from './moderate-event-dialog/moderate-event-dialog.component';
import { ModerateEventDialogData } from './types/moderate-event-dialog-data';

@Directive({
  standalone: true,
  selector: '[moderateEvent]',
})
export class ModerateEventDirective extends BaseSheetDialogDirective<
  ModerateEventDialogComponent,
  ModerateEventDialogData,
  boolean
> {
  protected override readonly defaultComponent = ModerateEventDialogComponent;

  protected override readonly defaultDialogOptions: Partial<
    TuiSheetDialogOptions<ModerateEventDialogData>
  > = {
    bar: false,
  };

  @Input({ required: true })
  moderateEvent!: DialogConfig<TuiSheetDialogOptions<ModerateEventDialogData>>;

  protected get inputConfig(): DialogConfig<
    TuiSheetDialogOptions<ModerateEventDialogData>
  > {
    return this.moderateEvent;
  }
}
