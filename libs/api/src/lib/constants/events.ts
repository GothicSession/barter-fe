import { Event } from '../types';
import {
  USER_5,
  USER_6,
  USER_7,
  USER_8,
  USER_9,
  USER_10,
  USER_11,
  USER_12,
  USER_13,
  USER_14,
  USER_15,
  USER_16,
  USER_17,
  USER_18,
  USER_19,
  USER_20,
  USER_ARTEM,
  USER_DAN,
  USER_ERIK,
  USER_RUSIK,
} from './users';
/* eslint-disable max-lines */
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
  geolocation: 'Бар Сыто Пьяно',
  creator_id: 1,
  participants: [USER_ERIK, USER_RUSIK, USER_ARTEM, USER_DAN],
};

export const GAMING_EVENT: Event = {
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
  participants: [USER_ERIK, USER_RUSIK, USER_ARTEM, USER_DAN],
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
  geolocation: 'PVDL на Электрозаводской',
  creator_id: 20,
  participants: [USER_ERIK, USER_RUSIK, USER_ARTEM, USER_DAN],
};

export const EVENT_4: Event = {
  id: 4,
  name: 'Ночная пробежка в парке',
  photos: ['https://marathonec.ru/wp-content/uploads/2020/04/dlitelny-beg.jpg'],
  description:
    'Собираемся на пробежку в парке Горького под луной. Хороший шанс проверить свою выносливость и завести новых знакомых.',
  people_count: 10,
  date: '2025-04-01T09:00:00.000Z',
  geolocation: 'Парк Горького, Москва',
  creator_id: 18, // Andrey
  participants: [USER_6, USER_14, USER_18], // без пользователя #18 в списке
};

export const EVENT_5: Event = {
  id: 5,
  name: 'Вечер настольных игр',
  photos: [
    'https://cdnn21.img.ria.ru/images/07e5/01/1b/1594846143_484:0:2532:2048_1920x0_80_0_0_aebbd8554214971dfe84d3103c9bf9e8.jpg',
  ],
  description:
    'Берём лучшие настолки и отличную компанию. Играем в «Codenames», «Dixit», «Монополию» и всё, что принесёте!',
  people_count: 6,
  date: '2025-04-05T19:30:00.000Z',
  geolocation: 'Антикафе BoardDay',
  creator_id: 6, // Natalia
  participants: [USER_5, USER_7, USER_9],
};

export const EVENT_6: Event = {
  id: 6,
  name: 'Гранд-финал по Dota 2',
  photos: ['https://www.iphones.ru/wp-content/uploads/2024/09/IMG_1645.png'],
  description:
    'Собираемся посмотреть решающую катку по Dota 2, болеем за любимую команду. После – дружеский паб-стоп в лобби.',
  people_count: 7,
  date: '2025-05-10T12:00:00.000Z',
  geolocation: 'Киберклуб GGWP',
  creator_id: 1, // Artem
  participants: [USER_ARTEM, USER_ERIK, USER_5, USER_7, USER_9, USER_10],
};

export const EVENT_7: Event = {
  id: 7,
  name: 'Фотопрогулка на ВДНХ',
  photos: [
    'https://незабываемая.москва/blog/dostoprimechatelnosti_vdnkh_v_moskve_1.jpg',
  ],
  description:
    'Любимая ВДНХ при любой погоде! Берём камеры, делимся лайфхаками. Обязательная программа – кафе-мороженое.',
  people_count: 5,
  date: '2025-06-01T10:00:00.000Z',
  geolocation: 'ВДНХ, Москва',
  creator_id: 8, // Marina
  participants: [USER_9, USER_10, USER_8 /* Marina не включаем */],
};

export const EVENT_8: Event = {
  id: 8,
  name: 'Chess & Chill',
  photos: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chess_pieces_close_up.jpg/1200px-Chess_pieces_close_up.jpg',
  ],
  description:
    'Неформальный турнир по шахматам в парке. Можно брать термос и плед, играем на свежем воздухе.',
  people_count: 8,
  date: '2025-06-15T15:00:00.000Z',
  geolocation: 'Парк Зарядье',
  creator_id: 2, // Ruslan
  participants: [USER_9, USER_11, USER_12, USER_13], // без самого Ruslan
};

export const EVENT_9: Event = {
  id: 9,
  name: 'Startup Pitch Night',
  photos: [
    'https://images.samsung.com/is/image/samsung/assets/ru/explore/entertainment/how-to-pitch-your-ideas/pitch-01-2.png?$FB_TYPE_J_F_MO_PNG$',
  ],
  description:
    'Вечер питчей для стартапов! Есть 5 минут на презентацию, потом нетворкинг. Отбираем лучший проект.',
  people_count: 20,
  date: '2025-06-20T18:00:00.000Z',
  geolocation: 'Loft Space SPB',
  creator_id: 11, // Pavel
  participants: [
    USER_ARTEM,
    USER_ERIK,
    USER_RUSIK,
    USER_11 /* исключили creator */,
    USER_14,
  ],
};

export const EVENT_10: Event = {
  id: 10,
  name: 'Киновечер «Назад в 80-е»',
  photos: [
    'https://avatars.dzeninfra.ru/get-zen_doc/5364733/pub_62ac9f18c83bfb05f44bdd54_62ac9f2bc4591b5e29784431/scale_1200',
  ],
  description:
    'Смотрим подборку культовых фильмов из 80-х, берём попкорн и погружаемся в ламповую атмосферу.',
  people_count: 12,
  date: '2025-07-01T20:00:00.000Z',
  geolocation: 'Киноклуб Ретро',
  creator_id: 7, // Oleg
  participants: [
    USER_5,
    USER_6,
    USER_7 /* исключили creator из списка? – уже нет */,
    USER_19,
  ],
};

export const EVENT_11: Event = {
  id: 11,
  name: 'Art & Wine',
  photos: [
    'https://p0.zoon.ru/preview/PX5v1hIzIutB4UpdYswr0A/640x427x85/1/2/1/original_57d6cde140c0882a298b7d44_61529e65dba59.jpg',
  ],
  description:
    'Искусство и вино – идеальное сочетание для расслабленного вечера! Пишем акварельные миниатюры, дегустируем вино.',
  people_count: 8,
  date: '2025-07-10T19:00:00.000Z',
  geolocation: 'Арт-студия WineBrush',
  creator_id: 13, // Evgeniya
  participants: [USER_6, USER_10, USER_13 /* исключаем creator?*/, USER_17],
};

export const EVENT_12: Event = {
  id: 12,
  name: 'Футбольный матч на районе',
  photos: [
    'https://sun9-26.userapi.com/s/v1/ig2/-22i6jvvs5NhuijZxcIP5MOx7EQFxn9EnaIwz81pjSOyXP43FkCY10q1QPP5WzbBbJ_hkft1hmDHOF-VU6crOrtp.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=Mn1SBk90NawEs1k9jZxup95_TECCfpDwhV8fa2NqMN0&cs=807x605',
  ],
  description:
    'Дворовый футбол в лучшем виде! Собираем 2 команды, играем до 5 мячей. Пивасик после игры обязателен.',
  people_count: 10,
  date: '2025-07-20T16:00:00.000Z',
  geolocation: 'Школьный стадион №18',
  creator_id: 14, // Stanislav
  participants: [USER_9, USER_14 /* exclude creator */],
};

export const EVENT_13: Event = {
  id: 13,
  name: 'Прогулка на яхте',
  photos: [
    'https://хэппитур.рф/storage/tours/December2019/qlCXZbdCZLDmFKT9RCbq.jpg',
  ],
  description:
    'Выходим в море на арендованной яхте, наблюдаем закат, пьём безалкогольные коктейли.',
  people_count: 5,
  date: '2025-08-01T17:00:00.000Z',
  geolocation: 'Яхт-клуб Лазурный берег',
  creator_id: 10, // Elena
  participants: [USER_5, USER_8, USER_10 /* exclude creator */, USER_15],
};

export const EVENT_14: Event = {
  id: 14,
  name: 'Стендап-OpenMic',
  photos: [
    'https://cdn.pbilet.com/origin/8e32c50d-1dc1-4b2c-bb01-ac3793491d29.webp',
  ],
  description:
    'Открытый микрофон для всех желающих попробовать себя в стендапе. Смех и аплодисменты гарантированы!',
  people_count: 9,
  date: '2025-08-05T20:00:00.000Z',
  geolocation: 'Comedy Pub StandUp',
  creator_id: 14, // Stanislav
  participants: [USER_5, USER_15, USER_16],
};

export const EVENT_15: Event = {
  id: 15,
  name: 'Йога у моря',
  photos: [
    'https://images.squarespace-cdn.com/content/v1/570f4b07e707ebe730ca8c42/1560926603795-H87B8K797FQX7E1S5A5M/IMG_6419.jpg',
  ],
  description:
    'Расслабляющее занятие йогой на берегу моря под звуки прибоя. Берём коврики, встречаем рассвет.',
  people_count: 6,
  date: '2025-08-10T06:00:00.000Z',
  geolocation: 'Пляж Ривьера, Сочи',
  creator_id: 15, // Svetlana
  participants: [USER_8, USER_15 /* exclude creator */, USER_17, USER_19],
};

export const EVENT_16: Event = {
  id: 16,
  name: 'Кулинарный мастер-класс',
  photos: ['https://artpiknik.ru/wp-content/uploads/2019/09/6789-1.jpg'],
  description:
    'Учимся готовить аутентичные итальянские блюда: паста, ризотто, тирамису. Всё под руководством шефа.',
  people_count: 5,
  date: '2025-09-01T18:00:00.000Z',
  geolocation: 'Кухня Марио',
  creator_id: 9, // Yuri
  participants: [USER_5, USER_12, USER_9 /* exclude creator? */],
};

export const EVENT_17: Event = {
  id: 17,
  name: 'Фестиваль красок Холли',
  photos: [
    'https://kudamoscow.ru/uploads/e6220a9ba69bd63faa553cc7c18e533f.jpg',
  ],
  description:
    'Яркие краски, музыка и веселье. Приходите в белом, уйдёте в радужном настроении!',
  people_count: 50,
  date: '2025-09-10T12:00:00.000Z',
  geolocation: 'Главная площадь, Казань',
  creator_id: 7, // Oleg
  participants: [USER_8, USER_10, USER_17, USER_19],
};

export const EVENT_18: Event = {
  id: 18,
  name: 'Велопробег до монастыря',
  photos: [
    'https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/60570/4-44.jpg?itok=gN23aORd',
  ],
  description:
    'Общая дистанция ~50 км. Нас ждут живописные виды и тихая обитель, где можно отдохнуть.',
  people_count: 12,
  date: '2025-10-01T08:00:00.000Z',
  geolocation: 'Старт: ул. Центральная, Калининград',
  creator_id: 16, // Maxim
  participants: [USER_9, USER_16 /* exclude */, USER_11, USER_14],
};

export const EVENT_19: Event = {
  id: 19,
  name: 'Лекция по старинной архитектуре',
  photos: [
    'https://cs14.pikabu.ru/post_img/big/2021/10/30/4/1635568797191211913.jpg',
  ],
  description:
    'Готические соборы и их секреты. Лекция от историка искусств, затем обсуждение в неформальной обстановке.',
  people_count: 15,
  date: '2025-10-05T18:00:00.000Z',
  geolocation: 'Музей архитектуры',
  creator_id: 13, // Evgeniya
  participants: [USER_13 /* exclude */, USER_17, USER_20],
};

export const EVENT_20: Event = {
  id: 20,
  name: 'Halloween-вечеринка',
  photos: [
    'https://media.istockphoto.com/id/1427555254/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%82%D0%BE%D0%BB-%D0%BD%D0%B0-%D1%85%D1%8D%D0%BB%D0%BB%D0%BE%D1%83%D0%B8%D0%BD-%D1%81%D1%82%D0%B0%D1%80%D0%B0%D1%8F-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B4%D0%BE%D1%81%D0%BA%D0%B0-%D1%81-%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%BE%D0%B9-%D1%82%D1%8B%D0%BA%D0%B2%D0%BE%D0%B9-%D0%B2-%D1%84%D0%B8%D0%BE%D0%BB%D0%B5%D1%82%D0%BE%D0%B2%D0%BE%D0%BC-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B5-%D1%81-%D0%BB%D1%83%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=jMtGQc7UxSY6bFl38EMR2S-vUsuWPhFOgpf3nzxItLQ=',
  ],
  description:
    'Костюмы обязательны! Лучший костюм получит приз. Жуткие декорации, музыка и праздничная атмосфера.',
  people_count: 30,
  date: '2025-10-31T21:00:00.000Z',
  geolocation: 'Night Club Eclipse',
  creator_id: 19, // Valeria
  participants: [USER_9, USER_19 /* exclude */, USER_5, USER_14],
};

// ====== Итоговые массивы ======

export const EVENTS: Event[] = [
  DANCING_EVENT, // id 3 (creator_id=20)
  GAMING_EVENT, // id 2 (creator_id=3)
  BUHLO_EVENT, // id 1 (creator_id=1)
  EVENT_4,
  EVENT_5,
  EVENT_6,
  EVENT_7,
  EVENT_8,
  EVENT_9,
  EVENT_10,
  EVENT_11,
  EVENT_12,
  EVENT_13,
  EVENT_14,
  EVENT_15,
  EVENT_16,
  EVENT_17,
  EVENT_18,
  EVENT_19,
  EVENT_20,
];
/* eslint-enable max-lines */
