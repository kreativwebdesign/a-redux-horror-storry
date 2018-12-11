import { types } from './index'
import * as api from 'src/api/api'
import { createFetchSaga, createWatchFetch, createAddSaga, createWatchAdd } from 'src/redux/helper/sagaHelper'


const fetchBooking = createFetchSaga({ apiCall: api.fetchBooking, types })

const watchFetchBooking = createWatchFetch({ types, fetchSaga: fetchBooking })

const addBooking = createAddSaga({ apiCall: api.postBooking, types })

const watchAddBooking = createWatchAdd({ types, addSaga: addBooking })

export { fetchBooking, watchFetchBooking, addBooking, watchAddBooking }
