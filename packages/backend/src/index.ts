import autoload from '@fastify/autoload'
import cors from '@fastify/cors'
import formbody from '@fastify/formbody'
import fastifyStatic from '@fastify/static'
import { LISTEN_PORT } from 'config/enviroment'
import fastify from 'fastify'
import path from 'path'
import { fileURLToPath } from 'url'
import { GracefulShutdown } from 'utils/gracefulShutdown'
import { logger } from 'utils/logger'

export const app = fastify({ logger })
export type FastifyApp = typeof app
export type FastifyAppOptions = {
  gracefulShutdown: GracefulShutdown
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const setupServer = async (gracefulShutdown: GracefulShutdown) => {
  const uploadsDirectory = path.join(__dirname, 'uploads')

  await app.register(cors, { origin: '*' })
  await app.register(formbody)

  await app.register(fastifyStatic, {
    root: uploadsDirectory,
    prefix: '/uploads/',
  })

  await app.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
    forceESM: true,
    options: {
      gracefulShutdown,
    },
  })

  await app.register(autoload, {
    dir: path.join(__dirname, 'routes'),
    forceESM: true,
    dirNameRoutePrefix: false,
    options: {
      gracefulShutdown,
    },
  })
}

const start = async () => {
  const gracefulShutdown = new GracefulShutdown()

  try {
    logger.info('Waiting server to start...')

    await setupServer(gracefulShutdown)
    await app.ready()

    gracefulShutdown.subscribe(async () => {
      await app.close()
      logger.info('Server stopped')
    })

    logger.info('Server was started successfully')

    await app.listen({ port: LISTEN_PORT })
  } catch (e) {
    logger.fatal(e)
    process.exit(1)
  }
}

start()
