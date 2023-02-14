class BasePage {
	/**
	 *Override click adding wait option
	 * @param {String} element
	 * @param {Integer} time
	 */
	clickWait(element, time) {
		if (time) {
			cy.get(element, { timeout: time }).should('be.visible').click()
		} else {
			cy.fixture('env').then(data => {
				cy.get(element, { timeout: data.TIME_WAIT }).should('be.visible').click()
			})
		}
	}
}
export default BasePage
