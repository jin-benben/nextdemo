import React from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import MySwiper from 'components/common/MySwiper'
import {generateRandomKey} from 'utils'
import MainSection from './MainSection'
import style from './SourceGoods.module.less'
import classNames from 'classnames'
import IconFont from 'components/common/Iconfont'

const AtomItem = ()=>{
    return (
        <div>
            <Image className='productimg' width={100} height={100} src='https://imgniu.zhaojiafang.com/store/goods/4783/4783_QN06850416855228902.jpg?imageView2/1/w/300/h/300/ignore-error/1/' alt='' />
            <div className="text-waring mt-3 leading-12 h-12">￥75.00</div>    
        </div>
    )
}

const StoreItem = ()=>{
    return (
        <div className={style.store}>
            <Image width={378} height={222} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06873745938698904.jpg' alt='' />
            <div className={style.tagContent}>
                <div className={classNames('flex justify-center items-center',style.tag1)}>新视野</div>
                <div className={classNames('flex justify-center items-center',style.tag2)}>品质家纺供应商</div>
            </div>
            <div className={style.mask}></div>
            <div className={classNames('flex justify-center items-center',style.modalContent)}>
                <div className={classNames('rounded-md bg-white pr-14',style.modalBody)}>
                    <div className={classNames('flex items-center justify-between mt-10',style.modalHeader)}>
                        <div>
                            <h4 className="text-333 font-medium h-14 leading-14">莱米家纺</h4>
                            <div className="leading-12 text-sm h-12 text-666">2021新款雪花绒大版四件套</div>
                        </div>
                        <div>
                            <IconFont className="text-999 text-base cursor-pointer" type='icon-roundright' />
                        </div>
                    </div>
                    <div className={classNames('flex justify-around mt-10')}>
                        {Array(3).fill('2').map(i=><AtomItem key={generateRandomKey()} />)}
                    </div>
                </div>
               
            </div>
        </div>
    )
}

const SourceGoods = () => {
    return (
        <MainSection src='/source.png' className="pl-20 pr-20">
            <MySwiper className={style.goldSwiper}>
                <SwiperSlide>
                    <div className={classNames("grid grid-cols-3 gap-12",style.gridItem)}>
                        {Array(6).fill('ss').map(i => <StoreItem key={generateRandomKey()} />)}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-3 gap-12">
                        {Array(6).fill('ss').map(i => <StoreItem key={generateRandomKey()} />)}
                    </div>
                </SwiperSlide>
            </MySwiper>
        </MainSection>
    )
}

export default SourceGoods
