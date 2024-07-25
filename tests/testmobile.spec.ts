import { test, expect, devices } from '@playwright/test';
import { RegisterPage } from '../pages/register';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
    const Register = new RegisterPage(page)
    await Register.gotoRegisterPage()
    //await expect(page.getByRole('heading')).toContainText('Oops, looks like the page is lost.');
    await Register.preencherCadastro("Guilherme", "Cutovoi", "Av. Paulista, 700", "test@test.test", "11980807070", "masculino", true,true,true, "Javascript", 'Netherlands', "1986", "March", "27")
    await page.close();
});