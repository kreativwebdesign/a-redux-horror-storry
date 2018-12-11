import { put, takeEvery, call } from 'redux-saga/effects'
import { setFetchOperation, setAddOperation } from './addOperationHelper'

const createWatch = ({ type, saga }) => function* watchSaga() {
  yield takeEvery(type, saga)
}

const createSaga = ({ apiCall, types, setOperation }) => function* saga(data = {}) {
  yield put({ type: types.PENDING })
  const response = yield call(() => apiCall(data.payload));
  const payload = setOperation(response);
  if (response.meta.status.error) {
    yield put({ type: types.FAILED, payload })
  } else {
    yield put({ type: types.SUCCESS, payload })
  }
}

export const createFetchSaga = ({ apiCall, types }) => createSaga({
  types: types.FETCH,
  apiCall,
  setOperation: setFetchOperation
})

export const createAddSaga = ({ apiCall, types }) => createSaga({
  types: types.ADD,
  apiCall,
  setOperation: setAddOperation
})

export const createWatchFetch = ({ types, fetchSaga }) => createWatch({
  type: types.FETCH.DO,
  saga: fetchSaga
})

export const createWatchAdd =  ({ types, addSaga }) => createWatch({
  type: types.ADD.DO,
  saga: addSaga
})

export const createBasicSagas = ({ api, types }) => {
  const fetchSaga = createFetchSaga({ apiCall: api.fetch, types })
  const addSaga = createAddSaga({ apiCall: api.post, types })
  return {
    fetchSaga,
    addSaga,
    watchFetch: createWatchFetch({ types, fetchSaga }),
    watchAdd: createWatchAdd({ types, addSaga }),
  }
}