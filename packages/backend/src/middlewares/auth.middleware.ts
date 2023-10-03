import { AuthenticationError } from 'config/errors'
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'

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

  if (!authUrl) {
    throw new AuthenticationError('Wrong authorization header format')
  }

  done()
}
