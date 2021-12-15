import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Children, useMemo } from 'react'
import {Autoplay} from 'swiper'
import HotProduct from 'components/home/HotProduct'
import SectionHeader from 'components/home/MainSection'
import MySwiper from 'components/common/MySwiper'
import Recommendation from 'components/home/Recommendation'
import HeaderTop from 'components/common/Header'
import GoldStore from 'components/home/GoldStore'
import request from 'utils/request'
import {generateRandomKey} from 'utils'

import styles from '../styles/Home.module.css'

import { LiveInfo } from 'tsType/home'
import Other from 'components/home/Other'
import SearchItem from 'components/common/SearchItem'
import CategoryMenu from 'components/home/CategoryMenu'
import MainBranner from 'components/home/MainBranner'
import SourceGoods from 'components/home/SourceGoods'
import StrengthGood from 'components/home/StrengthGood'
import HotGoods from 'components/home/HotGoods'



interface HomePageProps {
  liveInfo:LiveInfo
}


const sotreAdvertisings=[
  {
    store_id:1,
    store_name:"哈哈哈",
    video:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg',
    second:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg',
    sku_list:[
      {
        img:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg',
        sku:1,
        sku_price:'75',
        sku_name:'2021新款230克加厚牛奶绒四件套'
      },
      {
        img:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg',
        sku:2,
        sku_price:'75',
        sku_name:'2021新款230克加厚牛奶绒四件套'
      },
      {
        img:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg',
        sku:3,
        sku_price:'75',
        sku_name:'2021新款230克加厚牛奶绒四件套'
      },
    ]
  },
  {
    store_id:2,
    store_name:'杭州神级店铺',
    video:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg',
    second:'https://qiniu.zhaojiafang.com/data/upload/shop/adv/QN06907226610701597.jpg',
    sku_list:[
      {
        img:'http://imgniu.zhaojiafang.com/store/goods/858/858_06016530266220555.jpg?imageView2/1/w/360/h/360/ignore-error/1/_100x100',
        sku:1,
        sku_price:'75',
        sku_name:'2019秋冬保暖经典格致棉加绒系列 1.0m（3.3英尺）床 迪丽雅 蓝1'
      },
      {
        img:'http://imgniu.zhaojiafang.com/store/goods/858/858_06016530266220555.jpg?imageView2/1/w/360/h/360/ignore-error/1/_100x100',
        sku:2,
        sku_price:'75',
        sku_name:'2019秋冬保暖经典格致棉加绒系列 1.0m（3.3英尺）床 迪丽雅 蓝1'
      },
      {
        img:'http://imgniu.zhaojiafang.com/store/goods/858/858_06016530266220555.jpg?imageView2/1/w/360/h/360/ignore-error/1/_100x100',
        sku:3,
        sku_price:'75',
        sku_name:'2019秋冬保暖经典格致棉加绒系列 1.0m（3.3英尺）床 迪丽雅 蓝1'
      }
    ]
  }
] 

const swipersilde=[
  <Image key={generateRandomKey()} width={1200} className='rounded-md' height={148} alt='' src='https://qiniu.zhaojiafang.com/data/upload/shop/active/QN06923576170831564.jpg' />,
  <Image key={generateRandomKey()} width={1200} className='rounded-md' height={148} alt='' src='https://qiniu.zhaojiafang.com/data/upload/shop/active/QN06923576170831564.jpg' />
]

const Home: NextPage<HomePageProps> = ({liveInfo}) => {
  
 

  return (
    <div>
      <HeaderTop />
      <SearchItem />
      <div className='main mt-14 flex'>
        <CategoryMenu className="mr-12"/>
        <MainBranner />
      </div>
      {/** 金牌商家 **/}
      <GoldStore />
      {/** 源头好货 **/}
      <SourceGoods />
      {/** 实力质造 **/}
      <StrengthGood />
      {/** 当季推荐 **/}
      <div className='main mt-24 bg-white rounded-md'>
        <SectionHeader src='/season.png'/>
        <Recommendation sotreAdvertisings={sotreAdvertisings}/>
      </div>
      <Other swipersilde={swipersilde}/>
      {/** 热门商品 **/}
      <HotGoods liveInfo={liveInfo}/>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async (context) =>{
  const res = await request('/api/es/search_active_goods?page=1&size=50&active_site_id=4&order_type=desc')
  
  if (!res) {
    return {
      notFound: true,
    }
  }

  return {
    props: { liveInfo:res.datas }, // will be passed to the page component as props
  }
}


export default Home
