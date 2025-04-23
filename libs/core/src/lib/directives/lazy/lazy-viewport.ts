import { DestroyRef, inject, Injectable, NgZone } from '@angular/core';

import { WINDOW } from '../../tokens';

export interface LazyTarget {
  element: Element;
  updateVisibility: (isVisible: boolean, ratio: number) => void;
}

const OBSERVER_BREAKPOINT = 1;
const OBSERVER_BREAKPOINT_HALF = 0.5;

@Injectable()
export class LazyViewport {
  private readonly observer: IntersectionObserver | null = null;
  private readonly zone = inject(NgZone);
  private readonly window = inject(WINDOW);
  private readonly destroyRef = inject(DestroyRef);

  /*
     @description IntersectionObserver отслеживает элементы (Element). Однако при изменении
     их видимости нам нужно уведомить экземпляр Angular‑директивы. Поэтому
     мы будем хранить отображение «Element → Directive». Таким образом,
     когда сработает callback наблюдателя, мы сможем по элементу найти
     соответствующую директиву в коллекции записей наблюдателя.
   */
  private readonly targets: Map<Element, LazyTarget> = new Map();

  constructor() {
    if (
      'IntersectionObserver' in this.window &&
      'IntersectionObserverEntry' in this.window
    ) {
      this.observer = this.zone.runOutsideAngular(
        () =>
          new this.window.IntersectionObserver(this.handleIntersect, {
            threshold: [0, OBSERVER_BREAKPOINT_HALF, OBSERVER_BREAKPOINT],
          }),
      );
      this.destroyRef.onDestroy(() => this.observer?.disconnect());
    } else {
      this.observer = null; // graceful fallback
    }
  }

  // @description Добавляем указанный LazyTarget в набор объектов, отслеживаемых IntersectionObserver‑ом.
  observe(target: LazyTarget): void {
    if (this.observer) {
      this.targets.set(target.element, target);
      this.observer.observe(target.element);
    } else {
      target.updateVisibility(true, OBSERVER_BREAKPOINT); // старые браузеры: считаем видимым
    }
  }

  // @description Удаляем указанный LazyTarget из набора объектов, отслеживаемых IntersectionObserver‑ом.
  removeTarget(target: LazyTarget): void {
    if (this.observer) {
      this.targets.delete(target.element);
      this.observer.unobserve(target.element);
    }
  }

  /** Можно вызвать вручную, но GC‑safe и без этого */
  unobserve(target: LazyTarget): void {
    this.observer?.unobserve(target.element);
    this.targets.delete(target.element);
  }

  // @description Обрабатываю изменения видимости элементов, отслеживаемых наблюдателем.
  private readonly handleIntersect = (
    entries: IntersectionObserverEntry[],
  ): void => {
    for (const entry of entries) {
      const tgt = this.targets.get(entry.target);

      if (!tgt) continue;

      tgt.updateVisibility(entry.isIntersecting, entry.intersectionRatio);

      // Если элемент стал видимым → больше не наблюдаем
      if (entry.isIntersecting) {
        this.unobserve(tgt);
      }
    }
  };
}
