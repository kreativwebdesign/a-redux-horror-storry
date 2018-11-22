import { createDataReducer } from 'src/redux/helper/reducerHelper'
import { createSelectors } from 'src/redux/helper/selectorHelper';

const selectors = createSelectors(({ user }) => user)

const reducer = createDataReducer('USER')

export {
  selectors,
  reducer,
}