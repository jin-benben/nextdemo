import Image from 'next/image'
import classNames from 'classnames'
import { Avatar } from 'antd'
import { SwiperSlide } from 'swiper/react'
import { generateRandomKey } from 'utils'
import MySwiper from 'components/common/MySwiper'
import MainSection from 'components/home/MainSection'

import style from './StrengthGood.module.less'
import IconFont from 'components/common/Iconfont'
import VideoPlayer from 'components/common/VideoPlayer'

const Sotore = () => {
    return (
        <div className={classNames('relative rounded-md flex flex-col', style.store)}>
            <div className="relative flex">
                <Image className="rounded-t-md" width={222} height={204} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06918384601989753.jpg' alt='' />
                <VideoPlayer />
            </div>
            <div className={classNames('flex flex-col justify-center  items-center', style.storeInfo)}>
                <h4 className="mb-6 text-base text-333 leading-14 font-medium">莱登卡奴</h4>
                <div className="text-sm text-999 h-12 leading-12">莱登卡奴</div>
            </div>
        </div>
    )
}

const StrengthGood = () => {
    return (
        <MainSection src='/shili.png' className='pl-20 pr-20'>
            <MySwiper className={style.goldSwiper}>
                <SwiperSlide>
                    <div className="grid grid-cols-5 gap-12">
                        {Array(10).fill('ss').map(i => <Sotore key={generateRandomKey()} />)}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-5 gap-12">
                        {Array(10).fill('ss').map(i => <Sotore key={generateRandomKey()} />)}
                    </div>
                </SwiperSlide>
            </MySwiper>
        </MainSection>
    )
}

export default StrengthGood
