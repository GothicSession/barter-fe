// MOCKS
// eslint-disable-next-line import/no-cycle
import { User } from './user';

export interface Event {
  id: number;
  name: string;
  photos: string[];
  description: string;
  people_count: number;
  date: string;
  geolocation: string;
  creator_id: number;
  participants: User[];
}
