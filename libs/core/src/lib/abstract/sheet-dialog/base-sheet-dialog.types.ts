import { TemplateRef } from '@angular/core';

export interface BaseDialogConfig<T> {
  dialogOptions?: Partial<T>;
}

export interface TemplateDialogConfig<T> extends BaseDialogConfig<T> {
  template: TemplateRef<unknown>;
}

export type DialogConfig<T> =
  | BaseDialogConfig<T>
  | TemplateDialogConfig<T>
  | string
  | undefined;
