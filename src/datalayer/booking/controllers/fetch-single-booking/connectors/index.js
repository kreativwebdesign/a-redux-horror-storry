import { connect as reduxConnect } from 'react-redux'
import { timetableSelectors, dataSelectors } from '../../../selectors'
import { selectors as fetchSingleSelectors } from '../selectors'
import { EMPTY } from 'src/api/constants'
import { mergeMapStateToProps } from 'src/datalayer/helper/merge-map-state-to-props'

const mapStateToProps = (state, { bookingId }) => {
  const resourceIsAvailableAndValid =
    fetchSingleSelectors.isResourceAvailable(bookingId)(state) &&
    timetableSelectors.isResourceValid(bookingId)(state)
  return {
    booking: bookingId
      ? dataSelectors.selectDataById(bookingId)(state)
      : undefined,
    status: resourceIsAvailableAndValid
      ? fetchSingleSelectors.selectStatus(bookingId)(state)
      : EMPTY
  }
}

export const connect = (mstp, mdtp) =>
  reduxConnect(mergeMapStateToProps(mapStateToProps, mstp), mdtp)
