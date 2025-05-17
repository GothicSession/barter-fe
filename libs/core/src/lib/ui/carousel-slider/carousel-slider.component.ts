import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TuiItem } from '@taiga-ui/cdk';
import { TuiCarouselButtons, TuiCarouselComponent } from '@taiga-ui/kit';

import { LazySrcDirective } from '../../directives';

@Component({
  selector: 'barter-carousel-slider',
  standalone: true,
  templateUrl: './carousel-slider.component.html',
  styleUrl: './carousel-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiCarouselButtons,
    TuiCarouselComponent,
    TuiItem,
    LazySrcDirective,
  ],
})
export class CarouselSliderComponent {
  protected activeIndex = 0;

  @Input({ required: true })
  items!: string[];
}
