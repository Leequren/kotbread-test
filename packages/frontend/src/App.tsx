import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoot } from '@vkontakte/vkui'

import { routes } from './config/routes'
import { makeRequest } from 'utils/api'

const App: FC = () => {
  // [ПРИМЕР] базового запроса с фронтенда
  useEffect(() => {
    async function testRequest() {
      const response = await makeRequest('user/get')
      console.info('test request response: ' + response._id)
    }
    testRequest()
  }, [])

  return (
    <AppRoot>
      <Routes>
        {routes.map(({ path, component }, i) => (
          <Route element={component} key={i} path={path} />
        ))}
        <Route path="/*" />
      </Routes>
    </AppRoot>
  )
}

App.displayName = 'App'

export default App
