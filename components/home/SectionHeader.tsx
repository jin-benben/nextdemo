
import React, { FC } from 'react'

const SectionHeaderStyle ={
    margin:'13px 0 24px 0',
    width:160,
    height:52,
    backgroundRepeat:'no-repeat',
    backgroundSize:'contain'
}

const SectionHeader:FC<{src:string}> = ({src}) => {
    return (
        <div className="flex content-center justify-center">
            <div style={{...SectionHeaderStyle,backgroundImage:`url(${src})`}}></div>
        </div>
    )
}

export default SectionHeader
