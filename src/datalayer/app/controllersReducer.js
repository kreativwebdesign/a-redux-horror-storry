import { combineReducers } from 'redux'
import { controllersReducer as clients } from '../client'
import { controllersReducer as bookings } from '../booking'

export default combineReducers({
  clients,
  bookings
})
