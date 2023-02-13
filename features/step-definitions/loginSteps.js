const { Given, When, Then } = require('@wdio/cucumber-framework');

const Applications = require('../pageobjects/applications')
const applications = new Applications()

Then ('I should be logged in to the system', async()=>{
    applications.listPage.validateListPageLoad()
})

Then('I should see an error message', async() => {
	applications.homePage.verifyWrongLoginMessage()
})
