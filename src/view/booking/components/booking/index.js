import React, { useEffect } from 'react'
import { connect as reduxConnect } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'
import { Formik, ErrorMessage } from 'formik'
import {
  isSucceededStatus,
  isPendingStatus,
  isFailedStatus,
  isEmptyStatus
} from 'src/service/helper/status-helper'
import { types, connectors } from 'src/service/booking'
import styles from './index.scss'

const defaultBooking = {
  id: undefined,
  price: 150,
  course: 'yoga',
  client: 5
}

const Booking = ({ booking, status, fetchBooking, addBooking, postStatus }) => {
  useEffect(() => {
    fetchBooking && fetchBooking()
  }, [])

  if (isEmptyStatus(status)) return 'Loading'

  return (
    <Formik
      initialValues={booking || defaultBooking}
      onSubmit={values => {
        addBooking(values)
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            placeholder="Course"
            type="text"
            name="course"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.course}
          />
          <ErrorMessage name="course" component="div" />
          <Input
            placeholder="Client ID"
            type="text"
            name="client"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.client}
          />
          <ErrorMessage name="client" component="div" />
          <Input
            placeholder="Price"
            type="text"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          <ErrorMessage name="price" component="div" />
          <Button type="submit" primary disabled={isPendingStatus(postStatus)}>
            {isPendingStatus(postStatus) ? 'Speichern...' : 'Submit'}
          </Button>
          {isSucceededStatus(postStatus) && (
            <div className={styles.success}>Successful operation</div>
          )}
          {isFailedStatus(postStatus) && (
            <div className={styles.error}>Operation failed</div>
          )}
        </form>
      )}
    </Formik>
  )
}

const mapStateToProps = (state, props) => {
  const { bookingId } = props.match.params
  return {
    booking: bookingId ? selectors.selectDataById(bookingId)(state) : undefined,
    status: selectors.selectStatus(state)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  fetchBooking: () =>
    dispatch({
      type: types.FETCH_SINGLE.DO,
      payload: { bookingId: props.bookingId }
    }),
  addBooking: booking => dispatch({ type: types.ADD.DO, payload: booking })
})

const Connected = connectors.fetchSingle.connect(
  undefined,
  mapDispatchToProps
)(connectors.add.connect()(Booking))

export const EditBooking = ({ match, ...rest }) => (
  <Connected bookingId={match.params.bookingId} {...rest} />
)

const NewBookingDisconnected = props => (
  <Booking booking={defaultBooking} {...props} />
)
export const NewBooking = reduxConnect(undefined, dispatch => ({
  addBooking: booking => dispatch({ type: types.ADD.DO, payload: booking })
}))(connectors.add.connect()(NewBookingDisconnected))
