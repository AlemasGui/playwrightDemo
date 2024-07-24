1. npm init playwright@latest
2. npx playwright --help (npx é para executar local)
3. npx playwright codegen
4. npx playwright test --project=chromium --headed
5. npx playwright test --debug
6. npx playwright show-report



________________________________________________________________________________________________
vantagens:

Speed (Utiliiza CDP - Chrome DevTools Protocol) > Selenium WebDriver
Native Parallel Teste > Selenium precisa de implementação via SeleniumGrid
Auto Waiting > Selenium precisa implementar
Runner nativo > Selenium precisa de outro framework como Junit, TestNG
Report nativo (Videos, imagens, retries) > Selenium precisa ser implementado
Ferramenta visual com CodeGen
VSCode plugin
ARIA Locator 
________________________________________________________________________________________________

Tópicos:

VS Code plugin
Record Tests
Tratar testes + await page.pause()
Playwright Inspector
Locators
Expects (Assertions + Soft Assertions)
Hooks: test.befireEach(async({page}) => {})
Groups: test.describe('ALL My Tests', ()=>{})
Trace Viewer
Debug
Report com vídeo, slow Motion
Annotations test.skip()
Tags --grep "@smoke" (--grep-invert)
Page Objects
API Testing

 






