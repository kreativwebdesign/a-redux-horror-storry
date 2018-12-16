import {
  createDataReducer,
  createTimetableReducer
} from 'src/redux/helper/reducer-helper'
import {
  createSelectors,
  createDataSelector,
  createTimetableSelector
} from 'src/redux/helper/selector-helper'
import createTypes from 'src/redux/helper/type-helper'

const NAMESPACE = 'CLIENTS'

const selectors = createSelectors(state => state.data.clients)
const timetableSelector = createTimetableSelector(NAMESPACE)
const dataSelector = createDataSelector(NAMESPACE)

const dataReducer = createDataReducer(NAMESPACE)
const timetableReducer = createTimetableReducer(NAMESPACE)

const types = createTypes(NAMESPACE)

export {
  selectors,
  timetableSelector,
  dataSelector,
  dataReducer,
  timetableReducer,
  types
}
