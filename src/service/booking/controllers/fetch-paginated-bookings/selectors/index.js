// selector selecting the status of the controllers operation from state
import { createControllerSelectors } from 'src/service/helper/selector-helper'
import { NAMESPACE } from 'src/service/booking/namespace'
import { NAMESPACE as CONTROLLER_NAME } from '../namespace'

export const selectors = createControllerSelectors(NAMESPACE, CONTROLLER_NAME)
