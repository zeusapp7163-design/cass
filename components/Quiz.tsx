'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CASINOS } from '@/lib/casinos';
import { ArrowIcon } from '@/components/icons';

type Goal = 'bonus' | 'speed' | 'spins';

const OPTIONS: Array<{ key: Goal; label: string; casino: string }> = [
  { key: 'bonus', label: 'Максимальный бонус', casino: '1win' },
  { key: 'speed', label: 'Быстрый вывод', casino: 'jetton' },
  { key: 'spins', label: 'Больше фриспинов', casino: 'moriwin' },
];

export function Quiz() {
  const [goal, setGoal] = useState<Goal | null>(null);
  const picked = OPTIONS.find((option) => option.key === goal);
  const casino = CASINOS.find((item) => item.id === picked?.casino);

  return (
    <section id="quiz" className="section" aria-labelledby="quiz-title">
      <div className="narrow">
        <div className="quiz">
          <h2 id="quiz-title">Подбор за 10 секунд</h2>
          <p>Выберите, что для вас важнее — покажем казино, которое лучше всего подходит.</p>

          <div className="quiz-options" role="group" aria-label="Что важно">
            {OPTIONS.map((option) => (
              <button
                key={option.key}
                type="button"
                className="chip-btn"
                aria-pressed={goal === option.key}
                onClick={() => setGoal(option.key)}
              >
                {option.label}
              </button>
            ))}
          </div>

          {casino ? (
            <div className="quiz-result">
              <Image
                src={casino.logo}
                alt={casino.name}
                width={casino.logoWidth}
                height={casino.logoHeight}
                sizes="150px"
              />
              <div>
                <b>{casino.name}</b>
                <span>
                  {casino.bonusValue} {casino.bonusExtra} · {casino.payout}
                </span>
              </div>
              <a
                href={casino.url}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Играть
                <ArrowIcon width={13} height={13} />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
