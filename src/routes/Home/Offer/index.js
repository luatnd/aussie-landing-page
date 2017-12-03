import { h, Component } from 'preact';
import style from './style.scss';

import IronImage from '../../../components/IronImage';

import watchImgXs from '../../../assets/images/aussiefreebieguru-3-xs.jpg';
import radioImgXs from '../../../assets/images/aussiefreebieguru-2-xs.jpg';
import bottleImgXs from '../../../assets/images/aussiefreebieguru-5-xs.jpg';
const watchImgUrl = './assets/images/aussiefreebieguru-3.jpg';
const radioImgUrl = './assets/images/aussiefreebieguru-2.jpg';
const bottleImgUrl = './assets/images/aussiefreebieguru-5.jpg';

const lorem = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';

export default class Offer extends Component {
  
  render() {
    return (
      <div class={style.offerC}>
        
        <h3>Our Offers</h3>
        <p class={style.subT}>{lorem}</p>
        
        <Item
          typeClass={style.txtToImg}
          imgPre={watchImgXs}
          imgHd={watchImgUrl}
          title={'Lorem ipsum dolor sit amet'}
          sub={lorem}
        />
        <Item
          typeClass={style.imgToTxt}
          imgPre={radioImgXs}
          imgHd={radioImgUrl}
          title={'Lorem ipsum dolor sit amet'}
          sub={lorem}
        />
        <Item
          typeClass={style.txtToImg}
          imgPre={bottleImgXs}
          imgHd={bottleImgUrl}
          title={'Lorem ipsum dolor sit amet'}
          sub={lorem}
        />
        
        <div class={style.viewAll}>
          <a href="#" onClick={e => e.preventDefault()} class={`${style.btn} ${style['btn-danger']}`}>View All</a>
        </div>
      
      </div>
    );
  }
}


function Item(props) {
  const {typeClass, imgPre, imgHd, title, sub} = props;
  
  return <div class={`${style.item} ${typeClass}`}>
    
    <div class={style.back}>
      <IronImage srcPreload={imgPre} srcLoaded={imgHd}/>
    </div>
    
    <div class={style.front}>
      <h4>{title}</h4>
      <p>{sub}</p>
      <div>
        <a href="#" onClick={e => e.preventDefault()} class={`${style.btn} ${style['btn-danger']}`}>See Detail</a>
      </div>
    </div>
  
  </div>
}