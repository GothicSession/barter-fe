import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '@libs/core';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import { TuiButton } from '@taiga-ui/core';
import { TuiChip, TuiFade } from '@taiga-ui/kit';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

import { EventEntityFacade } from '../../../entity';
import { SearchEventsFeatureService } from '../search-events.service';

const RECENT_SEARCHES_KEY = 'recent_searches';
const MAX_RECENT_SEARCHES = 15;

@Component({
  selector: 'barter-search-events-dialog',
  standalone: true,
  templateUrl: './search-events-dialog.component.html',
  styleUrl: './search-events-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiInputModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiButton,
    TuiChip,
    TuiFade,
    TuiAutoFocus,
  ],
})
export class SearchEventsDialogComponent {
  protected readonly searchEventsService = inject(SearchEventsFeatureService);
  protected readonly eventEntityFacade = inject(EventEntityFacade);
  protected readonly localStorageService = inject(LocalStorageService);
  protected readonly recentSearches: WritableSignal<string[]> = signal([]);

  @Output()
  closeEvent: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.loadRecentSearches();
  }

  protected handleCancel(): void {
    const searchDefaultValue =
      this.searchEventsService.form.getRawValue().searchDefault;

    this.searchEventsService.form.controls.search.setValue(searchDefaultValue);
    this.closeEvent.emit();
  }

  protected handleSubmit(): void {
    const searchValue = this.searchEventsService.form
      .getRawValue()
      .search.trim();

    this.searchEventsService.form.controls.searchDefault.setValue(searchValue);
    this.eventEntityFacade.loadEvents(searchValue);
    this.saveRecentSearches(searchValue);
    this.closeEvent.emit();
  }

  protected handleSearchChipClick(search: string): void {
    this.searchEventsService.form.controls.search.setValue(search);
    this.handleSubmit();
  }

  protected removeSearchChip(search: string): void {
    const updatedSearches = this.recentSearches().filter((s) => s !== search);

    this.recentSearches.set(updatedSearches);
    this.localStorageService.setItem(RECENT_SEARCHES_KEY, updatedSearches);
  }

  private loadRecentSearches(): void {
    const searches =
      this.localStorageService.getItem<string[]>(RECENT_SEARCHES_KEY) || [];

    this.recentSearches.set(searches);
  }

  private saveRecentSearches(search: string): void {
    if (!search) return;

    const currentSearches = this.recentSearches();
    const updatedSearches = [
      search,
      ...currentSearches.filter((s) => s !== search),
    ].slice(0, MAX_RECENT_SEARCHES);

    this.recentSearches.set(updatedSearches);
    this.localStorageService.setItem(RECENT_SEARCHES_KEY, updatedSearches);
  }
}
