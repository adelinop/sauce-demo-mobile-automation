const BasePage = require('./basePage')

   const selectors = {
      user_name: '[id="user-name"]',
      user_password: '[id="password"]',
      btn_login: '[id="login-button"]',
      error_message: '[data-test="error"]'
   }
 class HomePage extends BasePage{


   async acessLogin(){ 
      await this.sendKeys(selectors.user_name, 'standard_user')
      await this.sendKeys(selectors.user_password, 'secret_sauce')
      await this.clickElement(selectors.btn_login)
   }

}
module.exports = HomePage;