import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Place } from '@libs/api';
import { TuiDay } from '@taiga-ui/cdk';

@Injectable()
export class CreateEventFeatureService {
  private readonly fb = inject(NonNullableFormBuilder);

  eventForm = this.fb.group({
    name: this.fb.control<string>(''),
    description: this.fb.control<string>(''),
    place: this.fb.control<Place | null>(null),
    date: this.fb.control<null | TuiDay>(null),
  });
}
