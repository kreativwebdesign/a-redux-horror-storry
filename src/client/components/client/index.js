import React, { useEffect } from 'react'
import { Input, Button } from 'semantic-ui-react'
import { Formik, ErrorMessage } from 'formik'
import { types, connectors } from 'src/datalayer/client'
import styles from './index.scss'

const defaultClient = {
  id: undefined,
  lastName: '',
  firstName: '',
  emailAddress: ''
}

const Client = ({
  client,
  clientId,
  status,
  fetchClient,
  addClient,
}) => {
  useEffect(() => {
    fetchClient()
  }, [])

  if (status === 'EMPTY' && clientId) return 'Loading'

  const wasSuccessfull = () =>
    status === 'SUCCESS' && status.operation === 'ADD'
  const hasFailed = () =>
    status === 'FAILED' && status.operation === 'ADD'
  return (
    <Formik
      initialValues={client || defaultClient}
      values={client}
      onSubmit={values => {
        addClient(values)
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        handleChange,
        handleBlur,
        values,
        setSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            placeholder="Firstname"
            type="text"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          <ErrorMessage name="firstName" component="div" />
          <Input
            placeholder="Lastname"
            type="text"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          <ErrorMessage name="lastName" component="div" />
          <Input
            placeholder="Email Address"
            type="text"
            name="emailAddress"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.emailAddress}
          />
          <ErrorMessage name="emailAddress" component="div" />
          <Button type="submit" primary>
            Submit
          </Button>
          {wasSuccessfull() && (
            <div className={styles.success}>Successful operation</div>
          )}
          {hasFailed() && <div className={styles.error}>Operation failed</div>}
        </form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = (dispatch, props) => ({
  fetchClient: () =>
    dispatch({
      type: types.FETCH_SINGLE.DO,
      payload: { clientId: props.clientId }
    }),
  addClient: client => dispatch({ type: types.ADD.DO, payload: client })
})

const Connected = connectors.fetchSingle.connect(
  undefined,
  mapDispatchToProps
)(Client)

export default ({ match, ...rest }) => (
  <Connected clientId={match.params.clientId} {...rest} />
)
