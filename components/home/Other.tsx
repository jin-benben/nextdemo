import React from 'react'
import {Autoplay, EffectFade,Pagination} from 'swiper'
import MySwiper from '../common/MySwiper'

import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';

const Other = ({swipersilde}) => {
    return (
        <div className="main  mt-24">
        <MySwiper modules={[Autoplay,EffectFade,Pagination]} effect='fade' autoplay swipersilde={swipersilde} />
      </div>
    )
}

export default Other
