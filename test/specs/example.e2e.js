const Applications = require('../pageobjects/Applications')
const applications = new Applications()

describe('Sample Test', () => {
    after(async()=>{
        await driver.closeApp()
    })
    before(()=>{
    })

    it('Login', async () => {    
        await browser.url('')
        await applications.homePage.acessLogin()
    })
    it('Add product',async ()=>{
        await applications.listPage.addProductCart()
    })
    it('Cart Validation ',async ()=>{
      await  applications.checkoutPage.proceedPurchase()
    })

})