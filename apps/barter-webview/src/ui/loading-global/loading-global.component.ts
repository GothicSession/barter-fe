import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiLoader } from '@taiga-ui/core';

import { LoadingService } from '../../app/shared/services/loading.service';

@Component({
  selector: 'barter-loading-global',
  standalone: true,
  template: `
    <div *ngIf="loadingService.isLoading$ | async" class="loading-container">
      <tui-loader size="xxl" class="loader" />
    </div>
  `,
  styles: [
    `
      .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;

        // TODO: использовать тему устройства
        background: #fff;
        z-index: 1000;
      }
      .loader {
        width: 5rem;
        height: 5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiLoader, AsyncPipe, NgIf],
})
export class LoadingGlobalComponent {
  protected readonly loadingService = inject(LoadingService);
}
