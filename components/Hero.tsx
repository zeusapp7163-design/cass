import { ArrowIcon } from '@/components/icons';

const TRUST = ['Лицензии проверены', 'Выплаты от 5 минут', 'Бонусы до 500%'];

export function Hero() {
  return (
    <section className="hero" aria-label="Рейтинг онлайн-казино">
      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap">
        <span className="kicker rise">Рейтинг 2027</span>

        <h1 className="rise" style={{ animationDelay: '60ms' }}>
          Топ онлайн казино
          <br />
          <span className="year">2027</span>
        </h1>

        <p className="hero-sub rise" style={{ animationDelay: '120ms' }}>
          Четыре площадки, которые мы проверили сами: лицензия, быстрые выплаты и честные бонусы.
        </p>

        <div className="hero-actions rise" style={{ animationDelay: '180ms' }}>
          <a href="#top" className="btn btn-gold">
            Смотреть топ-4
            <ArrowIcon width={16} height={16} />
          </a>
          <a href="#how" className="btn btn-ghost">
            Как мы выбираем
          </a>
        </div>

        <ul className="hero-trust rise" style={{ animationDelay: '230ms' }}>
          {TRUST.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
