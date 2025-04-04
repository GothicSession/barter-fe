import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { TuiSheetDialog, TuiSheetDialogOptions } from '@taiga-ui/addon-mobile';
import { TuiIcon } from '@taiga-ui/core';

import { EventsSearchDialogComponent } from '../events-search-dialog/events-search-dialog.component';

@Component({
  selector: 'barter-user-events-search-input',
  standalone: true,
  templateUrl: './events-search-input.component.html',
  styleUrl: './events-search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiIcon, EventsSearchDialogComponent, TuiSheetDialog],
})
export class EventsSearchInputComponent {
  protected readonly openedDialog: WritableSignal<boolean> = signal(false);
  protected readonly dialogOptions: Partial<TuiSheetDialogOptions> = {
    bar: false,
  };
}
