import BasePage from '../basePage'

const selectors = {
	btn_checkout: '[id="checkout"]',
	name_input: '[id="first-name"]',
	last_name_input: '[id="last-name"]',
	zip_code_input: '[id="postal-code"]',
	btn_continue: '[data-test="continue"]',
	btn_finish: '[data-test="finish"]'
}

class CartPage extends BasePage {
	accessCheckout() {
		this.clickWait(selectors.btn_checkout)
	}
	fillPersonaldata() {
		cy.fixture('env').then(data => {
			cy.get(selectors.name_input).type(data.first_name)
			cy.get(selectors.last_name_input).type(data.last_name)
			cy.get(selectors.zip_code_input).type(data.zip_code)
		})
		this.clickWait(selectors.btn_continue)
	}
	finishCartProcess() {
		this.clickWait(selectors.btn_finish)
	}
}
export default CartPage
