
class HomePage {
	async loginAcess(user, password) {
      
	}

   async waitElement(element, timeMs) {
        await element.waitForExist(timeMs);
        await element.waitForDisplayed(timeMs);
        await element.waitForEnabled(timeMs);
     }

}
module.exports = new HomePage ()
