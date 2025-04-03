import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { TuiSheetDialog, TuiSheetDialogOptions } from '@taiga-ui/addon-mobile';
import { TuiIcon } from '@taiga-ui/core';

import { SearchEventsDialogComponent } from '../search-events-dialog/search-events-dialog.component';

@Component({
  selector: 'barter-search-events-input',
  standalone: true,
  templateUrl: './search-events-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiIcon, SearchEventsDialogComponent, TuiSheetDialog],
})
export class SearchEventsInputComponent {
  protected readonly openedDialog: WritableSignal<boolean> = signal(false);
  protected readonly dialogOptions: Partial<TuiSheetDialogOptions> = {
    closeable: true,
    offset: 96,
    fullscreen: true,
  };
}
