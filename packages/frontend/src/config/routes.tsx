import { MainPage } from 'pages/Main'

export type RouteAlias = 'main'

export interface Route {
  path: string
  component: React.ReactElement
  alias: RouteAlias
}

export const routes: Route[] = [
  {
    path: '/',
    component: <MainPage />,
    alias: 'main',
  },
]
