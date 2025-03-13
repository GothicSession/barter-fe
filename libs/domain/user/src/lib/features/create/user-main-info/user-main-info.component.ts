import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SlideScreen } from '@libs/core';
import {
  TuiContext,
  TuiDay,
  TuiLet,
  tuiPure,
  TuiStringHandler,
} from '@taiga-ui/cdk';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiSelectModule,
  TuiTextareaModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

import { Sex } from '../../../entity';

const MIN_DATE_YEAR = 1925;
const MIN_DATE_MONTH = 0;
const MIN_DATE_DAY = 1;

type SexData = { sex: Sex; displayText: string };

@Component({
  selector: 'barter-user-main-info',
  standalone: true,
  templateUrl: './user-main-info.component.html',
  styleUrl: './user-main-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiTitle,
    TuiButton,
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputDateModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiTextareaModule,
    TuiLet,
  ],
})
export class UserMainInfoComponent extends SlideScreen {
  protected readonly userInfoForm: FormGroup<{
    firstName: FormControl<string>;
    birthDate: FormControl<TuiDay | null>;
    sex: FormControl<Sex | null>;
    about: FormControl<string>;
  }> = new FormGroup({
    firstName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    birthDate: new FormControl<null | TuiDay>(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    sex: new FormControl<Sex | null>(null, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    about: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  protected readonly sexItems: SexData[] = [
    { sex: 'male', displayText: 'Мужской' },
    { sex: 'female', displayText: 'Женский' },
  ];

  protected readonly min = new TuiDay(
    MIN_DATE_YEAR,
    MIN_DATE_MONTH,
    MIN_DATE_DAY,
  );

  protected readonly max = TuiDay.currentLocal();

  @tuiPure
  protected stringify(
    items: readonly SexData[],
  ): TuiStringHandler<TuiContext<string>> {
    const map = new Map(
      items.map(
        ({ displayText, sex }) => [sex, displayText] as [string, string],
      ),
    );

    return ({ $implicit }: TuiContext<string>) => map.get($implicit) || '';
  }
}
