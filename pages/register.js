exports.RegisterPage = class RegisterPage{
    constructor(page){
        this.page = page
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
        this.mes_box = page.getByPlaceholder('Month')
        this.dia_box = page.locator('#daybox')
        this.primeiro_pass = page.locator('#firstpassword')
        this.segundo_pass = page.locator('#secondpassword')
        this.submit_btn = page.getByRole('button', { name: 'Submit' })

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
        //await page.getByRole('treeitem', { name: 'Netherlands' }).click();

    

        await this.ano_box.selectOption(ano);
        await this.mes_box.selectOption(mes);
        await this.dia_box.selectOption(dia);
        await this.primeiro_pass.fill('123');
        await this.segundo_pass.fill('123');
        await this.submit_btn.click();
    }
}