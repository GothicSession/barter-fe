import { Directive, EventEmitter, Output } from '@angular/core';

@Directive()
export class SlideScreen {
  @Output()
  continueEvent: EventEmitter<void> = new EventEmitter();

  onBtnClick(): void {
    this.continueEvent.emit();
  }
}
