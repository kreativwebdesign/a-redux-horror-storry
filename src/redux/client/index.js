import { createDataReducer } from 'src/redux/helper/reducer-helper'
import { createSelectors } from 'src/redux/helper/selector-helper';
import createTypes from "src/redux/helper/type-helper";

const NAMESPACE = 'CLIENT'

const selectors = createSelectors(state => state.clients)

const reducer = createDataReducer(NAMESPACE)

const types = createTypes(NAMESPACE)

export {
  selectors,
  reducer,
  types
}