import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.scss';
import logo from '../../assets/images/logo-white.png'


export default class Header extends Component {
	render() {
		return (
			<header class={style.headerC}>
				<div class={style.header}>
					
					<div class={style.logoC}>
						<img src={logo} alt="Aussie logo"/>
					</div>
					
					<nav>
						<Link activeClassName={style.active} href="/"><Text text="Home"/></Link>
						<Link activeClassName={style.active} href="/profile"><Text text="Contact us"/></Link>
						<Link activeClassName={style.active} href="/profile/john1"><Text text="Special Promotion 1"/></Link>
						<Link activeClassName={style.active} href="/profile/john2"><Text text="Special Promotion 2"/></Link>
						<Link activeClassName={style.active} href="/profile/john3"><Text text="Special Promotion 3"/></Link>
						<Link activeClassName={style.active} href="/profile/john4"><Text text="Special Promotion 4"/></Link>
					</nav>
					
				</div>
			</header>
		);
	}
}

function Text(props) {
	return <span>{props.text}</span>;
}