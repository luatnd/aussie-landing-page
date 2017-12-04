import { h, Component } from 'preact';

import Contact from '../../components/Contact';
import style from './style.scss';


export default class ContactPage extends Component {
  
  render() {
    return (
      <div class={style.contactC}>
        <Contact/>
      </div>
    );
  }
}

