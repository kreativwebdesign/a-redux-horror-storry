import {
  createDataReducer,
  createTimetableReducer
} from 'src/redux/helper/reducer-helper'
import { createSelectors } from 'src/redux/helper/selector-helper'
import createTypes from 'src/redux/helper/type-helper'

const NAMESPACE = 'BOOKING'

const selectors = createSelectors(state => state.data.bookings)

const dataReducer = createDataReducer(NAMESPACE)
const timetableReducer = createTimetableReducer(NAMESPACE)

const types = createTypes(NAMESPACE)

export { selectors, dataReducer, timetableReducer, types }
