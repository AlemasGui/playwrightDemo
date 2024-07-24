import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register';

test.beforeEach(async({page})=>{
  const Register = new RegisterPage(page)
  await Register.gotoRegisterPage()
})
test('Register Teste', async ({page}) =>{
  const Register = new RegisterPage(page)
  await Register.preencherCadastro("Guilherme", "Cutovoi", "Av. Paulista, 700", "test@test.test", "11980807070", "masculino", true,true,true, "Javascript", 'Netherlands', "1986", "March", "27")
});
test('FrameTest', async ({ page }) => {
  const Register = new RegisterPage(page)
  await Register.navegarFrame()
  await Register.preencherTextosFrames()
});
test('DragAndDrop', async ({ page }) => {
  const Register = new RegisterPage(page)
  await Register.navegarDragDrop()
  await Register.realizarDragDrop()
});

test.afterEach(async({page}) => {
  await page.close;
})