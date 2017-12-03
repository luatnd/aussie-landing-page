import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Footer from './Footer';
import Home from '../routes/Home';
import Profile from '../routes/Profile';

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
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
				
				<Footer/>
			</div>
		);
	}
}
