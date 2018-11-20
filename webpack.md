webpack是一个打包模块化js的工具，可以通过loader转换文件，通过plugin扩展功能。

# webpack 核心概念
<ul>
    <li>entry 一个可执行模块或库的入口文件。</li>
    <li>chunk 多个文件组成的一个代码块，例如把一个可执行模块和它所有依赖的模块组合和一个 chunk 这体现了webpack的打包机制。</li>
    <li>loader 文件转换器，例如把es6转换为es5，scss转换为css。</li>
    <li>plugin 插件，用于扩展webpack的功能，在webpack构建生命周期的节点上加入扩展hook为webpack加入功能。</li>
</ul>

# webpack 文件配置

单页应用 & npm包
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

服务端渲染
```javascript
    module.exports = {
        target: 'node', //'node' 指明构建出的代码是要运行在node环境里
        entry: {
            'server_render': './src/server_render',
        },
        output: {
            filename: './dist/server/[name].js',
            libraryTarget: 'commonjs2', // 指明输出的代码要是commonjs规范
        },
        module: {
            rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(scss|css|pdf)$/, //防止不能在node里执行服务端渲染也用不上的文件被打包进去
                loader: 'ignore-loader',
            },
            ]
        },
    };
```

# webpack loader
 如果你的扩展是想对一个个单独的文件进行转换那么就编写loader
 ```javascript
    module.exports = function (content) {
        return replace(content);
    };// 编写 webpack loader
 ```
 eg:
 <ul>
    <li>babel-loader把es6转换成es5</li>
    <li>file-loader把文件替换成对应的URL</li>
    <li>raw-loader注入文本文件内容到代码里去</li>
 </ul>

# webpack plugin

```javascript
class EndWebpackPlugin {

    constructor(doneCallback, failCallback) {
        this.doneCallback = doneCallback;
        this.failCallback = failCallback;
    }

    apply(compiler) {
        // 监听webpack生命周期里的事件，做相应的处理
        compiler.plugin('done', (stats) => {
            this.doneCallback(stats);
        });
        compiler.plugin('failed', (err) => {
            this.failCallback(err);
        });
    }
}

module.exports = EndWebpackPlugin;
```
webpack plugin 里有2个核心概念：
<ul>
    <li>Compiler: 从webpack启动到推出只存在一个Compiler，Compiler存放着webpack配置</li>
    <li>Compilation: 由于webpack的监听文件变化自动编译机制，Compilation代表一次编译。</li>
</ul>
Compiler 和 Compilation 都会广播一系列事件。

# 功能
 代码分割优化

 eg:先抽出基础库到一个单独的文件而不是和其它文件放在一起打包为一个文件，这样做的好处是只要你不升级他们的版本这个文件永远不会被刷新

# 生命周期
 <img src="./webpack.jpg">