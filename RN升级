# RN 升级
RN 0.50.0 ——> 0.59.8

1、使用RN（0.59.8）初始化一个全新的项目，根据原有package.json文件，安装全部需要的插件，运行该项目；

2、将新项目中的package.json文件相关依赖的库的版本全部移置原项目中，执行`npm install` 安装所有 node_modules，并执行`react-native link`将第三方插件的ios与Android与项目进行关联，避免后期大量的手动操作；

3、安装完成后，进入 ios 目录层，执行`pod install`进行 Cocoapods 的安装，然后用 xcode 打开相对应的 xcworkspace, 进行ios环境的处理；

4、ios环境引入相关依赖的framework,.a等文件，注意检查每个target对应的Linked Frameworks and Libraries中相关资源的引入，尤其是JavaScriptCore.framework的引入；

5、针对debug和Release环境分别进行build和RUN，逐步解决出现的问题；

6、IOS完成后，使用AS打开android目录，进行gradle的统一，其中gradle构建环境和构建工具要对应，我使用的是3.3.1对应4.10.2；

7、针对Android，尤其注意要对./gradlew assembleRelease 打包进行测试，需要删除很多不需要的.bin文件
