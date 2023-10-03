import { User } from 'apiSchema/User'

export interface UserMethods {
  'user/get': {
    request: {}
    response: User
  }
}
