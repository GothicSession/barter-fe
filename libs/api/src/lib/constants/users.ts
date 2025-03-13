import { User } from '../types/user';

export const USER_ARTEM: User = {
  id: 1,
  name: 'Artem',
  city: 'Москва',
  photos: [
    'https://sun9-60.userapi.com/impg/6ksLQNdKBCNaJpLAi7LQAIbqqJ48EwV8olT9QA/WJyL553p95U.jpg?size=1440x1440&quality=96&sign=e76692ee22345ed82d71bad3856eb1c5&type=album',
  ],
  age: 23,
  additionalInfo:
    'Любитель погамзить в дотку! Собираю пати чтобы жестко тащить в рейтинге! А потом идти пить латте на безлактозном и фронтендить друг друга',
  sex: 'male',
  interests: ['dota 2', 'frontend', 'latte'],
  createdEvents: [],
};

export const USER_RUSIK: User = {
  id: 2,
  name: 'Ruslan',
  city: 'Москва',
  photos: [
    'https://sun9-77.userapi.com/impg/eY7J1Rj_5vfifRFeA6kJsR6_89iLW2w-oFFh0A/kRSCGJif--E.jpg?size=1620x2160&quality=95&sign=05ca8ddac7eca576dda9956ae0aa8ca5&type=album',
  ],
  age: 23,
  additionalInfo:
    'Топ 1 мира чесском в блице, рапиде а так же классике. В свободное время глажу Алексу и езжу в дорогущие туры. Работаю в ВК, манагерствую всякое.',
  sex: 'male',
  interests: ['chess', 'travel', 'dota 2'],
  createdEvents: [],
};

export const USER_DAN: User = {
  id: 3,
  name: 'Danila',
  city: 'Москва',
  age: 22,
  photos: [
    'https://sun9-61.userapi.com/s/v1/ig2/rFcGPrgs7OCnghzVgv7PqjC2y57uJrADMT5gEEY5KLfYR1SmjpGqm7mrbfpKaVj18KXVTebeEOEyTFaf3l-Vx3V2.jpg?quality=95&as=32x34,48x51,72x76,108x115,160x170,240x255,360x382,480x509,540x573,640x679,675x716&from=bu&u=oK8Eum1L1MKXSu-HH-02oalR3vE9NbLJjETPqw9lC6Y&cs=675x716',
  ],
  additionalInfo:
    'Играю в папк, ищу мощных тиммейтов или просто с кем можно сгонять в компы или выпить). Предупреждаю сразу! Мусорам не писать, я АУЕшник!',
  sex: 'male',
  interests: ['pubg', 'beer', 'criminal'],
  createdEvents: [],
};

export const USER_ERIK: User = {
  id: 4,
  name: 'Erik',
  city: 'Москва',
  age: 23,
  photos: [
    'https://sun9-43.userapi.com/impf/c841234/v841234585/37185/fj4jx2SDfQw.jpg?size=720x1280&quality=96&sign=b0535dc99c88020437c9eba239c7d365&type=album',
  ],
  additionalInfo:
    'Всем привет! Я новенький в данном приложении) Надеюсь найти здесь интересные знакомства. 180/75/23. Девушки, не пишите!',
  sex: 'male',
  interests: ['frontend', 'travel', 'criminal'],
  createdEvents: [],
};

export const USERS = [USER_RUSIK, USER_DAN, USER_ERIK, USER_ARTEM];
