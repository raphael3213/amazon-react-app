import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'



const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <img className="slide__image" src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Tablets/Samsung/A7-Lite/Gateway/D24267156_IN_PC_Tablets-Samsung-Launch-A7-Lite-RUSH_TallHero_1500x600._CB667709440_.jpg'></img>
          </div>
          <div className="each-slide">
            <img className="slide__image" src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Redmi_EVOSeries/Note10ProMax/GW/120Hz/D21342770_WLD_Mi_Redmi_Note10ProMax_DesktopTallHero_1500x600._CB667709099_.jpg'></img>
          </div>
          <div className="each-slide">
            <img className="slide__image" src= 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Redmi_EVOSeries/Note10Pro/GW/May/D21342631_WLD_Mi_Redmi_Note10Pro_tallhero_1500x600._CB667000819_.jpg'></img>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow