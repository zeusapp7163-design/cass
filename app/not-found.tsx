import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowIcon } from '@/components/icons';

export const metadata = {
  title: 'Страница не найдена',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: '96px 0 60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em' }}>
          404
        </h1>
        <p style={{ margin: '14px auto 0', maxWidth: 460, color: '#8d96a8', lineHeight: 1.6 }}>
          Такой страницы нет — мы обновили сайт. Рейтинг казино 2026 и все бонусы теперь на главной.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">
            На главную
            <ArrowIcon width={15} height={15} />
          </Link>
          <a href="/#top" className="btn btn-ghost">
            Топ-4 казино
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
