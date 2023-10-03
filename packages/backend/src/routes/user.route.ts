import { ApiHandler } from 'config/apiHandler'
import { AuthMiddleware } from 'middlewares/auth.middleware'

import { FastifyApp } from '../index'

// Подставляет префикс к роутам в данном файле (плагин fastify/autoload)
export const autoPrefix = '/user'

export default async function (app: FastifyApp): Promise<void> {
  app.addHook('preHandler', AuthMiddleware)

  app.get<ApiHandler<'user/get'>>('/get', (_, reply) => {
    reply.send({ _id: -1 })
  })
}
