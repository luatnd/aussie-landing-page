import { h, Component } from 'preact';
import style from './style.scss';

import IronImage from '../../components/IronImage';


export default class ParallaxImageBg extends Component {
	
	render() {
    const {bgPreload, bgLoaded} = this.props;
		
		return (
			<div class={style.container}>
				
				<div class="background" style={{height: '670px', width: '1000px'}}>
					{/*<IronImage srcPreload={preloadImg} srcLoaded={'./assets/images/node-hd.jpeg'} />*/}
					{/*<IronImage srcPreload={'./assets/images/node.jpg'} srcLoaded={'./assets/images/node-hd.jpeg'} />*/}
					<IronImage srcPreload={bgPreload} srcLoaded={bgLoaded}/>
				</div>
				
				<div class="foreground">
					{this.props.children}
				</div>
				
			</div>
		);
	}
}
