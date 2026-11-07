import { FAQ } from '@/lib/casinos';

export function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Вопросы</span>
            <h2 id="faq-title" className="section-title">
              Частые вопросы
            </h2>
          </div>
        </div>

        <div className="faq-list">
          {FAQ.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                <h3 className="text-[14.5px] font-semibold text-[#e8ecf6] m-0">{item.q}</h3>
              </summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
