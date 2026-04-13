const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to Connecteam - should already be logged in via cookies
  await page.goto('https://app.connecteam.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('Waiting for dashboard to load...');
  await page.waitForTimeout(10000);

  // Look for Forms in the sidebar or navigate directly
  console.log('Current URL:', page.url());

  // Try navigating to forms section
  await page.goto('https://app.connecteam.com/#/index/forms', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);
  console.log('Forms URL:', page.url());
  await page.screenshot({ path: '/tmp/connecteam-forms.png', fullPage: true });
  console.log('Forms screenshot saved');

  // Now try scheduler
  await page.goto('https://app.connecteam.com/#/index/scheduler', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);
  console.log('Scheduler URL:', page.url());
  await page.screenshot({ path: '/tmp/connecteam-scheduler.png', fullPage: true });
  console.log('Scheduler screenshot saved');

  // Now check settings/API
  await page.goto('https://app.connecteam.com/#/index/settings', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);
  console.log('Settings URL:', page.url());
  await page.screenshot({ path: '/tmp/connecteam-settings.png', fullPage: true });
  console.log('Settings screenshot saved');

  await browser.close();
})();
