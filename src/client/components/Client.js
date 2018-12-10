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

const Client = ({ client, fetchClient, addClient, match }) => {
  const { clientId } = match.params
  if (clientId && !client) {
    fetchClient()
    return 'Fetching client'
  }

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
        </form>
      )}
    </Formik>
  )
}

const mapStateToProps = (state, props) => {
  const { clientId } = props.match.params
  return {
    client: clientId ? selectors.selectDataById(clientId)(state) : undefined
  }
}

const mapDispatchToProps = dispatch => ({
  fetchClient: () => dispatch({ type: types.FETCH_CLIENT }),
  addClient: client => dispatch({ type: types.ADD_CLIENT, payload: client })
})

export default connect(mapStateToProps, mapDispatchToProps)(Client)
