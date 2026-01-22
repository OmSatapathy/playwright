class Loginpage{

     constructor(page){
            this.page= page
            this.username= "//input[@type='email']"
            this.password= "//input[@type='password']"
            this.loginBTN = "//button[@type='submit']"
     }

     async loginToApp(){
          await this.page.fill(this.username,"abc@gmail.com")
          await this.page.fill(this.password,"pqrs123")
          await this.page.click(this.loginBTN)
     }
}

module.exports=Loginpage;