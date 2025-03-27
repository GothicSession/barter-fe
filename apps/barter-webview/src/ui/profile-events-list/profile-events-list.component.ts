import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Event } from '@libs/api';
import { EventCardComponent } from '@libs/domain/event';
import { TuiIcon } from '@taiga-ui/core';
import { TuiTabs } from '@taiga-ui/kit';

const INIT_INDEX = 0;

@Component({
  selector: 'barter-profile-events-list',
  standalone: true,
  templateUrl: './profile-events-list.component.html',
  styleUrl: './profile-events-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiTabs, EventCardComponent, TuiIcon, NgTemplateOutlet],
})
export class ProfileEventsListComponent {
  @Input({ required: true })
  activeEvents!: Event[];

  @Input({ required: true })
  passedEvents!: Event[];

  activeItemIndex = INIT_INDEX;

  changeTabIndex(index: number): void {
    this.activeItemIndex = index;
  }

  get currentEvents(): Event[] {
    return this.activeItemIndex === INIT_INDEX
      ? this.activeEvents
      : this.passedEvents;
  }
}
