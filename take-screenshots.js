const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // Full page screenshot
  await page.goto('https://joshiorojas-website.vercel.app');
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: 'screenshots/fullpage-desktop.png',
    fullPage: true
  });

  // Hero section
  await page.screenshot({
    path: 'screenshots/hero-section.png',
    clip: { x: 0, y: 0, width: 1920, height: 900 }
  });

  // Scroll to about section and screenshot
  await page.locator('#about').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({
    path: 'screenshots/about-section.png',
    clip: { x: 0, y: 0, width: 1920, height: 900 }
  });

  // Scroll to contact section and screenshot
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({
    path: 'screenshots/contact-section.png',
    clip: { x: 0, y: 0, width: 1920, height: 1000 }
  });

  // Mobile view
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('https://joshiorojas-website.vercel.app');
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: 'screenshots/fullpage-mobile.png',
    fullPage: true
  });

  await browser.close();
  console.log('Screenshots saved to screenshots/ directory');
})();
