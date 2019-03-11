# Vue
## 全局配置
+ 取消Vue 所有的日志与警告  
`Vue.config.silent = true;`  
+ 自定义选项合并策略(Vuex 混入策略)
```javascript
    Vue.config.optionMergeStrategies._my_Option = function(parent, child, vm){
        return child + 1
    }
    const Profile = Vue.extend({
        _my_option: 1
    })
    // Profile.options._my_option = 2
```
+ 配置是否允许 vue-devtools  
`Vue.config.devtools = true`
+ 指定组件的渲染和观察期间未捕获错误的处理函数
```javascript
    Vue.config.errorHandler = function(err, vm, info){
        // vm Vue实例
        // info 错误信息
        // 只在2.2.0+可用
    }
```
+ Vue 运行时警告赋予一个自定义处理函数
`Vue.config.warnHandler = function(msg, vm, trace){...}`
`trace` 是组件的继承关系追踪
+ 忽略在 Vue 之外的自定义元素
```javascript
    Vue.config.ignoredElements = [
        'my-custom-web-component',
        /^ion-/ //用一个`RegExp` 忽略所有'ion-'开头的元素
    ]
```
* 注：如果写的是不存在的组件，会抛出 Unknown custom element 的警告
+ 给 v-on 自定义键盘按键的键位别名
```javascript
    Vue.config.keyCodes = {
        v:86,
        f1:112,
        "media-play-pause":178, //驼峰式命名不可用，使用kebab-case命名方式，
        up:[38,87]
    }
```
