export const normalizeFetch = response => {
  const list = []
  const data = {}
  return {
    data: response.reduce((data, obj) => {
      data[obj.id] = obj
      list.push(obj.id)
      return data
    }, data),
    list
  }
}

export const normalizePost = response => {
  if (response.error) {
    return response
  }
  return {
    data: { [response.id]: response },
    meta: undefined,
    list: [response.id]
  }
}
