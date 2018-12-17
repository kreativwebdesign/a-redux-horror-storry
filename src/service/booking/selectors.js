import {
  createDataSelectors,
  createTimetableSelectors
} from 'src/service/helper/selector-helper'
import { NAMESPACE } from './namespace'

export const timetableSelectors = createTimetableSelectors(NAMESPACE)

export const dataSelectors = createDataSelectors(NAMESPACE)
