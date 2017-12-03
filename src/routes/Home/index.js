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
				
				<div class={style.free}>
					<ParallaxImageBg
						height={670}
						bgPreload={preloadImg}
						bgHd={'./assets/images/aussiefreebieguru-4.jpg'}
					>
						<div class={style.mask}/>
						<FreeStuff/>
					</ParallaxImageBg>
				</div>
				
				<Offer/>
				
				<Contact/>
				
			</div>
		);
	}
}
