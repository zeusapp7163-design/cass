import Image from 'next/image';
import { CASINOS } from '@/lib/casinos';
import { SITE } from '@/lib/site';
import { ArrowIcon, BoltIcon, GiftIcon, ShieldIcon } from '@/components/icons';

export function Hero() {
  const first = CASINOS[0];

  return (
    <section className="hero" aria-label="Рейтинг онлайн-казино">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb--violet" aria-hidden="true" />
      <div className="hero-orb hero-orb--cyan" aria-hidden="true" />

      <div className="wrap hero-inner">
        <div>
          <span className="eyebrow rise">
            <span className="dot-live" aria-hidden="true" />
            Обновлено {SITE.updatedLabel}
          </span>

          <h1 className="rise" style={{ animationDelay: '60ms' }}>
            Топ онлайн казино
            <br />
            <span className="grad">2026 года</span>
          </h1>

          <p className="hero-lead rise" style={{ animationDelay: '120ms' }}>
            4 проверенные площадки с лицензией, бонусами до&nbsp;500% и выплатами за минуты.
            Без рекламы и случайных сайтов — только ручной отбор.
          </p>

          <div className="hero-actions rise" style={{ animationDelay: '180ms' }}>
            <a href="#top" className="btn btn-primary">
              Смотреть топ-4
              <ArrowIcon width={16} height={16} />
            </a>
            <a href="#how" className="btn btn-ghost">
              Как мы выбираем
            </a>
          </div>

          <ul className="hero-trust rise" style={{ animationDelay: '240ms' }}>
            <li className="trust-item">
              <ShieldIcon />
              Лицензии проверены
            </li>
            <li className="trust-item">
              <BoltIcon />
              Выплаты от 5 минут
            </li>
            <li className="trust-item">
              <GiftIcon />
              Бонусы до 500%
            </li>
          </ul>
        </div>

        <div className="showcase" aria-hidden="true">
          <div className="showcase-card">
            <div className="showcase-top">
              <span>№1 в рейтинге</span>
              <span style={{ color: '#f7b32b' }}>★ {first.rating.toFixed(1)}</span>
            </div>

            <div className="showcase-logo">
              <Image
                src={first.logo}
                alt=""
                width={first.logoWidth}
                height={first.logoHeight}
                sizes="(min-width: 1024px) 340px, 80vw"
                priority
              />
            </div>

            <div className="showcase-bonus">
              <div>
                <span>Бонус новичкам</span>
                <strong>{first.bonusValue}</strong>
              </div>
              <span>{first.bonusExtra}</span>
            </div>

            <div className="showcase-bars">
              <div className="showcase-bar">
                <span>Выплаты</span>
                <i style={{ ['--w' as string]: '94%' }} />
                <span>94</span>
              </div>
              <div className="showcase-bar">
                <span>Бонусы</span>
                <i style={{ ['--w' as string]: '98%' }} />
                <span>98</span>
              </div>
              <div className="showcase-bar">
                <span>Игры</span>
                <i style={{ ['--w' as string]: '92%' }} />
                <span>92</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
