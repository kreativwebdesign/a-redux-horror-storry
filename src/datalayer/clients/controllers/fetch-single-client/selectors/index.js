// selector selecting the status of the controllers operation from state
import { createControllerSelector } from 'src/redux/helper/selector-helper'

const NAMESPACE = 'FETCH_SINGLE_BOOKING'

export const selectors = createControllerSelector(NAMESPACE)
