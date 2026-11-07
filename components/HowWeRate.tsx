import { PAYMENTS } from '@/lib/casinos';

const CRITERIA = [
  { num: '01', title: 'Лицензия и репутация', text: 'Проверяем лицензию, историю бренда и жалобы игроков.' },
  { num: '02', title: 'Скорость выплат', text: 'Тестируем вывод: лимиты, верификация, реальные сроки.' },
  { num: '03', title: 'Бонусы и вейджер', text: 'Считаем реальную выгоду: размер, отыгрыш, сроки.' },
  { num: '04', title: 'Слоты и поддержка', text: 'Оцениваем каталог, интерфейс, мобильную версию и чат.' },
];

export function HowWeRate() {
  return (
    <section id="how" className="section" aria-labelledby="how-title">
      <div className="wrap">
        <div className="head">
          <h2 id="how-title">Как мы выбираем казино</h2>
          <p>Четыре критерия, по которым площадка попадает в топ — или вылетает из него.</p>
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

        <ul className="payments" aria-label="Платёжные методы">
          {PAYMENTS.map((pay) => (
            <li key={pay} className="pay">
              {pay}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
