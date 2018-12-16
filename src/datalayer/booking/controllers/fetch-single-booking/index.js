import { createFetchSingleCtrlReducer } from 'src/datalayer/helper/reducer-helper'
import { NAMESPACE, SINGLE_NAMESPACE } from '../../namespace'
import { NAMESPACE as CTRL_NAMESPACE } from './namespace'
import { selectors } from './selectors'
import { watchFetchSingleBooking as saga } from './sagas'
import * as connectors from './connectors'

export const reducer = createFetchSingleCtrlReducer(NAMESPACE, SINGLE_NAMESPACE)

export { selectors, saga, connectors, CTRL_NAMESPACE }
