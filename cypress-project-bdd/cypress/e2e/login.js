import { Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class Login {}

Then('I should be logged in to the system', () => {
	applications.listProductPage.validateListPageLoad()
})
Then('I should see an error message', () => {
	applications.homePage.verifyWrongLoginMessage()
})
