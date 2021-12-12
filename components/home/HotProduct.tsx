import { DOMAttributes, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import classNames from 'classnames'
import style from './HotProduct.module.less'
import { Avatar } from 'antd'
import { _source } from 'type/home'


const MyAvatar:React.FC<{storeName:string}> = ({storeName}) => {
  return (
    <div className="avatar flex items-center">
      <Avatar size={20} src="https://imgniu.zhaojiafang.com/store/goods/11293/11293_QN06809614667123462.jpg?imageView2/1/w/300/h/300/ignore-error/1/" />
      <span className='text-base font-medium' style={{ marginLeft: 6 }}>{storeName}</span>
    </div>
  )
}

const HotProduct:React.FC<{product:_source}> = ({product}) => {
  const [isHover, setIsHover] = useState(false);
  const itemOnMouseLeave:DOMAttributes<HTMLDivElement>['onMouseLeave']=(e)=>{
    
    console.log('检测到鼠标移出')
  }
  const itemOnMouseOver:DOMAttributes<HTMLDivElement>['onMouseEnter']=(e)=>{
 
    console.log('检测到鼠标移进')
  }
  const imgOnMouseLeave:DOMAttributes<HTMLDivElement>['onMouseLeave']=(e)=>{
    e.stopPropagation()
    console.log('img鼠标移出')
  }
  const imgOnMouseEnter:DOMAttributes<HTMLDivElement>['onMouseEnter']=(e)=>{
    e.stopPropagation()
    console.log('img鼠标移进')
  }
  return (
    <div onMouseLeave={itemOnMouseLeave} onMouseEnter={itemOnMouseOver} className={classNames('rounded-md bg-white', style.hotProduct)}>
      <div onMouseLeave={imgOnMouseLeave} onMouseEnter={imgOnMouseEnter} className={classNames("flex justify-center", style.iamgeBox)}>
        <Image  className="rounded-md" width={210} height={220} alt='' src={product.sku_image} />
      </div>
      <div className={classNames('mt-12', { hidden: isHover })}>
        <div className={classNames(style.productInfo)}>
          <div className='productName text-base line-clamp-2'>{product.sku_name}</div>
          <div className={classNames("flex justify-between align-middle", style.priceBox)}>
            <span className="strong-color text-base font-normal leading-14">￥{product.sku_price}</span>
            <span className="text-sm basic-color-666 leading-12">{product.color_count}色{product.size_count}码</span>
          </div>
        </div>
        <MyAvatar storeName={product.store_name}/>
      </div>
      <div className={classNames('mt-12', { hidden: !isHover })}>
        <MyAvatar storeName={product.store_name}/>
        <div className={classNames('flex text-sm', style.tagsContent)}>
          <div className='year inline-flex tagItem leading-12'>
            <span className='contentText'>{product.store_years}年</span>
          </div>
        </div>
        <div className={classNames('basic-color-666 line-clamp-2 leading-16 font-normal text-sm lineClamp2', style.mainBusiness)}>
          {product.store_name}
        </div>
      </div>
    </div>
  )
}

export default HotProduct
