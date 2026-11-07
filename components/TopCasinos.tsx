'use client';

import { useState } from 'react';
import { CASINOS } from '@/lib/casinos';
import { CasinoCard } from '@/components/CasinoCard';

type Mode = 'rating' | 'bonus';

export function TopCasinos() {
  const [mode, setMode] = useState<Mode>('rating');

  const list = [...CASINOS].sort((a, b) =>
    mode === 'bonus' ? b.bonusPercent - a.bonusPercent || b.rating - a.rating : b.rating - a.rating,
  );

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

        <div className="toolbar">
          <div className="sort" role="group" aria-label="Сортировка казино">
            <button type="button" aria-pressed={mode === 'rating'} onClick={() => setMode('rating')}>
              По рейтингу
            </button>
            <button type="button" aria-pressed={mode === 'bonus'} onClick={() => setMode('bonus')}>
              По бонусу
            </button>
          </div>
        </div>

        <div className="list">
          {list.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} />
          ))}
        </div>
      </div>
    </section>
  );
}
