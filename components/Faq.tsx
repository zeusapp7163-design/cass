import { FAQ } from '@/lib/casinos';

export function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="narrow">
        <div className="head">
          <h2 id="faq-title">Частые вопросы</h2>
        </div>

        <div className="faq">
          {FAQ.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                <span>{item.q}</span>
              </summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
