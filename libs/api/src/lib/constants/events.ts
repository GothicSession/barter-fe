import { Event } from '../types/event';
import { USER_ARTEM, USER_DAN, USER_ERIK, USER_RUSIK } from './users';

export const BUHLO_EVENT: Event = {
  id: 1,
  name: 'Бухаем в баре',
  photos: [
    'https://sun9-41.userapi.com/impg/y3tNYxpZf_ld5Qca8KAMFA0mAy2ivG0rDZ41Vw/oW6fLbW2Wfc.jpg?size=1440x1920&quality=96&sign=dcd5a2083075bf50846161806fe07372&type=album',
  ],
  description:
    'Приходите все бухать в бар! Попьем пивка, познакомимся. Собираемся небольшой компанией! С меня закуски и алкоголь, с вас хорошее настроение)',
  people_count: 6,
  date: '2025-03-20T13:24:09.430Z',
  geolocation: 'Бар Сыто Пьяно на Юго-Западной',
  creator_id: 1,
  participants: [USER_ARTEM, USER_RUSIK],
};

export const GAMING_EVENT: Event = {
  id: 2,
  name: 'Собираемся в компах (PUBG)',
  photos: [
    'https://upload.wikimedia.org/wikipedia/ru/7/7e/PlayerUnknown%27s_Battlegrounds_Mobile.jpg',
  ],
  description:
    'Собираю сквад поиграть в PUBG. Играем на победу и хорошее настроение).',
  people_count: 4,
  date: '2025-03-14T13:24:09.430Z',
  geolocation: 'Collizeum на Курской',
  creator_id: 3,
  participants: [USER_DAN, USER_ERIK],
};

export const DANCING_EVENT: Event = {
  id: 3,
  name: 'Танцуем до упаду!',
  photos: [
    'https://www.clistudios.com/wp-content/uploads/2021/08/jaquel-knight-hip-hop-1024x683.jpeg',
  ],
  description:
    'Приглашаю всех желающих на мастер класс по танцам! Потанцуем К-поп, Хип-Хоп, и все что захотите!',
  people_count: 4,
  date: '2025-03-14T13:24:09.430Z',
  geolocation: 'PVDL на Электрозаводской!',
  creator_id: 20,
  participants: [USER_ERIK, USER_RUSIK],
};

export const EVENTS: Event[] = [DANCING_EVENT, GAMING_EVENT, BUHLO_EVENT];
