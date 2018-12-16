import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import {
  createDataReducer,
  createTimetableReducer
} from 'src/datalayer/helper/reducer-helper'
import { reducer as fetchSingleReducer } from './controllers/fetch-single-client'
import { reducer as fetchPaginatedReducer } from './controllers/fetch-paginated-clients'
import { NAMESPACE, SINGLE_NAMESPACE } from './namespace'
import { saga as fetchSingleClientSaga } from './controllers/fetch-single-client'
import { saga as fetchPaginatedClientsSaga } from './controllers/fetch-paginated-clients'

import {
  selectors as fetchSingleClientSelectors,
  connectors as fetchSingleClientConnectors,
  CTRL_NAMESPACE as fetchSingleCtrlName
} from './controllers/fetch-single-client'
import {
  selectors as fetchPaginatedClientsSelectors,
  connectors as fetchPaginatedClientsConnectors,
  CTRL_NAMESPACE as fetchPaginatedCtrlName
} from './controllers/fetch-paginated-clients'
import {
  timetableSelectors,
  dataSelectors
} from './selectors'
import { types } from './types'

export const dataReducer = createDataReducer(NAMESPACE, SINGLE_NAMESPACE)

export const timetableReducer = createTimetableReducer(
  NAMESPACE,
  SINGLE_NAMESPACE
)

export const controllersReducer = combineReducers({
  [fetchSingleCtrlName]: fetchSingleReducer,
  [fetchPaginatedCtrlName]: fetchPaginatedReducer,
})

export const connectors = {
  [fetchSingleCtrlName]: fetchSingleClientConnectors,
  [fetchPaginatedCtrlName]: fetchPaginatedClientsConnectors
}


export function* sagas() {
  yield all([fetchSingleClientSaga(), fetchPaginatedClientsSaga()])
}

export const selectors = {
  ...timetableSelectors,
  ...dataSelectors,
  [fetchSingleCtrlName]: fetchSingleClientSelectors,
  [fetchPaginatedCtrlName]: fetchPaginatedClientsSelectors
}

export {
  timetableSelectors,
  dataSelectors,
  types
}
