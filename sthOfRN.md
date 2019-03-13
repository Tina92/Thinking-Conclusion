#React Native
##jsx 语法

##Basic
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
