import Link from 'next/link';
import { NAV } from '@/lib/site';
import { ArrowIcon, SpadeIcon } from '@/components/icons';

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="CasinoTop — на главную">
          <span className="brand-mark">
            <SpadeIcon />
          </span>
          <span>
            Casino<b>Top</b>
          </span>
        </Link>

        <nav className="nav" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <span className="age-pill">18+</span>
          <a href="#top" className="btn btn-primary btn-sm">
            Топ-4
            <ArrowIcon width={15} height={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
