import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register';
test('Register Teste', async ({page}) =>{
  const Register = new RegisterPage(page)
  await Register.gotoRegisterPage()
  await Register.preencherCadastro("Guilherme", "Cutovoi", "Av. Paulista, 700", "test@test.test", "11980807070", "masculino", true,true,true, "Javascript", 'Netherlands', "1986", "Março", "27")
});
test('FrameTest', async ({ page }) => {
  await page.getByRole('link', { name: 'SwitchTo' }).click();
  await page.getByRole('link', { name: 'Frames' }).click();
  await page.getByRole('link', { name: 'Single Iframe' }).click();
  await page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox').click();
  await page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox').fill('testes');
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  await page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox').click();
  await page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox').fill('testes');
});
test('DragAndDrop', async ({ page }) => {
  await page.getByRole('link', { name: 'SwitchTo' }).click();
  await page.getByRole('link', { name: 'Frames' }).click();
  await page.getByRole('link', { name: 'Single Iframe' }).click();
  await page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox').click();
  await page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox').fill('testes');
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  await page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox').click();
  await page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox').fill('testes');
  await page.getByRole('link', { name: 'Interactions' }).click();
  await page.getByText('Drag and Drop').click();
  await page.getByRole('link', { name: 'Static' }).click();
  await page.locator('#node').click();
  await page.locator('#node').click();
  await page.locator('#node').click();
  await page.locator('#node').click();
  await page.locator('#angular').click();
  await page.locator('#angular').click();
  await page.locator('#angular').click({
    button: 'right'
  });
  await page.locator('#angular').click();
  await page.locator('#angular').click();
  await page.locator('#angular').click();
  await page.locator('#droparea').click();
});