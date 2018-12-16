import React, { useEffect } from 'react'
import { connect as reduxConnect } from 'react-redux'
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

const Client = ({ client, status, fetchClient, addClient, postStatus }) => {
  useEffect(() => {
    fetchClient && fetchClient()
  }, [])

  if (status === 'LOADING') return 'Loading'

  const wasSuccessfull = postStatus === 'SUCCESS'
  const hasFailed = postStatus === 'FAILED'
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
          {wasSuccessfull && (
            <div className={styles.success}>Successful operation</div>
          )}
          {hasFailed && <div className={styles.error}>Operation failed</div>}
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
)(connectors.add.connect()(Client))

export const EditClient = ({ match, ...rest }) => (
  <Connected clientId={match.params.clientId} {...rest} />
)

const NewClientDisconnected = props => (
  <Client client={defaultClient} {...props} />
)
export const NewClient = reduxConnect(undefined, dispatch => ({
  addClient: client => dispatch({ type: types.ADD.DO, payload: client })
}))(connectors.add.connect()(NewClientDisconnected))
