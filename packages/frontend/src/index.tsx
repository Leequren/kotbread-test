import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import bridge from '@vkontakte/vk-bridge'

import './config/dayjs'

import App from './App'
import store from './store'

import '@vkontakte/vkui/dist/cssm/styles/themes.css'
import './styles/global.css'

bridge.send('VKWebAppInit')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
)
