import { PAYMENTS } from '@/lib/casinos';

const CRITERIA = [
  {
    num: '01',
    title: 'Лицензия и репутация',
    text: 'Проверяем действующую лицензию, историю бренда и жалобы игроков.',
  },
  {
    num: '02',
    title: 'Скорость выплат',
    text: 'Тестируем вывод средств: лимиты, верификация, реальные сроки.',
  },
  {
    num: '03',
    title: 'Бонусы и вейджер',
    text: 'Считаем реальную выгоду: размер бонуса, отыгрыш, сроки и лимиты.',
  },
  {
    num: '04',
    title: 'Слоты и поддержка',
    text: 'Оцениваем каталог игр, интерфейс, мобильную версию и скорость ответа.',
  },
];

export function HowWeRate() {
  return (
    <section id="how" className="section" aria-labelledby="how-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Методика</span>
            <h2 id="how-title" className="section-title">
              Как мы выбираем казино
            </h2>
            <p className="section-sub">
              Четыре критерия, по которым площадка попадает в топ — или вылетает из него.
            </p>
          </div>
        </div>

        <div className="steps">
          {CRITERIA.map((item) => (
            <div key={item.num} className="step">
              <span className="step-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#7f889f]">
            Пополнение и вывод
          </span>
          <ul className="payments" aria-label="Платёжные методы">
            {PAYMENTS.map((pay) => (
              <li key={pay} className="pay-chip">
                <i aria-hidden="true" />
                {pay}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
