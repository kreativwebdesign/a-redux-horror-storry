import types from './types'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as api from 'src/api/api'
import { setFetchOperation } from 'src/redux/helper/addOperationHelper';

export function* fetchUser() {
  yield put({ type: types.FETCH_USER_PENDING })
  const response = yield call(api.fetchUser);
  const payload = setFetchOperation(response);
  if (response.meta.status.error) {
    yield put({ type: types.FETCH_USER_FAILED, payload })
  } else {
    yield put({ type: types.FETCH_USER_SUCCEEDED, payload })
  }
}

export function* watchFetchUser() {
  yield takeEvery(types.FETCH_USER, fetchUser)
}