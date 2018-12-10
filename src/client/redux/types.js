import { pending, succeeded, failed } from "src/redux/helper/statusHelper";
import { fetch } from 'src/redux/helper/operationHelper'


const NAMESPACE = 'CLIENT'
const FETCH_CLIENT = fetch(NAMESPACE)

export default {
  FETCH_CLIENT,
  FETCH_CLIENT_PENDING: pending(FETCH_CLIENT),
  FETCH_CLIENT_SUCCEEDED: succeeded(FETCH_CLIENT),
  FETCH_CLIENT_FAILED: failed(FETCH_CLIENT),
}