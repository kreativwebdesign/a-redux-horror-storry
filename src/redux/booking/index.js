import { createDataReducer } from 'src/redux/helper/reducer-helper'
import { createSelectors } from 'src/redux/helper/selector-helper';
import createTypes from "src/redux/helper/type-helper";

const NAMESPACE = 'BOOKING'

const selectors = createSelectors(state => state.bookings)

const reducer = createDataReducer(NAMESPACE)

const types = createTypes(NAMESPACE)

export {
  selectors,
  reducer,
  types
}
