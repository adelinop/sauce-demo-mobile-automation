import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class Login {}

Then('I verify if the cart icon add the number of itens', () => {
	applications.listProductPage.validateItemVariation()
})
