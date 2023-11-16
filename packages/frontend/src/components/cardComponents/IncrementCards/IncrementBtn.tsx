import { FC } from 'react'

import CardSvg from 'components/svg/CardSvg'

import styles from './incCardsOrWaitCounter.module.css'
const IncrementBtn: FC<{ incCardsHandle: () => Promise<void> }> = ({
  incCardsHandle,
}) => {
  return (
    <div className={styles.btnIncCountCard} onClick={incCardsHandle}>
      <span>Получить +1</span>
      <CardSvg w={20} h={21} color={'#935836'} />
    </div>
  )
}

export default IncrementBtn
