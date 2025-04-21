import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Place } from '@libs/api';
import { RatingComponent } from '@libs/core';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'barter-place-card',
  standalone: true,
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiIcon, RatingComponent],
})
export class PlaceCardComponent {
  @Input({ required: true })
  place!: Place;
}
