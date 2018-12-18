import { put, call, takeEvery } from 'redux-saga/effects'
import { types } from '../../../types'
import { push } from 'src/utils/js/history'
import * as api from 'src/api'

function* addBooking({ payload }) {
  yield put({ type: types.ADD.PENDING, payload: { id: payload.id } })
  const response = yield call(api.postBooking, payload)
  if (response.meta.status.error) {
    yield put({
      type: types.ADD.FAILED,
      payload: { ...response, id: payload.id }
    })
  } else {
    yield put({ type: types.ADD.SUCCESS, payload: response })
    if (payload.id === undefined) {
      yield call(push, `/bookings/${response.list[0]}`)
    }
  }
}

export function* watchAddBooking() {
  yield takeEvery(types.ADD.DO, addBooking)
}
