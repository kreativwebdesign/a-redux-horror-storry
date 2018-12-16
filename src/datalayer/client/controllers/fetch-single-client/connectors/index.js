import { connect as reduxConnect } from 'react-redux'
import { selectors } from 'src/datalayer/client'
import { EMPTY } from 'src/api/constants'
import { mergeMapStateToProps } from 'src/datalayer/helper/merge-map-state-to-props'

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

export const connect = (mstp, mdtp) =>
  reduxConnect(mergeMapStateToProps(mapStateToProps, mstp), mdtp)
