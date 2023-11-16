import { User } from 'models/User/model'

export async function skip12HToAccessCard(
  userId: number,
): Promise<{ type: string }> {
  const user = await User.findOne({ _id: userId })
  if (user) {
    await User.updateOne(
      { _id: userId },
      {
        accessToNewCardTime: new Date(
          user.accessToNewCardTime.getTime() - 12 * 60 * 60 * 1000,
        ),
      },
    )
    return { type: 'success' }
  }
  return { type: 'error' }
}
