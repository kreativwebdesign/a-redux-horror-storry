import React, { useEffect } from 'react'
import { connectors, types } from 'src/service/booking'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import {
  isSucceededStatus,
  isFailedStatus
} from 'src/service/helper/status-helper'
import Loading from 'src/view/commons/state/Loading'
import BookingRow from '../booking-row'

import styles from './index.scss'

const BookingList = ({ fetchBookings, list: bookingList, status }) => {
  useEffect(() => {
    fetchBookings()
  }, [])
  if (isSucceededStatus(status)) {
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
  } else if (isFailedStatus(status)) {
    return 'oh 👃🏻'
  }
  return <Loading />
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
