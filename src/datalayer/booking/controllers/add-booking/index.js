import { watchAddBooking } from './sagas'
import { createAddCtrlReducer } from 'src/datalayer/helper/reducer-helper'
import { NAMESPACE } from '../../namespace'
import { NAMESPACE as CTRL_NAMESPACE } from './namespace'
import { selectors } from './selectors'
import * as connectors from './connectors'

export const reducer = createAddCtrlReducer(NAMESPACE)

export { watchAddBooking as saga, CTRL_NAMESPACE, connectors, selectors }
