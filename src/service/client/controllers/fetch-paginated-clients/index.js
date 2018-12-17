import { createFetchPaginatedCtrlReducer } from 'src/service/helper/reducer-helper'
import { NAMESPACE } from '../../namespace'
import { NAMESPACE as CTRL_NAMESPACE } from './namespace'
import { selectors } from './selectors'
import { watchFetchPaginatedClient as saga } from './sagas'
import * as connectors from './connectors'

export const reducer = createFetchPaginatedCtrlReducer(NAMESPACE)

export { selectors, saga, connectors, CTRL_NAMESPACE }
