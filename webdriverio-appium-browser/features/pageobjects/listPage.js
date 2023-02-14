const BasePage = require('./basePage')
const selectors = {
	bag_pack_add_cart: '[data-test="add-to-cart-sauce-labs-backpack"]',
	cart_button: '[id="shopping_cart_container"] a'
}
class ListPage extends BasePage {
	async addProductCart() {
		await this.clickElement(selectors.bag_pack_add_cart)
	}

	async validateItemVariation() {
		await $(selectors.cart_button).waitForDisplayed(10000, false)
		await expect($(selectors.cart_button)).toHaveTextContaining(1)
	}

	async accessCheckoutPage() {
		await this.validateItemVariation()
		await this.clickElement(selectors.cart_button)
	}

	async validateListPageLoad() {
		await $(selectors.bag_pack_add_cart).isExisting()
	}
}
module.exports = ListPage
