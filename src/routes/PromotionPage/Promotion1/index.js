import { h, Component } from 'preact';
import ParallaxImageBg from '../../components/ParallaxImageBg';

import style from './style.scss';
import preloadImg from '../../assets/images/aussiefreebieguru-4-xs-80.jpg';

export default class PromotionPage extends Component {
  
  // Note: `promotionId` comes from the URL, courtesy of our router
  render({promotionId}, state) {
    return (
      <div class={style.promotionC}>
        
        <div class={style.promotionInner}>
          
          <ParallaxImageBg
            height={670}
            bgPreload={preloadImg}
            bgHd={'./assets/images/aussiefreebieguru-4.jpg'}
          >
            <div class={style.mask}/>
            
            
            <div>
              PromotionCnt
            </div>
          </ParallaxImageBg>
          
        </div>
        
      </div>
    );
  }
}

