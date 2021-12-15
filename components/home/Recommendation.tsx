import { useState, useCallback, useMemo, useRef } from 'react'
import Image from 'next/image'
import { Controller, Autoplay,EffectFade } from 'swiper'
import classNames from 'classnames'

import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

import MySwiper from 'components/common/MySwiper'
import style from './Recommendation.module.less'

const CurrentProduct = ({ sku_price, img, sku_name }) => {
  return (
    <div className={style.item}>
      <Image alt='' className="rounded-md" width={230} height={208} src={img} />
      <div className={classNames('text-base leading-14 line-clamp-1', style.sku_name)}>{sku_name}</div>
      <div className='strong-color leading-14 text-base'>￥{sku_price}</div>
    </div>
  )
}

const CurrentStore = ({ video, second, sku_list }) => {
  return (
    <div className={classNames('grid grid-flow-col', style.imgContent)}>
      <div className={classNames("row-span-2", style.firstItem)}>
        <Image alt='' className="rounded-md" width={328} height={516} src={video} />
      </div>
      <div className={classNames("col-span-3", style.secondItem)}>
        <Image alt='' className="rounded-md" width={712} height={252} src={second} />
      </div>
      {sku_list.map(i => <CurrentProduct key={i.sku} {...i} />)}
    </div>
  )
}



const Recommendation = ({ sotreAdvertisings }) => {
  const [current,setCurrent]=useState(0)
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  swiperRef.current = swiper
  // 改变当前
  const changeCurrent = useCallback((index, store_id) => {
    swiper.slideTo(index);

  }, [swiper])
  const [pagination, swiperslide] = useMemo(() => {
    const pagination = []
    const swiperslide = []
    sotreAdvertisings.forEach((store, index) => {
      swiperslide.push(<CurrentStore key={store.store_id} {...store} />);
      pagination.push(<li 
        key={store.store_id} onClick={() => changeCurrent(index, store.store_id)}
        style={{display:'flex'}}
        className={classNames('line-clamp-1 flex justify-center items-center ', { [style.active]: index === current })}>
        {store.store_name}</li>)
    })
    return [pagination, swiperslide]
  }, [changeCurrent, sotreAdvertisings, current])

  const onSlideChangeTransitionEnd = (swiper1) => {
  
    setCurrent(swiper1.activeIndex)
  }

  return (
    <div className={classNames('flex', style.content)}>
      <MySwiper
        //direction='vertical' 
        swipersilde={swiperslide}
        style={{ flex: 1 }}
        modules={[Autoplay]}
        autoplay
        onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
        onInit={(s) => setSwiper(s)} />

      <ul className={classNames('flex items-center flex-col basic-color-666', style.tabMenu)}>
        {pagination}
      </ul>
    </div>
  )
}

export default Recommendation
