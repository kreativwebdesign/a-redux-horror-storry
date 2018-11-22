import { pending, succeeded, failed } from "src/redux/helper/statusHelper";
import { fetch } from 'src/redux/helper/operationHelper'


const NAMESPACE = 'USER'
const FETCH_USER = fetch(NAMESPACE)

export default {
  FETCH_USER,
  FETCH_USER_PENDING: pending(FETCH_USER),
  FETCH_USER_SUCCEEDED: succeeded(FETCH_USER),
  FETCH_USER_FAILED: failed(FETCH_USER),
}