import {
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  NgZone,
  OnInit,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent, map, Subscription, throttleTime } from 'rxjs';

import { outsideZone } from '../rx-js';

const BOTTOM_LIMIT = 300;
const THROTTLE_TIME = 50;

@Directive({
  selector: '[scrolledToBottom]',
  standalone: true,
})
export class ScrolledToBottomDirective implements OnInit {
  private readonly element = inject(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private readonly zone = inject(NgZone);
  private scrollSub$!: Subscription;
  private _disabled = false;

  @Input()
  bottomLimit = BOTTOM_LIMIT;

  @Input()
  set disabled(value: boolean) {
    if (value === this._disabled) return;
    this._disabled = value;

    if (value) {
      this.scrollSub$?.unsubscribe();
    } else {
      this.subscribeToScroll();
    }
  }

  get disabled() {
    return this._disabled;
  }

  @Output()
  isNearBottom = new EventEmitter<void>();

  ngOnInit(): void {
    this.subscribeToScroll();
  }

  private subscribeToScroll(): void {
    this.scrollSub$ = fromEvent<Event>(this.element, 'scroll')
      .pipe(
        outsideZone(this.zone),
        throttleTime(THROTTLE_TIME, undefined, { trailing: true }),
        map(() => this.remaining()),
        filter((dist) => dist < BOTTOM_LIMIT),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.zone.run(() => {
          this.isNearBottom.emit();
        });
      });
  }

  private remaining(): number {
    return (
      this.element.scrollHeight -
      this.element.scrollTop -
      this.element.clientHeight
    );
  }
}
