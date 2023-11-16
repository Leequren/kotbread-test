import { FC, useContext, useEffect } from 'react'

import SkipHoursBtn from './SkipHoursBtn'

import { TimeContext } from 'src/App'
import styles from './incCardsOrWaitCounter.module.css'
const WaitCounter: FC = () => {
  const { seconds, setSeconds } = useContext(TimeContext)

  useEffect(() => {
    console.info(seconds, setSeconds)

    const interval = setInterval(() => {
      if (setSeconds) {
        setSeconds((prevSeconds: number) => prevSeconds - 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return seconds ? (
    <div className={styles.counterRelative}>
      <div className={styles.waitCounter}>
        <span>
          {Math.floor(seconds / 60 / 60)}ч. {Math.floor((seconds % 3600) / 60)}
          м.
        </span>
      </div>
      <SkipHoursBtn />
    </div>
  ) : (
    <></>
  )
}
export default WaitCounter
