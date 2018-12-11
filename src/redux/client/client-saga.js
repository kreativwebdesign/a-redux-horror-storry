import { types } from './index'
import * as api from 'src/api/api'
import { createBasicSagas } from 'src/redux/helper/saga-helper'

const sagas = createBasicSagas({
  types,
  api: { post: api.postClient, fetch: api.fetchClient }
})

export default sagas
