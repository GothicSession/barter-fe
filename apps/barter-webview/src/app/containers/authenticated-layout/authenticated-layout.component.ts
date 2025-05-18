import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '../../../ui/footer';
import { HeaderComponent } from '../../../ui/header';

@Component({
  selector: 'barter-authenticated-layout',
  standalone: true,
  templateUrl: './authenticated-layout.component.html',
  styleUrl: './authenticated-layout.component.scss',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticatedLayoutComponent {
  @HostBinding('class')
  hostClass = 'page-container';
}
