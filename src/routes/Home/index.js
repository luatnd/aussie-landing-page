import { h, Component } from 'preact';
import style from './style.css';

import IronImage from '../../components/IronImage';
import preloadImg from '../../assets/images/node.jpg';


export default class Home extends Component {
	
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				
				<div>
					<br/>
					<br/>
					<p className={style.testFont}>Start</p>
					
					<div style={{height: '670px', width: '1000px'}}>
						{/*<IronImage srcPreload={preloadImg} srcLoaded={hdImg} />*/}
						<IronImage srcPreload={preloadImg} srcLoaded={'./assets/images/node-hd.jpeg'} />
						<IronImage srcPreload={'./assets/images/node.jpg'} srcLoaded={'./assets/images/node-hd.jpeg'} />
						{/*<img src="https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905" alt=""/>*/}
					</div>
					<div style={{height: '670px', width: '1000px'}}>
						<IronImage srcPreload={'./assets/images/node.jpg'} srcLoaded={'./assets/images/node-hd.jpeg'} />
					</div>
					
					<p>End</p>
					<br/>
					<br/>
				</div>
				
			</div>
		);
	}
}
