import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WINDOW } from '@libs/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'barter-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
}
