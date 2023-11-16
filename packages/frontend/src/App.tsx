import { AppRoot } from '@vkontakte/vkui'
import { createContext, FC, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from './config/routes'
import { TSetCardsState, TSetSecondsState } from './types/Context'

export const CountContext = createContext<{
  countCards: number | null
  setCountCards: TSetCardsState | null
}>({ countCards: null, setCountCards: null })
export const TimeContext = createContext<{
  seconds: number | null
  setSeconds: TSetSecondsState | null
}>({ seconds: null, setSeconds: null })
const App: FC = () => {
  // [ПРИМЕР] базового запроса с фронтенда
  // useEffect(() => {
  //   async function testRequest() {
  //     const response = await makeRequest('user/get')
  //     console.info(response)
  //   }
  //   testRequest()
  // }, [])
  const [countCards, setCountCards] = useState(0)
  const [seconds, setSeconds] = useState(0)
  return (
    <AppRoot>
      <CountContext.Provider value={{ countCards, setCountCards }}>
        <TimeContext.Provider value={{ seconds, setSeconds }}>
          <Routes>
            {routes.map(({ path, component }, i) => (
              <Route element={component} key={i} path={path} />
            ))}
            <Route path="/*" />
          </Routes>
        </TimeContext.Provider>
      </CountContext.Provider>
    </AppRoot>
  )
}

App.displayName = 'App'

export default App
