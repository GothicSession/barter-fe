import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Place } from '@libs/api';

import { PlaceCardComponent } from '../place-card/place-card.component';

@Component({
  selector: 'barter-place-list',
  standalone: true,
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PlaceCardComponent],
})
export class PlaceListComponent {
  @Input({ required: true })
  places!: Place[];

  @Output()
  clickCard = new EventEmitter<Place>();

  emitClickCard(place: Place): void {
    this.clickCard.emit(place);
  }
}
