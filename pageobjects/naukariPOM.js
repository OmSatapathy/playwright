class NaukariPage {

    constructor(page) {
        this.page = page;
        this.loginLink = "//a[@title='Jobseeker Login']";
        this.emailField = "input[placeholder='Enter your active Email ID / Username']";  
        this.passwordField = "input[placeholder='Enter your password']";  
        this.loginBTN = "//button[@type='submit']";

        this.username="//div[@class='info__heading']"
    }

    async userLogin() {
        await this.page.locator(this.loginLink).click();
        await this.page.fill(this.emailField, "omops92@gmail.com"); 
        await this.page.fill(this.passwordField, "hpprobook4410"); 
        await this.page.locator(this.loginBTN).click();
    }

    
    async userDetails() {
    const fullname=    await this.page.locator(this.username).textContent()
     console.log(fullname)
    }
}
module.exports = NaukariPage;