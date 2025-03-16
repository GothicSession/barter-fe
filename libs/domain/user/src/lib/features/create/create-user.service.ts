import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiFileLike } from '@taiga-ui/kit';

import { Sex } from '../../entity';
import { SexFormData } from './types';

const MIN_DATE_YEAR = 1925;
const MIN_DATE_MONTH = 0;
const MIN_DATE_DAY = 1;

@Injectable()
export class CreateUserService {
  protected readonly fb = inject(FormBuilder);

  readonly sexItems: SexFormData[] = [
    { sex: 'male', displayText: 'Мужской' },
    { sex: 'female', displayText: 'Женский' },
  ];

  readonly min = new TuiDay(MIN_DATE_YEAR, MIN_DATE_MONTH, MIN_DATE_DAY);

  readonly max = TuiDay.currentLocal();

  readonly userInfoForm = this.fb.group({
    firstName: this.fb.control<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    birthDate: this.fb.control<null | TuiDay>(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    sex: this.fb.control<null | Sex>(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    about: this.fb.control<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    userPhotos: this.fb.array(
      Array.from({ length: 6 }, () =>
        this.fb.control<TuiFileLike | null>(null),
      ),
    ),
  });
}
