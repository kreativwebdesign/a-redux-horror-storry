import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react';
import BookingRow from '../booking-row'
import WithHandledState from 'src/commons/components/state/WithHandledState'
import { selectors, types } from 'src/redux/booking'

import styles from './index.scss'

const BookingList = ({ fetchBookings }) => {
  return (
    <WithHandledState
      stateSelector={selectors.selectComplete}
      whenEmpty={fetchBookings}
    >
      {state => (
        <div className={styles.bookingList}>
          <Link to="/bookings/new">
            <Button color="green" content="Add new Booking" icon="add" labelPosition="right"/>
          </Link>
          <Table className={styles.table}>
            <Table.Body>
              {state.list.map(bookingId => (
                <BookingRow bookingId={bookingId} key={bookingId} />
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </WithHandledState>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch({ type: types.FETCH.DO })
})

const Connected = connect(
  () => ({}),
  mapDispatchToProps
)(BookingList)

Connected.displayName = 'Bookings'
Connected.url = '/bookings'

export default Connected
