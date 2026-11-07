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

const SCORE_LABELS: Array<[keyof Casino['scores'], string]> = [
  ['payout', 'Выплаты'],
  ['bonus', 'Бонусы'],
  ['games', 'Игры'],
  ['support', 'Поддержка'],
];

export function CasinoCard({ casino }: { casino: Casino }) {
  const isFirst = casino.rank === 1;

  return (
    <article
      id={casino.id}
      className={`card${isFirst ? ' card--first' : ''}`}
      aria-label={`${casino.name} — ${casino.rank} место в рейтинге`}
    >
      <div className="card-rank" aria-hidden="true">
        {String(casino.rank).padStart(2, '0')}
      </div>

      <div className="card-head">
        <span className="card-logo">
          <Image
            src={casino.logo}
            alt={`Логотип ${casino.name}`}
            width={casino.logoWidth}
            height={casino.logoHeight}
            sizes="104px"
            priority={isFirst}
          />
        </span>
        <div className="card-id">
          <div className="card-title">
            <h3 className="card-name">{casino.name}</h3>
            <span className="card-badge">{casino.badge}</span>
          </div>
          <p className="card-slogan">{casino.slogan}</p>
        </div>
      </div>

      <div className="card-specs">
        <span className="spec">{casino.payout}</span>
        <span className="spec">от {casino.minDeposit}</span>
        <span className="spec">{casino.license}</span>
      </div>

      <div className="card-bonus">
        <div>
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
          <span className="promo-hint">без промокода</span>
        )}
      </div>

      <div className="card-action">
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
          <ArrowIcon width={13} height={13} />
        </a>
      </div>

      <details className="card-more">
        <summary>Оценки, плюсы и минусы</summary>
        <div className="more-grid">
          <div>
            <span className="mini-title">Наши оценки</span>
            <div style={{ marginTop: 12 }}>
              {SCORE_LABELS.map(([key, label]) => (
                <div key={key} className="bar-row">
                  <span>{label}</span>
                  <span className="bar">
                    <i style={{ width: `${casino.scores[key] * 10}%` }} />
                  </span>
                  <b>{casino.scores[key].toFixed(1)}</b>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="mini-title">Плюсы</span>
            <ul className="pros">
              {casino.pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="mini-title">Минусы</span>
            <ul className="cons">
              {casino.cons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="pay-chips">
              {casino.payments.map((pay) => (
                <span key={pay} className="pay-chip">
                  {pay}
                </span>
              ))}
            </div>
          </div>
        </div>
      </details>
    </article>
  );
}
