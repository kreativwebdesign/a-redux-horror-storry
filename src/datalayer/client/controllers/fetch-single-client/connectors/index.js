import { connect as reduxConnect } from 'react-redux'
import { selectors } from 'src/datalayer/client'
import { EMPTY } from 'src/api/constants'
// a component connecting the state into the react rendering tree

const mapStateToProps = (state, { clientId }) => {
  const resourceIsAvailableAndValid =
    selectors.fetchSingle.isResourceAvailable(clientId)(state) &&
    selectors.isResourceValid(clientId)(state)
  return {
    client: clientId ? selectors.selectDataById(clientId)(state) : undefined,
    status: resourceIsAvailableAndValid
      ? selectors.fetchSingle.selectStatus(clientId)(state)
      : EMPTY
  }
}
const mergeMapStateToProps = (one, two = () => ({})) => (state, props) => {
  return {
    ...one(state, props),
    ...two(state, props)
  }
}

export const connect = (mstp, mdtp) =>
  reduxConnect(mergeMapStateToProps(mapStateToProps, mstp), mdtp)
