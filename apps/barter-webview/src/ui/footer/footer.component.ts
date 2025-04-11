import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiIconPipe } from '@taiga-ui/core';

import { Routes } from '../../app/shared';
import { FooterLinkItemComponent } from '../footer-link-item/footer-link-item.component';

@Component({
  selector: 'barter-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FooterLinkItemComponent, TuiIconPipe],
})
export class FooterComponent {
  protected readonly Routes = Routes;
}
