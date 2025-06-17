import { DatePipe } from '@angular/common';
import { inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'eventDate',
})
export class EventDatePipe implements PipeTransform {
  private readonly currentYear = new Date().getFullYear();
  private readonly datePipe = inject(DatePipe);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly locale = inject(LOCALE_ID);

  transform(value?: string | Date): SafeHtml {
    if (!value) {
      return '';
    }

    const date = new Date(value);
    const eventYear = date.getFullYear();

    const day = this.datePipe.transform(date, 'd', this.locale);

    const formatForMonthYear =
      this.currentYear === eventYear ? 'MMMM' : 'MMMM y';

    const monthYear = this.datePipe.transform(
      date,
      formatForMonthYear,
      this.locale,
    );

    const resultHtml = `<span class="date__text">${day}</span> <p>${monthYear}</p>`;

    return this.sanitizer.bypassSecurityTrustHtml(resultHtml);
  }
}
