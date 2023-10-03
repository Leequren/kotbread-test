import { UserMethods } from 'apiMethods/User'

export type ApiMethods = UserMethods

export type ApiEndpoints = keyof ApiMethods
export type ApiReq = ApiMethods[ApiEndpoints]['request']
export type ApiRes = ApiMethods[ApiEndpoints]['response']

export * from './User'
