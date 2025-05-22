import { I18nPluralPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '@libs/api';
import { TuiButton, TuiDialogContext } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { injectContext } from '@taiga-ui/polymorpheus';

import { ModerateEventDialogData } from '../types/moderate-event-dialog-data';

@Component({
  selector: 'barter-create-event-dialog',
  standalone: true,
  templateUrl: './moderate-event-dialog.component.html',
  styleUrl: './moderate-event-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiAvatar, TuiButton, I18nPluralPipe],
})
export class ModerateEventDialogComponent {
  protected readonly requestsList: User[] =
    injectContext<TuiDialogContext<boolean, ModerateEventDialogData>>().data
      .requests;

  protected readonly pluralMap: Record<string, string> = {
    one: 'заявка',
    few: 'заявки',
    many: 'заявок',
    other: 'заявки',
  };
}
