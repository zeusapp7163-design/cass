# CasinoTop — casinotop.app

Новый сайт-рейтинг онлайн-казино (главная страница). Next.js 16 (App Router) + Tailwind CSS, тёмный премиум-дизайн, SEO-разметка под Яндекс и Google.

## Что внутри главной

- Hero с H1 «Топ онлайн казино 2026 года» и карточкой лидера рейтинга
- Топ-4 казино: 1win → JetTon → Getx → MoriWin (лого, бонус, промокод, рейтинг, выплаты, CTA)
- Сравнительная таблица с кнопками перехода
- Промокод ADBLOCK с копированием в один клик
- Популярные слоты, методика рейтинга, платёжные методы, FAQ-аккордеон
- SEO-текст внизу страницы

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

1. Репозиторий на GitHub → Vercel: **Add New → Project → Import**.
2. Framework: Next.js (определяется автоматически), Build Command `npm run build`, Install `npm install`.
3. Domain: `casinotop.app` (+ `www` при необходимости).
4. После деплоя: Яндекс.Вебмастер → добавить сайт → подтвердить → отправить `https://casinotop.app/sitemap.xml`.

## Ассеты

`scripts/prepare-assets.py` (Pillow) собирает логотипы казино из `demo.online`, иконку приложения, favicon и `public/og.png`.
Иконки и OG уже сгенерированы — скрипт нужен только для обновления.
