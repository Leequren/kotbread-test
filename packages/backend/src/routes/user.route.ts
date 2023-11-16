import { AuthMiddleware } from 'middlewares/auth.middleware'
import { getUserById } from 'utils/dbUtils/getUserDB'
import incCountCards from 'utils/dbUtils/incCountCards'

import { genRandomCardUser } from 'utils/dbUtils/genRandomCardUserDB'
import { skip12HToAccessCard } from 'utils/dbUtils/skip12HToAcessCard'
import { FastifyApp } from '../index'
import { logger } from '../utils/logger'
// Подставляет префикс к роутам в данном файле (плагин fastify/autoload)
export const autoPrefix = '/user'

interface IReplyUser {
  200: {
    userData: {
      countCards: number
      accessToNewCardTime: Date
    }
  }
}

export default async function (app: FastifyApp): Promise<void> {
  app.addHook('preHandler', AuthMiddleware)

  app.get<{ Reply: IReplyUser }>('/get', async (req, reply) => {
    logger.info(req.headers.authorization)

    // reply.send({ _id: Number(req.user.id) })
    logger.info(Date.now())
    const { countCards, accessToNewCardTime } = await getUserById(
      Number(req.user.id),
    )
    const userData = { countCards, accessToNewCardTime }
    reply.code(200).send({ userData })
  })
  app.get('/incCountCards', async (req, reply) => {
    const userId = Number(req.user.id)
    const incCountCardInfo = await incCountCards(userId)
    return reply.send(incCountCardInfo)
  })

  app.get('/getRandomCard', async (req, reply) => {
    const userId = Number(req.user.id)
    const response = await genRandomCardUser(userId)
    if (response.message === 'success') {
      return reply.send({ card: response.nameCard })
    }
    return reply.send({ message: response.message })
  })
  app.get('/skip12HToAccessCard', async (req, reply) => {
    const userId = Number(req.user.id)
    const response = await skip12HToAccessCard(userId)
    return reply.send(response)
  })
}
