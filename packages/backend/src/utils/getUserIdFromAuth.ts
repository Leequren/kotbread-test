export const getUserId = (authString: string): string => {
  let userId: string = ''
  // let userInfoBeginnging = authString.indexOf('vk_user_id')
  for (
    let userIdIndex = authString.indexOf('vk_user_id') + 'vk_user_id='.length;
    authString[userIdIndex] !== '&';
    ++userIdIndex
  ) {
    // logger.info(authString[userIdIndex])
    userId += authString[userIdIndex]
  }
  return userId
}
