import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Injectable()
export class SearchEventsFeatureService {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly form = this.fb.group({
    search: this.fb.control<string>(''),
    searchDefault: this.fb.control<string>(''),
  });
}
