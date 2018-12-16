import {
  createDataSelectors,
  createTimetableSelectors
} from 'src/datalayer/helper/selector-helper'
import { NAMESPACE } from './namespace'

export const timetableSelectors = createTimetableSelectors(NAMESPACE)

export const dataSelectors = createDataSelectors(NAMESPACE)
