import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BookingList from '../booking-list'
import { NewBooking, EditBooking } from '../booking'

const BookingRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/bookings" exact component={BookingList} />
        <Route path="/bookings/new" component={NewBooking} />
        <Route path="/bookings/:bookingId" component={EditBooking} />
      </Switch>
    </>
  )
}

export default BookingRouter
