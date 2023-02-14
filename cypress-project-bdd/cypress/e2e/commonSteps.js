import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class CommonSteps {}

Given('I am on the login page', () => {
	cy.visit('')
})

Given('I am logged in with {string} and {string} credentials', (user, password) => {
	applications.homePage.loginAcess(user, password)
})
When('I add an item to the cart', () => {
	applications.listProductPage.addBackpackToCart()
})
When('I go to the checkout page', () => {
	applications.listProductPage.accessCartPage()
	applications.cartPage.accessCheckout()
})
When('I fill in the necessary personal information', () => {
	applications.cartPage.fillPersonaldata()
})
When('I complete the order process', () => {
	applications.cartPage.finishCartProcess()
})
Then('I see the confirmation message {string}', value => {
	applications.confirmationPage.verifyConfirmationMessage(value)
})
