import BasePage from '../basePage'

const selectors = {
	user_input: '[id="user-name"]',
	password_input: '[id="password"]',
	login_button: '[id="login-button"]',
	error_message: '[data-test="error"]'
}

class HomePage extends BasePage {
	loginAcess(user, password) {
		cy.get(selectors.user_input).type(user)
		cy.get(selectors.password_input).type(password)
		this.clickWait(selectors.login_button)
	}

	verifyWrongLoginMessage() {
		cy.get(selectors.error_message).should('be.visible')
	}
}
export default HomePage
