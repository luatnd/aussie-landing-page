import { h, Component } from 'preact';
import ParallaxImageBg from '../../components/ParallaxImageBg';

import Promotion1 from './Promotion1';

import style from './style.scss';
import preloadImg from '../../assets/images/aussiefreebieguru-4-xs-80.jpg';

export default class PromotionPage extends Component {
  
  // Note: `promotionId` comes from the URL, courtesy of our router
  render({promotionId}, state) {
    const component = getPromotionComp(promotionId);
    
    
    return (
      <div class={style.promotionC}>
        <div class={style.promotionInner}>
          <ParallaxImageBg
            height={670}
            bgPreload={preloadImg}
            bgHd={'/assets/images/aussiefreebieguru-4.jpg'}
          >
            <div class={style.mask}/>
            
            {component}
            
          </ParallaxImageBg>
        </div>
      </div>
    );
  }
}

function getPromotionComp(promotionId) {
  switch (promotionId) {
    case 'super-market-sale':
      return <Promotion1/>;
    default:
      return <Promotion1/>;
  }
}