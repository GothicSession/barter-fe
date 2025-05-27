import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';

import { USER_ARTEM, USERS } from '../constants';
import { ApiHttpClient } from '../http/api-http.client';
import { EditUserRequestData, User } from '../types';

const DELAY = 2500;

@Injectable()
export class UserService {
  private readonly httpClient = inject(ApiHttpClient);

  getUser(): Observable<User> {
    return this.httpClient.get<{ user: User }>('/user').pipe(
      map(({ user }) => user),
      delay(DELAY),
      catchError(() => of(USER_ARTEM).pipe(delay(DELAY))),
    );
  }

  editUser(userData: EditUserRequestData): Observable<User> {
    return this.httpClient.patch<{ user: User }>('/user', userData).pipe(
      map(({ user }) => user),
      delay(DELAY),
    );
  }

  getUserById(id: number): Observable<User> {
    return of<User>(
      USERS.find((user) => user.telegramUserID === id) || USER_ARTEM,
    );
  }

  addUserPhotos(images: File[]): Observable<void> {
    const formData = new FormData();

    images.forEach((file) => {
      formData.append(`images`, file);
    });

    return this.httpClient.post<void>('/user/images/upload', formData);
  }

  deleteUserPhoto(imageUrl: string): Observable<void> {
    return this.httpClient.post<void>(`/user/image/delete`, {
      imageURL: imageUrl,
    });
  }
}
