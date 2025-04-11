import { TemplateRef } from '@angular/core';
import { Place } from '@libs/api';

export interface CreateEventDialogData {
  placesTpl: TemplateRef<{ $implicit: (place: Place) => void }>;
}
