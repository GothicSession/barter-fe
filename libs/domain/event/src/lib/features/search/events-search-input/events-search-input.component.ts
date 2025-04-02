import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'barter-user-events-search-input',
  standalone: true,
  templateUrl: './events-search-input.component.html',
  styleUrl: './events-search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiIcon,
  ],
})
export class EventsSearchInputComponent {}
