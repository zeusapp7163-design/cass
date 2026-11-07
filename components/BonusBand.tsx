import Image from 'next/image';
import { CASINOS } from '@/lib/casinos';
import { PromoCode } from '@/components/PromoCode';
import { SITE } from '@/lib/site';

const STEPS = [
  { title: 'Скопируйте промокод', text: 'Нажмите на код выше — он сохранится в буфер обмена.' },
  { title: 'Зарегистрируйтесь', text: 'Выберите казино из топа и создайте аккаунт за минуту.' },
  { title: 'Активируйте бонус', text: 'Введите код в поле «Промокод» при первом депозите.' },
];

export function BonusBand() {
  return (
    <section id="bonuses" className="section" aria-labelledby="bonus-title">
      <div className="wrap">
        <div className="promo-band">
          <div>
            <span className="kicker">Промокод</span>
            <h2 id="bonus-title">
              Бонус новичкам
              <br />+ дополнительный процент
            </h2>
            <p>
              Единый промокод для всех площадок из рейтинга. Даёт надбавку к приветственному
              пакету — до 500% на первые депозиты и до 800 фриспинов.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <PromoCode code="ADBLOCK" />
              <span className="text-[12px] text-[#7f889f]">
                Проверен {SITE.updatedLabel.toLowerCase()}
              </span>
            </div>

            <div className="promo-logos" aria-label="Казино, где действует промокод">
              {CASINOS.map((casino) => (
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
          </div>

          <div className="promo-steps">
            {STEPS.map((step, index) => (
              <div key={step.title} className="promo-step">
                <b>{index + 1}</b>
                <div>
                  <span className="block font-semibold text-white">{step.title}</span>
                  <span className="block text-[11.5px] text-[#8b94ab] mt-0.5">{step.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
