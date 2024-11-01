const {test, expect} = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.iherb.com/');
});

test.describe('search', () => {

    test('products', async ({ page }) => {
        await page.getByRole('https://www.iherb.com/c/healthy-home').click();
    });

});