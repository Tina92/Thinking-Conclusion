# React Native
## jsx 语法

## Basic
+ props
自定义组件通过props实现父级与子级组件的通信，子组件中在`render`函数中引用 `this.props`

+ State（状态容器：redux）
    <p>constructor 中初始化 state</p>
    <p>setState: 修改状态，是 merge 合并操作，只修改指定属性，不影响其他属性，异步操作，不会立刻生效</p>

+ Style
    <p>样式：驼峰式命名
     eg: `backgroundColor`、`fontSize`
    </p>
    <p>位置居后样式会覆盖之前样式，样式可以继承</p>
    <p>样式复杂后，建议使用StyleSheet.create来集中定义组件的样式</p>
    ```jsx
        export default  {
            render() {
                return (
                <View>
                    <Text style={styles.bigBlue}>just bigBlue</Text>
                    <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                </View>
                );
            }
        }
        const styles = StyleSheet.create({
        bigBlue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
        },
        red: {
            color: 'red',
        },
        });
    ```
+ 输入 
    组件`<TextInput onChangeText={(text)=>{}} />`
    <p>onChangeText的属性:文本内容变化的时候调用</p>
    <p>onSubmitEditing的属性：文本提交的时候调用</p>
+ 触摸事件
    组件 `<Button onPress={() => { }} />`
    <p>onPress触摸调用</p>
    <b>Touchable 系列组件</b>
+ 滚动视图
    组件 `<ScrollView></ScrollView>` 一个通用的可滚动的容器，可以通过horizontal属性来设置滚动方向
    * 适合于元素不多的滚动，立即渲染所有元素
+ 长列表
    组件 `<FlatList data={[]} renderItem={} />` 只能垂直滚动
    * 元素可以增删，优先渲染屏幕上可见的元素
    * data 是列表的数据源，而 renderItem 则从数据源中逐个解析数据，来渲染对应组件

    组件 `<SectionList sections={} renderItem={} renderSectionHeader={} keyExtractor={} />`
    * 分组的数据，并可以带有分组标签
+ 网络
    Fetch API
    * 发起请求 
    ```javascript
        fetch('https://websit.url',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json' //'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                key1:'value1',
                key2:'value2'
            })//'key1=value1&key2=value2'
        }).then((response)=>{

        }).catch((error)=>{
            console.error(error);
        })
        async function example(){
            try {
                // 注意这里的await语句，其所在的函数必须有async关键字声明
                    let response = await fetch(
                    'https://facebook.github.io/react-native/movies.json',
                    );
                    let responseJson = await response.json();
                    return responseJson.movies;
                } catch (error) {
                    console.error(error);
                }
        }
    ```
    * Fetch 有可选的第二个参数，可以用来定制 HTTP 请求一些参数,header、提交方法、提交数据
    * 处理服务器的响应数据
        fetch的返回是一个 promise 对象，可以使用 `async/await` 语法
    * RN中内置了 `XMLHttpRequestAPI`,可以使用部分ajax库,例如`frisbee`和`axios`
    * RN也支持 `websocket`
    * fetch默认不携带cookie的，要想携带cookie，需要添加：`credentials: 'include'`
    * 重定向需要手工实现
