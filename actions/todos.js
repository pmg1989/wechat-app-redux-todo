import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO }  from '../constants/todos.js'
let nextTodoId = 2

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
})

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
})