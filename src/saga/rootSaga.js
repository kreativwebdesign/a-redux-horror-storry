import { all } from 'redux-saga/effects'
import { watchFetchClient } from '../client/redux/clientSaga'

export default function* rootSaga() {
  yield all([
    watchFetchClient()
  ])
}