import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  IsActiveMatchOptions,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Routes } from '../../app/shared';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'barter-footer-link-item',
  standalone: true,
  templateUrl: './footer-link-item.component.html',
  styleUrl: './footer-link-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, TuiIcon, RouterLinkActive],
})
export class FooterLinkItemComponent {
  @Input({ required: true })
  route!: Routes | string;

  @Input({ required: true })
  icon!: string;

  protected linkItemActiveOptionsParams: IsActiveMatchOptions = {
    queryParams: 'ignored',
    fragment: 'exact',
    paths: 'exact',
    matrixParams: 'exact',
  };
}
