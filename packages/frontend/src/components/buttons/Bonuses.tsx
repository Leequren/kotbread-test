import { FC } from 'react'

import GiftSvg from 'components/svg/GiftSvg'

import styles from './Buttons.module.css'
const Bonuses: FC = () => {
  return (
    <div className={` ${styles.btnWithDesc} ${styles.w250px} `}>
      <header>
        <GiftSvg w={16} h={16} color={'#925634'} />
        <span>Бонусы</span>
      </header>
      <p>выполняйте задания и получайте звёзды</p>
    </div>
  )
}

export default Bonuses
