import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'barter-loader',
  templateUrl: './loader.component.html',
  styleUrl: 'loader.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyVisibleLoaderDirective {}
