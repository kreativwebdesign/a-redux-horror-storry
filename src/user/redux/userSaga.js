// import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as api from '../../api/api'

export const FETCH_USER = 'USER/FETCH'
export const FETCH_USER_PENDING = 'USER/FETCH:PENDING'
export const FETCH_USER_SUCCESS = 'USER/FETCH:SUCCESS'
export const FETCH_USER_FAILED = 'USER/FETCH:FAILED'

export function* fetchUser() {
  yield put({ type: FETCH_USER_PENDING })
  const response = yield call(api.fetchUser);
  if (response.meta.status.error) {
    yield put({ type: FETCH_USER_FAILED, payload: response })
  } else {
    yield put({ type: FETCH_USER_SUCCESS, payload: response })
  }
}

export function* watchFetchUser() {
  yield takeEvery(FETCH_USER, fetchUser)
}