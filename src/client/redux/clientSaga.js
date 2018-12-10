import types from './types'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as api from 'src/api/api'
import { setFetchOperation } from 'src/redux/helper/addOperationHelper';

export function* fetchClient() {
  yield put({ type: types.FETCH_CLIENT_PENDING })
  const response = yield call(api.fetchClient);
  const payload = setFetchOperation(response);
  if (response.meta.status.error) {
    yield put({ type: types.FETCH_CLIENT_FAILED, payload })
  } else {
    yield put({ type: types.FETCH_CLIENT_SUCCEEDED, payload })
  }
}

export function* watchFetchClient() {
  yield takeEvery(types.FETCH_CLIENT, fetchClient)
}