import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'barter-non-authenticated-layout',
  standalone: true,
  templateUrl: './non-authenticated-layout.component.html',
  imports: [RouterOutlet],
  styleUrl: './non-authenticated-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NonAuthenticatedLayoutComponent {
  @HostBinding('class')
  hostClass = 'page-container';
}
