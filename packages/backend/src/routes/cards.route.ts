import { FastifyReply, FastifyRequest } from 'fastify'
import { getNameCards } from 'utils/getNameCards'

import { FastifyApp } from '../index'
export default async function AppRoute(app: FastifyApp): Promise<void> {
  app.get('/cards', (_req: FastifyRequest, reply: FastifyReply) => {
    return reply.send(getNameCards())
  })
}
