import { MONGO_URI } from 'config/enviroment'
import mongoose from 'mongoose'

import { FastifyApp, FastifyAppOptions } from '../index'

export default async function MongoPlugin(
  app: FastifyApp,
  { gracefulShutdown }: FastifyAppOptions,
): Promise<void> {
  const logger = app.log.child({ name: 'Mongo' })

  mongoose.set('strictQuery', true)

  try {
    logger.info(MONGO_URI)
    await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 1_000 })

    gracefulShutdown.subscribe(async () => {
      await mongoose.connection.close()
      logger.info('Connection closed')
    })

    logger.info('Connected successfully')
  } catch (e) {
    logger.fatal(`Can't connect to Mongo`)
  }
}
