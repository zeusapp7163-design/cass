# CasinoTop — casinotop.app

Новый сайт-рейтинг онлайн-казино (главная страница). Next.js 16 (App Router) + Tailwind CSS, тёмный премиум-дизайн, SEO-разметка под Яндекс и Google.

## Что внутри главной

- Hero «ТОП ОНЛАЙН КАЗИНО 2026» + live-панель рейтинга справа
- Топ-4 казино: 1win → JetTon → Getx → MoriWin (лого, бонус, промокод, рейтинг, выплаты, CTA)
- Сравнительная таблица с кнопками перехода
- Промокод ADBLOCK — только 1win и JetTon, с копированием в один клик
- Популярные слоты, методика рейтинга, платёжные методы, FAQ-аккордеон
- SEO-текст внизу страницы

## Бонусы и промокоды (актуальные значения)

| Казино | Бонус новичкам | Промокод |
| --- | --- | --- |
| 1win | 500% + 500 фриспинов | ADBLOCK |
| JetTon | 500% + 400 фриспинов | ADBLOCK |
| Getx | 350% + 250 фриспинов (до 100 000 ₽) | нет |
| MoriWin | 370% + 800 фриспинов | нет |

## SEO

- `title`, `description`, canonical, hreflang, Open Graph / Twitter (og.png 1200×630)
- JSON-LD `@graph`: WebSite, Organization, WebPage, BreadcrumbList, ItemList (топ-4), FAQPage
- `robots.txt` (правила для Yandex и всех ботов) и `sitemap.xml` — генерируются на билде
- Семантическая вёрстка: один H1, H2/H3 по секциям, `article`/`section`, `aria-label`, skip-навигация через анкоры
- Все партнёрские ссылки помечены `rel="sponsored nofollow noopener noreferrer"`
- Локальные изображения (без внешних шрифтов и CDN), lazy-loading ниже первого экрана

## Локальный запуск

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
npx tsc --noEmit   # проверка типов
```

## Где менять данные

- `lib/casinos.ts` — список казино (порядок, бонусы, рейтинги, промокоды), партнёрские ссылки в `AFFILIATE`, FAQ, слоты, платёжные методы
- `lib/site.ts` — название, домен, title/description, дата обновления, меню
- `app/globals.css` — дизайн-система (цвета, карточки, кнопки)
- `app/layout.tsx` — метаданные, `app/robots.ts`, `app/sitemap.ts` — индексация
- `components/*` — секции главной

### Партнёрские ссылки

| Казино | Ссылка |
| --- | --- |
| 1win | `https://one-vv6649.com/casino/list?open=register&sub1=black` |
| JetTon | `https://jtbetlab.click/ch7v2YRRqma?target_id=/&target_type=registration` |
| Getx | `https://getx.casino/` — **временно, заменить на партнёрскую ссылку** |
| MoriWin | `https://click.mori.vin/MP7ineRN` |

## Деплой (Vercel)

Сайт уже задеплоен и живёт на домене.

- GitHub: `https://github.com/zeusapp7163-design/cass` (ветка `main`, полная замена старого статического сайта)
- Vercel: проект `cass` (team `seozeus-projects`) → **https://casinotop.app**
- Связка Git → Vercel включена (`productionBranch: main`): любой пуш в `main` пересобирает прод.
- `vercel.json` задаёт `"framework": "nextjs"` — у проекта в настройках пресет «Other», без этого файла Vercel собирал бы как статику.

Обновление сайта:

```bash
git add -A && git commit -m "..." && git push
```

Ручной деплой из CLI (если нужно мимо Git):

```bash
vercel deploy --prod
```

Домен `casinotop.app` привязан к проекту; Deployment Protection включён только для `*.vercel.app`-превью, кастомный домен публичный.

После изменений: Яндекс.Вебмастер → «Индексирование» → отправить `https://casinotop.app/sitemap.xml`.


## Ассеты

`scripts/prepare-assets.py` (Pillow) собирает из `top.jpg` иконку приложения, `apple-icon`, `favicon.ico` и `public/og.png`, а логотипы казино — из `demo.online`. Всё уже сгенерировано — скрипт нужен только для обновления.
