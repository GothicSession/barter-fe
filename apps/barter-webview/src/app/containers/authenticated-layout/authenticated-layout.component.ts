import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../ui';
import { HeaderComponent } from '../../../ui';

@Component({
  selector: 'barter-authenticated-layout',
  standalone: true,
  templateUrl: './authenticated-layout.component.html',
  styleUrl: './authenticated-layout.component.scss',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'page-container',
  },
})
export class AuthenticatedLayoutComponent {}
