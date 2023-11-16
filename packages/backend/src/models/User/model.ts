import mongoose from 'mongoose'
import IUser from './TypeUser'

const UserSchema = new mongoose.Schema<IUser>({
  _id: {
    type: Number,
    required: true,
  },
  accessToNewCardTime: {
    type: Date,
    required: true,
  },
  arrayNotOpenCards: {
    type: [String],
    required: true,
  },
  countCards: {
    type: Number,
    default: 1,
  },
})

export const User = mongoose.model<IUser>('User', UserSchema)
