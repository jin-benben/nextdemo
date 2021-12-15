import React, { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import style from './mainbranner.module.less'
import { Avatar } from 'antd'
import {SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import MySwiper from 'components/common/MySwiper'
import 'swiper/css/navigation'

const MainStoreItem = () => {
    return (
        <div className={classNames("rounded-md relative", style.mainStore)}>
            <Image className="rounded-t-md" width={150} height={141} alt='' src="https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06895036490989801.jpg" />
            <div className='flex flex-col items-center'>
                <Avatar size={32} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06895036490989801.jpg' />
                <span className="text-base text-333 leading-14 mt-10">莱登卡奴</span>
                <span className="text-sm mt-6 text-666 leading-12 line-clamp-1">ins韩国高端保暖牛奶绒</span>
            </div>
        </div>
    )
}


const NextEl = (props)=>{
    return (
        <div className={style.nextEl} {...props}>
          &gt;
        </div>
    )
}

const PrvEl=(props)=>{
    return (
        <div className={style.preEl} {...props}>
            &lt;
        </div>
    )
}

const MainStoreList = ({storeList}) => {
    const [swiper,setSwiper]=useState(null);
    const [isPre,setIsPre]=useState(false);
    const [isNext,setIsNext]=useState(true);
    // 滚动结束时
    const onSlideChangeTransitionEnd=(swiper)=>{
        if(swiper.activeIndex===0){
            setIsPre(false);
            setIsNext(true)
        }else{
            setIsPre(true) 
        }
        // if((swiper.activeIndex+1)===storeList.length){
        //     setIsNext(false)
        // }
    }
    // 上一个
    const onSlidePrev=()=>{
        swiper?.slidePrev()
    }
    // 下一个
    const onSlideNext=()=>{
       
        swiper?.slideNext()
    }
    
    return (
        <div style={{width:983}} className="flex rounded-md mt-7 p-12 bg-white relative">
            
            {isPre&&<PrvEl onClick={onSlidePrev}/>}
            <MySwiper 
                onInit={(s)=>setSwiper(s)}
                modules={[Navigation]} 
                spaceBetween={12} 
                onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
                slidesPerView={6} >
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
                <SwiperSlide><MainStoreItem /></SwiperSlide>
            </MySwiper>
            {isNext&&<NextEl onClick={onSlideNext}/>}
        </div>
    )
}

const imgs = [
    {
        id:1,
        src:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06895036490989801.jpg',
    },
    {
        id:2,
        src:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06895036490989801.jpg',
    },
    {
        id:3,
        src:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06895036490989801.jpg',
    },
  
]

const MainBranner = () => {
    return (
        <div className="flex-1">
            <div className="flex">
                <MySwiper style={{width:767}}>
                    {
                        imgs.map(i => <SwiperSlide key={i.id}><Image className="rounded-md" width={767} height={314} src={i.src} alt='' /></SwiperSlide>)
                    }
                </MySwiper>
                <div style={{marginLeft:4}} className="relative">
                    <Image className="rounded-md" width={212} height={314} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06821890830850230.jpg' alt='' />
                    <div className={classNames('absolute top-0 left-0 text-white flex justify-center items-center text-sm',style.hotTag)}>
                    热销商品
                    </div>
                </div>
            </div>
            <MainStoreList />
        </div>
    )
}

export default MainBranner
