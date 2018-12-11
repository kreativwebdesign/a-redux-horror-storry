import { all } from 'redux-saga/effects'
import { watchFetchClient, watchAddClient } from 'src/client/redux/clientSaga'
import { watchFetchBooking, watchAddBooking } from 'src/booking/redux/bookingSaga'

export default function* rootSaga() {
  yield all([
    watchFetchClient(),
    watchAddClient(),
    watchFetchBooking(),
    watchAddBooking(),
  ])
}