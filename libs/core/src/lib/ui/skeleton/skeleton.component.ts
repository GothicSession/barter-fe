import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'barter-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  @Input()
  isShine = false;
}
