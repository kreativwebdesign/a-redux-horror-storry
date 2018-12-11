import { combineReducers } from 'redux'
import { reducer as clients } from './client'
import { reducer as bookings } from './booking'

export default combineReducers({
  clients,
  bookings
})
