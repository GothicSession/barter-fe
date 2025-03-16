import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';
import { TuiFileLike, TuiFiles } from '@taiga-ui/kit';

@Component({
  selector: 'barter-user-photo-item',
  standalone: true,
  templateUrl: './photo-item.component.html',
  styleUrl: './photo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiFiles, ReactiveFormsModule, TuiIcon],
})
export class PhotoItemComponent {
  protected readonly control = new FormControl<TuiFileLike | null>(null);
}
