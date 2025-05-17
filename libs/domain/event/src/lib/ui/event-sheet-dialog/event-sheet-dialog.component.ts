import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Event } from '@libs/api';
import { CarouselSliderComponent } from '@libs/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';

@Component({
  selector: 'barter-event-sheet-dialog',
  standalone: true,
  templateUrl: './event-sheet-dialog.component.html',
  styleUrl: './event-sheet-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CarouselSliderComponent],
})
export class EventSheetDialogComponent {
  protected readonly event =
    injectContext<TuiDialogContext<boolean, Event>>().data;
}
