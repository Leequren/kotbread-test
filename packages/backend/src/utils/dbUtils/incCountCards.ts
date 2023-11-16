import { User } from 'models/User/model'
import IUser from 'models/User/TypeUser'
import { logger } from 'utils/logger'

export default async function incCountCards(
  userId: number,
): Promise<{ message: string; countCards: number | null }> {
  const user = await User.findOne({ _id: userId })
  const curDate: number = Date.now()
  if (!user) return { message: 'error', countCards: null }
  // logger.info(user)

  logger.info(user.accessToNewCardTime.getTime())
  // logger.info(user.accessToNewCardTime.getMilliseconds())
  logger.info(curDate)
  logger.info(user && true)
  logger.info(user.accessToNewCardTime.getTime() < curDate)

  if (user && user.accessToNewCardTime.getTime() > curDate) {
    return { message: 'need more time', countCards: null }
  }
  await User.updateOne<IUser>(
    { _id: userId },
    {
      accessToNewCardTime: Date.now() + 24 * 60 * 60 * 1000,
      countCards: user.countCards + 1,
    },
  )
  return { message: 'success', countCards: user.countCards + 1 }
}
