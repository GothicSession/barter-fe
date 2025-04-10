import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CreateEventDialogComponent,
  CreateEventsDirective,
} from '@libs/domain/event';
import { ChoosePlaceControlComponent } from '@libs/domain/place';
import { TuiButton, TuiIcon, TuiIconPipe } from '@taiga-ui/core';

import { ChoosePlaceComponent } from '../../../../../libs/domain/place/src/lib/features/choose/choose-place/choose-place.component';
import { Routes } from '../../app/shared';
import { FooterLinkItemComponent } from '../footer-link-item/footer-link-item.component';

@Component({
  selector: 'barter-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FooterLinkItemComponent,
    TuiIconPipe,
    TuiButton,
    TuiIcon,
    CreateEventsDirective,
    CreateEventDialogComponent,
    ChoosePlaceControlComponent,
    ChoosePlaceComponent,
  ],
})
export class FooterComponent {
  protected readonly Routes = Routes;
}
