import { put, select, call, takeEvery } from 'redux-saga/effects'
import { selectors } from '../selectors'
import { timetableSelectors } from '../../../selectors'
import { types } from '../../../types'
import * as api from 'src/api'

function* fetchSingleBooking({ payload: { bookingId } }) {
  const resourceAvailable = yield select(
    selectors.isResourceAvailable(bookingId)
  )
  const resourceValid = yield select(
    timetableSelectors.isResourceValid(bookingId)
  )
  if (resourceAvailable && resourceValid) {
    return
  } else {
    yield put({ type: types.FETCH_SINGLE.PENDING, payload: { id: bookingId } })
    const payload = yield call(api.fetchSingleBooking, bookingId)
    if (payload.meta.status.error) {
      yield put({ type: types.FETCH_SINGLE.FAILED, payload })
    } else {
      yield put({ type: types.FETCH_SINGLE.SUCCESS, payload })
    }
  }
}

export function* watchFetchSingleBooking() {
  yield takeEvery(types.FETCH_SINGLE.DO, fetchSingleBooking)
}
