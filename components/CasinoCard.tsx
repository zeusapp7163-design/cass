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
      <div className="casino-rank" aria-hidden="true">
        {String(casino.rank).padStart(2, '0')}
      </div>

      <div className="casino-logo">
        <Image
          src={casino.logo}
          alt={`Логотип казино ${casino.name}`}
          width={casino.logoWidth}
          height={casino.logoHeight}
          sizes="156px"
        />
      </div>

      <div className="casino-info">
        <div className="casino-title">
          <h3 className="casino-name">{casino.name}</h3>
          <span className={`casino-badge casino-badge--${casino.badgeTone}`}>{casino.badge}</span>
        </div>
        <p className="casino-slogan">{casino.slogan}</p>
        <ul className="casino-chips" aria-label={`Особенности ${casino.name}`}>
          {casino.features.slice(0, 3).map((feature) => (
            <li key={feature} className="chip">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="casino-bonus">
        <div className="bonus-main">
          <span className="bonus-label">Бонус новичкам</span>
          <div className="bonus-value">
            {casino.bonusValue}
            <em>{casino.bonusExtra}</em>
          </div>
          {casino.bonusCap ? <span className="bonus-cap">{casino.bonusCap}</span> : null}
        </div>
        {casino.promoCode ? (
          <PromoCode code={casino.promoCode} />
        ) : (
          <span className="promo-hint">Без промокода</span>
        )}
      </div>

      <div className="casino-action">
        <div className="rating">
          <Stars value={casino.rating} />
          <span className="rating-score">{casino.rating.toFixed(1)}</span>
        </div>
        <a
          href={casino.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="btn btn-primary btn-sm"
          aria-label={`Играть в ${casino.name}`}
        >
          Играть
          <ArrowIcon width={14} height={14} />
        </a>
        <div className="casino-meta">
          <span>{casino.payout}</span>
          <span>от {casino.minDeposit}</span>
          <span>{casino.license}</span>
        </div>
      </div>
    </article>
  );
}
