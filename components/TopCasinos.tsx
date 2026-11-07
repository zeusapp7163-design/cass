import Image from 'next/image';
import { CASINOS } from '@/lib/casinos';
import { CasinoCard } from '@/components/CasinoCard';

export function TopCasinos() {
  return (
    <section id="top" className="section" aria-labelledby="top-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Рейтинг 2026</span>
            <h2 id="top-title" className="section-title">
              Топ-4 онлайн казино
            </h2>
            <p className="section-sub">
              Оценка складывается из скорости выплат, условий бонусов, лицензии и отзывов игроков.
              Пересматриваем список каждый месяц.
            </p>
          </div>
          <a href="#how" className="btn btn-ghost btn-sm">
            Методика рейтинга
          </a>
        </div>

        <div className="casino-list">
          {CASINOS.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} />
          ))}
        </div>

        <div className="mt-8 hidden md:block">
          <div className="table-wrap">
            <table className="compare">
              <caption className="sr-only">Сравнение казино из топа: бонусы, промокоды, выплаты и рейтинг</caption>
              <thead>
                <tr>
                  <th scope="col">Казино</th>
                  <th scope="col">Бонус новичкам</th>
                  <th scope="col">Промокод</th>
                  <th scope="col">Выплаты</th>
                  <th scope="col">Мин. депозит</th>
                  <th scope="col">Рейтинг</th>
                  <th scope="col">Перейти</th>
                </tr>
              </thead>
              <tbody>
                {CASINOS.map((casino) => (
                  <tr key={casino.id}>
                    <th scope="row">
                      <span className="cell-brand">
                        <Image
                          src={casino.logo}
                          alt={casino.name}
                          width={casino.logoWidth}
                          height={casino.logoHeight}
                          sizes="96px"
                        />
                      </span>
                    </th>
                    <td className="cell-bonus">
                      {casino.bonusValue} {casino.bonusExtra}
                    </td>
                    <td>{casino.promoCode ? <code>{casino.promoCode}</code> : '—'}</td>
                    <td>{casino.payout}</td>
                    <td>{casino.minDeposit}</td>
                    <td className="cell-rating">
                      <span aria-hidden="true">★</span>
                      {casino.rating.toFixed(1)}
                      <span className="sr-only"> из 5</span>
                    </td>
                    <td>
                      <a
                        href={casino.url}
                        target="_blank"
                        rel="sponsored nofollow noopener noreferrer"
                        className="btn btn-primary btn-sm table-cta"
                        aria-label={`Перейти в ${casino.name}`}
                      >
                        Играть
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
