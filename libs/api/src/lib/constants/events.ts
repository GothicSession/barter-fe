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

/* ===== Новые события ===== */

export const EVENT_21: Event = {
  id: 21,
  name: 'Поход в Кеку',
  photos: ['https://artpiknik.ru/wp-content/uploads/2019/09/6789-1.jpg'],

  description:
    'Осенний трек по Кеку Кеку. Ночуем в палатках, встречаем рассвет на Кеку.',
  people_count: 12,
  date: '2025-11-05T07:00:00.000Z',
  geolocation: 'Кеку, Кеку',
  creator_id: 12, // USER_12
  participants: [USER_5, USER_7, USER_9, USER_12, USER_15],
};

export const EVENT_22: Event = {
  id: 22,
  name: 'Сальса-вечер в парке',
  photos: ['https://artpiknik.ru/wp-content/uploads/2019/09/6789-1.jpg'],
  description:
    'Живой оркестр и бесплатный мастер-класс по сальсе на открытом воздухе.',
  people_count: 20,
  date: '2025-05-25T18:00:00.000Z',
  geolocation: 'Парк «Сокольники», Москва',
  creator_id: 6, // Natalia
  participants: [USER_6, USER_8, USER_10, USER_14],
};

export const EVENT_23: Event = {
  id: 23,
  name: '48-часовой Хакатон',
  photos: ['https://artpiknik.ru/wp-content/uploads/2019/09/6789-1.jpg'],
  description:
    'Собираемся, чтобы за выходные собрать рабочий прототип и выиграть призы от спонсоров.',
  people_count: 40,
  date: '2025-11-15T10:00:00.000Z',
  geolocation: 'GeekHub, Санкт-Петербург',
  creator_id: 11, // Pavel
  participants: [USER_ARTEM, USER_RUSIK, USER_ERIK, USER_11, USER_18],
};

export const EVENT_24: Event = {
  id: 24,
  name: 'Караоке-баттл',
  photos: [
    'https://images.unsplash.com/photo-1581389443276-8e126048adf4?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Турнир по караоке с жюри и призами. Выбираем лучшего вокалиста вечера.',
  people_count: 15,
  date: '2025-12-01T19:00:00.000Z',
  geolocation: 'Joy Karaoke, Москва',
  creator_id: 14, // Stanislav
  participants: [USER_5, USER_14, USER_19],
};

export const EVENT_25: Event = {
  id: 25,
  name: 'Литературный клуб «Читаем и спорим»',
  photos: [
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Обсуждаем роман Мураками «Кафка на пляже». Не забудьте закладки и свои теории!',
  people_count: 10,
  date: '2025-11-10T18:30:00.000Z',
  geolocation: 'Антикафе Book&Coffee',
  creator_id: 13, // Evgeniya
  participants: [USER_13, USER_6, USER_17],
};

export const EVENT_26: Event = {
  id: 26,
  name: 'SUP-серфинг по Москве-реке',
  photos: [
    'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Утренний заплыв на сапах, завтрак на воде и фотосессия у Кремля.',
  people_count: 8,
  date: '2025-07-25T09:00:00.000Z',
  geolocation: 'Причал «Горький парк»',
  creator_id: 10, // Elena
  participants: [USER_10, USER_8, USER_15, USER_20],
};

export const EVENT_27: Event = {
  id: 27,
  name: 'Retro Gaming Night',
  photos: ['https://artpiknik.ru/wp-content/uploads/2019/09/6789-1.jpg'],
  description:
    'Dendy, Sega, ламповый CRT и турниры в Mortal Kombat II. Победитель уходит с катриджем-трофеем.',
  people_count: 12,
  date: '2025-08-20T21:00:00.000Z',
  geolocation: 'Клуб «OldSchool»',
  creator_id: 2, // Ruslan
  participants: [USER_9, USER_11, USER_12],
};

export const EVENT_28: Event = {
  id: 28,
  name: 'Субботник в парке',
  photos: ['https://artpiknik.ru/wp-content/uploads/2019/09/6789-1.jpg'],
  description:
    'Убираем листья, красим лавочки, а после — чай с пирогами от волонтёров.',
  people_count: 25,
  date: '2025-04-20T09:00:00.000Z',
  geolocation: 'Парк Горького, Москва',
  creator_id: 18, // Andrey
  participants: [USER_18, USER_6, USER_7, USER_14],
};

export const EVENT_29: Event = {
  id: 29,
  name: 'Vegan Cooking Night',
  photos: ['https://artpiknik.ru/wp-content/uploads/2019/09/6789-1.jpg'],
  description:
    'Готовим чёрные бургеры из киноа и мороженое на кокосовом молоке.',
  people_count: 6,
  date: '2025-09-15T18:00:00.000Z',
  geolocation: 'Студия «Зелёная тарелка»',
  creator_id: 9, // Yuri
  participants: [USER_5, USER_9, USER_12],
};

export const EVENT_30: Event = {
  id: 30,
  name: 'Sneaker Meetup',
  photos: [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Обмен редкими кроссами, лекция о культуре streetwear и живая DJ-сцена.',
  people_count: 20,
  date: '2025-06-25T17:00:00.000Z',
  geolocation: 'Проект «Хлебозавод»',
  creator_id: 7, // Oleg
  participants: [USER_7, USER_11, USER_13, USER_17],
};

export const EVENT_31: Event = {
  id: 31,
  name: 'Language Exchange Picnic',
  photos: [
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Русский ↔ Английский ↔ Испанский. Игры, снеки и разговоры без учебников.',
  people_count: 15,
  date: '2025-05-30T19:00:00.000Z',
  geolocation: 'Парк Зарядье, Москва',
  creator_id: 15, // Svetlana
  participants: [USER_15, USER_8, USER_10, USER_16],
};

export const EVENT_32: Event = {
  id: 32,
  name: 'Мастер-класс по фоторетуши',
  photos: [
    'https://images.unsplash.com/photo-1541696432-a7ee0b0197d9?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Учимся доводить RAW-снимки до портфолио-уровня в Lightroom и Photoshop.',
  people_count: 10,
  date: '2025-12-10T16:00:00.000Z',
  geolocation: 'Loft PhotoLab',
  creator_id: 13, // Evgeniya
  participants: [USER_13, USER_6, USER_12, USER_17],
};

export const EVENT_33: Event = {
  id: 33,
  name: 'Живой квест «Побег из замка»',
  photos: [
    'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Ролевая игра с актёрами и декорациями в антураже средневековья.',
  people_count: 12,
  date: '2025-09-05T18:00:00.000Z',
  geolocation: 'Клуб «Questoria»',
  creator_id: 19, // Valeria
  participants: [USER_19, USER_9, USER_14, USER_20],
};

export const EVENT_34: Event = {
  id: 34,
  name: 'Наблюдение за звёздами',
  photos: [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  ],
  description: 'Телескопы, чай в термосах и лекция астронома про персеиды.',
  people_count: 15,
  date: '2025-07-12T22:00:00.000Z',
  geolocation: 'Обсерватория Звенигород',
  creator_id: 8, // Marina
  participants: [USER_8, USER_10, USER_17],
};

export const EVENT_35: Event = {
  id: 35,
  name: 'VR-Party',
  photos: [
    'https://images.unsplash.com/photo-1603787081559-4c4c89c6cb90?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Beat Saber, Half-Life: Alyx и сетевые гонки — всё на топовых VR-комплектах.',
  people_count: 10,
  date: '2025-10-15T20:00:00.000Z',
  geolocation: 'VR-арена «Neon»',
  creator_id: 2, // Ruslan
  participants: [USER_9, USER_11, USER_ARTEM, USER_ERIK],
};

export const EVENT_36: Event = {
  id: 36,
  name: 'BBQ-пикник на природе',
  photos: [
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Шашлыки, настолки и музыкальный jam. Берём пледы и хорошее настроение.',
  people_count: 18,
  date: '2025-05-12T12:00:00.000Z',
  geolocation: 'Битцевский лес, Москва',
  creator_id: 5, // USER_5
  participants: [USER_5, USER_8, USER_9, USER_15],
};

export const EVENT_37: Event = {
  id: 37,
  name: 'Art Jam: рисуем вместе',
  photos: [
    'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Большой холст, акрил и джаз-play-лист. Делаем коллективную картину-коллаж.',
  people_count: 14,
  date: '2025-07-18T14:00:00.000Z',
  geolocation: 'Арт-площадка «Флакон»',
  creator_id: 13, // Evgeniya
  participants: [USER_13, USER_6, USER_10, USER_14],
};

export const EVENT_38: Event = {
  id: 38,
  name: 'Пейнтбольный турнир',
  photos: ['https://artpiknik.ru/wp-content/uploads/2019/09/6789-1.jpg'],
  description:
    'Команды по 5 человек, олимпийская сетка, приз — кубок и сертификат на пиццу.',
  people_count: 20,
  date: '2025-05-18T11:00:00.000Z',
  geolocation: 'Полигон «Strike»',
  creator_id: 16, // Maxim
  participants: [USER_16, USER_9, USER_11, USER_14, USER_18],
};

export const EVENT_39: Event = {
  id: 39,
  name: 'Добровольческий марафон',
  photos: [
    'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Пробег 10 км. Каждый километр — пожертвование в фонд помощи детям.',
  people_count: 30,
  date: '2025-11-20T08:00:00.000Z',
  geolocation: 'Лужники, Москва',
  creator_id: 18, // Andrey
  participants: [USER_18, USER_12, USER_20, USER_15, USER_17],
};

export const EVENT_40: Event = {
  id: 40,
  name: 'Зимнее катание на коньках',
  photos: [
    'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80',
  ],
  description:
    'Горячий глинтвейн, музыка 80-х и фотоконкурс лучшего падения :)',
  people_count: 25,
  date: '2025-12-25T17:00:00.000Z',
  geolocation: 'Каток на ВДНХ',
  creator_id: 1, // Artem
  participants: [USER_ARTEM, USER_7, USER_9, USER_10, USER_14],
};

export const EVENT_41: Event = {
  id: 41,
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

export const EVENT_42: Event = {
  id: 42,
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

export const EVENT_43: Event = {
  id: 43,
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

export const EVENT_44: Event = {
  id: 44,
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

export const EVENT_45: Event = {
  id: 45,
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

export const EVENT_46: Event = {
  id: 46,
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

/* ===== Обновляем общий массив ===== */

export const EVENTS: Event[] = [
  DANCING_EVENT,
  GAMING_EVENT,
  BUHLO_EVENT,
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
  EVENT_21,
  EVENT_22,
  EVENT_23,
  EVENT_24,
  EVENT_25,
  EVENT_26,
  EVENT_27,
  EVENT_28,
  EVENT_29,
  EVENT_30,
  EVENT_31,
  EVENT_32,
  EVENT_33,
  EVENT_34,
  EVENT_35,
  EVENT_36,
  EVENT_37,
  EVENT_38,
  EVENT_39,
  EVENT_40,
  EVENT_41,
  EVENT_42,
  EVENT_43,
  EVENT_44,
  EVENT_45,
  EVENT_46,
];

/* eslint-enable max-lines */
