import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import {
  createDataReducer,
  createTimetableReducer
} from 'src/datalayer/helper/reducer-helper'
import { NAMESPACE, SINGLE_NAMESPACE } from './namespace'

import {
  reducer as addReducer,
  saga as addClientSaga,
  selectors as addClientSelectors,
  connectors as addClientConnectors,
  CTRL_NAMESPACE as addCtrlName
} from './controllers/add-client'

import {
  saga as fetchSingleClientSaga,
  reducer as fetchSingleReducer,
  selectors as fetchSingleClientSelectors,
  connectors as fetchSingleClientConnectors,
  CTRL_NAMESPACE as fetchSingleCtrlName
} from './controllers/fetch-single-client'
import {
  saga as fetchPaginatedClientsSaga,
  reducer as fetchPaginatedReducer,
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
  [addCtrlName]: addReducer,
})

export const connectors = {
  [fetchSingleCtrlName]: fetchSingleClientConnectors,
  [fetchPaginatedCtrlName]: fetchPaginatedClientsConnectors,
  [addCtrlName]: addClientConnectors,
}


export function* sagas() {
  yield all([fetchSingleClientSaga(), fetchPaginatedClientsSaga(), addClientSaga()])
}

export const selectors = {
  ...timetableSelectors,
  ...dataSelectors,
  [fetchSingleCtrlName]: fetchSingleClientSelectors,
  [fetchPaginatedCtrlName]: fetchPaginatedClientsSelectors,
  [addCtrlName]: addClientSelectors
}

export {
  timetableSelectors,
  dataSelectors,
  types
}
