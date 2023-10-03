import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FetchingStatus, makeRequest } from 'utils/api'

import { User } from '@kotbread-test/shared'

export interface UserState {
  user?: User
  status: FetchingStatus
  currentRequestId?: string
}

export const initialState: UserState = {
  user: undefined,
  status: FetchingStatus.IDLE,
  currentRequestId: undefined,
}

export const fetchSelf = createAsyncThunk<
  User | undefined,
  void,
  { state: { user: UserState } }
>('user/get', async (_, { getState, requestId }) => {
  const { status, currentRequestId } = getState().user

  if (status !== FetchingStatus.PENDING || requestId !== currentRequestId)
    return

  return makeRequest('user/get')
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelf.pending, (state, action) => {
        if (state.status !== FetchingStatus.IDLE) return

        state.status = FetchingStatus.PENDING
        state.currentRequestId = action.meta.requestId
      })
      .addCase(fetchSelf.fulfilled, (state, action) => {
        const { requestId } = action.meta

        if (
          state.status !== FetchingStatus.PENDING ||
          state.currentRequestId !== requestId ||
          !action.payload
        ) {
          return
        }

        state.status = FetchingStatus.FULFILLED
        state.user = action.payload
        state.currentRequestId = undefined
      })
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
