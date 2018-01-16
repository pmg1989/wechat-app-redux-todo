import { ADD_TODO, TOGGLE_TODO } from '../constants/todos.js'

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case TOGGLE_TODO:
      return state.id !== action.id ? state : { ...state, completed: !state.completed }
    default:
      return state
  }
}

const initState = [{ id: 1, text: 'init item', completed: false }]

const todos = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)]
    case TOGGLE_TODO:
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

export default todos