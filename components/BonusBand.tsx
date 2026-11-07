import { PROMO_CODE } from '@/lib/casinos';
import { PromoCode } from '@/components/PromoCode';

export function BonusBand() {
  return (
    <section id="bonuses" className="section" aria-labelledby="bonus-title">
      <div className="narrow">
        <div className="promo">
          <h2 id="bonus-title">Промокод ADBLOCK</h2>
          <p>
            Добавляет процент к приветственному бонусу. Работает только в 1win и JetTon — в Getx и
            MoriWin бонус начисляется автоматически.
          </p>
          <div className="promo-line">
            <span>Промокод</span>
            <PromoCode code={PROMO_CODE} />
          </div>
        </div>
      </div>
    </section>
  );
}
