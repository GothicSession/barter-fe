import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { USER_ARTEM, USERS } from '../constants';
import { User } from '../types';

@Injectable()
export class UserService {
  getActiveUser(): Observable<User> {
    return of<User>(USER_ARTEM);
  }

  getUserById(id: number): Observable<User> {
    return of<User>(USERS.find((user) => user.id === id) || USER_ARTEM);
  }
}
