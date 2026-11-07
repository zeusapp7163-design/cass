export type Casino = {
  id: string;
  rank: number;
  name: string;
  /** Short benefit line under the name (max ~60 chars). */
  slogan: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  rating: number;
  votes: number;
  /** Big value shown on the bonus plate, e.g. "500%". */
  bonusValue: string;
  bonusExtra: string;
  /** Text of the promo code, null when the brand has no code. */
  promoCode: string | null;
  url: string;
  badge: string;
  badgeTone: 'gold' | 'violet' | 'cyan' | 'neutral';
  payout: string;
  minDeposit: string;
  games: string;
  license: string;
  features: string[];
  payments: string[];
  accent: string;
};

/**
 * Партнёрские ссылки собраны из проекта demo.online.
 * TODO: Getx — заменить на вашу партнёрскую (трекинговую) ссылку.
 */
export const AFFILIATE = {
  oneWin:
    'https://one-vv6649.com/casino/list?open=register&sub1=black',
  jetton:
    'https://jtbetlab.click/ch7v2YRRqma?target_id=/&target_type=registration',
  getx: 'https://getx.casino/',
  moriwin: 'https://click.mori.vin/MP7ineRN',
} as const;

export const CASINOS: Casino[] = [
  {
    id: '1win',
    rank: 1,
    name: '1win',
    slogan: 'Максимальный бонус и выплаты за минуты',
    logo: '/images/casinos/1win.webp',
    logoWidth: 404,
    logoHeight: 160,
    rating: 4.9,
    votes: 12840,
    bonusValue: '500%',
    bonusExtra: '+70 фриспинов',
    promoCode: 'ADBLOCK',
    url: AFFILIATE.oneWin,
    badge: 'Выбор редакции',
    badgeTone: 'gold',
    payout: '5–15 минут',
    minDeposit: '500 ₽',
    games: '5 000+',
    license: 'Кюрасао',
    features: ['4 депозита', 'Кэшбэк до 30%', 'СБП и крипто', 'Приложение'],
    payments: ['СБП', 'МИР', 'USDT', 'Карты'],
    accent: '#f7b32b',
  },
  {
    id: 'jetton',
    rank: 2,
    name: 'JetTon',
    slogan: 'Крипто-казино с моментальными выводами',
    logo: '/images/casinos/jetton.webp',
    logoWidth: 1110,
    logoHeight: 160,
    rating: 4.8,
    votes: 8340,
    bonusValue: '425%',
    bonusExtra: '+250 фриспинов',
    promoCode: 'ADBLOCK',
    url: AFFILIATE.jetton,
    badge: 'Лучший для крипты',
    badgeTone: 'cyan',
    payout: 'до 10 минут',
    minDeposit: '1 000 ₽',
    games: '4 200+',
    license: 'Кюрасао',
    features: ['TON и USDT', 'Live-казино', 'Турниры', 'Rakeback'],
    payments: ['TON', 'USDT', 'BTC', 'Карты'],
    accent: '#7ce03a',
  },
  {
    id: 'getx',
    rank: 3,
    name: 'Getx',
    slogan: 'Быстрая регистрация и щедрый старт',
    logo: '/images/casinos/getx.webp',
    logoWidth: 522,
    logoHeight: 160,
    rating: 4.7,
    votes: 6120,
    bonusValue: '300%',
    bonusExtra: '+200 фриспинов',
    promoCode: 'ADBLOCK',
    url: AFFILIATE.getx,
    badge: 'Новинка',
    badgeTone: 'violet',
    payout: 'до 20 минут',
    minDeposit: '500 ₽',
    games: '3 800+',
    license: 'Кюрасао',
    features: ['Бонус без депозита', 'Слоты и краш', 'Кэшбэк 10%', 'Чат 24/7'],
    payments: ['СБП', 'МИР', 'USDT', 'ЮMoney'],
    accent: '#f9af2c',
  },
  {
    id: 'moriwin',
    rank: 4,
    name: 'MoriWin',
    slogan: '800 фриспинов новым игрокам',
    logo: '/images/casinos/moriwin.webp',
    logoWidth: 674,
    logoHeight: 160,
    rating: 4.6,
    votes: 4980,
    bonusValue: '370%',
    bonusExtra: '+800 фриспинов',
    promoCode: 'ADBLOCK',
    url: AFFILIATE.moriwin,
    badge: 'Много фриспинов',
    badgeTone: 'neutral',
    payout: 'до 30 минут',
    minDeposit: '500 ₽',
    games: '3 500+',
    license: 'Кюрасао',
    features: ['Бонус за друзей', 'Турниры', 'Live-дилеры', 'Поддержка 24/7'],
    payments: ['СБП', 'Карты', 'USDT', 'BTC'],
    accent: '#f7b32b',
  },
];

export const SLOTS = [
  { name: 'Gates of Olympus', image: '/images/slots/gates-of-olympus.webp', provider: 'Pragmatic Play' },
  { name: 'Sweet Bonanza', image: '/images/slots/sweet-bonanza.webp', provider: 'Pragmatic Play' },
  { name: 'Mental', image: '/images/slots/mental.webp', provider: 'NoLimit City' },
  { name: 'Sugar Rush', image: '/images/slots/sugar-rush.webp', provider: 'Pragmatic Play' },
  { name: 'Big Bass Bonanza', image: '/images/slots/big-bass-bonanza.webp', provider: 'Pragmatic Play' },
  { name: 'Wanted Dead or a Wild', image: '/images/slots/wanted-dead-or-a-wild.webp', provider: 'Hacksaw' },
];

export const PAYMENTS = ['СБП', 'МИР', 'Visa', 'Mastercard', 'USDT', 'Bitcoin', 'TON', 'ЮMoney'];

export const FAQ = [
  {
    q: 'Какое онлайн-казино лучшее в 2026 году?',
    a: 'В нашем рейтинге первое место занимает 1win: лицензия Кюрасао, приветственный бонус до 500% на четыре депозита, кэшбэк до 30% и выплаты в среднем за 5–15 минут. JetTon — лучший выбор для криптовалюты, Getx — для быстрого старта с минимальным депозитом, MoriWin — для охоты за фриспинами.',
  },
  {
    q: 'Как быстро выводят деньги из казино?',
    a: 'Все четыре площадки из топа выводят средства от 5 минут до 30 минут при верифицированном аккаунте. Скорость зависит от платёжного метода: СБП и криптовалюта приходят быстрее всего, банковские карты — в течение нескольких часов.',
  },
  {
    q: 'Нужен ли промокод для бонуса?',
    a: 'Бонус новичка начисляется автоматически после первого депозита. Промокод ADBLOCK даёт дополнительный бонус к приветственному пакету — скопируйте его кнопкой на этой странице и укажите в поле «Промокод» при регистрации.',
  },
  {
    q: 'Легально ли играть в онлайн-казино?',
    a: 'Онлайн-казино с лицензией Кюрасао работают легально и доступны игрокам из России через официальные сайты. Играйте только на площадках с лицензией, проходите верификацию и помните об ограничениях по возрасту 18+.',
  },
  {
    q: 'Как составляется рейтинг казино на CasinoTop?',
    a: 'Мы оцениваем лицензию и репутацию, скорость выплат, размер и условия бонусов (вейджер), ассортимент слотов, удобство интерфейса и качество поддержки. Каждая площадка проходит ручную проверку, рейтинг обновляется ежемесячно.',
  },
  {
    q: 'Что делать, если казино задерживает выплату?',
    a: 'Проверьте статус верификации и лимиты на вывод, затем обратитесь в поддержку казино через чат. Если проблема не решается за 48 часов, напишите нам — мы помогаем разбираться со спорными ситуациями и исключаем проблемные площадки из рейтинга.',
  },
];
