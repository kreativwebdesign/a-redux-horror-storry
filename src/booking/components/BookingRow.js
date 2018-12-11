import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectors } from '../redux'

const BookingRow = ({ booking }) => {
  if (!booking) {
    return 'sorry booking could not be found'
  }
  return (
    <tr>
      <td>{booking.course}</td>
      <td>{booking.price} CHF</td>
      <td><Link to={`/clients/${booking.client}`}>{booking.client}# Client</Link></td>
      <td><Link to={`/bookings/${booking.id}`}>Detail</Link></td>
    </tr>
  )
}

const mapStateToProps = (state, props) => ({
  booking: selectors.selectDataById(props.bookingId)(state)
})

export default connect(mapStateToProps)(BookingRow)