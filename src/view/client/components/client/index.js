import React, { useEffect } from 'react'
import { connect as reduxConnect } from 'react-redux'
import { Input, Button, Segment } from 'semantic-ui-react'
import { Formik, ErrorMessage } from 'formik'
import {
  isSucceededStatus,
  isPendingStatus,
  isFailedStatus,
  isEmptyStatus
} from 'src/service/helper/status-helper'
import { types, connectors } from 'src/service/client'
import Loading from 'src/view/commons/state/Loading'
import styles from './index.scss'

const defaultClient = {
  id: undefined,
  lastName: '',
  firstName: '',
  emailAddress: ''
}

const Client = ({
  client,
  status,
  fetchClient,
  addClient,
  postStatus,
  resetPostStatus
}) => {
  useEffect(() => {
    resetPostStatus()
    fetchClient && fetchClient()
  }, [])
  if (isEmptyStatus(status)) return <Loading />

  return (
    <Formik
      initialValues={client || defaultClient}
      onSubmit={values => {
        addClient(values)
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values
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
          <Button type="submit" primary disabled={isPendingStatus(postStatus)}>
            {isPendingStatus(postStatus) ? 'Speichern...' : 'Submit'}
          </Button>
          {isSucceededStatus(postStatus) && (
            <Segment color="green">Operation Successful</Segment>
          )}
          {isFailedStatus(postStatus) && (
            <Segment color="red">Operation failed</Segment>
          )}
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
  resetPostStatus: () =>
    dispatch({
      type: types.ADD.RESET,
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
export const NewClient = reduxConnect(undefined, (dispatch, props) => ({
  addClient: client => dispatch({ type: types.ADD.DO, payload: client }),
  resetPostStatus: () =>
    dispatch({
      type: types.ADD.RESET,
      payload: { clientId: props.clientId }
    })
}))(connectors.add.connect()(NewClientDisconnected))
