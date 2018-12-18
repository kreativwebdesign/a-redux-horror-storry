import { connect as reduxConnect } from 'react-redux'
import { selectors as addSelectors } from '../selectors'
import { mergeMapStateToProps } from 'src/service/helper/merge-map-state-to-props'
import { NEW_RESOURCE } from 'src/api/constants'

const mapStateToProps = (state, { bookingId = NEW_RESOURCE }) => {
  return {
    postStatus: addSelectors.selectStatus(bookingId)(state)
  }
}

export const connect = (mstp, mdtp) =>
  reduxConnect(mergeMapStateToProps(mapStateToProps, mstp), mdtp)
