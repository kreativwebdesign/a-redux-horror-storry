import { all } from 'redux-saga/effects'
import clientSagas from 'src/client/redux/clientSaga'
import bookingSagas from 'src/booking/redux/bookingSaga'

export default function* rootSaga() {
  yield all([
    clientSagas.watchFetch(),
    clientSagas.watchAdd(),
    bookingSagas.watchFetch(),
    bookingSagas.watchAdd(),
  ])
}