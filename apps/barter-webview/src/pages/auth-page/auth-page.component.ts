import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';

import { Routes } from '../../app/shared';
import { AuthService } from '../../app/shared/services/auth.service';
import { TELEGRAM } from '../../app/shared/tokens';

@Component({
  selector: 'barter-auth',
  template: `
    <div class="container">
      <h1>Возникла проблема при авторизации</h1>
      <a tuiButton (click)="handleAuth()"> Попробовать снова </a>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        padding: 20px;
      }
      h1 {
        margin-bottom: 20px;
        line-height: 1.2;
      }
    `,
  ],
  imports: [TuiButton],
})
export class AuthPageComponent implements OnInit {
  protected readonly authService = inject(AuthService);
  protected readonly router = inject(Router);
  protected readonly telegram = inject(TELEGRAM);

  ngOnInit() {
    this.handleAuth();
  }

  handleAuth() {
    const initData = this.telegram.WebApp.initData;

    this.authService.authenticate(initData).subscribe({
      next: () => {
        void this.router.navigate([Routes.MAIN, Routes.EVENTS]);
      },
      error: (error: unknown) => {
        console.error('Authentication failed:', error);
      },
    });
  }
}
