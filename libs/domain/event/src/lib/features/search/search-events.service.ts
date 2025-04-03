import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class SearchEventsFeatureService {
  private readonly fb = inject(FormBuilder);

  searchControl = this.fb.nonNullable.control('');
}
