
微信小程序集成Redux实现的Todo list
======================
在微信小程序中使用[Redux](https://github.com/reactjs/redux)实现Todo list，同时集成了redux-devtools

![remote-redux-devtools](./remote-redux-devtools.gif)

使用了小程序的Redux绑定库：[wechat-weapp-redux](https://github.com/charleyw/wechat-weapp-redux)

### 使用

导入到微信的开发工具运行就可以了。

### 开启redux-devtools

1. 本地安装remotedev-server并启动

   ```shell
   npm install -g remotedev-server
   remotedev --hostname=localhost --port=5678
   ```

2. 浏览器中访问**localhost:5678**
	如果不能访问，可以尝试使用**http://remotedev.io/local/**，打开后点击下面的setting，设置使用本地的server。

### Todos
* 集成redux-undo
* 集成redux-persist

### 特别感谢

charleyw: [wechat-weapp-redux-todos](https://github.com/charleyw/wechat-weapp-redux-todos.git)