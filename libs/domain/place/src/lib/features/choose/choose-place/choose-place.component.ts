import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import { Place } from '@libs/api';
import { TuiIcon } from '@taiga-ui/core';

import { PlaceEntityFacade } from '../../../entity';
import { ChoosePlaceControlComponent } from '../choose-place-control/choose-place-control.component';

@Component({
  selector: 'barter-choose-place',
  standalone: true,
  templateUrl: './choose-place.component.html',
  styleUrl: './choose-place.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiIcon, ChoosePlaceControlComponent],
})
export class ChoosePlaceComponent {
  protected readonly placeFacade = inject(PlaceEntityFacade);

  @Output()
  changeActivePlace: EventEmitter<Place> = new EventEmitter();

  emitChangeActivePlace(place: Place): void {
    this.changeActivePlace.emit(place);
  }
}
