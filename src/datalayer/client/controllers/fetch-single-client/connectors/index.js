import { connect as reduxConnect } from 'react-redux'
import { timetableSelectors, dataSelectors } from '../../../selectors'
import { selectors as fetchSingleSelectors } from '../selectors'
import { EMPTY } from 'src/api/constants'
import { mergeMapStateToProps } from 'src/datalayer/helper/merge-map-state-to-props'

const mapStateToProps = (state, { clientId }) => {
  const resourceIsAvailableAndValid =
    fetchSingleSelectors.isResourceAvailable(clientId)(state) &&
    timetableSelectors.isResourceValid(clientId)(state)
  return {
    client: clientId
      ? dataSelectors.selectDataById(clientId)(state)
      : undefined,
    status: resourceIsAvailableAndValid
      ? fetchSingleSelectors.selectStatus(clientId)(state)
      : EMPTY
  }
}

export const connect = (mstp, mdtp) =>
  reduxConnect(mergeMapStateToProps(mapStateToProps, mstp), mdtp)
