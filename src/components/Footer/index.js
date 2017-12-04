import { h, Component } from 'preact';
import style from './style.scss';

import icoFb from '../../assets/icons/faebook.png';
import icoTt from '../../assets/icons/tweeter.png';
import icoIn from '../../assets/icons/linkedIn.png';
import icoYt from '../../assets/icons/youtube.png';
import icoArrowDown from '../../assets/icons/arrow-down.png';
import icoArrowUp from '../../assets/icons/arrow-up.png';
import imgLogoPink from '../../assets/images/logo-pink.png';

const lorem = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostr';

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footerC}>
				<div class={style.fInner}>
					
					<DropContent title="About Us">
						<div class={style.aboutUs}>
							
							<img src={imgLogoPink} alt="aussie logo pink"/>
							
							<p>{lorem}</p>
							
						</div>
					</DropContent>
					
					<DropContent title="Disclaimer" collapsed={false}>
						<p class={style.m0}>{lorem}</p>
					</DropContent>
					
					<DropContent title="Terms">
						<p class={style.m0}>{lorem}</p>
					</DropContent>
					
					<DropContent title="Privacy Policy">
						<p class={style.m0}>{lorem}</p>
					</DropContent>
					
					<div class={style.footInfo}>
						<p>© 2017 <b>Aussie Freebie Guru</b>. All Rights Reserved.</p>
						<div class={style.iconList}>
							<a href="#"><img src={icoFb} alt="aussie facebook"/></a>
							<a href="#"><img src={icoTt} alt="aussie tweeter"/></a>
							<a href="#"><img src={icoIn} alt="aussie linkedIn"/></a>
							<a href="#"><img src={icoYt} alt="aussie youtube"/></a>
						</div>
					</div>
					
				</div>
			</footer>
		);
	}
}


class DropContent extends Component {
  state = {
    collapsed:true,
    being:false,
  }
  
  contentEle = null;
  
  componentWillMount() {
  	const {collapsed = true} = this.props;
  	
  	this.setState({collapsed: collapsed});
	}
	
	toggleCollapse = () => {
  	const transitionTime = 500; //ms
    const collapsed = this.state.collapsed;
    
    //if (!collapsed) {
    //  const contentH = this.contentEle.scrollHeight || this.contentEle.clientHeight || this.contentEle.offsetHeight;
    //  this.contentEle.style.height = contentH;
    //}
    
    
    this.setState({being: true});
    
    setTimeout(() => {
      this.setState({
				collapsed: !collapsed,
				being: false,
      });
		}, transitionTime);
	}
  
  render() {
    const {title} = this.props;
    const {collapsed, being} = this.state;
    const nextCollapseState = being ? !collapsed : collapsed;
    
    return <div class={style.dropItem}>
			<div class={style.bar}>
				
				<p>{title}</p>
				<span onClick={this.toggleCollapse}><img src={nextCollapseState ? icoArrowDown : icoArrowUp} alt=""/></span>
				
			</div>
	
			<div
				ref={ele => this.contentEle = ele}
				class={`${style.content} ${collapsed ? style.collapsed : ''} ${being ? style.being : ''}`}
			>
        {this.props.children}
			</div>
		</div>
  }
}