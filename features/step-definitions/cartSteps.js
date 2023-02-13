const { Given, When, Then } = require('@wdio/cucumber-framework');

const Applications = require('../pageobjects/applications')
const applications = new Applications()

Then ('the cart icon displays the number of items',async()=>{
    applications.listPage.validateItemVariation()
})