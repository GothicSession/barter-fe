import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'barter-edit-user-button',
  standalone: true,
  templateUrl: './edit-user-button.component.html',
  styleUrl: './edit-user-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiButton],
})
export class EditUserButtonComponent {}
