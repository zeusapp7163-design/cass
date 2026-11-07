import { CASINOS } from '@/lib/casinos';
import { CasinoCard } from '@/components/CasinoCard';

export function TopCasinos() {
  return (
    <section id="top" className="section" aria-labelledby="top-title">
      <div className="wrap">
        <div className="head">
          <h2 id="top-title">Топ-4 онлайн казино 2027</h2>
          <p>
            Оценка складывается из скорости выплат, условий бонусов, лицензии и отзывов игроков.
            Пересматриваем список каждый месяц.
          </p>
        </div>

        <div className="casino-list">
          {CASINOS.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} />
          ))}
        </div>
      </div>
    </section>
  );
}
