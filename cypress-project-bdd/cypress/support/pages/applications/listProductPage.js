import BasePage from '../basePage'

const selectors = {
	bag_pack_add_cart: '[data-test="add-to-cart-sauce-labs-backpack"]',
	cart_button: '[id="shopping_cart_container"] a'
}

class ListProductPage extends BasePage {
	addBackpackToCart() {
		this.clickWait(selectors.bag_pack_add_cart)
	}
	accessCartPage() {
		this.clickWait(selectors.cart_button)
	}
	validateListPageLoad() {
		cy.get(selectors.bag_pack_add_cart).should('be.visible')
	}
	validateItemVariation() {
		cy.get(selectors.cart_button).should('have.text', '1')
	}
}
export default ListProductPage
