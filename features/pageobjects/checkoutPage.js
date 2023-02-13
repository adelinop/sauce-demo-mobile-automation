const BasePage = require('./basePage')

 const selectors={ 	
    btn_checkout :  '[id="checkout"]',
    name_input :  '[id="first-name"]',
    last_name_input :  '[id="last-name"]',
    zip_code_input :  '[id="postal-code"]',
    btn_continue :  '[data-test="continue"]',
    btn_finish : '[data-test="finish"]'
}

class CheckoutPage extends BasePage{
   
    async proceedPurchase(){
        await this.clickElement(selectors.btn_checkout)
        await this.sendKeys(selectors.name_input, 'Adelino')
        await this.sendKeys(selectors.last_name_input, 'Test')
        await this.sendKeys(selectors.zip_code_input ,'4050400')
    }
    async completeOrderProcess (){
        await this.clickElement(selectors.btn_continue)
        await this.clickElement(selectors.btn_finish)
    }
}
module.exports = CheckoutPage;