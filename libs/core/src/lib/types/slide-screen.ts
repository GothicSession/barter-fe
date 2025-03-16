import { Directive, EventEmitter, Output } from '@angular/core';

@Directive()
export abstract class SlideScreen {
  @Output()
  continueEvent: EventEmitter<void> = new EventEmitter();

  onBtnClick(): void {
    this.continueEvent.emit();
  }
}
