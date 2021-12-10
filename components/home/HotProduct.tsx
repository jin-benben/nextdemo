import {useState} from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import classNames from 'classnames'
import style from './HotProduct.module.less'
import { Avatar } from 'antd'

const HotProduct: NextPage = () => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className={classNames('rounded-md bg-white', style.hotProduct)}>
      <div className={classNames("flex justify-center", style.iamgeBox)}>
        <Image className="rounded-md" width={210} height={220} alt=''
          src="https://imgniu.zhaojiafang.com/store/goods/11293/11293_QN06809614667123462.jpg?imageView2/1/w/300/h/300/ignore-error/1/" />
      </div>
      <div className={classNames('mt-12',{hidden:isHover})}>
        <div className={classNames(style.productInfo)}>
          <div className='productName text-base line-clamp-2'>2021新款230克加厚牛奶绒四件
            套 1.5m床单款四件套 四色华</div>
          <div className={classNames("flex justify-between align-middle", style.priceBox)}>
            <span className="strong-color text-base font-normal leading-14">￥75.00</span>
            <span className="text-sm basic-color-666 leading-12">2色2码</span>
          </div>
        </div>
        <div className="avatar flex items-center">
          <Avatar size={20} src="https://imgniu.zhaojiafang.com/store/goods/11293/11293_QN06809614667123462.jpg?imageView2/1/w/300/h/300/ignore-error/1/" />
          <span className='text-base font-medium' style={{marginLeft:6}}>莱米家纺</span>
        </div>
      </div>
      <div className={classNames('mt-12',{hidden:!isHover})}>
        <div className="avatar flex items-center">
          <Avatar size={20} src="https://imgniu.zhaojiafang.com/store/goods/11293/11293_QN06809614667123462.jpg?imageView2/1/w/300/h/300/ignore-error/1/" />
          <span className='text-base font-medium' style={{marginLeft:6}}>莱米家纺</span>
        </div>
        <div className={classNames('flex text-sm',style.tagsContent)}>
          <div className='year inline-flex tagItem leading-12'>
            <span className='contentText'>3年</span> 
          </div>
        </div>
        <div className={classNames('basic-color-666 line-clamp-2 leading-16 font-normal text-sm lineClamp2',style.mainBusiness)}>主营：牛奶绒印花 全棉类印花 牛奶绒
印花 全棉类印花</div>
      </div>
    </div>
  )
}

export default HotProduct
