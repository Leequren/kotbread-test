import { FC } from 'react'

import Bonuses from './Bonuses'
import OpenCardBtn from './OpenCardBtn'
import ShopBtn from './ShopBtn'

import style from './Buttons.module.css'
const IndexBtns: FC = () => {
  return (
    <div className={style.btnsList}>
      <div className={style.btnGroup}>
        <Bonuses />
        <ShopBtn />
      </div>
      <div>
        <OpenCardBtn />
      </div>
    </div>
  )
}

export default IndexBtns
