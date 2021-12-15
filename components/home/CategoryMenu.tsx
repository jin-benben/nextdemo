import classNames from 'classnames'
import React, { FC } from 'react'
import {CategoryItem} from 'tsType/home'
import style from './category.module.less'

interface CategoryMenuProps {
  categoryList:CategoryItem[],
  className:string
}

const CategoryMenu:FC<CategoryMenuProps> = ({className}) => {
  return (
    <ul className={classNames('bg-white rounded-md',className,style.categoryContent)}>
      <li>
        <div className={classNames('border-b border-ccc border-dashed',style.categoryItem)}>
          <div className="text-base leading-14">床品</div>
          <div className="text-999 text-sm leading-16 mt-7">
            <span className='second'>四件套</span>
          </div>
        </div>
      </li>
      <li>
        <div className={classNames('border-b border-ccc border-dashed',style.categoryItem)}>
          <div className="text-base leading-14">床品</div>
          <div className="text-999 text-sm leading-16 mt-7">
            <span className='second'>四件套</span>
          </div>
        </div>
      </li>
      <li>
        <div className={classNames('border-b border-ccc border-dashed',style.categoryItem)}>
          <div className="text-base leading-14">床品</div>
          <div className="text-999 text-sm leading-16 mt-7">
            <span className='second'>四件套</span>
          </div>
        </div>
      </li>
      <li>
        <div className={classNames('border-b border-ccc border-dashed',style.categoryItem)}>
          <div className="text-base leading-14">床品</div>
          <div className="text-999 text-sm leading-16 mt-7">
            <span className='second'>四件套</span>
          </div>
        </div>
      </li>
      <li>
        <div className={classNames('border-b border-ccc border-dashed',style.categoryItem)}>
          <div className="text-base leading-14">床品</div>
          <div className="text-999 text-sm leading-16 mt-7">
            <span className='second'>四件套</span>
          </div>
        </div>
      </li>
      <li>
        <div className={classNames('border-b border-ccc border-dashed',style.categoryItem)}>
          <div className="text-base leading-14">床品</div>
          <div className="text-999 text-sm leading-16 mt-7">
            <span className='second'>四件套</span>
          </div>
        </div>
      </li>
      <li>
        <div className={classNames('border-b border-ccc border-dashed',style.categoryItem)}>
          <div className="text-base leading-14">床品</div>
          <div className="text-999 text-sm leading-16 mt-7">
            <span className='second'>四件套</span>
          </div>
        </div>
      </li>
      <li>
        <div className={classNames('border-b border-ccc border-dashed',style.categoryItem)}>
          <div className="text-base leading-14">床品</div>
          <div className="text-999 text-sm leading-16 mt-7">
            <span className='second'>四件套</span>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default CategoryMenu
