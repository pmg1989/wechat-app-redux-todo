import { handleActions } from '../libs/redux-actions'
import { FETCH_LIST, ADD_TODO, TOGGLE_TODO } from '../constants/todos.js'

const todo = handleActions({
  [ADD_TODO] (state, { payload: { id, text } }) {
    return { id, text, completed: false }
  },
  [TOGGLE_TODO] (state, { payload: { id } }) {
    return state.id !== id ? state : { ...state, completed: !state.completed }
  },
}, {})

const initState = []

const todos = handleActions({
  [FETCH_LIST] (state, action) {
    return action.list
  },
  [ADD_TODO] (state, action) {
    return [...state, todo(undefined, action)]
  },
  [TOGGLE_TODO] (state, action) {
    return state.map(t => todo(t, action))
  },
}, initState)

export default todos
