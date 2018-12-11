import React from 'react';
import { Route, Switch } from 'react-router-dom'
import BookingList from './BookingList';
import Booking from './Booking'

const BookingRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/bookings" exact component={BookingList} />
        <Route path="/bookings/new" component={Booking} />
        <Route path="/bookings/:bookingId" component={Booking} />
      </Switch>
    </>
  )
}

export default BookingRouter;