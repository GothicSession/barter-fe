import { TemplateRef } from '@angular/core';

export interface BaseDialogConfig<T> {
  dialogOptions?: Partial<T>;
}

export interface TemplateDialogConfig<T> extends BaseDialogConfig<T> {
  template: TemplateRef<unknown>;
}
