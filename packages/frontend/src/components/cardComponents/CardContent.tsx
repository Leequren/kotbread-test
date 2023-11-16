import { FC, useEffect, useState } from 'react'

import DayCard from './DayCard/DayCard'

import styles from './CardContent.module.css'
import IndexIncOrWait from './IncrementCards/IndexIncOrWait'
const CardContent: FC<{ timeToAccessToNewCard: Date }> = ({
  timeToAccessToNewCard,
}) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const st = async () => {
      console.info(new Date(timeToAccessToNewCard).getTime())
      const newTime = new Date(timeToAccessToNewCard).getTime()
      setTime(newTime)
    }
    st()
  })
  return timeToAccessToNewCard && time ? (
    <div className={styles.cardTitleWithIncCount}>
      <DayCard />
      <IndexIncOrWait millisecondsToAccessToNewCard={time} />
    </div>
  ) : (
    <></>
  )
}

export default CardContent
