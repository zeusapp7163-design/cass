import Link from 'next/link';
import Image from 'next/image';
import { NAV } from '@/lib/site';
import { ArrowIcon } from '@/components/icons';

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="CasinoTop — на главную">
          <Image src="/images/brand/logo.webp" alt="" width={34} height={34} priority />
          <span>CasinoTop</span>
        </Link>

        <nav className="nav" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <span className="age">18+</span>
          <a href="#top" className="btn btn-primary btn-sm">
            Топ-4
            <ArrowIcon width={14} height={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
