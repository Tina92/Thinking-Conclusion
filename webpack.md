# webpack 核心概念
<ul>
    <li>entry 一个可执行模块或库的入口文件。</li>
    <li>chunk 多个文件组成的一个代码块，例如把一个可执行模块和它所有依赖的模块组合和一个 chunk 这体现了webpack的打包机制。</li>
    <li>loader 文件转换器，例如把es6转换为es5，scss转换为css。</li>
    <li>plugin 插件，用于扩展webpack的功能，在webpack构建生命周期的节点上加入扩展hook为webpack加入功能。</li>
</ul>

# webpack 文件配置
```javascript
    const { WebPlugin } = require('web-webpack-plugin');
    module.exports = {
    entry: {
        app: './src/doc/index.js',
    },
    externals: [nodeExternals()], //用于排除node_modules目录下的代码被打包进去
    target: 'node', 
    output: {
        path: path.resolve(__dirname, '.npm'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',  //输出的js文件按照commonjs规范,CommonJS模块规范主要分为三部分：模块引用(require)、模块定义(module,exports)、模块标识。
    },//externals,target,output 构建npm包
    plugins: [
        // 一个WebPlugin对应生成一个html文件
        new WebPlugin({
        //输出的html文件名称
        filename: 'index.html',
        //这个html依赖的`entry`
        requires: {
            app:{
                _dist:true, // 只有在生产环境下才引入该资源
                _dev:false, // 只有在开发环境下才引入该资源
                _inline:true, // 把该资源的内容潜入到html里
                _ie:false, // 只有IE浏览器才需要引入的资源
            } 
        },
        }),
    ],
    };
```


