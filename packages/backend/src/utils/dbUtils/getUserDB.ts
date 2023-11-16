import { User } from 'models/User/model'
import IUser from 'models/User/TypeUser'
import { getNameCards } from 'utils/getNameCards'

export async function getUserById(userId: number): Promise<IUser> {
  let user = await User.findOne({ _id: userId })
  if (!user)
    user = await User.create({
      _id: userId,
      accessToNewCardTime: Date.now() + 24 * 60 * 60 * 1000,
      arrayNotOpenCards: getNameCards(),
    })

  return user
}
