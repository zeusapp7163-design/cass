const path = require('path');
const { chromium } = require('C:\\Users\\mad71\\Desktop\\demo.online\\node_modules\\playwright');

const BASE = process.env.SHOT_URL || 'http://127.0.0.1:3100';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'ru-RU' });
  const page = await ctx.newPage();

  const bad = [];
  page.on('response', (r) => {
    if (r.status() >= 400) bad.push(`${r.status()} ${r.url()}`);
  });

  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // broken images
  const broken = await page.$$eval('img', (imgs) =>
    imgs.filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute('src')),
  );

  // copy button
  const btn = page.locator('button.promo-btn').first();
  const before = (await btn.innerText()).trim();
  await btn.click();
  await page.waitForTimeout(350);
  const after = (await btn.innerText()).trim();

  // sticky header + anchor scroll
  await page.click('a[href="#faq"]');
  await page.waitForTimeout(900);
  const faqTop = await page.$eval('#faq', (el) => Math.round(el.getBoundingClientRect().top));

  const stats = {
    badResponses: bad,
    brokenImages: broken,
    copyBefore: before,
    copyAfter: after,
    faqTopAfterScroll: faqTop,
    h1Count: await page.locator('h1').count(),
    links: await page.locator('a[rel*="sponsored"]').count(),
    docHeight: await page.evaluate(() => document.body.scrollHeight),
  };

  console.log(JSON.stringify(stats, null, 2));
  await browser.close();
})().catch((e) => {
  console.error('CHECK FAILED', e);
  process.exit(1);
});
