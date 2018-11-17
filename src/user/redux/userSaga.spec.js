import { put, call } from 'redux-saga/effects'

import { fetchUser, FETCH_USER_PENDING, FETCH_USER_SUCCESS } from './userSaga'
import * as api from '../../api/api'

test('user saga', () => {
  const gen = fetchUser()
  expect(gen.next().value).toEqual(put({ type: FETCH_USER_PENDING }))
  expect(gen.next().value).toEqual(call(api.fetchUser))
  expect(gen.next().value).toEqual(put({type: FETCH_USER_SUCCESS, data: undefined }))
  expect(gen.next()).toEqual({ done: true, value: undefined })
})