exports.RegisterPage = class RegisterPage{
    constructor(page){
        this.page = page
        this.menu_switchto = page.getByRole('link', { name: 'SwitchTo' })
        this.menu_iteractions = page.getByRole('link', { name: 'Interactions' })
        this.submenu_frame = page.getByRole('link', { name: 'Frames' })
        this.submenu_singleframe = page.getByRole('link', { name: 'Single Iframe' })
        this.submenu_dragdrop = page.getByText('Drag and Drop')
        this.submenu_static = page.getByRole('link', { name: 'Static' })
        this.username_textbox = page.getByLabel('Username')
        this.first_name = page.getByPlaceholder('First Name')
        this.last_name = page.getByPlaceholder('Last Name')
        this.endereco_textarea = page.locator('textarea')
        this.email_input = page.locator('input[type="email"]')
        this.celuar_input = page.locator('input[type="tel"]')
        this.masc = page.getByLabel('Male', { exact: true })
        this.fem = page.getByLabel('FeMale')
        this.cricket_checkbox = page.locator('#checkbox1')
        this.movies_checkbox = page.locator('#checkbox2')
        this.hockey_checkbox = page.locator('#checkbox3')
        this.languages_empty = page.locator('#msdd')
        this.lan_english = page.getByText('English')
        this.lan_portuguese = page.getByText('Portuguese')
        this.skills_option = page.locator('#Skills')
        this.country_combobox = page.getByLabel('', { exact: true })
        this.country_tree = page.locator('input[type="search"]')
        this.ano_box = page.locator('#yearbox')
        this.mes_box = page.locator('//*[@ng-model="monthbox"]')
        this.dia_box = page.locator('#daybox')
        this.primeiro_pass = page.locator('#firstpassword')
        this.segundo_pass = page.locator('#secondpassword')
        this.submit_btn = page.getByRole('button', { name: 'Submit' })
        this.element_dragable = page.locator('#angular')
        this.element_dropable = page.locator('#droparea')
        this.text_insideframe = page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox')
        this.text_ininsideframe = page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox')
        this.iframeinframe_btn = page.getByRole('link', { name: 'Iframe with in an Iframe' })
    }
    async gotoRegisterPage(){
        await this.page.goto('https://demo.automationtesting.in/Register.html');
    }
    async preencherCadastro(nome,sobrenome,endereco,email,celular,sexo,cricket,movies,hockey,skills,country,ano,mes,dia){
        await this.first_name.fill(nome);
        await this.last_name.fill(sobrenome);
        await this.endereco_textarea.fill(endereco);    
        await this.email_input.fill(email);    
        await this.celuar_input.fill(celular);
        if (sexo == "masculino") {
            await this.masc.check();
        }else{
            await this.fem.check();
        }
        await this.languages_empty.click();
        await this.lan_english.click();
        await this.lan_portuguese.click();
        if (cricket) await this.cricket_checkbox.click();
        if (movies) await this.movies_checkbox.click();
        if (hockey) await this.hockey_checkbox.click();
        await this.skills_option.selectOption(skills);  
        await this.country_combobox.click();   
        await this.country_tree.fill(country);
        await this.page.getByRole('treeitem', { name: country }).click();      
        await this.ano_box.selectOption(ano);
        await this.mes_box.selectOption(mes);
        await this.dia_box.selectOption(dia);
        await this.primeiro_pass.fill('123');
        await this.segundo_pass.fill('123');
        await this.submit_btn.click();
    }
    async navegarDragDrop(){
        await this.menu_iteractions.click();
        await this.submenu_dragdrop.click();
        await this.submenu_static.click();
    }
    async navegarFrame(){
        await this.menu_switchto.click();
        await this.submenu_frame.click();
        await this.submenu_singleframe.click();
    }

    async realizarDragDrop(){
        await this.element_dragable.dragTo(this.element_dropable);
        await this.element_dragable.dragTo(this.element_dropable);
    }

    async preencherTextosFrames(){
        await this.text_insideframe.fill('testes');
        await this.iframeinframe_btn.click();
        await this.text_ininsideframe.fill('testes');
    }
}