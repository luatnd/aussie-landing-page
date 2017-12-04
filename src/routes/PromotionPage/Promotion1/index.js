import { h, Component } from 'preact';

import IronImage from '../../../components/IronImage';

import style from './style.scss';

import imgHandHd from '../../../assets/images/aussiefreebieguru-7.png';
import imgHandPreview from '../../../assets/images/aussiefreebieguru-7-xs-40.png';

const lorem = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut';


export default class PromotionPage extends Component {
  render() {
    return (
      <div class={style.promoC}>
        <div class={style.promoInner}>
          
          <div class={style.info}>
            
            <h1>SUPERMARKET</h1>
            <p>Published on 28 November 2017</p>
            <p class={style.big}>WIN A %500 SUPERMARKET GIFT CARD</p>
            
            <div className={style.handC}>
              <div className={style.imgC}>
                <IronImage srcPreload={imgHandPreview} srcLoaded={imgHandHd}/>
              </div>
              
              <div className={style.handContent}>
                <p>{lorem}</p>
              </div>
            </div>
            
          </div>
          <div class={style.questions}>
            
            <QuestionGroup current={1}/>
            
          </div>
        </div>
      </div>
    );
  }
}


class QuestionGroup extends Component {
  render(props) {
    const {current:currentQuestion = 1} = props;
    
    return <div className={style.qGroup} data-key={1}>
      <p className={style.question}>Question {currentQuestion} of 4 : What is your age group?</p>
      <div className={style.ansList}>
        <button className={style.ansItem} value={1.5}>1.5 KW</button>
        <button className={style.ansItem} value={2}>2 KW</button>
        <button className={style.ansItem} value={3}>3 KW</button>
        <button className={style.ansItem} value={4}>4 KW</button>
      </div>
    </div>
  }
}