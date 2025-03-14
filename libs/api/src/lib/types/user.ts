// eslint-disable-next-line import/no-cycle
import { Event } from './event';
import { Sex } from './sex';

export interface User {
  id: number;
  name: string;
  city: string;
  age: number;
  photos: string[];
  sex: Sex;
  interests: string[];
  additionalInfo?: string;
  createdEvents: Event[];
}
