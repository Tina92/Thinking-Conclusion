# Flutter

## 核心
Dart APP

Dart Framework
* Material - android风格
* Cupertino - IOS风格
* widgets - 提供一个build()方法来描述如何根据其他较低级别的widget来显示自己
* Animation - 动画
* Gestures - 手势
* Painting - 绘制
* Rendering - 渲染
* Foundation - 方法

C++ Engine
* platform Channels - 
* Dart VM - Dart 虚拟机
* Frame Pipeline - 通信通道
* Asset Resolution -
* System Events - 
* Dart Isolate - 
* Rendering -
* Text Layout - 文字渲染

Platform
* Native Plugins - 
* Render Surface - 
* Event Loop - 
* Thread - 

TaskRunner 
* 工作原理：Flutter引擎启动过程，会创建UI/GPU/IO这3个线程，会为这些线程依次创建MessageLoop对象，启动后处于epoll_wait等待状态。对于Flutter的消息机制跟Android原生的消息机制有很多相似之处，都有消息(或者任务)、消息队列(或任务队列)以及Looper；有一点不同的是Android有一个Handler类，用于发送消息以及执行回调方法，相对应Flutter中有着相近功能的便是TaskRunner。
* 四种Task Runner - Platform Task Runner;UI Task Runner;GPU Task Runner;IO Task Runner


## Dart
* main函数使用了(=>)符号, 这是Dart中单行函数或方法的简写

