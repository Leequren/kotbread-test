import { AuthenticationError } from 'config/errors'
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import { getUserId } from 'utils/getUserIdFromAuth'
import { logger } from 'utils/logger'

export const AuthMiddleware = (
  request: FastifyRequest,
  _reply: FastifyReply,
  done: HookHandlerDoneFunction,
): void => {
  const auth = request.headers.authorization

  if (!auth) {
    throw new AuthenticationError('Authorization header is not defined')
  }

  const authUrl = auth.split(' ').at(1)
  logger.info(authUrl, getUserId(String(authUrl)))
  if (!authUrl) {
    throw new AuthenticationError('Wrong authorization header format')
  }

  request.user = { id: getUserId(String(authUrl)) }
  done()
}
