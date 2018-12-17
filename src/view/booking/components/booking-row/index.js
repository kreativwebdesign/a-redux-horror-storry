import React from 'react'
import { connectors } from 'src/service/booking'
import { Link } from 'react-router-dom'

const BookingRow = ({ booking }) => {
  if (!booking) {
    return 'sorry booking could not be found'
  }
  return (
    <tr>
      <td>{booking.course}</td>
      <td>{booking.price} CHF</td>
      <td>
        <Link to={`/clients/${booking.client}`}>{booking.client}# Client</Link>
      </td>
      <td>
        <Link to={`/bookings/${booking.id}`}>Detail</Link>
      </td>
    </tr>
  )
}

export default connectors.fetchSingle.connect()(BookingRow)
