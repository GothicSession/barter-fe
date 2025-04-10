import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiFileLike,
  TuiInputFiles,
  TuiInputFilesDirective,
} from '@taiga-ui/kit';

@Component({
  selector: 'barter-event-photo',
  standalone: true,
  templateUrl: './event-photo-item.component.html',
  styleUrl: './event-photo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    TuiIcon,
    TuiInputFiles,
    TuiInputFilesDirective,
    ReactiveFormsModule,
    TuiAvatar,
  ],
})
export class EventPhotoItemComponent {
  protected readonly control = new FormControl<TuiFileLike | null>(null);
}
