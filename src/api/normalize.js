const normalize = response => {
  const list = [];
  const data = {}
  return {
    data: response.results.reduce((data, obj) => {
      data[obj.id.value] = obj
      list.push(obj.id.value)
      return data
    }, data),
    list,
    meta: response.info
  }
}

export default normalize