const { chromium } = require('C:\\Users\\mad71\\Desktop\\demo.online\\node_modules\\playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'ru-RU' })).newPage();
  await page.goto('http://127.0.0.1:3100', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  const info = await page.evaluate(() => {
    const r = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const b = el.getBoundingClientRect();
      return { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height) };
    };

    // horizontal overflow
    const overflowX = document.documentElement.scrollWidth - document.documentElement.clientWidth;

    // logos rendered heights
    const logos = [...document.querySelectorAll('.casino-logo img')].map((img) => ({
      src: img.getAttribute('src'),
      displayH: Math.round(img.getBoundingClientRect().height),
      displayW: Math.round(img.getBoundingClientRect().width),
      naturalW: img.naturalWidth,
    }));

    // card alignment: bonus/action vertical centers vs top vertical center
    const cards = [...document.querySelectorAll('.casino-card')].map((card) => {
      const top = card.querySelector('.casino-top').getBoundingClientRect();
      const bonus = card.querySelector('.casino-bonus').getBoundingClientRect();
      const action = card.querySelector('.casino-action').getBoundingClientRect();
      return {
        topCenterY: Math.round(top.y + top.height / 2),
        bonusCenterY: Math.round(bonus.y + bonus.height / 2),
        actionCenterY: Math.round(action.y + action.height / 2),
      };
    });

    return {
      overflowX,
      docW: document.documentElement.clientWidth,
      scrollW: document.documentElement.scrollWidth,
      hasStrip: !!document.querySelector('.strip'),
      hasTable: !!document.querySelector('.compare'),
      h1: document.querySelector('h1').textContent.trim().replace(/\s+/g, ' '),
      hero: r('.hero'),
      firstCard: r('.casino-card'),
      faq: r('.faq'),
      seo: r('.seo'),
      logos,
      cards,
      promoCount: document.querySelectorAll('.casino-card').length,
      duplicatedLogoContainers: document.querySelectorAll('img[src*="/images/casinos/"]').length,
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})().catch((e) => { console.error('FAIL', e); process.exit(1); });
