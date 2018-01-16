import { createActions } from '../libs/redux-actions'
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO }  from '../constants/todos.js'
let nextTodoId = 2

export const {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
} = createActions({
    [ADD_TODO]: text => ({ id: nextTodoId++, text }),
    [TOGGLE_TODO]: id => ({ id }),
    [SET_VISIBILITY_FILTER]: filter => ({ filter })
  })