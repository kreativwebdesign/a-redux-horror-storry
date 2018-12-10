import types from './types'
import { createDataReducer } from 'src/redux/helper/reducerHelper'
import { createSelectors } from 'src/redux/helper/selectorHelper';

const selectors = createSelectors(({ clients }) => clients)

const reducer = createDataReducer('CLIENT')

export {
  selectors,
  reducer,
  types
}