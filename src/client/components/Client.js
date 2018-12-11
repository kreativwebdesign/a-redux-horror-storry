import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'
import { Formik, ErrorMessage } from 'formik'
import { selectors, types } from '../redux'
import styles from './styles/client.scss'

const defaultClient = {
  id: undefined,
  lastName: '',
  firstName: '',
  emailAddress: '',
}

const Client = ({ client, status, fetchClient, addClient, match }) => {
  const { clientId } = match.params
  const [ isFetching, setIsFetching ] = useState(false)

  if (clientId && !client) {
    if (!isFetching) {
      fetchClient()
      setIsFetching(true)
    }
    return 'Fetching client'
  }
  const wasSuccessfull = () => status && status.status === 'SUCCESS' && status.operation === 'ADD'

  return (
    <Formik
      initialValues={client || defaultClient}
      onSubmit={(values) => {
        addClient(values)
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        handleChange,
        handleBlur,
        values,
        setSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input placeholder="Firstname" type="text" name="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
          <ErrorMessage name="firstName" component="div" />
          <Input placeholder="Lastname" type="text" name="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
          <ErrorMessage name="lastName" component="div" />
          <Input placeholder="Email Address" type="text" name="emailAddress" onChange={handleChange} onBlur={handleBlur} value={values.emailAddress} />
          <ErrorMessage name="emailAddress" component="div" />
          <Button type="submit" primary disabled={isSubmitting}>
            Submit
          </Button>
          { wasSuccessfull() && <div className={styles.success}>
            Successful operation
          </div>}
        </form>
      )}
    </Formik>
  )
}

const mapStateToProps = (state, props) => {
  const { clientId } = props.match.params
  return {
    client: clientId ? selectors.selectDataById(clientId)(state) : undefined,
    status: selectors.selectStatus(state)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchClient: () => dispatch({ type: types.FETCH.DO }),
  addClient: client => dispatch({ type: types.ADD.DO, payload: client })
})

export default connect(mapStateToProps, mapDispatchToProps)(Client)
