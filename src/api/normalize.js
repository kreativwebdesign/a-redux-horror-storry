const normalize = response => {
  const list = [];
  const data = {}
  return {
    data: response.reduce((data, obj) => {
      data[obj.id] = obj
      list.push(obj.id)
      return data
    }, data),
    list,
    meta: response.info
  }
}

export default normalize