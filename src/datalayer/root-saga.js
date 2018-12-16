import { all } from 'redux-saga/effects'
import { sagas as clientSagas } from './client'
import { sagas as bookingSagas } from './booking'

export default function* rootSaga() {
  yield all([clientSagas(), bookingSagas()])
}
