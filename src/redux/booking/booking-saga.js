import { types } from './index'
import * as api from 'src/api/api'
import { createBasicSagas } from 'src/redux/helper/saga-helper'

const sagas = createBasicSagas({
  api: { fetch: api.fetchBooking, post: api.postBooking },
  types
})

export default sagas
