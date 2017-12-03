import { h, Component } from 'preact';

import ParallaxImageBg from '../../components/ParallaxImageBg';
import Contact from '../../components/Contact';
import FreeStuff from './FreeStuff';
import Offer from './Offer';

import style from './style.scss';

import preloadImg from '../../assets/images/node.jpg';


export default class Home extends Component {
	
	render() {
		return (
			<div class={style.home}>
				
				<ParallaxImageBg
					bgPreload={preloadImg}
					bgLoaded={'./assets/images/node-hd.jpeg'}
				>
					<FreeStuff/>
				</ParallaxImageBg>
				
				<Offer/>
				
				<Contact/>
				
			</div>
		);
	}
}
