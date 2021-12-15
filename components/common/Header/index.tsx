import { Avatar } from 'antd'
import classNames from 'classnames'
import Link from 'next/link'
import IconFont from '../Iconfont'
import style from './index.module.less'
const HeaderTop = () => {
    return (
        <div className={classNames('flex items-center', style.headerContent)}>
            <div className="main c-666 flex justify-between">
                <div className='flex items-center'>
                    <div className='mr-30'>
                        <span className='c-ff3838'>找家纺</span>欢迎你！
                    </div>
                    <span className='mr-30'>请登录</span>
                    <Link passHref href="https://www.zhaojiafang.com/shop/index.php?act=login&op=register" >
                        <span className='c-ff3838 mr-30 cursor-pointer'>免费注册</span>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <span className="flex items-baseline mr-30 cursor-pointer">
                        <IconFont className={style.topicon} type='icon-shoucang' />  收藏清单
                    </span>
                    <span className='flex items-baseline mr-30 cursor-pointer'>
                        <IconFont className={style.topicon} type='icon-bangzhu' />  帮助中心
                    </span>
                    <Avatar size={30} src="http://qiniutest.zhaojiafang.com/data/upload/shop/common/default_user_portrait.gif" />
                </div>
            </div>
        </div>
    )
}

export default HeaderTop