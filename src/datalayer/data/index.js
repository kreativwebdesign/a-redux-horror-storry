import { combineReducers } from 'redux'
import { dataReducer as clients } from '../client'
import { dataReducer as bookings } from '../../redux/booking'

export default combineReducers({
  clients,
  bookings
})
