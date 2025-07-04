import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '@libs/core';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import { TuiButton, TuiDialogContext } from '@taiga-ui/core';
import { TuiChip, TuiFade } from '@taiga-ui/kit';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { injectContext } from '@taiga-ui/polymorpheus';

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
  protected readonly form = inject(SearchEventsFeatureService).form;

  protected readonly eventEntityFacade = inject(EventEntityFacade);
  protected readonly localStorageService = inject(LocalStorageService);
  protected readonly context = injectContext<TuiDialogContext>();

  protected readonly recentSearches: WritableSignal<string[]> = signal([]);

  constructor() {
    this.loadRecentSearches();
  }

  protected handleCancel(): void {
    const searchDefaultValue = this.form.getRawValue().searchDefault;

    this.form.controls.search.setValue(searchDefaultValue);
    this.context.completeWith();
  }

  protected handleSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    const searchValue = this.form.getRawValue().search.trim();

    this.form.controls.searchDefault.setValue(searchValue);
    this.eventEntityFacade.loadEvents({ search: searchValue || undefined });
    this.saveRecentSearches(searchValue);
    this.context.completeWith();
  }

  protected handleSearchChipClick(search: string, event: Event): void {
    this.form.controls.search.setValue(search);
    this.handleSubmit(event);
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
