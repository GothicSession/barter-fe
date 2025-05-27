import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  public readonly isLoading$ = this.loadingSubject.asObservable();

  public show(): void {
    this.loadingSubject.next(true);
  }

  public hide(): void {
    this.loadingSubject.next(false);
  }

  public withLoading<T>(operation: () => Observable<T>): Observable<T> {
    this.show();

    return operation().pipe(finalize(() => this.hide()));
  }
}
