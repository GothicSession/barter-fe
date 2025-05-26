import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

import { ApiHttpClient } from '../http/api-http.client';
import { LoginResponse } from '../types';

const DELAY = 1500;

@Injectable()
export class AuthApiService {
  private readonly httpClient = inject(ApiHttpClient);

  telegramLogin(initData: string): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>('/auth/telegram/login', {
        initData,
      })
      .pipe(delay(DELAY));
  }

  refreshToken(refreshToken: string | null): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>('/auth/tokens/refresh', {
        refreshToken,
      })
      .pipe(delay(DELAY));
  }
}
