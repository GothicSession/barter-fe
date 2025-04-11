import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Place } from '@libs/api';

import { PlaceListComponent } from '../../../ui';

@Component({
  selector: 'barter-choose-place-control',
  standalone: true,
  templateUrl: './choose-place-control.component.html',
  styleUrl: './choose-place-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PlaceListComponent],
})
export class ChoosePlaceControlComponent {
  @Input()
  places!: Place[];

  @Output()
  clickCard: EventEmitter<Place> = new EventEmitter();

  emitClickCard(place: Place): void {
    this.clickCard.emit(place);
  }
}
