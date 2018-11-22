import { createSelector } from 'reselect'

const createSelectors = (baseSelector) => {
  const selectData = state => console.log('selectData ran', state) || baseSelector(state).data;
  const selectList = state => baseSelector(state).list;
  const selectStatus = state => baseSelector(state).status;
  const selectError = state => selectStatus(state).error || {};
  const selectOperation = state => selectStatus(state).operation;
  const selectDataById = id => (data) => data[id]
  return {
    selectData,
    selectList,
    selectStatus,
    selectError,
    selectOperation,
    selectDataById: id => createSelector(selectData, selectDataById(id))
  }
}

export {
  createSelectors
}