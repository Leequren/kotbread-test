import { FC } from 'react'

import StarSvg from 'components/svg/StarSvg'

import styles from './DayCard.module.css'

const dayCard: FC = () => {
  return (
    <div className={styles.dayCard}>
      <StarSvg w={24} h={24} color={'#DDD1B2'} />
      <span>Карта дня</span>
      <StarSvg w={24} h={24} color={'#DDD1B2'} />
    </div>
  )
}

export default dayCard
