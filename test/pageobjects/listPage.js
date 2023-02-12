const BasePage = require("./basePage");
const selectors = {
     bag_pack_add_cart: '[data-test="add-to-cart-sauce-labs-backpack"]',
     cart_button: '[id="shopping_cart_container"] a'
}
class ListPage extends BasePage{
  
    async addProductCart(){
        this.clickElement(selectors.bag_pack_add_cart)
        await expect($(selectors.cart_button)).toHaveTextContaining(1)
        this.clickElement(selectors.cart_button)
    }
}
module.exports = ListPage;