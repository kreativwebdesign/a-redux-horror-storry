import { combineReducers } from 'redux'
import { reducer as clients} from 'src/client/redux'
import { reducer as bookings} from 'src/booking/redux'

export default combineReducers({
  clients,
  bookings,
})