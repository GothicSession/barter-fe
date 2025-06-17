import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { USER_ARTEM, USERS } from '../constants';
import { User } from '../types';

const DELAY = 2500;
@Injectable()
export class UserService {
  getActiveUser(): Observable<User> {
    return of<User>(USER_ARTEM);
  }

  getUserById(id: number): Observable<User> {
    return of<User>(USERS.find((user) => user.id === id) || USER_ARTEM).pipe(
      delay(DELAY),
    );
  }
}
