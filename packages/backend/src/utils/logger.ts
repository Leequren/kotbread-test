import { IS_DEV } from 'config/enviroment'
import { pino } from 'pino'
import PinoPretty from 'pino-pretty'

export const logger = pino(
  IS_DEV
    ? PinoPretty({
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        minimumLevel: 'trace',
      })
    : undefined,
)
