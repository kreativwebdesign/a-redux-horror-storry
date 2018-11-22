import { createSelector, createStructuredSelector } from 'reselect'
import { isPendingStatus, isSucceededStatus, isFailedStatus, isEmptyStatus } from './statusHelper'

const createSelectors = (baseSelector) => {
  const selectData =  createSelector(baseSelector, (state) => state.data);
  const selectList =  createSelector(baseSelector, (state) => state.list);
  const selectStatus = createSelector(baseSelector, (state) => state.meta.status);
  const selectError = createSelector(selectStatus, status => status.error);
  const selectOperation =  createSelector(selectStatus, status => status.operation);
  const selectDataById = id => (data) => data[id]

  const hasSucceeded = createSelector(selectStatus, isSucceededStatus);
  const hasFailed = createSelector(selectStatus, isFailedStatus);
  const isPending = createSelector(selectStatus, isPendingStatus);
  const isEmpty = createSelector(selectStatus, isEmptyStatus);

  return {
    selectData,
    selectList,
    selectStatus,
    selectError,
    selectOperation,
    selectDataById: id => createSelector(selectData, selectDataById(id)),
    selectComplete: createStructuredSelector({
      data: selectData,
      list: selectList,
      isPending,
      hasSucceeded,
      hasFailed,
      isEmpty,
      status: selectStatus,
      error: selectError,
      operation: selectOperation,
    })
  }
}

export {
  createSelectors
}