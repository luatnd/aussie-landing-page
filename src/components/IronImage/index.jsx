import { h, Component } from 'preact';

import style from './style.scss';

const documentReadStatus = {
  loading: "loading", // – the document is loading.
  interactive: "interactive", // – the document was fully read.
  complete: "complete", // – the document was fully read and all resources (like images) are loaded too.
}

export default class IronImage extends Component {
  
  constructor(props) {
    super(props);
    this.ironImageHd = null;
    this.hdImg = null;
  }
  
  componentDidMount() {
    // Ensure for browser env only
    if (typeof document !== 'undefined') {
      
      if (document.readyState === documentReadStatus.complete) {
        this.startHD();
      } else {
        document.addEventListener('readystatechange', this.listenToStartHD);
      }
      
    }
  };
  
  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('readystatechange', this.listenToStartHD);
      
      // Remove onload if it already, when img was loading and you un-mount component,
      // then the onload still be executed, so that we need to remove this event
      if (this.hdImg) {
        this.hdImg.onload = null;
      }
    }
  }
  
  /**
   * If doc is still loading then add Listener to load
   * ELSE:  If document was already ready then start right away
   */
  listenToStartHD = () => {
    if (document.readyState === documentReadStatus.complete) {
      this.startHD();
    }
  }
  
  startHD = () => {
    // Start new image instance
    this.hdImg = new Image();
    
    // Set up hook
    this.hdImg.onload = this.showHD;
    
    // Start load the image
    this.hdImg.src = this.props.srcLoaded;
  }
  
  /**
   * Show the HD img to the UI
   */
  showHD = () => {
    this.ironImageHd.setAttribute('style', `background-image: url('${this.props.srcLoaded}')`);
    this.ironImageHd.classList.add(style.loaded);
  }
  
  render() {
    return (
      
      <div class={style.container}>
        <div
          class={style.hdImg}
          ref={ele => {
            this.ironImageHd = ele
          }}>
        </div>
        <div
          class={style.preloadImg}
          style={{backgroundImage: `url('${this.props.srcPreload}')`}}>
        </div>
      </div>
    
    )
  }
  
}