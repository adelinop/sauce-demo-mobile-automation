const BasePage = require('./basePage')

const selectors = {
	confirmation_label: '[class="complete-header"]'
}

class ConfirmationPage extends BasePage {
	async confirmationPurchase(message) {
		await $(selectors.confirmation_label).isExisting()
		await expect($(selectors.confirmation_label)).toHaveTextContaining(message)
	}
}
module.exports = ConfirmationPage
