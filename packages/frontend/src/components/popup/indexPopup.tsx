import axios from 'axios'
import Lottie from 'lottie-react'
import { FC, useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import { CountContext } from 'src/App'
import { makeRequest } from 'utils/api'

import CloseSvg from 'components/svg/CloseSvg'
import StarSvg from 'components/svg/StarSvg'

import styles from './Popup.module.css'

const lottieStyle = {
  height: '450px',
}
const ControlledPopup: FC = () => {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const [card, setCard] = useState<{ name: string; src: object }>({
    name: '',
    src: {},
  })
  const { countCards, setCountCards } = useContext(CountContext)

  const fetchData = async () => {
    const data = await makeRequest('user/getRandomCard')
    console.info(data)
    const lottieObject = await axios.get(
      `http://127.0.0.1:5000/uploads/cards/${data.card}.json`,
    )
    console.info(lottieObject.data)
    setCard({ name: data.card, src: lottieObject.data })
  }

  const handleClick = async () => {
    if (
      countCards !== undefined &&
      countCards &&
      countCards > 0 &&
      setCountCards
    ) {
      await fetchData()
      setOpen((open) => !open)
      setCountCards((countCards: number) => countCards - 1)
    }
  }
  return (
    <div>
      <button
        className={styles.openCardBtn}
        type="button"
        onClick={handleClick}
      >
        <StarSvg w={12} h={12} color={'#925634'} />
        <span>открыть карту</span>
        <StarSvg w={12} h={12} color={'#925634'} />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className={styles.popup}>
          <div className={styles.cardName}>
            <StarSvg w={24} h={24} color={'#DDD1B2'} />
            <span>{card.name}</span>
            <StarSvg w={24} h={24} color={'#DDD1B2'} />
          </div>
          <div className={styles.flexCenter}>
            <Lottie animationData={card.src} style={lottieStyle}></Lottie>
          </div>
          <div className={`close ${styles.close}`} onClick={closeModal}>
            <a>
              <CloseSvg w={24} h={24} color={'#925634'} />
            </a>
          </div>
          :<></>
        </div>
      </Popup>
    </div>
  )
}

export default ControlledPopup
