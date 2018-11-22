import { FETCH } from 'src/commons/constants/api'
import types from './types'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as api from 'src/api/api'

export function* fetchUser() {
  yield put({ type: types.FETCH_USER_PENDING })
  const response = yield call(api.fetchUser);
  response.meta.status.operation = FETCH
  if (response.meta.status.error) {
    yield put({ type: types.FETCH_USER_FAILED, payload: response })
  } else {
    yield put({ type: types.FETCH_USER_SUCCEEDED, payload: response })
  }
}

export function* watchFetchUser() {
  yield takeEvery(types.FETCH_USER, fetchUser)
}