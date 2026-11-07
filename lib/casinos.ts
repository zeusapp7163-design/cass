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
  /** Optional cap under the bonus, e.g. "до 100 000 ₽". */
  bonusCap?: string;
  /** Promo code, null when the brand has none. */
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
  bonusPercent: number;
  payoutMax: number;
  minDepositValue: number;
  scores: { payout: number; bonus: number; games: number; support: number };
  pros: string[];
  cons: string[];
  accent: string;
};

/**
 * Партнёрские ссылки собраны из проекта demo.online.
 * TODO: Getx — заменить на вашу партнёрскую (трекинговую) ссылку.
 */
export const AFFILIATE = {
  oneWin: 'https://one-vv6649.com/casino/list?open=register&sub1=black',
  jetton: 'https://jtbetlab.click/ch7v2YRRqma?target_id=/&target_type=registration',
  getx: 'https://getx.casino/',
  moriwin: 'https://click.mori.vin/MP7ineRN',
} as const;

/** Промокод действует только в 1win и JetTon. */
export const PROMO_CODE = 'ADBLOCK';

export const CASINOS: Casino[] = [
  {
    id: '1win',
    rank: 1,
    name: '1win',
    slogan: 'Максимальный бонус и выплаты за минуты',
    logo: '/images/casinos/1win.webp',
    logoWidth: 320,
    logoHeight: 127,
    rating: 4.9,
    votes: 12840,
    bonusValue: '500%',
    bonusExtra: '+500 фриспинов',
    promoCode: PROMO_CODE,
    url: AFFILIATE.oneWin,
    badge: 'Выбор редакции',
    badgeTone: 'gold',
    payout: '5–15 минут',
    minDeposit: '500 ₽',
    games: '5 000+',
    license: 'Кюрасао',
    features: ['4 депозита', 'Кэшбэк до 30%', 'СБП и крипто', 'Приложение'],
    bonusPercent: 500,
    payoutMax: 15,
    minDepositValue: 500,
    scores: { payout: 9.8, bonus: 9.7, games: 9.5, support: 9.0 },
    pros: ['Выплаты за 5–15 минут', 'Кэшбэк до 30%', 'Приложение iOS и Android'],
    cons: ['Вейджер 30x на бонус'],
    payments: ['СБП', 'МИР', 'USDT', 'Карты'],
    accent: '#ff8a1f',
  },
  {
    id: 'jetton',
    rank: 2,
    name: 'JetTon',
    slogan: 'Крипто-казино с моментальными выводами',
    logo: '/images/casinos/jetton.webp',
    logoWidth: 320,
    logoHeight: 46,
    rating: 4.8,
    votes: 8340,
    bonusValue: '500%',
    bonusExtra: '+400 фриспинов',
    promoCode: PROMO_CODE,
    url: AFFILIATE.jetton,
    badge: 'Лучший для крипты',
    badgeTone: 'cyan',
    payout: 'до 10 минут',
    minDeposit: '1 000 ₽',
    games: '4 200+',
    license: 'Кюрасао',
    features: ['Вывод в любой валюте', 'Live-казино', 'Турниры', 'Rakeback'],
    bonusPercent: 500,
    payoutMax: 10,
    minDepositValue: 1000,
    scores: { payout: 9.6, bonus: 9.5, games: 9.0, support: 9.2 },
    pros: ['Вывод в любой валюте, включая крипту', 'Rakeback и турниры', 'Собственное live-казино'],
    cons: ['Минимальный депозит 1 000 ₽'],
    payments: ['Любая валюта', 'USDT', 'BTC', 'Карты'],
    accent: '#7ce03a',
  },
  {
    id: 'getx',
    rank: 3,
    name: 'Getx',
    slogan: 'Быстрая регистрация и щедрый старт',
    logo: '/images/casinos/getx.webp',
    logoWidth: 320,
    logoHeight: 98,
    rating: 4.7,
    votes: 6120,
    bonusValue: '350%',
    bonusExtra: '+250 фриспинов',
    bonusCap: 'до 100 000 ₽',
    promoCode: null,
    url: AFFILIATE.getx,
    badge: 'Новинка',
    badgeTone: 'violet',
    payout: 'до 20 минут',
    minDeposit: '500 ₽',
    games: '3 800+',
    license: 'Кюрасао',
    features: ['Бонус без депозита', 'Слоты и краш', 'Кэшбэк 10%', 'Чат 24/7'],
    bonusPercent: 350,
    payoutMax: 20,
    minDepositValue: 500,
    scores: { payout: 9.3, bonus: 9.4, games: 8.8, support: 9.0 },
    pros: ['Бонус без депозита', 'До 100 000 ₽ на депозит', 'Регистрация за минуту'],
    cons: ['Поддержка только в чате'],
    payments: ['СБП', 'МИР', 'USDT', 'ЮMoney'],
    accent: '#ffb02e',
  },
  {
    id: 'moriwin',
    rank: 4,
    name: 'MoriWin',
    slogan: '800 фриспинов новым игрокам',
    logo: '/images/casinos/moriwin.webp',
    logoWidth: 320,
    logoHeight: 76,
    rating: 4.6,
    votes: 4980,
    bonusValue: '370%',
    bonusExtra: '+800 фриспинов',
    promoCode: null,
    url: AFFILIATE.moriwin,
    badge: 'Много фриспинов',
    badgeTone: 'neutral',
    payout: 'до 30 минут',
    minDeposit: '500 ₽',
    games: '3 500+',
    license: 'Кюрасао',
    features: ['Бонус за друзей', 'Турниры', 'Live-дилеры', 'Поддержка 24/7'],
    bonusPercent: 370,
    payoutMax: 30,
    minDepositValue: 500,
    scores: { payout: 9.0, bonus: 9.6, games: 8.6, support: 9.1 },
    pros: ['До 800 фриспинов новичкам', 'Бонус за приглашённых друзей', 'Live-дилеры'],
    cons: ['Вывод до 30 минут'],
    payments: ['СБП', 'Карты', 'USDT', 'BTC'],
    accent: '#ff8a1f',
  },
];

export const CASINOS_WITH_PROMO = CASINOS.filter((casino) => casino.promoCode);

export const SLOTS = [
  { name: 'Gates of Olympus', image: '/images/slots/gates-of-olympus.webp', provider: 'Pragmatic Play' },
  { name: 'Sweet Bonanza', image: '/images/slots/sweet-bonanza.webp', provider: 'Pragmatic Play' },
  { name: 'Mental', image: '/images/slots/mental.webp', provider: 'NoLimit City' },
  { name: 'Sugar Rush', image: '/images/slots/sugar-rush.webp', provider: 'Pragmatic Play' },
  { name: 'Big Bass Bonanza', image: '/images/slots/big-bass-bonanza.webp', provider: 'Pragmatic Play' },
  { name: 'Wanted Dead or a Wild', image: '/images/slots/wanted-dead-or-a-wild.webp', provider: 'Hacksaw' },
];

export const PAYMENTS = ['СБП', 'МИР', 'Visa', 'Mastercard', 'USDT', 'Bitcoin', 'GRAM', 'ЮMoney'];

export const FAQ = [
  {
    q: 'Какое онлайн-казино лучшее в 2027 году?',
    a: 'В нашем рейтинге первое место занимает 1win: лицензия Кюрасао, приветственный бонус до 500% и 500 фриспинов, кэшбэк до 30% и выплаты в среднем за 5–15 минут. JetTon — лучший выбор для криптовалюты (до 500% и 400 фриспинов), Getx — для быстрого старта с бонусом до 350% и 250 фриспинами, MoriWin — для охоты за фриспинами (до 800).',
  },
  {
    q: 'Как быстро выводят деньги из казино?',
    a: 'Все четыре площадки из топа выводят средства от 5 минут до 30 минут при верифицированном аккаунте. Скорость зависит от платёжного метода: СБП и криптовалюта приходят быстрее всего, банковские карты — в течение нескольких часов.',
  },
  {
    q: 'Где действует промокод ADBLOCK?',
    a: 'Промокод ADBLOCK работает только в 1win и JetTon — скопируйте его кнопкой на этой странице и укажите в поле «Промокод» при регистрации. В Getx и MoriWin промокодов нет: приветственный бонус начисляется автоматически после первого депозита.',
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
