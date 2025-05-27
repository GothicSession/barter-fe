import {
  EventEmitter,
  inject,
  Injectable,
  Output,
  Signal,
} from '@angular/core';
import { EditUserRequestData, User } from '@libs/api';
import { Observable, tap, Unsubscribable } from 'rxjs';

import { AuthenticatedUserStore } from './authenticated-user.store';

@Injectable()
export class AuthenticatedUserFacade {
  private readonly authenticatedUserStore = inject(AuthenticatedUserStore);

  @Output()
  editSuccess = new EventEmitter<void>();

  getUser(): Signal<User | null> {
    return this.authenticatedUserStore.user;
  }

  getIsLoading(): boolean {
    return this.authenticatedUserStore.isLoading();
  }

  loadUser(): Unsubscribable {
    return this.authenticatedUserStore.loadUser();
  }

  editUser(userData: EditUserRequestData): Observable<User> {
    return this.authenticatedUserStore
      .editUser(userData)
      .pipe(tap(() => this.editSuccess.emit()));
  }
}
