import Image from 'next/image';
import { SLOTS } from '@/lib/casinos';

export function Slots() {
  return (
    <section id="slots" className="section" aria-labelledby="slots-title">
      <div className="wrap">
        <div className="head">
          <h2 id="slots-title">Популярные слоты</h2>
          <p>Автоматы с высоким RTP — есть во всех четырёх казино из рейтинга.</p>
        </div>

        <div className="slots">
          {SLOTS.map((slot) => (
            <a key={slot.name} href="#top" className="slot" aria-label={`Играть в ${slot.name}`}>
              <Image
                src={slot.image}
                alt={`Слот ${slot.name} от ${slot.provider}`}
                width={360}
                height={472}
                sizes="(min-width: 1024px) 180px, (min-width: 640px) 30vw, 45vw"
                loading="lazy"
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
