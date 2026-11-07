'use client';

import { useState } from 'react';
import { CASINOS } from '@/lib/casinos';
import { CasinoCard } from '@/components/CasinoCard';

type Mode = 'rating' | 'bonus';
type Filter = 'all' | 'cashback' | 'live' | 'fast' | 'budget';

const FILTERS: Array<{ key: Filter; label: string }> = [
  { key: 'all', label: 'Все' },
  { key: 'cashback', label: 'Кэшбэк' },
  { key: 'live', label: 'Live-казино' },
  { key: 'fast', label: 'Вывод до 15 минут' },
  { key: 'budget', label: 'Депозит от 500 ₽' },
];

export function TopCasinos() {
  const [mode, setMode] = useState<Mode>('rating');
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = CASINOS.filter((casino) => {
    if (filter === 'cashback')
      return casino.features.some((f) => f.toLowerCase().includes('кэшбэк'));
    if (filter === 'live') return casino.features.some((f) => f.toLowerCase().includes('live'));
    if (filter === 'fast') return casino.payoutMax <= 15;
    if (filter === 'budget') return casino.minDepositValue <= 500;
    return true;
  });

  const list = [...filtered].sort((a, b) =>
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

        <div className="filters" role="group" aria-label="Фильтр казино">
          {FILTERS.map((item) => (
            <button
              key={item.key}
              type="button"
              className="chip-btn"
              aria-pressed={filter === item.key}
              onClick={() => setFilter(item.key)}
            >
              {item.label}
            </button>
          ))}
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

        {list.length === 0 ? (
          <p className="empty">Под эти условия пока никто не подходит — попробуйте другой фильтр.</p>
        ) : null}
      </div>
    </section>
  );
}
