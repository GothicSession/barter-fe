import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';

import { PlaceEntityFacade } from '../../../entity';
import { ChoosePlaceControlComponent } from '..';

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
}
