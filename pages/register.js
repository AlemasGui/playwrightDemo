exports.RegisterPage = class RegisterPage{
    constructor(page){
        this.page = page
        this.username_textbox = page.getByLabel('Username')
    }
    async gotoRegisterPage(){
        await this.page.goto('https://demo.automationtesting.in/Register.html');
    }
    async enterUsername(){

    }
}