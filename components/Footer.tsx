import Image from 'next/image';
import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <span className="brand">
              <Image src="/images/brand/logo.webp" alt="" width={30} height={30} />
              <span>CasinoTop</span>
            </span>
            <p className="footer-note mt-4">
              Рейтинг онлайн-казино 2027: ручная проверка лицензий, выплат и бонусов. Мы не
              принимаем ставки и не храним средства игроков — все переходы ведут на официальные
              сайты казино. Материалы предназначены для лиц старше 18 лет.
            </p>
          </div>

          <div className="footer-links" aria-label="Разделы">
            <a href="#top">Топ казино</a>
            <a href="#bonuses">Бонусы</a>
            <a href="#slots">Слоты</a>
            <a href="#how">Методика</a>
            <a href="#faq">FAQ</a>
            <a href={`mailto:${SITE.email}`}>Связаться</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE.domain}. Все права защищены.
          </span>
          <span>Играйте ответственно. 18+</span>
        </div>
      </div>
    </footer>
  );
}
