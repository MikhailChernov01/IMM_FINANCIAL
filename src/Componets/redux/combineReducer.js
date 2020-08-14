import {combineReducers} from 'redux'
import {action} from './reducers/actionReducer'
import {fetch} from './reducers/fetchReducer'


export default combineReducers({
  action,
  fetch,
})
