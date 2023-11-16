import { FC, useContext } from 'react'
import { CountContext } from 'src/App'

import CardSvg from '../svg/CardSvg'

import styles from './CountCards.module.css'
const CountCards: FC = () => {
  const { countCards } = useContext(CountContext)
  return countCards ? (
    <div className={styles.cardInfo}>
      <span>{countCards}</span>
      <CardSvg w={20} h={21} color={'#EFD491'} />
    </div>
  ) : (
    <div className={styles.cardInfo}>
      <span>0</span>
      <CardSvg w={20} h={21} color={'#EFD491'} />
    </div>
  )
}

export default CountCards
