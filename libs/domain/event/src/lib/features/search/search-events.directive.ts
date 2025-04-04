import { Directive, Input } from '@angular/core';
import {
  BaseDialogConfig,
  BaseSheetDialogDirective,
  TemplateDialogConfig,
} from '@libs/core';
import { TuiSheetDialogOptions } from '@taiga-ui/addon-mobile';

import { SearchEventsFeatureService } from './search-events.service';
import { SearchEventsDialogComponent } from './search-events-dialog/search-events-dialog.component';
import { SearchEventsDialogDataEXAMPLE } from './types';

@Directive({
  selector: 'button[searchEvents]',
  standalone: true,
  providers: [SearchEventsFeatureService],
})
export class SearchEventsFeatureDirective extends BaseSheetDialogDirective<
  SearchEventsDialogComponent,
  SearchEventsDialogDataEXAMPLE,
  boolean
> {
  protected override readonly defaultComponent = SearchEventsDialogComponent;

  protected override readonly defaultDialogOptions: Partial<
    TuiSheetDialogOptions<SearchEventsDialogDataEXAMPLE>
  > = {
    bar: false,
    data: {
      helloThereArtem: 'privet eto test',
    },
  };

  @Input({ required: true })
  searchEvents!:
    | BaseDialogConfig<TuiSheetDialogOptions<SearchEventsDialogDataEXAMPLE>>
    | TemplateDialogConfig<
        TuiSheetDialogOptions<SearchEventsDialogDataEXAMPLE>
      >;

  protected get config(): BaseDialogConfig<
    TuiSheetDialogOptions<SearchEventsDialogDataEXAMPLE>
  > {
    return this.searchEvents;
  }
}
