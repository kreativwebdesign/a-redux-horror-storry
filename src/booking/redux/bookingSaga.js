import { types } from './index'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as api from 'src/api/api'
import { setFetchOperation, setAddOperation } from 'src/redux/helper/addOperationHelper';

export function* fetchBooking() {
  yield put({ type: types.FETCH.PENDING })
  const response = yield call(api.fetchBooking);
  const payload = setFetchOperation(response);
  if (response.meta.status.error) {
    yield put({ type: types.FETCH.FAILED, payload })
  } else {
    yield put({ type: types.FETCH.SUCCESS, payload })
  }
}

export function* watchFetchBooking() {
  yield takeEvery(types.FETCH.DO, fetchBooking)
}

export function* addBooking({ payload: booking }) {
  yield put({ type: types.ADD.PENDING })
  const response = yield call(() => api.postBooking(booking));
  const payload = setAddOperation(response);
  if (response.meta.status.error) {
    yield put({ type: types.ADD.FAILED, payload })
  } else {
    yield put({ type: types.ADD.SUCCESS, payload })
  }
}

export function* watchAddBooking() {
  yield takeEvery(types.ADD.DO, addBooking)
}