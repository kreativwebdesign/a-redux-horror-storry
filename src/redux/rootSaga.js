import { all } from 'redux-saga/effects'
import clientSagas from './client/clientSaga'
import bookingSagas from './booking/bookingSaga'

export default function* rootSaga() {
  yield all([
    clientSagas.watchFetch(),
    clientSagas.watchAdd(),
    bookingSagas.watchFetch(),
    bookingSagas.watchAdd(),
  ])
}