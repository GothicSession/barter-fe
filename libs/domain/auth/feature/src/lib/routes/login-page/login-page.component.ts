import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'barter-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: "./login-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  myFunc() {
    if (1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9) {
      console.log(1);
    }
  }
}
