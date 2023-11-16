export interface UserMethods {
  'user/get': {
    request: {}
    response: {
      userData: {
        countCards: number
        accessToNewCardTime: Date
      }
    }
  }
  'user/getRandomCard': {
    request: {}
    response: {
      card: string
    }
  }
  'user/incCountCards': {
    request: {}
    response: {
      message: string
      countCards: number | null
    }
  }
  'user/skip12HToAccessCard': {
    request: {}
    response: {
      type: string
    }
  }
}
