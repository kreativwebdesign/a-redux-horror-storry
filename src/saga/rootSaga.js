import { all } from 'redux-saga/effects'
import { watchFetchUser } from '../user/redux/userSaga'

export default function* rootSaga() {
  yield all([
    watchFetchUser()
  ])
}