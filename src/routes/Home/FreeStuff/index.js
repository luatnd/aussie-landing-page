import { h, Component } from 'preact';
import style from './style.scss';


export default class FreeStuff extends Component {
	
	render() {
		return (
			<div class={style.freeStuffC}>
				
				<p>Wanna Find Free Stuff? </p>
				<p>Saving You Money Since 2005</p>
				
				<div class={style.btnGroup}>
					<a href="#" class={`${style.btn} ${style['btn-danger']}`}>Free Samples</a>
					<a href="#" class={`${style.btn} ${style['btn-danger']}`}>Free Samples</a>
					<a href="#" class={`${style.btn} ${style['btn-danger']}`}>Free Samples</a>
					<a href="#" class={`${style.btn} ${style['btn-danger']}`}>Free Samples</a>
				</div>
				
			</div>
		);
	}
}
