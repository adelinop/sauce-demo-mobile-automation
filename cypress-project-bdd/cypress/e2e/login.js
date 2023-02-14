import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class Login {}

Then('I can access the system', () => {
	applications.listProductPage.validateListPageLoad()
})
Then('I can see the error message', () => {
	applications.homePage.verifyWrongLoginMessage()
})
