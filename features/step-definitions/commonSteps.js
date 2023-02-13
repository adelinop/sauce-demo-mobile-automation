const { Given, When, Then } = require('@wdio/cucumber-framework');

const Applications = require('../pageobjects/applications')
const applications = new Applications()


Given ('I am on the login page', async()=>{
    await browser.url('')
});

Given('I am logged in with {string} and {string} credentials', async (user, password) => {
    await applications.homePage.acessLogin(user, password)
});

When ('I add an item to the cart', async()=>{
    await applications.listPage.addProductCart()
});

When ('I go to the checkout page', async()=>{
    await applications.listPage.accessCheckoutPage()
});

When ('I fill in the necessary personal information', async()=>{
    await applications.checkoutPage.proceedPurchase()
});

When ('I complete the order process', async()=>{
    await applications.checkoutPage.completeOrderProcess()
});

Then ('I see the confirmation message {string}', async(message)=>{
    await applications.confirmationPage.confirmationPurchase(message)
});