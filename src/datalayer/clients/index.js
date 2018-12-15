import {
  createDataSelector,
  createTimetableSelector
} from 'src/redux/helper/selector-helper'
import { createDataReducer } from 'src/datalayer/helper/reducer-helper'

const NAMESPACE = 'CLIENTS'

export const dataSelector = createDataSelector(NAMESPACE)

export const timetableSelector = createTimetableSelector(NAMESPACE)

export const clientReducer = createDataReducer(NAMESPACE)
