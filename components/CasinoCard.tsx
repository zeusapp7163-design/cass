import Image from 'next/image';
import type { Casino } from '@/lib/casinos';
import { ArrowIcon, StarIcon } from '@/components/icons';
import { PromoCode } from '@/components/PromoCode';

function Stars({ value }: { value: number }) {
  const row = Array.from({ length: 5 }, (_, i) => <StarIcon key={i} />);
  return (
    <span className="rating-stars" style={{ ['--r' as string]: value }} aria-hidden="true">
      <span className="rating-stars__bg">{row}</span>
      <span className="rating-stars__fill">{row}</span>
    </span>
  );
}

export function CasinoCard({ casino }: { casino: Casino }) {
  const isFirst = casino.rank === 1;

  return (
    <article
      id={casino.id}
      className={`casino-card${isFirst ? ' casino-card--first' : ''}`}
      aria-label={`${casino.name} — ${casino.rank} место в рейтинге`}
    >
      <div className="casino-top">
        <div className="casino-rank" aria-hidden="true">
          {String(casino.rank).padStart(2, '0')}
        </div>

        <div className="casino-logo">
          <Image
            src={casino.logo}
            alt={`Логотип казино ${casino.name}`}
            width={casino.logoWidth}
            height={casino.logoHeight}
            sizes="128px"
          />
        </div>

        <div className="casino-head">
          <div className="casino-title-row">
            <h3 className="casino-name">{casino.name}</h3>
            <span className={`casino-badge casino-badge--${casino.badgeTone}`}>{casino.badge}</span>
          </div>
          <p className="casino-slogan">{casino.slogan}</p>
          <ul className="casino-features" aria-label={`Особенности ${casino.name}`}>
            {casino.features.map((feature) => (
              <li key={feature} className="feature-chip">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="casino-meta">
        <span>
          Выплаты <b>{casino.payout}</b>
        </span>
        <span>
          Депозит от <b>{casino.minDeposit}</b>
        </span>
        <span>
          Игр <b>{casino.games}</b>
        </span>
        <span>
          Лицензия <b>{casino.license}</b>
        </span>
      </div>

      <div className="casino-bonus">
        <div>
          <span className="bonus-label">Бонус новичкам</span>
          <div className="bonus-value bonus-value--gold">
            {casino.bonusValue}
            <em>{casino.bonusExtra}</em>
          </div>
          {casino.bonusCap ? (
            <span style={{ display: 'block', marginTop: 5, fontSize: 10.5, color: '#7c859c' }}>
              {casino.bonusCap}
            </span>
          ) : null}
        </div>
        {casino.promoCode ? (
          <div className="promo">
            Промокод
            <PromoCode code={casino.promoCode} />
          </div>
        ) : (
          <span className="promo" style={{ fontSize: 10.5 }}>
            Без промокода
          </span>
        )}
      </div>

      <div className="casino-action">
        <div className="rating">
          <Stars value={casino.rating} />
          <span className="rating-score">{casino.rating.toFixed(1)}</span>
          <span className="rating-votes">({casino.votes.toLocaleString('ru-RU')})</span>
        </div>
        <a
          href={casino.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="btn btn-primary btn-sm"
          aria-label={`Играть в ${casino.name}`}
        >
          Играть
          <ArrowIcon width={15} height={15} />
        </a>
        <span className="casino-note">Официальный сайт</span>
      </div>
    </article>
  );
}
