import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import {
  createDataReducer,
  createTimetableReducer
} from 'src/datalayer/helper/reducer-helper'
import { NAMESPACE, SINGLE_NAMESPACE } from './namespace'

import {
  reducer as addReducer,
  saga as addBookingSaga,
  selectors as addBookingSelectors,
  connectors as addBookingConnectors,
  CTRL_NAMESPACE as addCtrlName
} from './controllers/add-booking'

import {
  saga as fetchSingleBookingSaga,
  reducer as fetchSingleReducer,
  selectors as fetchSingleBookingSelectors,
  connectors as fetchSingleBookingConnectors,
  CTRL_NAMESPACE as fetchSingleCtrlName
} from './controllers/fetch-single-booking'
import {
  saga as fetchPaginatedBookingsSaga,
  reducer as fetchPaginatedReducer,
  selectors as fetchPaginatedBookingsSelectors,
  connectors as fetchPaginatedBookingsConnectors,
  CTRL_NAMESPACE as fetchPaginatedCtrlName
} from './controllers/fetch-paginated-bookings'

import { timetableSelectors, dataSelectors } from './selectors'

import { types } from './types'

export const dataReducer = createDataReducer(NAMESPACE, SINGLE_NAMESPACE)

export const timetableReducer = createTimetableReducer(
  NAMESPACE,
  SINGLE_NAMESPACE
)

export const controllersReducer = combineReducers({
  [fetchSingleCtrlName]: fetchSingleReducer,
  [fetchPaginatedCtrlName]: fetchPaginatedReducer,
  [addCtrlName]: addReducer
})

export const connectors = {
  [fetchSingleCtrlName]: fetchSingleBookingConnectors,
  [fetchPaginatedCtrlName]: fetchPaginatedBookingsConnectors,
  [addCtrlName]: addBookingConnectors
}

export function* sagas() {
  yield all([
    fetchSingleBookingSaga(),
    fetchPaginatedBookingsSaga(),
    addBookingSaga()
  ])
}

export const selectors = {
  ...timetableSelectors,
  ...dataSelectors,
  [fetchSingleCtrlName]: fetchSingleBookingSelectors,
  [fetchPaginatedCtrlName]: fetchPaginatedBookingsSelectors,
  [addCtrlName]: addBookingSelectors
}

export { timetableSelectors, dataSelectors, types }
