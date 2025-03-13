import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlideScreen } from '@libs/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';

import { PhotoItemComponent } from '../../../ui';

const PHOTO_ARRAY_LENGTH = 6;

@Component({
  selector: 'barter-user-photos-upload',
  standalone: true,
  templateUrl: './user-photos-upload.component.html',
  styleUrl: './user-photos-upload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiTitle, TuiButton, PhotoItemComponent],
})
export class UserPhotosUploadComponent extends SlideScreen {
  protected readonly photoList = new Array(PHOTO_ARRAY_LENGTH);
}
