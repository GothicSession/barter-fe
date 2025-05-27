import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'barter-user-photo-item',
  standalone: true,
  templateUrl: './photo-item.component.html',
  styleUrl: './photo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiIcon],
})
export class PhotoItemComponent {
  @Input()
  photoUrl?: string;

  @Input()
  isLoading = false;

  @Output()
  removePhoto = new EventEmitter<void>();
}
