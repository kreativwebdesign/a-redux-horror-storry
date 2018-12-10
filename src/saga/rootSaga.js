import { all } from 'redux-saga/effects'
import { watchFetchClient, watchAddClient } from '../client/redux/clientSaga'

export default function* rootSaga() {
  yield all([
    watchFetchClient(),
    watchAddClient()
  ])
}