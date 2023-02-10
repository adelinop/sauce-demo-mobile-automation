
describe('Sample Test', () => {
    after(()=>{
        driver.closeApp()

    })
    it('Sample', async () => {    
      
        await browser.url('https://saucedemo.com')
        const user_input= '[id="user-name"]'        
        const password_input= '[id="password"]'
        const login_button= '[id="login-button"]'
        const error_message= '[data-test="error"]'
        
        await $(user_input).setValue('standard_user')
        await $(password_input).setValue('secret_sauce')
        await $(login_button).click()
      
        const bag_pack_add_cart= '[data-test="add-to-cart-sauce-labs-backpack"]'
        const cart_button= '[id="shopping_cart_container"] a'
        await $(bag_pack_add_cart).click()
        await $(cart_button).click()
        await expect($(cart_button)).toHaveTextContaining(1)
       

    })

    it('Cart Validation ',async ()=>{
        const 	btn_checkout =  '[id="checkout"]'
        const name_input =  '[id="first-name"]'
        const last_name_input =  '[id="last-name"]'
        const zip_code_input =  '[id="postal-code"]'
        const btn_continue =  '[data-test="continue"]'
        const btn_finish =  '[data-test="finish"]'

        await $(btn_checkout).click()
        await $(name_input).setValue('Adelino')
        await $(last_name_input).setValue('Test')
        await $(zip_code_input).setValue('4050400')
        await $(btn_continue).click()
        await $(btn_finish).click()

    })

})
