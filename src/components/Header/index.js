import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.scss';
import logo from '../../assets/images/logo-white.png'


export default class Header extends Component {
  state = {
  	[style.dropMenuXs]: false,
  	[style.dropMenuSm]: false,
	}
	
	shouldComponentUpdate(nextProps, nextState) {
    return this.state[style.dropMenuXs] !== nextState[style.dropMenuXs]
      || this.state[style.dropMenuSm] !== nextState[style.dropMenuSm];
	}
	
	componentDidMount() {
  	if (document) {
  	  document.addEventListener('click', this.handleDocClick);
  	}
	}
	
	componentWillUnmount() {
    if (document) {
      document.removeEventListener('click', this.handleDocClick);
    }
	}
  
  handleDocClick = (e) => {
    if (window.Element.prototype.closest) {
      const clickedOnMenu = e.target.closest(`.${style.fixedMenuC}`);
      
      if (clickedOnMenu === null) {
        // Mean click outside menu --> hide drop menu
  
        this.setState({
          [style.dropMenuXs]: false,
          [style.dropMenuSm]: false,
        });
      }
    }
  }
 
	btnNavbarClick = (targetMenuClass) => (e) => {
    this.setState(Object.assign({
      [style.dropMenuXs]: false,
      [style.dropMenuSm]: false,
    }, {[targetMenuClass]: !this.state[targetMenuClass]}));
	}
	
	render() {
    const dropMenuXs_ShowClass = this.state[style.dropMenuXs] ? style.show : '';
    const dropMenuSm_ShowClass = this.state[style.dropMenuSm] ? style.show : '';
		
		return (
			<header class={style.fixedMenuC}>
				<div class={style.menu}>
					
					<div class={style.logoC}>
						<img src={logo} alt="Aussie logo"/>
					</div>
					
					<nav class={`show-xl ${style.hiddenLg} ${style.hiddenMd} ${style.hiddenSm} ${style.hiddenXs}`}>
						<Link activeClassName={style.active} href="/"><Text text="Home"/></Link>
						<Link activeClassName={style.active} href="/profile"><Text text="Contact us"/></Link>
						<Link activeClassName={style.active} href="/profile/john1"><Text text="Special Promotion 1"/></Link>
						<Link activeClassName={style.active} href="/profile/john2"><Text text="Special Promotion 2"/></Link>
						<Link activeClassName={style.active} href="/profile/john3"><Text text="Special Promotion 3"/></Link>
						<Link activeClassName={style.active} href="/profile/john4"><Text text="Special Promotion 4"/></Link>
					</nav>
					
					<nav class={`show-lg-md-sm ${style.hiddenXl} ${style.hiddenXs}`}>
						<Link activeClassName={style.active} href="/"><Text text="Home"/></Link>
						<Link activeClassName={style.active} href="/profile"><Text text="Contact us"/></Link>
						
						<a href="javascript:void(0)" onClick={this.btnNavbarClick(style.dropMenuSm)}>
							<span>Special Promotions</span>
						</a>
						
						<div class={`${style.btnNavbar} ${style.btnNavbar__Sm}`} onClick={this.btnNavbarClick(style.dropMenuSm)}>
							<span class={style.iconBar}/>
							<span class={style.iconBar}/>
							<span class={style.iconBar}/>
						</div>
					</nav>
					
					<nav class={`show-xs ${style.hiddenXl} ${style.hiddenLg} ${style.hiddenMd} ${style.hiddenSm}`}>
						
						<div class={style.btnNavbar} onClick={this.btnNavbarClick(style.dropMenuXs)}>
							<span class={style.iconBar}/>
							<span class={style.iconBar}/>
							<span class={style.iconBar}/>
						</div>
						
					</nav>
					
					<nav class={`${style.dropMenu} ${style.dropMenuXs} ${dropMenuXs_ShowClass}`}>
						<div class={`${style.dropMenuInner}`}>
							<Link activeClassName={style.active} href="/"><Text text="Home"/></Link>
							<Link activeClassName={style.active} href="/profile"><Text text="Contact us"/></Link>
							<Link activeClassName={style.active} href="/profile/john1"><Text text="Special Promotion 1"/></Link>
							<Link activeClassName={style.active} href="/profile/john2"><Text text="Special Promotion 2"/></Link>
							<Link activeClassName={style.active} href="/profile/john3"><Text text="Special Promotion 3"/></Link>
							<Link activeClassName={style.active} href="/profile/john4"><Text text="Special Promotion 4"/></Link>
						</div>
					</nav>
					
					<nav class={`${style.dropMenu} ${style.dropMenuSm} ${dropMenuSm_ShowClass}`}>
						<div class={`${style.dropMenuInner}`}>
							<Link activeClassName={style.active} href="/profile/john1"><Text text="Special Promotion 1"/></Link>
							<Link activeClassName={style.active} href="/profile/john2"><Text text="Special Promotion 2"/></Link>
							<Link activeClassName={style.active} href="/profile/john3"><Text text="Special Promotion 3"/></Link>
							<Link activeClassName={style.active} href="/profile/john4"><Text text="Special Promotion 4"/></Link>
						</div>
					</nav>
					
				</div>
			</header>
		);
	}
}

function Text(props) {
  return <span dangerouslySetInnerHTML={{__html: props.text}}/>;
}