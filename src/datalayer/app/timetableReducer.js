import { combineReducers } from 'redux'
import { timetableReducer as clients } from '../client'
import { timetableReducer as bookings } from '../booking'

export default combineReducers({
  clients,
  bookings
})
