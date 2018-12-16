import { connect as reduxConnect } from 'react-redux'
import { selectors as addSelectors } from '../selectors'
import { mergeMapStateToProps } from 'src/datalayer/helper/merge-map-state-to-props'

const mapStateToProps = (state, { bookingId = 'new' }) => {
  console.log(bookingId)
  return {
    postStatus: addSelectors.selectStatus(bookingId)(state)
  }
}

export const connect = (mstp, mdtp) =>
  reduxConnect(mergeMapStateToProps(mapStateToProps, mstp), mdtp)
