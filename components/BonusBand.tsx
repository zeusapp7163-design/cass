import Image from 'next/image';
import { CASINOS, CASINOS_WITH_PROMO, PROMO_CODE } from '@/lib/casinos';
import { PromoCode } from '@/components/PromoCode';
import { SITE } from '@/lib/site';

const STEPS = [
  { title: 'Скопируйте код', text: 'Кнопка копирует промокод в буфер обмена.' },
  { title: 'Зарегистрируйтесь', text: 'В 1win или JetTon — аккаунт создаётся за минуту.' },
  { title: 'Введите при депозите', text: 'Код добавляет процент к приветственному пакету.' },
];

export function BonusBand() {
  return (
    <section id="bonuses" className="section" aria-labelledby="bonus-title">
      <div className="wrap">
        <div className="promo-band">
          <div>
            <span className="kicker">Промокод</span>
            <h2 id="bonus-title">
              {PROMO_CODE} — бонус
              <br />в 1win и JetTon
            </h2>
            <p>
              Единый промокод для двух площадок из рейтинга: добавляет процент к первому депозиту.
              В Getx и MoriWin промокодов нет — там бонус начисляется автоматически.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PromoCode code={PROMO_CODE} />
              <span className="text-[11.5px] text-[#7c859c]">
                Проверен {SITE.updatedLabel.toLowerCase()}
              </span>
            </div>

            <div className="promo-casinos" aria-label="Где действует промокод">
              {CASINOS_WITH_PROMO.map((casino) => (
                <div key={casino.id} className="promo-casino">
                  <Image
                    src={casino.logo}
                    alt={casino.name}
                    width={casino.logoWidth}
                    height={casino.logoHeight}
                    sizes="92px"
                  />
                  <span>работает</span>
                </div>
              ))}
            </div>

            <p className="promo-note">
              Без промокода: Getx — до 350% и 250 фриспинов, MoriWin — до 370% и 800 фриспинов.
            </p>
          </div>

          <div className="promo-steps">
            {STEPS.map((step, index) => (
              <div key={step.title} className="promo-step">
                <b>{index + 1}</b>
                <div>
                  <span className="block font-semibold text-white">{step.title}</span>
                  <span className="block text-[11px] text-[#8d96ad] mt-0.5">{step.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
