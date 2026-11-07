import Image from 'next/image';
import { CASINOS } from '@/lib/casinos';
import { SITE } from '@/lib/site';
import { ArrowIcon, StarIcon } from '@/components/icons';

function shortBonus(value: string, extra: string) {
  const fs = extra.match(/(\d+)/);
  return fs ? `${value} + ${fs[1]} FS` : value;
}

export function Hero() {
  return (
    <section className="hero" aria-label="Рейтинг онлайн-казино">
      <div className="hero-glow hero-glow--orange" aria-hidden="true" />
      <div className="hero-glow hero-glow--blue" aria-hidden="true" />

      <div className="wrap hero-center">
        <div className="hero-chips rise">
          <span className="eyebrow">
            <span className="dot-live" aria-hidden="true" />
            Проверено вручную
          </span>
          <span className="eyebrow">Обновлено {SITE.updatedLabel}</span>
        </div>

        <h1 className="hero-title rise" style={{ animationDelay: '70ms' }}>
          <span>Топ онлайн казино</span>
          <span className="year">2026</span>
        </h1>

        <p className="hero-lead rise" style={{ animationDelay: '130ms' }}>
          4 лицензированные площадки с бонусами до 500% и выплатами за минуты. Рейтинг собран
          вручную — без платных мест.
        </p>

        <div className="hero-actions rise" style={{ animationDelay: '180ms' }}>
          <a href="#top" className="btn btn-primary">
            Смотреть рейтинг
            <ArrowIcon width={16} height={16} />
          </a>
          <a href="#how" className="btn btn-ghost">
            Методика
          </a>
        </div>

        <div className="hero-stats rise" style={{ animationDelay: '230ms' }}>
          <div className="hero-stat">
            <b>4</b>
            <span>казино в топе</span>
          </div>
          <div className="hero-stat">
            <b>12 000+</b>
            <span>игр и слотов</span>
          </div>
          <div className="hero-stat">
            <b>5 мин</b>
            <span>мин. вывод</span>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="hero-tiles rise" style={{ animationDelay: '280ms' }}>
          {CASINOS.map((casino) => (
            <a
              key={casino.id}
              href={`#${casino.id}`}
              className={`htile${casino.rank === 1 ? ' htile--first' : ''}`}
              aria-label={`${casino.name} — ${casino.rank} место`}
            >
              <span className="htile-head">
                <span className="htile-rank">{String(casino.rank).padStart(2, '0')}</span>
                <span className="htile-rating">
                  <StarIcon />
                  {casino.rating.toFixed(1)}
                </span>
              </span>
              <span className="htile-body">
                <span className="htile-logo">
                  <Image
                    src={casino.logo}
                    alt=""
                    width={casino.logoWidth}
                    height={casino.logoHeight}
                    sizes="64px"
                  />
                </span>
                <span className="htile-info">
                  <span className="htile-name">{casino.name}</span>
                  <span className="htile-bonus">
                    {shortBonus(casino.bonusValue, casino.bonusExtra)}
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
