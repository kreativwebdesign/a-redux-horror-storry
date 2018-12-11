import { createDataReducer } from 'src/redux/helper/reducerHelper'
import { createSelectors } from 'src/redux/helper/selectorHelper';
import createTypes from "src/redux/helper/typeHelper";

const NAMESPACE = 'BOOKING'

const selectors = createSelectors(({ bookings }) => bookings)

const reducer = createDataReducer(NAMESPACE)

const types = createTypes(NAMESPACE)

export {
  selectors,
  reducer,
  types
}