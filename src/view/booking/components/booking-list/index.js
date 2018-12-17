import React, { useEffect } from 'react'
import { connectors, types } from 'src/service/booking'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import { SUCCESS } from 'src/api/constants'
import BookingRow from '../booking-row'

import styles from './index.scss'

const BookingList = ({ fetchBookings, list: bookingList, status }) => {
  useEffect(() => {
    fetchBookings()
  }, [])
  if (status === SUCCESS) {
    return (
      <div className={styles.bookingList}>
        <Link to="/bookings/new">
          <Button
            color="green"
            content="Add new Booking"
            icon="add"
            labelPosition="right"
          />
        </Link>
        <Table className={styles.table}>
          <Table.Body>
            {bookingList.map(bookingId => (
              <BookingRow bookingId={bookingId} key={bookingId} />
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
  return 'Loading'
}

const mapDispatchToProps = dispatch => ({
  fetchBookings: () =>
    dispatch({ type: types.FETCH.DO, payload: { from: 0, to: 30 } })
})

const Connected = connectors.fetchPaginated.connect(
  undefined,
  mapDispatchToProps
)(BookingList)

Connected.displayName = 'Bookings'
Connected.url = '/bookings'

export default Connected
