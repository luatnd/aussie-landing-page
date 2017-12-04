import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Footer from './Footer';
import Home from '../routes/Home';
import PromotionPage from '../routes/PromotionPage';
import ContactPage from '../routes/ContactPage';

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} e		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} e.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<PromotionPage path="/promotions" promotionId="promotion-id-1" />
					<PromotionPage path="/promotion/:promotionId" />
					<ContactPage path="/contact-us" />
				</Router>
				
				<Footer/>
			</div>
		);
	}
}
