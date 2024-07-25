exports.FramePage = class FramePage{
    constructor(page){
        this.page = page
        this.text_insideframe = page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox')
        this.text_ininsideframe = page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox')
        this.iframeinframe_btn = page.getByRole('link', { name: 'Iframe with in an Iframe' })
    }
    async preencherTextosFrames(){
        await this.text_insideframe.fill('testes');
        await this.iframeinframe_btn.click();
        await this.text_ininsideframe.fill('testes');
    }
}