import { put, call, takeEvery } from 'redux-saga/effects'
import { types } from '../../../types'
import * as api from 'src/api'

function* addClient({ payload }) {
  yield put({ type: types.ADD.PENDING, payload: { id: payload.id } })
  const response = yield call(api.postClient, payload)
  if (response.meta.status.error) {
    yield put({
      type: types.ADD.FAILED,
      payload: { ...response, id: payload.id }
    })
  } else {
    yield put({ type: types.ADD.SUCCESS, payload: response })
  }
}

export function* watchAddClient() {
  yield takeEvery(types.ADD.DO, addClient)
}
