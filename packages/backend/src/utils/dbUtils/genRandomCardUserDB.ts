import { User } from 'models/User/model'
import genRandomInRange from 'utils/genRandomInRange'
import { getNameCards } from 'utils/getNameCards'
import { logger } from 'utils/logger'

export async function genRandomCardUser(userId: number): Promise<{
  message: 'user not found' | 'count cards is empty' | 'success'
  nameCard: string | null
}> {
  const user = await User.findOne({ _id: userId })
  if (!user) return { message: 'user not found', nameCard: null }
  if (user.countCards === 0)
    return { message: 'count cards is empty', nameCard: null }

  const arrayCards = user.arrayNotOpenCards

  const randomIndex = genRandomInRange(0, arrayCards.length - 1)
  const nameCard: string = <string>arrayCards[randomIndex]

  let newArrayCards = arrayCards.filter((card) => card !== nameCard)
  logger.info(newArrayCards)

  if (newArrayCards.length === 0) {
    const cards = getNameCards()
    newArrayCards = cards ? cards : []
  }

  await User.updateOne(
    { _id: userId },
    { arrayNotOpenCards: newArrayCards, countCards: user.countCards - 1 },
  )
  return { message: 'success', nameCard: nameCard }
}
