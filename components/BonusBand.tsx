import Image from 'next/image';
import { CASINOS_WITH_PROMO, PROMO_CODE } from '@/lib/casinos';
import { PromoCode } from '@/components/PromoCode';

export function BonusBand() {
  return (
    <section id="bonuses" className="section" aria-labelledby="bonus-title">
      <div className="wrap">
        <div className="promo-card">
          <h2 id="bonus-title">Промокод ADBLOCK</h2>
          <p>
            Добавляет процент к приветственному бонусу. Работает только в 1win и JetTon — в Getx и
            MoriWin бонус начисляется автоматически.
          </p>

          <div className="promo-line">
            <span>Промокод</span>
            <PromoCode code={PROMO_CODE} />
          </div>

          <div className="promo-logos" aria-label="Где действует промокод">
            {CASINOS_WITH_PROMO.map((casino) => (
              <Image
                key={casino.id}
                src={casino.logo}
                alt={casino.name}
                width={casino.logoWidth}
                height={casino.logoHeight}
                sizes="120px"
              />
            ))}
          </div>

          <p className="promo-note">
            Без промокода: Getx — до 350% и 250 фриспинов, MoriWin — до 370% и 800 фриспинов.
          </p>
        </div>
      </div>
    </section>
  );
}
