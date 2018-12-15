// a saga describing how to fetch a single client

function* fetchSingleClient(clientId) {
  // set operation to pending
  // is clientId present in controllers state
  // if yes
  // was it fetched recently enough?
  // if yes
  // set operation to success
  // else
  // else
  // start fetching the requested client from the server
  // parse response
  // was it successful?
  // if yes
  // store it into the data store
  // set operation to success
  // else
  // set operation to failed
  // handle error
}
