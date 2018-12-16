import { createControllerSelectors } from 'src/datalayer/helper/selector-helper'
import { NAMESPACE } from 'src/datalayer/booking/namespace'
import { NAMESPACE as CONTROLLER_NAME } from '../namespace'

export const selectors = createControllerSelectors(NAMESPACE, CONTROLLER_NAME)
