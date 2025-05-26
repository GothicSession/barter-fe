/* eslint-disable max-lines */
import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '@libs/api';
import { AuthenticatedUserFacade, SlideScreen } from '@libs/core';
import {
  TuiAlertService,
  TuiButton,
  TuiIcon,
  TuiLoader,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiFileLike,
  TuiFiles,
  TuiInputFiles,
  TuiInputFilesDirective,
} from '@taiga-ui/kit';
import {
  catchError,
  filter,
  from,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

import { PhotoItemComponent } from '../../../ui';
import { CreateUserFeatureService, PhotoControl } from '../create-user.service';

const MAX_PHOTO_COUNT = 6;

@Component({
  selector: 'barter-user-photos-upload',
  standalone: true,
  templateUrl: './user-photos-upload.component.html',
  styleUrl: './user-photos-upload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiTitle,
    TuiButton,
    PhotoItemComponent,
    ReactiveFormsModule,
    TuiIcon,
    TuiInputFilesDirective,
    TuiFiles,
    TuiLoader,
    AsyncPipe,
  ],
  providers: [TuiInputFiles],
})
export class UserPhotosUploadComponent extends SlideScreen implements OnInit {
  private readonly removePhoto$ = new Subject<number>();
  private readonly cd = inject(ChangeDetectorRef);
  private readonly alerts = inject(TuiAlertService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly userFacade = inject(AuthenticatedUserFacade);
  protected readonly userService = inject(UserService);
  protected readonly createUserFeatureService = inject(
    CreateUserFeatureService,
  );

  protected readonly uploadControl = this.fb.control<TuiFileLike[] | null>(
    null,
  );

  @Input()
  set existingPhotos(photos: string[]) {
    photos.forEach((url, index) => {
      const control = this.fb.control<PhotoControl>({
        name: `existing-photo-${index + 1}`,
        previewUrl: url,
        isLoading: signal(false),
      });

      this.createUserFeatureService.photoControls.push(control);
    });
  }

  ngOnInit(): void {
    this.uploadControl.valueChanges
      .pipe(
        filter(
          (files): files is File[] => Array.isArray(files) && files.length > 0,
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((files) => {
        files.forEach((file) => {
          if (file instanceof File) {
            this.addPhoto(file);
          }
        });
      });

    this.removePhoto$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap((index) => {
          return this.userService
            .deleteUserPhoto(
              this.createUserFeatureService.photoControls[index].value
                .previewUrl,
            )
            .pipe(
              tap(() => {
                this.createUserFeatureService.userInfoForm.controls.userPhotos.removeAt(
                  index,
                );
                this.cd.detectChanges();
              }),
              catchError((error: unknown) => {
                this.alerts
                  .open(
                    error instanceof HttpErrorResponse && error.error.error,
                    {
                      label: 'Ошибка при удалении изображения',
                      appearance: 'error',
                    },
                  )
                  .subscribe();

                return of(null);
              }),
            );
        }),
      )
      .subscribe();

    this.userFacade.editSuccess
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.continueEvent.emit();
      });
  }

  onRemovePhoto(index: number): void {
    if (
      index >= 0 &&
      index < this.createUserFeatureService.photoControls.length
    ) {
      this.removePhoto$.next(index);
    }
  }

  override onBtnClick(): void {
    this.createUserFeatureService.userInfoForm.markAllAsTouched();
    this.createUserFeatureService.submitForm();
  }

  protected getEmptySlots(): number[] {
    const currentLength = this.createUserFeatureService.photoControls.length;
    const emptySlots =
      this.createUserFeatureService.maxPhotoCount - currentLength - 1;

    return Array.from({ length: Math.max(0, emptySlots) });
  }

  protected canAddMorePhotos(): boolean {
    return this.createUserFeatureService.photoControls.length < MAX_PHOTO_COUNT;
  }

  private addPhoto(file: File): void {
    const photoControls = this.createUserFeatureService.photoControls;

    if (this.canAddMorePhotos()) {
      const control = this.fb.control<PhotoControl>({
        name: file.name,
        previewUrl: '',
        isLoading: signal(true),
      });

      photoControls.push(control);
      this.createPreviewUrl(file, control);
    }
  }

  private createPreviewUrl(
    file: File,
    control: FormControl<PhotoControl>,
  ): void {
    const reader = new FileReader();

    from(
      new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      }),
    )
      .pipe(
        map((url) => ({
          ...control.value,
          previewUrl: url,
        })),
        tap((value) => {
          control.setValue(value);
          this.uploadControl.setValue(null);
        }),
        switchMap(() => this.uploadPhoto(file, control)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  private uploadPhoto(
    file: File,
    control: FormControl<PhotoControl>,
  ): Observable<void | null> {
    return this.userService.addUserPhotos([file]).pipe(
      tap(() => control.getRawValue().isLoading.set(false)),
      catchError((error: unknown) => {
        control.getRawValue().isLoading.set(false);
        const index =
          this.createUserFeatureService.photoControls.indexOf(control);

        if (index > -1) {
          this.createUserFeatureService.photoControls.splice(index, 1);
        }

        // TODO сделать глобальный интерсептор с alertsService для выведения ошибок с еррор кодами
        this.alerts
          .open(error instanceof HttpErrorResponse && error.error.error, {
            label: 'Ошибка при загрузке изображения',
            appearance: 'error',
          })
          .subscribe();

        return of(null);
      }),
    );
  }
}
/* eslint-enable max-lines */
