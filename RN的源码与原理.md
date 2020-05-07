## 整体结构
RN本质上是一个View组件

## RN源码的基本角色（js与C++的交互，java与C++的交互）
* ReactContext - 继承ContextWrapper,是RN应用的上下文，它可以访问RN的核心类的实现
* ReactInstanceManager - 负责RN应用的启动以及统筹其他各方的工作
* CatalystInstance - 负责协调三端通信
* ReactBridge - 三端通信桥梁
* MessageQueue - 消息队列，接收与处理各方的函数调用
* JavaScriptModuleRegistry - JavaModule注册表，负责管理和查找JavaModule
* JSCExecutor 脚本引擎，封装了Webkit的JavaScriptCore,解释执行JavaScript

## RN的启动流程
先是应用终端启动并创建应用上下文，应用上下文启动JS Runtime，进行布局，再由应用终端进行渲染，最后将渲染的View添加到ReactRootView上，最终呈现在用户面前。在应用的Application里做RN的初始化,页面继承ReactActivity,它是JS页面的容器。
1. 在程序启动的时候，也就是ReContextactActivity的onCreate()函数中，我们会去创建一个ReactInstanceManagerImpl对象。
2. ReactRootView作为整个RN应用的根视图，通过调用`ReactRootView.startReactApplication()`方法启动RN应用。
3. RN应用页面渲染前，需要先创建ReactContext的创建流程在，异步任务`ReactContextInitAsyncTask`负责来完成这个任务。
4. `ReactContextInitAsyncTask`在后台`ReactContextInitAsync.doInBackground()`执行ReactContext的创建，创建ReactContext的过程中，会依据ReactPackage创建`JavaScriptModuleRegistry`与`NativeModuleRegistry`注册表以及它们的管理类`CataLystInstanceImpl`,同时创建JS、Native与UI线程队列，并最终调用`CataLystInstanceImpl.runJSBundle()`去异步加载JS Bundle文件。
5. 后台任务执行完成后，在`ReactContextInitAsyncTask.onPostExecute()`会调用`ReactInstanceManager.setupReactContext()`设置创建好的ReactContext,并将`ReactRootView`加载进来，并调用RN应用的JS入口`APPRegistry`来启动应用。
6. JS层找到已经注册的对应的启动组件，执行`renderApplication()`来渲染整个应用。

ReactActicity继承于Activity,并实现了它的生命周期方法。ReactActivity的所有功能都是由它的委托类`ReactActivityDelegate`来完成。
`ReactActivityDelegate` 功能：
创建ReactRootView作为应用的容器，它本质上是一个FrameLayout。
2 调用ReactRootView.startReactApplication()进一步执行应用启动流程。
3 调用Activity.setContentView()将创建的ReactRootView作为ReactActivity的content view。

ReactRootView作为根视图,它本质上是一个FrameLayout。