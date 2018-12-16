import { combineReducers } from 'redux'
import { controllersReducer as clients } from '../client'
// import { timetableReducer as bookings } from '../booking'

export default combineReducers({
  clients
  // bookings
})
