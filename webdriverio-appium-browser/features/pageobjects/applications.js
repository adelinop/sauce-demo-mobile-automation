const HomePage = require('../pageobjects/homePage')
const ListPage = require('../pageobjects/listPage')
const CheckoutPage = require('../pageobjects/checkoutPage')
const ConfirmationPage = require('../pageobjects/confirmationPage')
class Applications {
	constructor() {
		this.homePage = new HomePage()
		this.listPage = new ListPage()
		this.checkoutPage = new CheckoutPage()
		this.confirmationPage = new ConfirmationPage()
	}
}
module.exports = Applications
