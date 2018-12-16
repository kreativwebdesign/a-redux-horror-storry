import { combineReducers } from 'redux'
import timetable from './timetableReducer'
import controllers from './controllersReducer'

export default combineReducers({
  timetable,
  controllers
})
