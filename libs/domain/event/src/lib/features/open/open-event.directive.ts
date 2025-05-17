import { Directive, Input } from '@angular/core';
import { Event } from '@libs/api';
import { BaseSheetDialogDirective, DialogConfig } from '@libs/core';
import { TuiSheetDialogOptions } from '@taiga-ui/addon-mobile';

import { EventSheetDialogComponent } from '../../ui';

@Directive({
  selector: 'barter-event-card[openEvent]',
  standalone: true,
})
export class OpenEventFeatureDirective extends BaseSheetDialogDirective<
  EventSheetDialogComponent,
  Event,
  boolean
> {
  protected override readonly defaultComponent = EventSheetDialogComponent;

  protected override readonly defaultDialogOptions: Partial<TuiSheetDialogOptions> =
    {
      bar: true,
    };

  @Input()
  openEvent!: DialogConfig<TuiSheetDialogOptions<Event>>;

  protected get inputConfig(): DialogConfig<TuiSheetDialogOptions<Event>> {
    return this.openEvent;
  }
}
