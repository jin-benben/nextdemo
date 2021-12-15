import React from 'react'
import Image from 'next/image'
import style from './GoldStore.module.less'
import classNames from 'classnames'
import { Avatar } from 'antd'
import { generateRandomKey } from 'utils'
import MySwiper from 'components/common/MySwiper'
import MainSection from 'components/home/MainSection'
import { SwiperSlide } from 'swiper/react'
const Sotore = () => {
    return (
        <div className={classNames('relative rounded-md', style.store)}>
            <Image className='rounded-md' width={222} height={240} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06918384601989753.jpg' alt='' />
            <div className={classNames('flex items-center', style.storeInfo)}>
                <Avatar className="mr-6" size={32} src="https://imgniu.zhaojiafang.com/store/goods/2903/2903_QN06909730543901929.jpg?imageView2/1/w/360/h/360/ignore-error/1/_100x100" />
                <div>
                    <h4 className="mb-6 text-base text-333 leading-14 font-medium">莱登卡奴</h4>
                    <div className="text-sm text-999 h-12 leading-12">莱登卡奴</div>
                </div>
            </div>
        </div>
    )
}

const GoldStore = () => {
    return (
        <MainSection src='/gold.png'>
            <MySwiper className={style.goldSwiper}>
                <SwiperSlide>
                    <div className="grid grid-cols-5 gap-12">
                        {Array(15).fill('ss').map(i => <Sotore key={generateRandomKey()} />)}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-5 gap-12">
                        {Array(15).fill('ss').map(i => <Sotore key={generateRandomKey()} />)}
                    </div>
                </SwiperSlide>
            </MySwiper>
        </MainSection>
    )
}

export default GoldStore
