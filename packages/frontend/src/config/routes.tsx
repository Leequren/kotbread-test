import { MainPage } from 'pages/Main'

export type RouteAlias = ''

export interface Route {
  path: string
  component: React.ReactElement
  shouldHideTabbar?: boolean
  alias: RouteAlias
}

export const routes: Route[] = [
  {
    path: '/',
    component: <MainPage />,
    alias: '',
    shouldHideTabbar: false,
  },
]
