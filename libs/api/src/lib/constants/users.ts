import { User } from '../types';
/* eslint-disable max-lines */
export const USER_DAN: User = {
  telegramUserID: 3,
  name: 'Danila',
  city: 'Москва',
  age: 22,
  profileImages: [
    'https://sun9-61.userapi.com/s/v1/ig2/rFcGPrgs7OCnghzVgv7PqjC2y57uJrADMT5gEEY5KLfYR1SmjpGqm7mrbfpKaVj18KXVTebeEOEyTFaf3l-Vx3V2.jpg?quality=95&as=32x34,48x51,72x76,108x115,160x170,240x255,360x382,480x509,540x573,640x679,675x716&from=bu&u=oK8Eum1L1MKXSu-HH-02oalR3vE9NbLJjETPqw9lC6Y&cs=675x716',
  ],
  description:
    'Играю в папк, ищу мощных тиммейтов или просто с кем можно сгонять в компы или выпить). Предупреждаю сразу! Мусорам не писать, я АУЕшник!',
  sex: 'male',
  interests: ['pubg', 'beer', 'criminal'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_ERIK: User = {
  telegramUserID: 4,
  name: 'Erik',
  city: 'Москва',
  age: 23,
  profileImages: [
    'https://sun9-43.userapi.com/impf/c841234/v841234585/37185/fj4jx2SDfQw.jpg?size=720x1280&quality=96&sign=b0535dc99c88020437c9eba239c7d365&type=album',
  ],
  description:
    'Всем привет! Я новенький в данном приложении) Надеюсь найти здесь интересные знакомства. 180/75/23. Девушки, не пишите!',
  sex: 'male',
  interests: ['frontend', 'travel', 'criminal'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_RUSIK: User = {
  telegramUserID: 2,
  name: 'Ruslan',
  city: 'Москва',
  profileImages: [
    'https://sun9-77.userapi.com/impg/eY7J1Rj_5vfifRFeA6kJsR6_89iLW2w-oFFh0A/kRSCGJif--E.jpg?size=1620x2160&quality=95&sign=05ca8ddac7eca576dda9956ae0aa8ca5&type=album',
  ],
  age: 23,
  description:
    'Топ 1 мира по шахматам в блице, рапиде, а также классике. В свободное время глажу Алексу и езжу в дорогущие туры. Работаю в ВК, манагерствую всякое.',
  sex: 'male',
  interests: ['chess', 'travel', 'dota 2'],
  createdEvents: [
    {
      id: 1,
      name: 'Бухаем в баре',
      photos: [
        'https://sun9-41.userapi.com/impg/y3tNYxpZf_ld5Qca8KAMFA0mAy2ivG0rDZ41Vw/oW6fLbW2Wfc.jpg?size=1440x1920&quality=96&sign=dcd5a2083075bf50846161806fe07372&type=album',
      ],
      description:
        'Приходите все бухать в бар! Попьем пивка, познакомимся. Собираемся небольшой компанией! С меня закуски и алкоголь, с вас хорошее настроение)',
      people_count: 6,
      date: '2025-03-20T13:24:09.430Z',
      geolocation: 'Бар Сыто Пьяно',
      creator_id: 1,
      participants: [USER_ERIK, USER_DAN],
    },
    {
      id: 2,
      name: 'Собираемся в PUBG',
      photos: [
        'https://upload.wikimedia.org/wikipedia/ru/7/7e/PlayerUnknown%27s_Battlegrounds_Mobile.jpg',
      ],
      description:
        'Собираю сквад поиграть в PUBG. Играем на победу и хорошее настроение).',
      people_count: 4,
      date: '2025-03-14T13:24:09.430Z',
      geolocation: 'Collizeum на Курской',
      creator_id: 3,
      participants: [USER_ERIK, USER_DAN],
    },
  ],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_ARTEM: User = {
  telegramUserID: 1,
  name: 'Artem',
  city: 'Москва',
  profileImages: [
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&w=400',
  ],
  age: 23,
  description:
    'Любитель погамзить в дотку! Собираю пати, чтобы жестко тащить в рейтинге! А потом идти пить латте на безлактозном и фронтендить друг друга.',
  sex: 'male',
  interests: ['dota 2', 'frontend', 'latte'],
  createdEvents: [
    {
      id: 1,
      name: 'Бухаем в баре',
      photos: [
        'https://sun9-41.userapi.com/impg/y3tNYxpZf_ld5Qca8KAMFA0mAy2ivG0rDZ41Vw/oW6fLbW2Wfc.jpg?size=1440x1920&quality=96&sign=dcd5a2083075bf50846161806fe07372&type=album',
      ],
      description:
        'Приходите все бухать в бар! Попьем пивка, познакомимся. Собираемся небольшой компанией! С меня закуски и алкоголь, с вас хорошее настроение)',
      people_count: 6,
      date: '2025-03-20T13:24:09.430Z',
      geolocation: 'Бар Сыто Пьяно',
      creator_id: 1,
      participants: [USER_ERIK, USER_RUSIK, USER_DAN],
    },
    {
      id: 2,
      name: 'Собираемся в PUBG',
      photos: [
        'https://upload.wikimedia.org/wikipedia/ru/7/7e/PlayerUnknown%27s_Battlegrounds_Mobile.jpg',
      ],
      description:
        'Собираю сквад поиграть в PUBG. Играем на победу и хорошее настроение).',
      people_count: 4,
      date: '2025-03-14T13:24:09.430Z',
      geolocation: 'Collizeum на Курской',
      creator_id: 3,
      participants: [USER_ERIK, USER_RUSIK, USER_DAN],
    },
  ],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_5: User = {
  telegramUserID: 5,
  name: 'Ivan',
  city: 'Москва',
  age: 25,
  profileImages: [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=400',
  ],
  description:
    'Обожаю киберспорт, часто стримлю на Twitch. Могу играть всю ночь напролёт.',
  sex: 'male',
  interests: ['streaming', 'league of legends'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_6: User = {
  telegramUserID: 6,
  name: 'Natalia',
  city: 'Санкт-Петербург',
  age: 30,
  profileImages: [
    'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&w=400',
  ],
  description: 'Кофе, книги и уютные вечера – моя стихия.',
  sex: 'female',
  interests: ['coffee', 'reading', 'board games'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_7: User = {
  telegramUserID: 7,
  name: 'Oleg',
  city: 'Казань',
  age: 35,
  profileImages: [
    'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&w=400',
  ],
  description: 'Работаю в геймдеве, люблю аниме и музыку из 80-х.',
  sex: 'male',
  interests: ['anime', 'music', 'gamedev'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_8: User = {
  telegramUserID: 8,
  name: 'Marina',
  city: 'Москва',
  age: 29,
  profileImages: [
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&w=400',
  ],
  description: 'Фотограф, катаюсь на лонгборде, обожаю встречать рассветы.',
  sex: 'female',
  interests: ['photography', 'longboard', 'sunrises'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_9: User = {
  telegramUserID: 9,
  name: 'Yuri',
  city: 'Екатеринбург',
  age: 33,
  profileImages: [
    'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&w=400',
  ],
  description: 'Испытываю слабость к программированию и рок-музыке.',
  sex: 'male',
  interests: ['coding', 'rock music'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_10: User = {
  telegramUserID: 10,
  name: 'Elena',
  city: 'Владивосток',
  age: 26,
  profileImages: [
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&w=400',
  ],
  description: 'Люблю путешествия и всё, что связано с морем.',
  sex: 'female',
  interests: ['sea', 'travelling', 'languages'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_11: User = {
  telegramUserID: 11,
  name: 'Pavel',
  city: 'Москва',
  age: 31,
  profileImages: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=400',
  ],
  description: 'Кручу барабаны в любительской рок-группе.',
  sex: 'male',
  interests: ['drums', 'rock', 'soccer'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_12: User = {
  telegramUserID: 12,
  name: 'Igor',
  city: 'Новосибирск',
  age: 28,
  profileImages: [
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&w=400',
  ],
  description:
    'Разрабатываю мобильные приложения, люблю горные лыжи и адреналин.',
  sex: 'male',
  interests: ['mobile dev', 'skiing', 'adventure'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_13: User = {
  telegramUserID: 13,
  name: 'Evgeniya',
  city: 'Омск',
  age: 27,
  profileImages: [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&w=400',
  ],
  description: 'По образованию художник, занимаюсь digital art.',
  sex: 'female',
  interests: ['art', 'digital', 'cinema'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_14: User = {
  telegramUserID: 14,
  name: 'Stanislav',
  city: 'Москва',
  age: 24,
  profileImages: [
    'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&w=400',
  ],
  description: 'Футболист-любитель и начинающий стендап-комик.',
  sex: 'male',
  interests: ['football', 'standup', 'comedy'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_15: User = {
  telegramUserID: 15,
  name: 'Svetlana',
  city: 'Сочи',
  age: 25,
  profileImages: [
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&w=400',
  ],
  description: 'Мастер спортивных танцев, люблю шумные вечеринки.',
  sex: 'female',
  interests: ['dancing', 'gym', 'parties'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_16: User = {
  telegramUserID: 16,
  name: 'Maxim',
  city: 'Калининград',
  age: 34,
  profileImages: [
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&w=400',
  ],
  description:
    'Обожаю рыбалку и спокойный отдых на природе. Стресс снимать умею.',
  sex: 'male',
  interests: ['fishing', 'nature', 'relax'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_17: User = {
  telegramUserID: 17,
  name: 'Kristina',
  city: 'Санкт-Петербург',
  age: 29,
  profileImages: [
    'https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&w=400',
  ],
  description: 'Тату-мастер, граффити и стрит-арт – мои страсти.',
  sex: 'female',
  interests: ['tattoo', 'graffiti', 'art'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_18: User = {
  telegramUserID: 18,
  name: 'Andrey',
  city: 'Москва',
  age: 32,
  profileImages: [
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&w=400',
  ],
  description:
    'Занимаюсь маркетингом, увлекаюсь бегом на длинные дистанции, марафоны.',
  sex: 'male',
  interests: ['marketing', 'running', 'marathons'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_19: User = {
  telegramUserID: 19,
  name: 'Valeria',
  city: 'Ижевск',
  age: 21,
  profileImages: [
    'https://images.unsplash.com/photo-1497316730643-415fac54a2af?auto=format&w=400',
  ],
  description:
    'Недавно окончила колледж, начинаю карьеру в дизайне интерфейсов.',
  sex: 'female',
  interests: ['ux/ui', 'drawing', 'tiktok'],
  createdEvents: [],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

export const USER_20: User = {
  telegramUserID: 20,
  name: 'Roma',
  city: 'Москва',
  age: 40,
  profileImages: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=400',
  ],
  description:
    'Просто Рома. Люблю танцы, поэтому создал ивент с мастер-классом по танцам.',
  sex: 'male',
  interests: ['dance', 'hip-hop', 'k-pop'],
  createdEvents: [
    {
      id: 3,
      name: 'Танцуем до упаду!',
      photos: [
        'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&w=400',
      ],
      description:
        'Приглашаю всех желающих на мастер класс по танцам! Потанцуем К-поп, Хип-Хоп, и всё что захотите!',
      people_count: 4,
      date: '2025-03-14T13:24:09.430Z',
      geolocation: 'PVDL на Электрозаводской',
      creator_id: 20,
      participants: [USER_ERIK, USER_RUSIK, USER_ARTEM, USER_DAN],
    },
  ],
  username: '',
  birthDate: '',
  createdAt: '',
  updatedAt: '',
};

// Остальной код с USERS массивом без изменений

export const USERS: User[] = [
  USER_RUSIK, // id 2
  USER_DAN, // id 3
  USER_ERIK, // id 4
  USER_ARTEM, // id 1
  USER_5, // id 5
  USER_6, // id 6
  USER_7, // id 7
  USER_8, // id 8
  USER_9, // id 9
  USER_10, // id 10
  USER_11, // id 11
  USER_12, // id 12
  USER_13, // id 13
  USER_14, // id 14
  USER_15, // id 15
  USER_16, // id 16
  USER_17, // id 17
  USER_18, // id 18
  USER_19, // id 19
  USER_20, // id 20
];
/* eslint-enable max-lines */
