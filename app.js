import { Provider } from './libs/wechat-weapp-redux.js'
import configureStore from './configureStore.js'

App(Provider(configureStore())({
  onLaunch: function () {
    console.log("onLaunch")
  }
}))