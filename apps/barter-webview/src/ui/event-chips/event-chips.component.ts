import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { TuiChip } from '@taiga-ui/kit';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import { FormsModule } from '@angular/forms';

interface EventChip {
  checked: boolean;
  label: string;
  value: string;
}

@Component({
  selector: 'barter-event-chips',
  standalone: true,
  templateUrl: './event-chips.component.html',
  styleUrls: ['./event-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TuiChip, FormsModule, TuiRepeatTimes],
})
export class EventChipsComponent {
  protected readonly chipsValues: EventChip[] = [
    {
      checked: true,
      label: 'Ближайшие',
      value: '',
    },
    {
      checked: false,
      label: 'Отслеживаемые',
      value: '',
    },
  ];

  @Output() selectedChip = new EventEmitter<string>();

  onChipSelected(eventChip: EventChip): void {
    this.chipsValues.forEach((chip) => {
      chip.checked = false;
    });
    eventChip.checked = true;

    this.selectedChip.emit(eventChip.value);
  }
}
