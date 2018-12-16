import { combineReducers } from 'redux'
import { timetableReducer as clients } from '../client'
import { timetableReducer as bookings } from '../../redux/booking'

export default combineReducers({
  clients,
  bookings
})
