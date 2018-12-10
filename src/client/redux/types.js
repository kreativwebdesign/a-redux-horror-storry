import { pending, succeeded, failed } from "src/redux/helper/statusHelper";
import { fetch, add } from 'src/redux/helper/operationHelper'


const NAMESPACE = 'CLIENT'
const FETCH_CLIENT = fetch(NAMESPACE)
const ADD_CLIENT = add(NAMESPACE)

export default {
  FETCH_CLIENT,
  FETCH_CLIENT_PENDING: pending(FETCH_CLIENT),
  FETCH_CLIENT_SUCCEEDED: succeeded(FETCH_CLIENT),
  FETCH_CLIENT_FAILED: failed(FETCH_CLIENT),
  ADD_CLIENT,
  ADD_CLIENT_PENDING: pending(ADD_CLIENT),
  ADD_CLIENT_SUCCEEDED: succeeded(ADD_CLIENT),
  ADD_CLIENT_FAILED: failed(ADD_CLIENT),
}