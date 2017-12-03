import { h, Component } from 'preact';
import style from './style.scss';

import IronImage from '../../components/IronImage';

const scrollStep = 1; // 50px per step
const transitionAttr = 'top';
const parallaxRatio = 1.5;

/**
 * Props:
 *  bgPreload: The very small size image to preview and show at first
 *  bgHd: The High Definition image that will be fetch and show after the DOM ready + component mounted,
 *  height: The height of the parallax container, default is 500px
 */
export default class ParallaxImageBg extends Component {
  prevPos = 0;
  parallax = null;
  
  componentDidMount() {
    this.parallax = document.querySelector("." + style.layer__bg);
    window.addEventListener("scroll", this.changeParallax);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeParallax);
  }
  
  
  changeParallax = () => {
    const scrolledHeight = window.pageYOffset;
    const parallax = this.parallax;
    
    if (Math.abs(scrolledHeight - this.prevPos) > scrollStep) {
      this.prevPos = scrolledHeight;
      
      const limit = parallax.offsetTop + parallax.offsetHeight;
      let delta = 0;
      
      if (parallax.offsetTop < scrolledHeight && scrolledHeight <= limit) {
        delta = (scrolledHeight - parallax.offsetTop) / parallaxRatio;
        
        parallax.style[transitionAttr] = delta + "px";
      } else {
        delta = 0;
        
        parallax.style[transitionAttr] = delta;
      }
    }
  }
  
  
  render() {
    const {bgPreload, bgHd, height = 500} = this.props;
    
    return (
      <div class={style.parallaxC} style={{height: height + 'px'}}>
        
        <div class={style.parallax}>
          <div class={`${style.layer} ${style.layer__bg}`}>
            <IronImage srcPreload={bgPreload} srcLoaded={bgHd}/>
          </div>
  
          <div class={`${style.layer} ${style.layer__fg}`}>
            {this.props.children}
          </div>
        </div>
      
      </div>
    );
  }
}
