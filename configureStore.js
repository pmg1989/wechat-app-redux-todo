import { createStore, compose } from './libs/redux.js'
import devTools from './libs/remote-redux-devtools.js'
import reducer from './reducers/index.js'

// function configureStore() {
//   return createStore(reducer);
// }
function configureStore() {
  return createStore(reducer, compose(devTools({
    hostname: 'localhost',
    port: 5678,
    secure: false,
  })))
}

export default configureStore