import BasePage from '../basePage'

const selectors = {
	confirmation_label: '[id="checkout_complete_container"] h2'
}

class ConfirmationPage extends BasePage {
	verifyConfirmationMessage(text) {
		cy.get(selectors.confirmation_label).should('have.text', text)
	}
}
export default ConfirmationPage
