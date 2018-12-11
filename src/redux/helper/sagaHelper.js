import { put, takeEvery, call } from 'redux-saga/effects'
import { setFetchOperation, setAddOperation } from './addOperationHelper'

export const createFetchSaga = ({ apiCall, types }) => function* fetchSaga() {
  yield put({ type: types.FETCH.PENDING })
  const response = yield call(apiCall);
  const payload = setFetchOperation(response);
  if (response.meta.status.error) {
    yield put({ type: types.FETCH.FAILED, payload })
  } else {
    yield put({ type: types.FETCH.SUCCESS, payload })
  }
}

export const createWatchFetch = ({ types, fetchSaga }) => function* watchFetchSaga() {
  yield takeEvery(types.FETCH.DO, fetchSaga)
}

export const createAddSaga = ({ apiCall, types }) => function* addSaga(data) {
  yield put({ type: types.ADD.PENDING })
  const response = yield call(() => apiCall(data.payload));
  const payload = setAddOperation(response);
  if (response.meta.status.error) {
    yield put({ type: types.ADD.FAILED, payload })
  } else {
    yield put({ type: types.ADD.SUCCESS, payload })
  }
}

export const createWatchAdd = ({ types, addSaga }) => function* watchFetchSaga() {
  yield takeEvery(types.ADD.DO, addSaga)
}