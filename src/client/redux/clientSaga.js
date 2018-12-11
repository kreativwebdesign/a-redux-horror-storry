import { types } from './index'
import * as api from 'src/api/api'
import { createFetchSaga, createWatchFetch, createAddSaga, createWatchAdd } from 'src/redux/helper/sagaHelper'


const fetchClient = createFetchSaga({ apiCall: api.fetchClient, types })

const watchFetchClient = createWatchFetch({ types, fetchSaga: fetchClient })

const addClient = createAddSaga({ apiCall: api.postClient, types })

const watchAddClient = createWatchAdd({ types, addSaga: addClient })

export { fetchClient, watchFetchClient, addClient, watchAddClient }
