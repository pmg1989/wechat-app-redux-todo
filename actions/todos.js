import { createActions } from '../libs/redux-actions'

import { FETCH_LIST, ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../constants/todos.js'

let nextTodoId = 1

export const {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
} = createActions({
  [ADD_TODO]: text => ({ id: (nextTodoId += 1), text }),
  [TOGGLE_TODO]: id => ({ id }),
  [SET_VISIBILITY_FILTER]: filter => ({ filter }),
})

const receiveTaskList = list => ({
  type: FETCH_LIST,
  list,
})

export const fetchTaskList = () => (
  (dispatch) => {
    wx.request({
      url: 'https://api.myjson.com/bins/osm6b',
      success ({ data }) {
        console.log(data)
        dispatch(receiveTaskList(data))
      },
    })
  }
)
