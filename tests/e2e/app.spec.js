const { test, expect } = require('@playwright/test');

test.describe('主页测试', () => {
  test('页面应该正确加载', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Git & GitHub/);
  });

  test('应该显示标题', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Git & GitHub');
  });

  test('应该有状态指示器', async ({ page }) => {
    await page.goto('/');
    const status = page.locator('.status');
    await expect(status).toBeVisible();
    await expect(status).toContainText('项目运行正常');
  });

  test('应该有功能列表', async ({ page }) => {
    await page.goto('/');
    const featureList = page.locator('.feature-list');
    await expect(featureList).toBeVisible();
    const features = featureList.locator('.feature-item');
    await expect(features).toHaveCount(4);
  });

  test('计数器功能应该正常工作', async ({ page }) => {
    await page.goto('/');
    const counter = page.locator('#counter');
    const button = page.getByRole('button', { name: '点击计数' });
    
    await expect(counter).toHaveText('0');
    await button.click();
    await expect(counter).toHaveText('1');
    await button.click();
    await expect(counter).toHaveText('2');
    await button.click();
    await expect(counter).toHaveText('3');
  });

  test('页面应该有正确的样式', async ({ page }) => {
    await page.goto('/');
    const container = page.locator('.container');
    await expect(container).toBeVisible();
    await expect(container).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  });
});
