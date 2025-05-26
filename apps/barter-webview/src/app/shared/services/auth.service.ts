import { inject, Injectable } from '@angular/core';
import { AuthApiService, LoginResponse } from '@libs/api';
import { LocalStorageService } from '@libs/core';
import { BehaviorSubject, finalize, Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LoadingService } from './loading.service';

const FAKE_INIT_DATA =
  'query_id=AAEgtlc6AAAAACC2VzoHJ0PP&user=%7B%22id%22%3A978826784%2C%22first_name%22%3A%22%D1%8D%D1%80%D0%B8%D0%BA%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22idfurnl%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FqY1aiEIR1FxOidMLE7EhNJ0sKY2weL1afyHvuo0NBXs.svg%22%7D&auth_date=1746970899&signature=m-jpGBtuanCMfm8eFb25yLcLC93iAEyKhxoOa4amPZgDzen5Da6-EPRSK7zcAM9OX0cQzC6DXFfhVaH-I3rVCQ&hash=60e9dda0231e137bbec956b9532558b309cb8efcf4a5d71c4bda9da15e929511';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_TOKEN_KEY = 'auth_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private readonly isAuthenticatedSubject$$ = new BehaviorSubject<boolean>(
    false,
  );

  private readonly loadingService = inject(LoadingService);
  private readonly authApiService = inject(AuthApiService);
  private readonly localStoreService = inject(LocalStorageService);

  public isAuthenticated$ = this.isAuthenticatedSubject$$.asObservable();

  constructor() {
    this.checkAuthStatus();
  }

  public authenticate(initData: string): Observable<LoginResponse> {
    this.loadingService.show();

    const initDataToUse = environment.production ? initData : FAKE_INIT_DATA;

    return this.authApiService.telegramLogin(initDataToUse).pipe(
      tap((response) => {
        this.setTokens(response.accessToken, response.refreshToken);
        this.isAuthenticatedSubject$$.next(true);
      }),
      finalize(() => this.loadingService.hide()),
    );
  }

  public refreshToken(): Observable<LoginResponse> {
    const refreshToken = this.getRefreshToken();

    return this.authApiService.refreshToken(refreshToken).pipe(
      tap((response) => {
        this.setTokens(response.accessToken, response.refreshToken);
      }),
    );
  }

  public logout(): void {
    this.localStoreService.removeItem(this.AUTH_TOKEN_KEY);
    this.localStoreService.removeItem(this.REFRESH_TOKEN_KEY);
    this.isAuthenticatedSubject$$.next(false);
  }

  public getAuthToken(): string | null {
    return this.localStoreService.getItem(this.AUTH_TOKEN_KEY);
  }

  private checkAuthStatus(): void {
    const token = this.getAuthToken();

    this.isAuthenticatedSubject$$.next(!!token);
  }

  private getRefreshToken(): string | null {
    return this.localStoreService.getItem(this.REFRESH_TOKEN_KEY);
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    this.localStoreService.setItem(this.AUTH_TOKEN_KEY, accessToken);
    this.localStoreService.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  }
}
