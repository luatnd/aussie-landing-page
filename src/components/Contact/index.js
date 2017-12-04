import { h, Component } from 'preact';

import IronImage from '../../components/IronImage';
import preloadImg from '../../assets/images/aussiefreebieguru-1-xs-80.jpg';

import style from './style.scss';
//import common from '../../style/common.scss';


export default class Contact extends Component {
  handleFormSubmit = (e) => {
    console.log("submit e: ", e);
    
    e.preventDefault();
  }
  
  render() {
    return (
      <div class={style.contactC}>
        
        
        <div class={style.bg}>
            <IronImage srcPreload={preloadImg} srcLoaded={'./assets/images/aussiefreebieguru-1.jpg'}/>
            <div class={style.mask}/>
        </div>
        
        <div class={style.content}>
    
          <div class={style.info}>
            <h4>Contact Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
            
            <div>
              <p class={`${style.infoItem}`} data-key="address"><span>A</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</p>
              <p class={`${style.infoItem}`} data-key="phone"><span>T</span> 732-939-0444</p>
              <p class={`${style.infoItem}`} data-key="email"><span>E</span> info@aussiefreebieguru.com</p>
            </div>
            
          </div>
          <div class={style.formC}>
            <form action="" method="post" onSubmit={this.handleFormSubmit}>
              <div class={style.formCtrl}>
                <input type="text" name="name" placeholder="Full Name"/>
              </div>
              <div class={`${style.formCtrl} ${style.formCtrl__inline}`}>
                <input type="text" name="phone" placeholder="Phone Number"/>
                <input type="text" name="email" placeholder="Email"/>
              </div>
              <div class={style.formCtrl}>
                <textarea name="message" cols="30" rows="10" placeholder="Your Message*"/>
              </div>
              
              <div class={style.sm}>
                <button class={`${style.btn} ${style['btn-danger']}`}>Send</button>
              </div>
              
              
            </form>
          </div>
  
        </div>
        
      </div>
    );
  }
}
