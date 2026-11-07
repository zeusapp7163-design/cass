import Image from 'next/image';
import { CASINOS } from '@/lib/casinos';
import { SITE } from '@/lib/site';
import { ArrowIcon, StarIcon } from '@/components/icons';

export function Hero() {
  return (
    <section className="hero" aria-label="Рейтинг онлайн-казино">
      <div className="hero-glow hero-glow--orange" aria-hidden="true" />
      <div className="hero-glow hero-glow--blue" aria-hidden="true" />
      <Image
        className="hero-watermark"
        src="/icon.png"
        alt=""
        width={460}
        height={460}
        aria-hidden="true"
        priority={false}
      />

      <div className="wrap hero-inner">
        <div>
          <div className="hero-chips rise">
            <span className="eyebrow">
              <span className="dot-live" aria-hidden="true" />
              Проверено вручную
            </span>
            <span className="eyebrow">Обновлено {SITE.updatedLabel}</span>
          </div>

          <h1 className="hero-title rise" style={{ animationDelay: '70ms' }}>
            <span>Топ онлайн</span>
            <span>казино</span>
            <span className="year">2026</span>
          </h1>

          <p className="hero-lead rise" style={{ animationDelay: '130ms' }}>
            4 лицензированные площадки с бонусами до 500% и выплатами за минуты. Рейтинг собран
            вручную — без платных мест.
          </p>

          <div className="hero-actions rise" style={{ animationDelay: '190ms' }}>
            <a href="#top" className="btn btn-primary">
              Смотреть рейтинг
              <ArrowIcon width={16} height={16} />
            </a>
            <a href="#how" className="btn btn-ghost">
              Методика
            </a>
          </div>

          <div className="hero-stats rise" style={{ animationDelay: '240ms' }}>
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

        <aside className="rank-panel rise" style={{ animationDelay: '160ms' }} aria-label="Топ-4 казино">
          <div className="rank-panel-head">
            <span>Рейтинг · ноябрь 2026</span>
            <em>
              <span className="dot-live" aria-hidden="true" />
              live
            </em>
          </div>

          {CASINOS.map((casino) => (
            <a
              key={casino.id}
              href={`#${casino.id}`}
              className={`rank-row${casino.rank === 1 ? ' rank-row--first' : ''}`}
            >
              <span className="rank-row__num">{String(casino.rank).padStart(2, '0')}</span>
              <span className="rank-row__main">
                <span className="rank-row__logo">
                  <Image
                    src={casino.logo}
                    alt=""
                    width={casino.logoWidth}
                    height={casino.logoHeight}
                    sizes="64px"
                  />
                </span>
                <span className="rank-row__name">
                  <b>{casino.name}</b>
                  <span>{casino.bonusValue} бонус</span>
                </span>
              </span>
              <span className="rank-row__rating">
                <StarIcon />
                {casino.rating.toFixed(1)}
              </span>
            </a>
          ))}

          <div className="rank-panel-foot">
            <span>Пересматриваем каждый месяц</span>
            <a href="#top" className="btn btn-ghost btn-sm" style={{ padding: '8px 12px' }}>
              Все
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
