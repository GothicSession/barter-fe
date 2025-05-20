import { Directive, Input } from '@angular/core';
import { BaseSheetDialogDirective, DialogConfig } from '@libs/core';
import { TuiSheetDialogOptions } from '@taiga-ui/addon-mobile';

import { SearchEventsDialogComponent } from './search-events-dialog/search-events-dialog.component';

@Directive({
  selector: '[searchEvents]',
  standalone: true,
})
export class SearchEventsFeatureDirective extends BaseSheetDialogDirective<
  SearchEventsDialogComponent,
  never,
  boolean
> {
  protected override readonly defaultComponent = SearchEventsDialogComponent;

  protected override readonly defaultDialogOptions: Partial<TuiSheetDialogOptions> =
    {
      bar: false,
    };

  @Input()
  searchEvents: DialogConfig<TuiSheetDialogOptions>;

  protected get inputConfig(): DialogConfig<TuiSheetDialogOptions> {
    return this.searchEvents;
  }
}
