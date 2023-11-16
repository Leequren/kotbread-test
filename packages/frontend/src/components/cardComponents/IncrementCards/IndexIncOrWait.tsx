import { FC, useContext, useEffect } from 'react'
import { CountContext, TimeContext } from 'src/App'
import { makeRequest } from 'utils/api'

import IncrementBtn from './IncrementBtn'
import WaitCounter from './WaitCounter'

const IndexIncOrWait: FC<{ millisecondsToAccessToNewCard: number }> = ({
  millisecondsToAccessToNewCard,
}) => {
  const { setCountCards } = useContext(CountContext)
  const { seconds, setSeconds } = useContext(TimeContext)
  const incCardsHandle = async () => {
    const response = await makeRequest('user/incCountCards')
    if (response.message === 'success') {
      if (setCountCards && setSeconds && response.countCards) {
        setCountCards(() => Number(response.countCards))
        setSeconds(24 * 60 * 60)
      }
    }
  }

  useEffect(() => {
    if (setSeconds)
      setSeconds((millisecondsToAccessToNewCard - Date.now()) / 1000)
  }, [])

  // console.info(millisecondsToAccessToNewCard)
  return seconds ? (
    seconds > 0 ? (
      <WaitCounter />
    ) : (
      <IncrementBtn incCardsHandle={incCardsHandle} />
    )
  ) : (
    <></>
  )
}

export default IndexIncOrWait
