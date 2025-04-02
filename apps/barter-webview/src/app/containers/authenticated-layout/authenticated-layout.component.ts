import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostBinding,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { RouteFacade } from '@libs/core';

import { FooterComponent, HeaderComponent } from '../../../ui';

@Component({
  selector: 'barter-authenticated-layout',
  standalone: true,
  templateUrl: './authenticated-layout.component.html',
  styleUrl: './authenticated-layout.component.scss',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticatedLayoutComponent implements OnInit {
  protected readonly routeFacade = inject(RouteFacade);
  protected readonly destroyRef = inject(DestroyRef);

  @HostBinding('class')
  hostClass = 'page-container';

  @ViewChild('content', { static: true })
  contentBlock!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.routeFacade
      .getNavigationEndEvents$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.contentBlock.nativeElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
  }
}
