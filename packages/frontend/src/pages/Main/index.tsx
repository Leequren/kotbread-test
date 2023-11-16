import { FC, useContext, useEffect, useState } from 'react'
import { CountContext } from 'src/App'
import { IUserData } from 'src/types/UserData'
import { makeRequest } from 'utils/api'

import CardContent from 'components/cardComponents/CardContent'
import CountCards from 'components/countCards/CountCards'

import IndexBtns from '../../components/buttons/IndexBtns'

export const MainPage: FC = () => {
  const [userData, setUserData] = useState<IUserData | null>(null)
  const { setCountCards } = useContext(CountContext)

  useEffect(() => {
    const userRequest = async () => {
      const response = await makeRequest('user/get')
      console.info(response)
      setUserData(response.userData)
      console.info(userData)
      if (setCountCards) {
        setCountCards(response.userData.countCards)
      }
    }

    userRequest()
  }, [])
  console.info(userData)
  return userData ? (
    <main>
      <span>{userData.countCards}</span>
      <div className="header">
        <CountCards />
      </div>
      <div className="content">
        <CardContent timeToAccessToNewCard={userData.accessToNewCardTime} />
        <IndexBtns />
      </div>
    </main>
  ) : (
    <></>
  )
}
