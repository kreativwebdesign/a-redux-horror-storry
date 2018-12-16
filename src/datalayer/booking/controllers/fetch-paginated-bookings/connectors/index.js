import { connect as reduxConnect } from 'react-redux'
import { stringify as buildRequestName } from 'qs'
import { timetableSelectors, dataSelectors } from '../../../selectors'
import { selectors as fetchPaginatedSelectors } from '../selectors'
import { EMPTY } from 'src/api/constants'
import { mergeMapStateToProps } from 'src/datalayer/helper/merge-map-state-to-props'

const mapStateToProps = (state, { from = 0, to = 30, filter }) => {
  const resourceId = buildRequestName({ from, to })
  const resourceAvailable = fetchPaginatedSelectors.isResourceAvailable(
    resourceId
  )(state)
  const resourceList = resourceAvailable
    ? dataSelectors.selectPaginatedList({ from, to })(state)
    : undefined
  const resourceIsAvailableAndValid = resourceList
    ? timetableSelectors.areResourcesValid(resourceList)(state)
    : false
  return {
    list: resourceList,
    status: resourceIsAvailableAndValid
      ? fetchPaginatedSelectors.selectStatus(resourceId)(state)
      : EMPTY
  }
}

export const connect = (mstp, mdtp) =>
  reduxConnect(mergeMapStateToProps(mapStateToProps, mstp), mdtp)
