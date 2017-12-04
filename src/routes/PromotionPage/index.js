import { h, Component } from 'preact';
import ParallaxImageBg from '../../components/ParallaxImageBg';

import style from './style.scss';
import preloadImg from '../../assets/images/aussiefreebieguru-4-xs-80.jpg';

export default class PromotionPage extends Component {
  
  // Note: `promotionId` comes from the URL, courtesy of our router
  render({promotionId}, state) {
    console.log("promotionId: ", promotionId);
    
    return (
      <div class={style.promotionC}>
        
        <div class={style.promotionInner}>
          
          <ParallaxImageBg
            height={670}
            bgPreload={preloadImg}
            bgHd={'./assets/images/aussiefreebieguru-4.jpg'}
          >
            <div class={style.mask}/>
            
            {/*TOOD: Load promotion here*/}
            <h1>load promotion here</h1>
            
          </ParallaxImageBg>
          
        </div>
        
      </div>
    );
  }
}

