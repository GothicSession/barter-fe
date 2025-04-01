import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterLinkItemComponent } from '../footer-link-item/footer-link-item.component';
import { Routes } from '../../app/types';
import { TuiIconPipe } from '@taiga-ui/core';

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
