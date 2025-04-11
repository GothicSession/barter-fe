import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateEventsDirective } from '@libs/domain/event';
import { ChoosePlaceComponent } from '@libs/domain/place';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'barter-create-event-button',
  standalone: true,
  templateUrl: './create-event-button.component.html',
  styleUrl: './create-event-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiButton, CreateEventsDirective, ChoosePlaceComponent],
})
export class CreateEventButtonComponent {}
