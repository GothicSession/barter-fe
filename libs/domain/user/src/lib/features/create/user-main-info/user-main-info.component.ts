import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SlideScreen } from '@libs/core';
import { TuiContext, TuiLet, tuiPure, TuiStringHandler } from '@taiga-ui/cdk';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiSelectModule,
  TuiTextareaModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

import { CreateUserFeatureService } from '../create-user.service';
import { SexFormData } from '../types';

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
    TuiLet,
    TuiTextareaModule,
    TuiTextfieldControllerModule,
  ],
})
export class UserMainInfoComponent extends SlideScreen {
  protected readonly createUserFeatureService = inject(
    CreateUserFeatureService,
  );

  override onBtnClick(): void {
    this.createUserFeatureService.userInfoForm.markAllAsTouched();

    if (this.createUserFeatureService.userInfoForm.valid) {
      this.continueEvent.emit();
    }
  }

  @tuiPure
  protected stringify(
    items: readonly SexFormData[],
  ): TuiStringHandler<TuiContext<string>> {
    const map = new Map(
      items.map(({ displayText, sex }) => [String(sex), displayText]),
    );

    return ({ $implicit }: TuiContext<string>) => map.get($implicit) || '';
  }
}
