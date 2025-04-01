import { inject, Injectable, Signal } from '@angular/core';
import { User } from '@libs/api';
import { Unsubscribable } from 'rxjs';

import { UserEntityStore } from './user.store';

@Injectable()
export class UserEntityFacade {
  private readonly userEntityStore = inject(UserEntityStore);

  getCurrentUser(): Signal<User | null> {
    return this.userEntityStore.currentUser;
  }

  getIsLoading(): Signal<boolean> {
    return this.userEntityStore.isLoading;
  }

  loadUserById(id: Signal<number>): Unsubscribable {
    return this.userEntityStore.loadUserById(id);
  }
}
