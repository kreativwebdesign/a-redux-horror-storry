import { put, select, call, takeEvery } from 'redux-saga/effects'
import { selectors } from '../selectors'
import { timetableSelectors } from '../../../selectors'
import { types } from '../../../types'
import * as api from 'src/api'

function* fetchSingleClient({ payload: { clientId } }) {
  const resourceAvailable = yield select(
    selectors.isResourceAvailable(clientId)
  )
  const resourceValid = yield select(
    timetableSelectors.isResourceValid(clientId)
  )
  if (resourceAvailable && resourceValid) {
    return
  } else {
    yield put({ type: types.FETCH_SINGLE.PENDING, payload: { id: clientId } })
    const payload = yield call(api.fetchSingleClient, clientId)
    if (payload.meta.status.error) {
      yield put({ type: types.FETCH_SINGLE.FAILED, payload })
    } else {
      yield put({ type: types.FETCH_SINGLE.SUCCESS, payload })
    }
  }
}

export function* watchFetchSingleClient() {
  yield takeEvery(types.FETCH_SINGLE.DO, fetchSingleClient)
}
