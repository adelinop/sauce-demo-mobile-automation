const HomePage = require('../pageobjects/homePage')
const ListPage = require('../pageobjects/listPage')
const CheckoutPage = require('../pageobjects/checkoutPage')

class Applications{
constructor() {
    this.homePage =  new HomePage()
    this.listPage = new ListPage()
    this.checkoutPage = new CheckoutPage()
  }
}
module.exports = Applications;