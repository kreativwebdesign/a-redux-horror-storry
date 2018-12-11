import { createDataReducer } from 'src/redux/helper/reducerHelper'
import { createSelectors } from 'src/redux/helper/selectorHelper';
import createTypes from "src/redux/helper/typeHelper";

const NAMESPACE = 'CLIENT'

const selectors = createSelectors(({ clients }) => clients)

const reducer = createDataReducer(NAMESPACE)

const types = createTypes(NAMESPACE)

export {
  selectors,
  reducer,
  types
}