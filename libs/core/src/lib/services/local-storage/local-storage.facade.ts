import { inject, Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageFacade {
  private readonly localStorageService = inject(LocalStorageService);

  setValue(key: string, value: unknown): void {
    this.localStorageService.setItem(key, value);
  }

  getValue<T>(key: string): T | null {
    return this.localStorageService.getItem<T>(key);
  }

  removeValue(key: string): void {
    this.localStorageService.removeItem(key);
  }

  clearAll(): void {
    this.localStorageService.clear();
  }
}
