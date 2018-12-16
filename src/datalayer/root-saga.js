import { all } from 'redux-saga/effects'
import { sagas as clientSagas } from './client'
import bookingSagas from '../redux/booking/booking-saga'

export default function* rootSaga() {
  yield all([clientSagas(), bookingSagas.watchFetch(), bookingSagas.watchAdd()])
}
