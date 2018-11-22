import { createSelector, createStructuredSelector } from 'reselect'
import { isPendingStatus, isSucceededStatus, isFailedStatus, isEmptyStatus } from './statusHelper'
const createSelectors = (baseSelector) => {
  const selectData = state => baseSelector(state).data;
  const selectList = state => baseSelector(state).list;
  const selectStatus = state => baseSelector(state).meta.status;
  const selectError = state => selectStatus(state).error || {};
  const selectOperation = state => selectStatus(state).operation;
  const selectDataById = id => (data) => data[id]

  const hasSucceeded = state => isSucceededStatus(selectStatus(state));
  const hasFailed = state => isFailedStatus(selectStatus(state));
  const isPending = state => isPendingStatus(selectStatus(state));
  const isEmpty = state => isEmptyStatus(selectStatus(state));

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
    })
  }
}

export {
  createSelectors
}