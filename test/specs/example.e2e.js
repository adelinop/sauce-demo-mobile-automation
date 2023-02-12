const Applications = require('../pageobjects/Applications')
const applications = new Applications()

describe('Sample Test', () => {
    after(()=>{
        driver.closeApp()
    })
    before(()=>{
    })
    it('Sample', async () => {    
        await browser.url('https://saucedemo.com')
        await applications.homePage.acessLogin()
        await applications.listPage.addProductCart()
    })

    it('Cart Validation ',async ()=>{
        applications.checkoutPage.proceedPurchase()
    })

})