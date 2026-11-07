import { ArrowIcon } from '@/components/icons';

const STATS = [
  { value: '4', label: 'казино в рейтинге' },
  { value: '12 000+', label: 'игр и слотов' },
  { value: '5 мин', label: 'минимальный вывод' },
];

export function Hero() {
  return (
    <section className="hero" aria-label="Рейтинг онлайн-казино">
      <div className="wrap">
        <span className="kicker rise">Рейтинг 2027</span>

        <h1 className="rise" style={{ animationDelay: '60ms' }}>
          Топ онлайн казино
          <br />
          <span className="year">2027</span>
        </h1>

        <p className="hero-sub rise" style={{ animationDelay: '110ms' }}>
          Четыре площадки, которые мы проверили сами: лицензия, быстрые выплаты и честные бонусы.
        </p>

        <div className="hero-actions rise" style={{ animationDelay: '160ms' }}>
          <a href="#top" className="btn btn-primary">
            Смотреть топ-4
            <ArrowIcon width={16} height={16} />
          </a>
          <a href="#how" className="btn btn-ghost">
            Как мы выбираем
          </a>
        </div>

        <div className="hero-stats rise" style={{ animationDelay: '210ms' }}>
          {STATS.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
