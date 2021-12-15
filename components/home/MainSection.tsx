
import classNames from 'classnames'
import React, { FC } from 'react'

const SectionHeaderStyle ={
    margin:'13px 0 24px 0',
    width:160,
    height:52,
    backgroundRepeat:'no-repeat',
    backgroundSize:'contain'
}

interface MainSectionProps {
    src:string
}

const MainSection:FC<MainSection> = ({className,src,children}) => {
    return (
        <div className={classNames("main bg-white mt-24 rounded-md",className)}>
            <div className="flex content-center justify-center">
                <div style={{...SectionHeaderStyle,backgroundImage:`url(${src})`}}></div>
            </div>
            {children}
        </div>
    )
}

export default MainSection
