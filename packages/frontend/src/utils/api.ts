import axios, { AxiosRequestConfig } from 'axios'
import axiosRetry from 'axios-retry'
import { API_URL } from 'src/config/constants'

import { ApiEndpoints, ApiMethods } from '@kotbread-test/shared'

import { getLocationSearch } from './getLocationSearch'

axiosRetry(axios, {
  retries: 3,
  retryDelay: () => {
    return 1000
  },
})

export enum FetchingStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export const makeRequest = async <Method extends ApiEndpoints>(
  method: Method,
  params: ApiMethods[Method]['request'] = {},
  requestOptions?: AxiosRequestConfig,
): Promise<ApiMethods[Method]['response']> => {
  const headers = {
    Authorization: `Bearer ${getLocationSearch()}`,
  }
  const { data } = await axios(`${API_URL}/${method}`, {
    method: requestOptions?.method ?? 'get',
    headers,
    params,
    ...requestOptions,
  })
  return data
}
