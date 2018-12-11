import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'
import { Formik, ErrorMessage } from 'formik'
import { selectors, types } from 'src/redux/client'
import styles from './index.scss'

const defaultBooking = {
  id: undefined,
  price: 150,
  course: 'yoga',
  client: 5,
}

const Booking = ({ booking, status, fetchBooking, addBooking, match }) => {
  const { bookingId } = match.params
  const [ isFetching, setIsFetching ] = useState(false)

  if (bookingId && !booking) {
    if (!isFetching) {
      fetchBooking()
      setIsFetching(true)
    }
    return 'Fetching booking'
  }
  const wasSuccessfull = () => status && status.status === 'SUCCESS' && status.operation === 'ADD'
  const hasFailed = () => status && status.status === 'FAILED' && status.operation === 'ADD'
  return (
    <Formik
      initialValues={booking || defaultBooking}
      onSubmit={(values) => {
        addBooking(values)
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
      }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input placeholder="Course" type="text" name="course" onChange={handleChange} onBlur={handleBlur} value={values.course} />
          <ErrorMessage name="course" component="div" />
          <Input placeholder="Client ID" type="text" name="client" onChange={handleChange} onBlur={handleBlur} value={values.client} />
          <ErrorMessage name="client" component="div" />
          <Input placeholder="Price" type="text" name="price" onChange={handleChange} onBlur={handleBlur} value={values.price} />
          <ErrorMessage name="price" component="div" />
          <Button type="submit" primary>
            Submit
          </Button>
          { wasSuccessfull() && <div className={styles.success}>
            Successful operation
          </div>}
          { hasFailed() && <div className={styles.error}>
            Operation failed
          </div>}
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

const mapDispatchToProps = dispatch => ({
  fetchBooking: () => dispatch({ type: types.FETCH.DO }),
  addBooking: booking => dispatch({ type: types.ADD.DO, payload: booking })
})

export default connect(mapStateToProps, mapDispatchToProps)(Booking)
