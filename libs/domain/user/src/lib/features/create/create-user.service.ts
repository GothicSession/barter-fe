import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { EditUserRequestData, User } from '@libs/api';
import { AuthenticatedUserFacade } from '@libs/core';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiFileLike } from '@taiga-ui/kit';

import { Sex } from '../../entity';
import { SexFormData } from './types';

const MIN_DATE_YEAR = 1925;
const MIN_DATE_MONTH = 0;
const MIN_DATE_DAY = 1;
const MAX_ABOUT_LENGTH = 500;
const MAX_PHOTO_COUNT = 6;

export interface PhotoControl extends TuiFileLike {
  previewUrl: string;
  isLoading: WritableSignal<boolean>;
}

@Injectable()
export class CreateUserFeatureService {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly userFacade = inject(AuthenticatedUserFacade);
  private _initialUserInfo: User | null = null;

  readonly sexItems: SexFormData[] = [
    { sex: 'male', displayText: 'Мужской' },
    { sex: 'female', displayText: 'Женский' },
  ];

  readonly minBirthDate = new TuiDay(
    MIN_DATE_YEAR,
    MIN_DATE_MONTH,
    MIN_DATE_DAY,
  );

  readonly maxBirthDate = TuiDay.currentLocal();
  readonly maxPhotoCount = MAX_PHOTO_COUNT;

  get initialUserInfo(): User | null {
    return this._initialUserInfo;
  }

  set initialUserInfo(user: User) {
    this._initialUserInfo = user;

    this.userInfoForm.patchValue({
      firstName: user.name,
      birthDate: new TuiDay(
        new Date(user.birthDate).getFullYear(),
        new Date(user.birthDate).getMonth(),
        new Date(user.birthDate).getDate(),
      ),
      sex: user.sex,
      about: user.description,
    });
  }

  readonly userInfoForm = this.fb.group({
    firstName: this.fb.control<string>('', {
      validators: [Validators.required],
    }),
    birthDate: this.fb.control<null | TuiDay>(null, {
      validators: [
        Validators.required,
        (control) => {
          const value = control.value;

          if (!value) return null;

          if (value.dayBefore(this.minBirthDate)) {
            return { minDate: true };
          }

          if (value.dayAfter(this.maxBirthDate)) {
            return { maxDate: true };
          }

          return null;
        },
      ],
    }),
    sex: this.fb.control<null | Sex>(null, {
      validators: [Validators.required],
    }),
    about: this.fb.control<string>('', {
      validators: [Validators.maxLength(MAX_ABOUT_LENGTH)],
    }),
    userPhotos: this.fb.array<PhotoControl>([], [Validators.minLength(1)]),
  });

  get photoControls() {
    return this.userInfoForm.controls.userPhotos.controls;
  }

  initializePhotoControls(existingPhotos: string[]): void {
    const photosControl = this.userInfoForm.controls.userPhotos;

    photosControl.clear();

    existingPhotos.forEach((photo) => {
      photosControl.push(
        this.fb.control<PhotoControl>({
          name: '',
          type: '',
          size: 0,
          previewUrl: photo,
          isLoading: signal(false),
        }),
      );
    });
  }

  // eslint-disable-next-line complexity
  submitForm(event?: Event): void {
    event?.preventDefault();

    this.userInfoForm.markAllAsTouched();

    // if (
    //   this.userInfoForm.valid &&
    //   this.userInfoForm.value.birthDate &&
    //   this.userInfoForm.value.firstName &&
    //   this.userInfoForm.value.sex
    // ) {
    const requestData: EditUserRequestData = {};

    if (
      new Date(this.userInfoForm.value.birthDate?.toLocalNativeDate() ?? '') !==
      new Date(this._initialUserInfo?.birthDate ?? '')
    ) {
      requestData.birthDate = this.userInfoForm.value.birthDate
        ?.toLocalNativeDate()
        ?.toISOString();
    }

    if (this.userInfoForm.value.about !== this._initialUserInfo?.description) {
      requestData.description = this.userInfoForm.value.about;
    }

    if (this.userInfoForm.value.firstName !== this._initialUserInfo?.name) {
      requestData.name = this.userInfoForm.value.firstName;
    }

    if (this.userInfoForm.value.sex !== this._initialUserInfo?.sex) {
      requestData.sex = this.userInfoForm.value.sex ?? undefined;
    }

    this.userFacade.editUser(requestData).subscribe();
  }
  // }
}
