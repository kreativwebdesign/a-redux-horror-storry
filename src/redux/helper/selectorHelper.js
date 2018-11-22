const createSelectors = (baseSelector) => {
  const selectData = state => baseSelector(state).data;
  const selectList = state => baseSelector(state).list;
  const selectStatus = state => baseSelector(state).status;
  const selectError = state => selectStatus(state).error || {};
  const selectOperation = state => selectStatus(state).operation;

  return {
    selectData,
    selectList,
    selectStatus,
    selectError,
    selectOperation,
    selectDataById: id => state => selectData(state)[id]
  }
}

export {
  createSelectors
}