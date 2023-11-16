import { Types } from 'mongoose'

export default interface IUser {
  _id: number
  accessToNewCardTime: Date
  arrayNotOpenCards: Types.Array<string>
  countCards: number
}
