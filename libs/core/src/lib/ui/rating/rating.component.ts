import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiRating } from '@taiga-ui/kit';

@Component({
  selector: 'barter-rating',
  standalone: true,
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiRating, FormsModule],
})
export class RatingComponent {
  @Input({ required: true })
  rating!: number;

  @Input()
  isReadonly = false;
}
