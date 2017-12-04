import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.scss';
import logo from '../../assets/images/logo-white.png'


const linkHome = <Link activeClassName={style.active} href="/"><Text text="Home"/></Link>;
const linkContactUs = <Link activeClassName={style.active} href="/contact-us"><Text text="Contact us"/></Link>;
const linkP1 = <Link activeClassName={style.active} href="/promotion/super-market-sale"><Text text="Special Promotion 1"/></Link>;
const linkP2 = <Link activeClassName={style.active} href="/promotion/promotion-2"><Text text="Special Promotion 2"/></Link>;
const linkP3 = <Link activeClassName={style.active} href="/promotion/promotion-3"><Text text="Special Promotion 3"/></Link>;
const linkP4 = <Link activeClassName={style.active} href="/promotion/promotion-4"><Text text="Special Promotion 4"/></Link>;


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
						{linkHome}
						{linkContactUs}
						{linkP1}
						{linkP2}
						{linkP3}
						{linkP4}
					</nav>
					
					<nav class={`show-lg-md-sm ${style.hiddenXl} ${style.hiddenXs}`}>
            {linkHome}
            {linkContactUs}
						
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
              {linkHome}
              {linkContactUs}
              {linkP1}
              {linkP2}
              {linkP3}
              {linkP4}
						</div>
					</nav>
					
					<nav class={`${style.dropMenu} ${style.dropMenuSm} ${dropMenuSm_ShowClass}`}>
						<div class={`${style.dropMenuInner}`}>
              {linkP1}
              {linkP2}
              {linkP3}
              {linkP4}
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