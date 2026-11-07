const path = require('path');
const fs = require('fs');
const { chromium } = require('C:\\Users\\mad71\\Desktop\\demo.online\\node_modules\\playwright');

const BASE = process.env.SHOT_URL || 'http://127.0.0.1:3100';
const OUT = path.join(__dirname, '..', 'tmp', 'shots');
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const errors = [];

  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    locale: 'ru-RU',
  });
  const page = await desktop.newPage();
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(String(err)));

  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(OUT, 'desktop-fold.png') });
  // scroll through so lazy images load before the full-page capture
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 500));
  });
  await page.screenshot({ path: path.join(OUT, 'desktop-full.png'), fullPage: true });

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    locale: 'ru-RU',
  });
  const mpage = await mobile.newPage();
  await mpage.goto(BASE, { waitUntil: 'networkidle', timeout: 60000 });
  await mpage.waitForTimeout(1200);
  await mpage.screenshot({ path: path.join(OUT, 'mobile-fold.png') });
  await mpage.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 500));
  });
  await mpage.screenshot({ path: path.join(OUT, 'mobile-full.png'), fullPage: true });

  const tablet = await browser.newContext({
    viewport: { width: 820, height: 1100 },
    deviceScaleFactor: 1,
    locale: 'ru-RU',
  });
  const tpage = await tablet.newPage();
  await tpage.goto(BASE, { waitUntil: 'networkidle', timeout: 60000 });
  await tpage.waitForTimeout(900);
  await tpage.locator('#top').scrollIntoViewIfNeeded();
  await tpage.waitForTimeout(500);
  await tpage.screenshot({ path: path.join(OUT, 'tablet-top.png') });

  console.log('console errors:', JSON.stringify(errors, null, 2));
  await browser.close();
})().catch((err) => {
  console.error('SHOT FAILED', err);
  process.exit(1);
});
