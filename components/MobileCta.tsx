import { ArrowIcon } from '@/components/icons';

export function MobileCta() {
  return (
    <div className="mobile-cta">
      <div>
        <b>Топ-4 казино 2027</b>
        <span>Бонусы до 500% · выплаты от 5 минут</span>
      </div>
      <a href="#top" className="btn btn-primary btn-sm" style={{ marginLeft: 'auto' }}>
        Открыть
        <ArrowIcon width={13} height={13} />
      </a>
    </div>
  );
}
