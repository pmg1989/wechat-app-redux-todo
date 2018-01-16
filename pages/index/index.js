import { connect } from '../../libs/wechat-weapp-redux.js'
import { bindActionCreators } from '../../libs/redux.js'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/todos.js'
import { addTodo, setVisibilityFilter, toggleTodo } from '../../actions/todos.js'

const pageConfig = {
  data: {
    filters: [{ key: SHOW_ALL, text: '全部' }, { key: SHOW_ACTIVE, text: '正在进行' }, { key: SHOW_COMPLETED, text: '已完成' }],
  },
  handleCheck: function (e) {
    this.toggleTodo(+e.target.id)
  },
  handleFilter: function (e) {
    this.setVisibilityFilter(e.target.id)
  },
  handleAddTodo: function (e) {
    const text = e.detail.value.todo
    if(text.length) {
      this.addTodo(text)
    }
  },
}

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToData = state => ({
  todos: filterTodos(state.todos, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter
})

const mapDispatchToPage = dispatch => ({
  setVisibilityFilter: bindActionCreators(setVisibilityFilter, dispatch),
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
  addTodo: bindActionCreators(addTodo, dispatch),
})

Page(connect(mapStateToData, mapDispatchToPage)(pageConfig))