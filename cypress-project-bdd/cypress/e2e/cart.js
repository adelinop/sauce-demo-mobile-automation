import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class Login {}

Then('the cart icon displays the number of items', () => {
	applications.listProductPage.validateItemVariation()
})
