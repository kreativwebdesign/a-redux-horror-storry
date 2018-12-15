import { combineReducers } from 'redux'
import { dataReducer as clients } from '../client'
import { dataReducer as bookings } from '../booking'

export default combineReducers({
  clients,
  bookings
})
