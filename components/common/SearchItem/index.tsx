import { Badge } from 'antd'
import classNames from 'classnames'
import Link from 'next/link'
import IconFont from '../Iconfont'
import style from './index.module.less'


const LogoCotent=()=>{
    return (
        <div>
            <span className={style.logo}></span>
            <div className={style.navTex}>
                <span className={style.active}>直播货源</span>
                <span>网销货源</span>
            </div>
        </div>
    )
}

const SearchBox=({className})=>{
    return (
        <div className={classNames('flex flex-col',className,style.searchBox)}>
            <div className={style.searchType}>
                <span className="inline-flex justify-center items-center cursor-pointer">商品</span>
                <span>以图搜款</span>
            </div>
            <div className={classNames('flex mb-16',style.searchInput)}>
                <input placeholder='请输入关键词搜索'/>
                <IconFont type='icon-soutu' className={style.camera} />
                <span className={classNames('flex justify-center items-center cursor-pointer',style.sousuo)}>
                    <IconFont type='icon-sousuo' />
                </span>
            </div>
            <div className={style.searchkey}>
                <Link href='/' passHref><span className='c-999 mr-12'>四件套</span></Link>
                <Link href='/' passHref><span className='c-999 mr-12'>四件套</span></Link>
                <Link href='/' passHref><span className='c-999 mr-12'>四件套</span></Link>
                <Link href='/' passHref><span className='c-999 mr-12'>四件套</span></Link>
                <Link href='/' passHref><span className='c-999 mr-12'>四件套</span></Link>
            </div>
        </div>
    )
}



const SearchItem=()=>{
    return (
        <div className={classNames('flex items-center',style.searchContent)}>
            <div className='main flex items-center'>
                <LogoCotent />
                <SearchBox className={style.mrl}/>
                <Badge count={5}>
                    <IconFont className={style.carIcon} type='icon-gouwuche'/>
                </Badge>
            </div>
        </div>
    )
}

export default SearchItem