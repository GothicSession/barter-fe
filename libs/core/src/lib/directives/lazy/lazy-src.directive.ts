import {
  DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  Renderer2,
} from '@angular/core';

import { LazyTarget, LazyViewport } from './lazy-viewport';

@Directive({
  selector: 'img[lazySrc]',
  standalone: true,
})
export class LazySrcDirective implements LazyTarget {
  private readonly renderer = inject(Renderer2);
  private readonly viewport = inject(LazyViewport);
  private readonly destroyRef = inject(DestroyRef);

  private isLoaded = false;

  @Input({ required: true })
  lazySrc!: string;

  @Input()
  lazySrcset = '';

  @Input()
  lazyVisibleClass = 'visible';

  @Input()
  errorImg = '';

  @HostBinding('attr.loading')
  readonly loadingAttr = 'lazy';

  readonly element: HTMLElement = inject(ElementRef<HTMLElement>).nativeElement;

  constructor() {
    this.viewport.observe(this);
    this.destroyRef.onDestroy(() => this.viewport.unobserve(this));
  }

  updateVisibility(isVisible: boolean): void {
    if (!isVisible || this.isLoaded) return;
    this.setSources(this.lazySrc, this.lazySrcset);
  }

  @HostListener('load')
  private handleLoad(): void {
    this.isLoaded = true;

    if (this.lazyVisibleClass) {
      this.renderer.addClass(this.element, this.lazyVisibleClass);
    }
  }

  @HostListener('error')
  private handleError(): void {
    if (!this.errorImg) return;
    this.setSources(this.errorImg, this.errorImg);
  }

  private setSources(src: string, srcset: string): void {
    this.renderer.setProperty(this.element, 'src', src);

    if (srcset) {
      this.renderer.setProperty(this.element, 'srcset', srcset);
    }
  }
}
