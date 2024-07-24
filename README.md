# Acesso rápido - Comandos úteis:

1. **Iniciar o Projeto**
```Javascript
npm init playwright@latest
```
2. **Iniciar o codegen - Ferramenta para Gravar**
```Javascript
npx playwright codegen
```
3. **Execução de testes**
    - headed é para executar e visualizar o browser (inverso de headless)
    - project=chromium (Executa apenas para esta Engine)
```Javascript
npx playwright test --project=chromium --headed
npx playwright test --debug
```
4. **Visualiza o report**
```Javascript
npx playwright show-report
```
_____________________________________________________________________________________
# Vantagens Playwright:

- Utiliiza CDP - Chrome DevTools Protocol de forma otimizada, sendo bem rápido
- Testes Paralelos Nativos
- Auto Waiting - Cada ação já faz diversas "esperas" e "validações"
- Runner nativo
- Report nativo (Videos, imagens, retries)
- Ferramenta visual com CodeGen
- VSCode plugin
________________________________________________________________________________________________

Tópicos para estruturar um futuro treinamento:

- VS Code plugin: Instalar e demonstrar a utilização
- Record Tests: Gravar um teste
- Mostrar maneiras de Depurar e ajustar teste:
```Javascript
await page.pause()
await page.close
```
- Playwright Inspector & Locators
- Assertions: 
```Javascript
expect
expect.soft
```
- Hooks:
```Javascript
test.beforeAll(async({page}) => {})
test.beforeEach(async({page}) => {})
test.afterEach(async({page}) => {})
test.afterAll(async({page}) => {})
```
- Groups
```Javascript
test.describe('ALL My Tests', ()=>{})
```
- Trace Viewer
- Report com vídeo e execução lenta (slow Motion)
- Annotations 
```Javascript
test.skip()
```
- Tags --grep "@smoke" (--grep-invert)
- Page Objects
- API Testing