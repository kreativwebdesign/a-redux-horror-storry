import { put, select, call, takeEvery } from 'redux-saga/effects'
import { stringify as buildRequestName } from 'qs'
import { selectors } from '../selectors'
import { timetableSelectors, dataSelectors } from '../../../selectors'
import { types } from '../../../types'
import * as api from 'src/api'

function* fetchPaginatedClient({ payload: { from, to } }) {
  const requestName = buildRequestName({ from, to })
  const resourceAvailable = yield select(
    selectors.isResourceAvailable(requestName)
  )
  const resourceList = yield resourceAvailable ? select(dataSelectors.selectPaginatedList({ from, to })) : undefined
  const resourceValid = yield resourceList ? select(
    timetableSelectors.areResourcesValid(resourceList)
  ) : false
  if (resourceValid) {
    return
  } else {
    yield put({ type: types.FETCH.PENDING, payload: { requestName } })
    const response = yield call(api.fetchClients, { from, to })
    const payload = { ...response, requestName }
    if (response.meta.status.error) {
      yield put({ type: types.FETCH.FAILED, payload })
    } else {
      yield put({ type: types.FETCH.SUCCESS, payload })
    }
  }
}

export function* watchFetchPaginatedClient() {
  yield takeEvery(types.FETCH.DO, fetchPaginatedClient)
}
