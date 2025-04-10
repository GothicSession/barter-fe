import {
  DestroyRef,
  Directive,
  HostListener,
  inject,
  Injector,
  Type,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  TuiSheetDialogOptions,
  TuiSheetDialogService,
} from '@taiga-ui/addon-mobile';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { Subject, switchMap } from 'rxjs';

import {
  BaseDialogConfig,
  DialogConfig,
  TemplateDialogConfig,
} from './base-sheet-dialog.types';

@Directive()
export abstract class BaseSheetDialogDirective<
  TComponent,
  TData,
  TResult = unknown,
> {
  protected abstract readonly defaultComponent: Type<TComponent>;
  protected abstract readonly defaultDialogOptions: Partial<
    TuiSheetDialogOptions<TData>
  >;

  private readonly destroyRef = inject(DestroyRef);
  private readonly sheetDialogService = inject(TuiSheetDialogService);
  private readonly injector = inject(Injector);
  private readonly clickSubject$ = new Subject<
    BaseDialogConfig<TuiSheetDialogOptions<TData>>
  >();

  protected abstract get inputConfig(): DialogConfig<
    TuiSheetDialogOptions<TData>
  >;

  protected get normalizedConfig(): BaseDialogConfig<
    TuiSheetDialogOptions<TData>
  > {
    const config = this.inputConfig;

    if (!config || typeof config === 'string') {
      return { dialogOptions: {} };
    }

    return config;
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.clickSubject$.next(this.normalizedConfig);
  }

  ngOnInit(): void {
    this.clickSubject$
      .pipe(
        switchMap((config) => {
          const options: Partial<TuiSheetDialogOptions<TData>> = {
            ...this.defaultDialogOptions,
            ...config.dialogOptions,
          };

          const content = this.isTemplateConfig(config)
            ? config.template
            : new PolymorpheusComponent(this.defaultComponent, this.injector);

          return this.sheetDialogService.open<TResult>(content, options);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.clickSubject$.complete();
  }

  private isTemplateConfig(
    config: BaseDialogConfig<TuiSheetDialogOptions<TData>>,
  ): config is TemplateDialogConfig<TuiSheetDialogOptions<TData>> {
    return 'template' in config;
  }
}
