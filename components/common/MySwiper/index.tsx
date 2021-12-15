import { FC } from 'react'
import {Pagination,EffectFade,Autoplay } from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination';
import { generateRandomKey } from 'utils';

import style from './index.module.less'

interface MySwiperProps extends SwiperProps {
  swipersilde?:React.ReactNode[]
}

const MySwiper:FC<MySwiperProps> = ({swipersilde,children,...ret}) => {
  return (
    <Swiper
    // install Swiper modules
      className={style.mySwiper}
      modules={[ Pagination, EffectFade,Autoplay ]}
      pagination={{ clickable: true }}
      {...ret}
    >
    {
      swipersilde?.map(silde=><SwiperSlide key={generateRandomKey()}>{silde}</SwiperSlide>)
    }
    {
      children
    }
  </Swiper>
  )
}

export default MySwiper
