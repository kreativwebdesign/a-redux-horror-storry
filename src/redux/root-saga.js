import { all } from 'redux-saga/effects'
import clientSagas from './client/client-saga'
import bookingSagas from './booking/booking-saga'

export default function* rootSaga() {
  yield all([
    clientSagas.watchFetch(),
    clientSagas.watchAdd(),
    bookingSagas.watchFetch(),
    bookingSagas.watchAdd()
  ])
}
