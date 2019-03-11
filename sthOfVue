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
