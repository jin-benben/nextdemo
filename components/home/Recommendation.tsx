import React from 'react'
import Image from 'next/image'
import style from './Recommendation.module.less'
import classNames from 'classnames'


const Recommendation = () => {
  return (
    <div className={classNames('flex',style.content)}>
      <div className={classNames('grid grid-flow-col',style.imgContent)}>
        <div className={classNames("row-span-2",style.firstItem)}>
          <Image className="rounded-md" width={328} height={516} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg'/>
        </div>
        <div className={classNames("col-span-2",style.secondItem)}>
          <Image className="rounded-md" width={472} height={252} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg'/>
        </div>
        <div className={style.item}>
          <Image className="rounded-md" width={230} height={252} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg'/>
        </div>
        <div className={style.item}>
          <Image className="rounded-md" width={230} height={252} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg'/>
        </div>
        <div className={style.item}>
          <Image className="rounded-md" width={230} height={252} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg'/>
        </div>
        <div className={style.item}>
          <Image className="rounded-md" width={230} height={252} src='https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg'/>
        </div>
      </div>
      <ul className={classNames('flex items-center flex-col basic-color-666',style.tabMenu)}>
        <li className={classNames('flex justify-center items-center',style.active)}>夏凉贝贝</li>
        <li className='flex justify-center items-center'>夏凉贝贝</li>
        <li className='flex justify-center items-center'>夏凉贝贝</li>
        <li className='flex justify-center items-center'>夏凉贝贝</li>
        <li className='flex justify-center items-center'>夏凉贝贝</li>
        <li className='flex justify-center items-center'>夏凉贝贝</li>
      </ul>
    </div>
  )
}

export default Recommendation
