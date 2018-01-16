import { handleActions } from '../libs/redux-actions'
import { SHOW_ALL, SET_VISIBILITY_FILTER } from '../constants/todos.js'

const visibilityFilter = handleActions({
  [SET_VISIBILITY_FILTER](state, { payload }) {
    return payload.filter
  }
}, SHOW_ALL)

export default visibilityFilter