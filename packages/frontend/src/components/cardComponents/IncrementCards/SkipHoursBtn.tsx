import { FC, useContext, useEffect, useState } from 'react'

import AdSvg from 'components/svg/AdSvg'

import bridge, { EAdsFormats } from '@vkontakte/vk-bridge'
import { TimeContext } from 'src/App'
import { makeRequest } from 'utils/api'
import styles from './incCardsOrWaitCounter.module.css'

const SkipHoursBtn: FC = () => {
  const [checkAds, setCheckAds] = useState(false)
  const { setSeconds } = useContext(TimeContext)
  useEffect(() => {
    const connectBridgeHandle = async () => {
      const data = await bridge.send('VKWebAppCheckNativeAds', {
        ad_format: 'reward' as EAdsFormats,
      })
      setCheckAds(() => data.result)
      console.info(data)
    }

    connectBridgeHandle()
  }, [checkAds])
  const viewAd = async () => {
    const res = await bridge.send('VKWebAppShowNativeAds', {
      ad_format: 'reward' as EAdsFormats,
    })
    console.info(res)
    if (res.result && setSeconds) {
      setSeconds((prevSeconds: number) => prevSeconds - 12 * 60 * 60)
      await makeRequest('user/skip12HToAccessCard')
    }
  }
  return checkAds ? (
    <div className={styles.skipHoursBtn} onClick={viewAd}>
      <span>-12 часов</span>
      <AdSvg w={14} h={14} color={'#935735'} />
    </div>
  ) : (
    <></>
  )
}

export default SkipHoursBtn
