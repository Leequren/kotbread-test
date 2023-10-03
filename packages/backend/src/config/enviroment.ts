import dotenv from 'dotenv'

dotenv.config()

export type Enviroment = 'development' | 'production'

export const ENVIROMENT = (process.env.NODE_ENV || 'development') as Enviroment
export const IS_DEV = ENVIROMENT === 'development'

export const MONGO_URI = process.env.MONGO_URI || ''
export const LISTEN_PORT = Number(process.env.LISTEN_PORT) || 5000
