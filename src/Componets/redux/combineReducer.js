import {combineReducers} from 'redux'
import {action} from './reducers/actionReducer'
import {fetch} from './reducers/fetchReducer'
import {entry} from './reducers/entryReducer'


export default combineReducers({
  action,
  fetch,
  entry
})
