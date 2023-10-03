import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({})

export const UserModel = mongoose.model('User', UserSchema)
