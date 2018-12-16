import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import {
  createDataSelectors,
  createTimetableSelectors
} from 'src/datalayer/helper/selector-helper'
import createTypes from 'src/datalayer/helper/type-helper'
import {
  createDataReducer,
  createTimetableReducer
} from 'src/datalayer/helper/reducer-helper'
import { reducer as fetchSingleReducer } from './controllers/fetch-single-client'
import { NAMESPACE, SINGLE_NAMESPACE } from './namespace'
import { saga as fetchSingleClientSaga } from './controllers/fetch-single-client'
import {
  selectors as fetchSingleClientSelectors,
  connectors as fetchSingleClientConnectors
} from './controllers/fetch-single-client'

export const dataReducer = createDataReducer(NAMESPACE, SINGLE_NAMESPACE)
export const dataSelectors = createDataSelectors(NAMESPACE)

export const timetableReducer = createTimetableReducer(
  NAMESPACE,
  SINGLE_NAMESPACE
)
export const timetableSelectors = createTimetableSelectors(NAMESPACE)

export const controllersReducer = combineReducers({
  fetchSingle: fetchSingleReducer
})

export const selectors = {
  ...timetableSelectors,
  ...dataSelectors,
  fetchSingle: fetchSingleClientSelectors
}

export const connectors = {
  fetchSingle: fetchSingleClientConnectors
}

export const types = createTypes(NAMESPACE, SINGLE_NAMESPACE)

export function* sagas() {
  yield all([fetchSingleClientSaga()])
}
