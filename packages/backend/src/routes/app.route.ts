import { FastifyApp } from '../index'

export default async function AppRoute(app: FastifyApp): Promise<void> {
  app.get('/', () => {
    return 'hello world'
  })
}
