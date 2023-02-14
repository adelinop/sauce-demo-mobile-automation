const BasePage = require('./basePage')

const selectors = {
	user_name: '[id="user-name"]',
	user_password: '[id="password"]',
	btn_login: '[id="login-button"]',
	error_message: '[data-test="error"]'
}
class HomePage extends BasePage {
	async acessLogin(user, password) {
		await this.sendKeys(selectors.user_name, user)
		await this.sendKeys(selectors.user_password, password)
		await this.clickElement(selectors.btn_login)
	}

	async verifyWrongLoginMessage() {
		await $(selectors.error_message).waitForDisplayed(10000, false)
		await $(selectors.error_message).isExisting()
	}
}
module.exports = HomePage
