// ------------------------------------------------------------- Components -------------------------------------------------------//
import CartPage from './applications/cartPage'
import ConfirmationPage from './applications/confirmationPage'
import HomePage from './applications/homePage'
import ListProductPage from './applications/listProductPage'
// ----------------------------------------------------------------Pages -----------------------------------------------------------//

/**
 * This is the main class the encapsulates all pages regarding the application (Except base pages since they are not meant to be directly called).
 *
 * Because of this class, you don't need to import and create objects to all the pages, so you can just call this Application class instead.
 *
 * All new pages regarding the application need to be added in here, so they can be used
 */
class Application {
	constructor() {
		// -------------------------------------------------------------------------- Components --------------------------------------------------------------------//
		// --------------------------------------------------------------------------------Pages ----------------------------------------------------------------------//
		// Statement Management
		this.homePage = new HomePage()
		this.listProductPage = new ListProductPage()
		this.cartPage = new CartPage()
		this.confirmationPage = new ConfirmationPage()
	}
}

export default Application
