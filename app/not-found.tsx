import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CASINOS } from '@/lib/casinos';
import { ArrowIcon } from '@/components/icons';

export const metadata = {
  title: 'Страница не найдена',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: '72px 0 40px' }}>
        <span className="kicker">404</span>
        <h1 className="section-title">Страница не найдена</h1>
        <p className="section-sub" style={{ maxWidth: 520 }}>
          Похоже, адрес устарел — мы обновили сайт. Рейтинг казино 2026 и все бонусы теперь на
          главной странице.
        </p>

        <div className="hero-actions" style={{ marginTop: 26 }}>
          <Link href="/" className="btn btn-primary">
            На главную
            <ArrowIcon width={16} height={16} />
          </Link>
          <a href="/#top" className="btn btn-ghost">
            Топ-4 казино
          </a>
        </div>

        <ul className="payments" style={{ marginTop: 30 }}>
          {CASINOS.map((casino) => (
            <li key={casino.id} className="pay-chip">
              <i aria-hidden="true" />
              {casino.name}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
