import {FC,useMemo} from 'react'
import MainSection from './MainSection'
import HotProduct from './HotProduct'

interface HotGoodsProps {
    liveInfo:LiveInfo
  }

const HotGoods:FC<HotGoodsProps> = ({liveInfo}) => {
    const HotProductList=useMemo(() => {
        return liveInfo?.hits.map(p=><HotProduct key={p._id} product={p._source} />)
      }, [liveInfo])
    return (
        <MainSection src='/hot.png'>
          <div className='grid grid-cols-5 gap-y-4'>
          {HotProductList}
          </div>
        </MainSection>
    )
}



export default HotGoods
