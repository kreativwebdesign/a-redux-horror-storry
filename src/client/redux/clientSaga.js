import types from './types'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as api from 'src/api/api'
import { setFetchOperation, setAddOperation } from 'src/redux/helper/addOperationHelper';

export function* fetchClient() {
  yield put({ type: types.FETCH.PENDING })
  const response = yield call(api.fetchClient);
  const payload = setFetchOperation(response);
  if (response.meta.status.error) {
    yield put({ type: types.FETCH.FAILED, payload })
  } else {
    yield put({ type: types.FETCH.SUCCESS, payload })
  }
}

export function* watchFetchClient() {
  yield takeEvery(types.FETCH.DO, fetchClient)
}

export function* addClient({ payload: client }) {
  console.log(client)
  yield put({ type: types.ADD.PENDING })
  const response = yield call(() => api.postClient(client));
  const payload = setAddOperation(response);
  if (response.meta.status.error) {
    yield put({ type: types.ADD.FAILED, payload })
  } else {
    yield put({ type: types.ADD.SUCCESS, payload })
  }
}

export function* watchAddClient() {
  yield takeEvery(types.ADD.DO, addClient)
}