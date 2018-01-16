import { connect } from '../../libs/wechat-weapp-redux.js'
import { addTodo, setVisibilityFilter, toggleTodo } from '../../actions/index.js'

const pageConfig = {
  data: {
    filters: [{ key: 'SHOW_ALL', text: '全部' }, { key: 'SHOW_ACTIVE', text: '正在进行' }, { key: 'SHOW_COMPLETED', text: '已完成' }],
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
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  addTodo: text => dispatch(addTodo(text)),
})


Page(connect(mapStateToData, mapDispatchToPage)(pageConfig))