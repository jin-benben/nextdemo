import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HotProduct from 'components/home/HotProduct'
import styles from '../styles/Home.module.css'
import request from 'utils/request'
import { LiveInfo } from 'type/home'
import SectionHeader from 'components/home/SectionHeader'
import { Children, useMemo } from 'react'
import MySwiper from 'components/common/MySwiper'
import Recommendation from 'components/home/Recommendation'


interface HomePageProps {
  liveInfo:LiveInfo
}

const swipersilde=[
  <Image width={1200} className='rounded-md' height={148} alt='' src='https://qiniu.zhaojiafang.com/data/upload/shop/active/QN06923576170831564.jpg' />,
  <Image width={1200} className='rounded-md' height={148} alt='' src='https://qiniu.zhaojiafang.com/data/upload/shop/active/QN06923576170831564.jpg' />
]

const Home: NextPage<HomePageProps> = ({liveInfo}) => {
  
  const HotProductList=useMemo(() => {
    return liveInfo.hits.map(p=><HotProduct key={p._id} product={p._source} />)
  }, [liveInfo])

  return (
    <div>
      <div className='main mt-24 bg-white rounded-md'>
        <SectionHeader src='/season.png'/>
        <Recommendation />
      </div>
      <div className="main  mt-24">
        <MySwiper swipersilde={swipersilde} />
      </div>
      <div className="main bg-white mt-24 rounded-md">
        <SectionHeader src='/hot.png' />
        <div className='grid grid-cols-5 gap-y-4'>
          {HotProductList}
        </div>
      </div>
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
