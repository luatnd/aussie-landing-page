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
  
  handleMenuItemClick = () => {
    this.hideAllMenu();
    this.scrollToTop();
	}
  
  handleDocClick = (e) => {
    if (window.Element.prototype.closest) {
      const fixedMenuC_Ele = e.target.closest(`.${style.fixedMenuC}`);
      
      if (fixedMenuC_Ele === null) {
        // Mean click outside menu --> hide drop menu
        this.hideAllMenu();
      }
    }
  }
  
  scrollToTop = () => {
  	if (document) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  	}
	}
  
  hideAllMenu = () => {
    if (this.state[style.dropMenuXs] || this.state[style.dropMenuSm]) {
      console.log("hideAllMenu");
      
      this.setState({
        [style.dropMenuXs]: false,
        [style.dropMenuSm]: false,
      });
    }
	}
 
	btnNavbarClick = (targetMenuClass) => (e) => {
    this.setState(Object.assign({
      [style.dropMenuXs]: false,
      [style.dropMenuSm]: false,
    }, {[targetMenuClass]: !this.state[targetMenuClass]}));
	}
	
	
  linkHome = <MenuLink href="/" text="Home" onClick={this.handleMenuItemClick} />;
  linkContactUs = <MenuLink href="/contact-us" text="Contact us" onClick={this.handleMenuItemClick} />;
  linkP1 = <MenuLink href="/promotion/super-market-sale" text="Special Promotion 1" onClick={this.handleMenuItemClick} />;
  linkP2 = <MenuLink href="/promotion/promotion-2" text="Special Promotion 2" onClick={this.handleMenuItemClick} />;
  linkP3 = <MenuLink href="/promotion/promotion-3" text="Special Promotion 3" onClick={this.handleMenuItemClick} />;
  linkP4 = <MenuLink href="/promotion/promotion-4" text="Special Promotion 4" onClick={this.handleMenuItemClick} />;
	
	render() {
    const dropMenuXs_ShowClass = this.state[style.dropMenuXs] ? style.show : '';
    const dropMenuSm_ShowClass = this.state[style.dropMenuSm] ? style.show : '';
    const {linkHome, linkContactUs, linkP1, linkP2, linkP3, linkP4} = this;
		
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
						
						<a href="javascript:void(0)">
							<span class={style.itemInner} onClick={this.btnNavbarClick(style.dropMenuSm)}>
								<span>Special Promotions</span>
							</span>
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

/**
 * Plz note that <Link> will stopPropagation the events bubble to parent,
 * so that we can not listen from parent or use event delegation
 */
function MenuLink(props) {
  return <Link href={props.href} activeClassName={style.active}>
			<span onClick={props.onClick} class={style.itemInner}>
				<Text text={props.text}/>
			</span>
	</Link>;
}