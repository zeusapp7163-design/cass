import Image from 'next/image';
import { CASINOS } from '@/lib/casinos';
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

      <div className="wrap hero-inner">
        <div className="hero-mark rise">
          <Image src="/icon.png" alt="" width={66} height={66} priority />
        </div>

        <h1 className="rise">
          Топ онлайн казино
          <span className="year">2027</span>
        </h1>

        <p className="hero-sub rise" style={{ animationDelay: '80ms' }}>
          4 лицензированные площадки с бонусами до 500% и выплатами за минуты. Отбор вручную —
          без платных мест.
        </p>

        <div className="hero-actions rise" style={{ animationDelay: '140ms' }}>
          <a href="#top" className="btn btn-primary">
            Смотреть рейтинг
            <ArrowIcon width={16} height={16} />
          </a>
          <a href="#how" className="btn btn-ghost">
            Как мы выбираем
          </a>
        </div>

        <div className="strip rise" style={{ animationDelay: '200ms' }}>
          {CASINOS.map((casino) => (
            <a
              key={casino.id}
              href={`#${casino.id}`}
              className={`strip-cell${casino.rank === 1 ? ' strip-cell--first' : ''}`}
              aria-label={`${casino.name} — ${casino.rank} место`}
            >
              <span className="strip-head">
                <span className="strip-rank">{String(casino.rank).padStart(2, '0')}</span>
                <span className="strip-rating">
                  <StarIcon />
                  {casino.rating.toFixed(1)}
                </span>
              </span>
              <span className="strip-logo">
                <Image
                  src={casino.logo}
                  alt={casino.name}
                  width={casino.logoWidth}
                  height={casino.logoHeight}
                  sizes="160px"
                  priority={casino.rank === 1}
                />
              </span>
              <span className="strip-bonus">{shortBonus(casino.bonusValue, casino.bonusExtra)}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
