import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CreateEventDialogComponent,
  CreateEventsDirective,
} from '@libs/domain/event';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'barter-create-event-button',
  standalone: true,
  templateUrl: './create-event-button.component.html',
  styleUrl: './create-event-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiButton,
    CreateEventsDirective,
    TuiIcon,
    CreateEventDialogComponent,
  ],
})
export class CreateEventButtonComponent {}
