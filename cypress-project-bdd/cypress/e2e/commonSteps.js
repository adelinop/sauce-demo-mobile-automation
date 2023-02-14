import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class CommonSteps {}

Given('I access the system', () => {
	cy.visit('')
})

Given('I make login using {string} and {string}', (user, password) => {
	applications.homePage.loginAcess(user, password)
})
When('I add a Backpack in the cart', () => {
	applications.listProductPage.addBackpackToCart()
})
When('I proceed to the cart', () => {
	applications.listProductPage.accessCartPage()
})
When('I proceed to checkout page', () => {
	applications.cartPage.accessCheckout()
})
When('I fill the personal data', () => {
	applications.cartPage.fillPersonaldata()
})
When('I finish the order process', () => {
	applications.cartPage.finishCartProcess()
})
Then('I can see the confirmation message {string}', value => {
	applications.confirmationPage.verifyConfirmationMessage(value)
})
