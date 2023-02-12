  class BasePage{
    async clickElement(element){
         await $(element).click()
    }
    async sendKeys(element, text){
        await $(element).setValue(text)
    }

}

module.exports = BasePage;