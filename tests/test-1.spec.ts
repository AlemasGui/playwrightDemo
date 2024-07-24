import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register';

test.skip('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByPlaceholder('E mail').fill('gui');
  await page.getByPlaceholder('Password').fill('res');
  await page.getByRole('link', { name: 'Logo missing' }).click();
  await expect(page.getByText('Invalid User Name or PassWord')).toBeVisible();
  await expect(page.locator('#errormsg')).toContainText('Invalid User Name or PassWord');
  await page.close;
});

test('Register Teste', async ({page}) =>{
  const Register = new RegisterPage(page)
  await Register.gotoRegisterPage()

});