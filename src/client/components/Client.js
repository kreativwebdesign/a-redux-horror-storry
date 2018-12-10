import React from 'react';
import { connect } from 'react-redux'
import { Formik, Field, ErrorMessage } from 'formik'
import { selectors, types } from '../redux'

const defaultClient = {
  id: undefined,
  lastName: undefined,
  firstName: undefined,
  emailAddress: undefined,
}

const Client = ({ client, status, fetchClient, addClient, match }) => {

  const { clientId } = match.params
  if (clientId && !client) {
    fetchClient()
    return 'Fetching client'
  }
  console.log(status)
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
        setSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName" type="text" placeholder="Firstname" />
          <ErrorMessage name="firstName" component="div" />
          <Field name="lastName" type="text" placeholder="Lastname" />
          <ErrorMessage name="lastName" component="div" />
          <Field name="emailAddress" type="text" placeholder="E-Mail" />
          <ErrorMessage name="emailAddress" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          { wasSuccessfull() && <div>
            Operation Erfolgreich
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
  fetchClient: () => dispatch({ type: types.FETCH_CLIENT }),
  addClient: client => dispatch({ type: types.ADD_CLIENT, payload: client })
})

export default connect(mapStateToProps, mapDispatchToProps)(Client)
