import { FC } from 'react'

import ShopSvg from 'components/svg/ShopSvg'

import styles from './Buttons.module.css'
const ShopBtn: FC = () => {
  return (
    <div className={` ${styles.btnWithDesc} ${styles.w200px} `}>
      <header>
        <ShopSvg w={14} h={14} color={'#925634'} />
        <span>Магазин</span>
      </header>
      <p>покупайте карты за звёзды и голоса</p>
    </div>
  )
}

export default ShopBtn
