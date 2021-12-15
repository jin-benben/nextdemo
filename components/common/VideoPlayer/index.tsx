import { FC } from "react"
import classNames from "classnames"
import IconFont from "../Iconfont"
import style from './index.module.less'

interface VideoPlayerProps {
    videIconClass?:string,
    maskClass?:string;
    videoSrc:string;
    isMask:boolean;
    videoWidth:number;
    videoHight:number;
}

const VideoPlayer:FC<VideoPlayerProps>=({videIconClass,maskClass,videoHight,videoSrc,videoWidth,children,isMask=false})=>{
    return (
        <div className={classNames('flex flex-col justify-center items-center',style.videoWrap)}>
            <div className={classNames(style.mask,{hidden:!isMask},maskClass)}></div>
            <IconFont className={classNames('cursor-pointer',style.videoIcon,videIconClass)} type='icon-Video' />
            <video src={videoSrc}
            className={classNames(style.videoPlayer)} width={videoWidth} height={videoHight}></video>
        </div>
    )
}

export default VideoPlayer