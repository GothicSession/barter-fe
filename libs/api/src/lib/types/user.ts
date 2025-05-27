// eslint-disable-next-line import/no-cycle
import { Event } from './event';
import { Sex } from './sex';

export interface User {
  // from tg
  telegramUserID: number;
  name: string;
  username: string;
  profileImages: string[];
  birthDate: string;
  createdAt: string;
  updatedAt: string;
  description?: string;

  // from barter
  city: string;
  age: number;
  sex: Sex;
  interests: string[];
  createdEvents: Event[];
}

export type EditUserRequestData = Partial<
  Pick<User, 'name' | 'description' | 'sex' | 'username' | 'birthDate'>
>;
