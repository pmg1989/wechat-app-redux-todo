import { combineReducers } from '../libs/redux.js'
import todos from './todos.js'
import visibilityFilter from './visibilityFilter.js'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
