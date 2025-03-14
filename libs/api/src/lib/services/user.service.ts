import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { USER_ARTEM } from '../constants/users';
import { User } from '../types/user';

@Injectable()
export class UserService {
  getActiveUser(): Observable<User> {
    return of<User>(USER_ARTEM);
  }
}
