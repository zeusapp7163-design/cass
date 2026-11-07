import Image from 'next/image';
import { SLOTS } from '@/lib/casinos';

export function Slots() {
  return (
    <section id="slots" className="section" aria-labelledby="slots-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Игры</span>
            <h2 id="slots-title" className="section-title">
              Популярные слоты 2026
            </h2>
            <p className="section-sub">
              Топовые автоматы с высоким RTP — они есть во всех четырёх казино из рейтинга.
            </p>
          </div>
          <a href="#top" className="btn btn-primary btn-sm">
            Играть в казино
          </a>
        </div>

        <div className="slots-grid">
          {SLOTS.map((slot, index) => (
            <a
              key={slot.name}
              href="#top"
              className="slot"
              aria-label={`Играть в ${slot.name} на деньги`}
            >
              <Image
                src={slot.image}
                alt={`Слот ${slot.name} от ${slot.provider}`}
                width={360}
                height={472}
                sizes="(min-width: 1024px) 180px, (min-width: 640px) 30vw, 45vw"
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              <span className="slot-caption">
                <span>{slot.provider}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
