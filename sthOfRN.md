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

## 组件
 + 基础组件
    * View 搭建用户界面的最基础组件
        `<View></View>`或者`<View />`
        - event:
           - changedTouches - 从上一次事件以来的触摸事件数组。
           - identifier - 触摸事件的 ID。
           - locationX - 触摸事件相对元素位置的 X 坐标。
           - locationY - 触摸事件相对元素位置的 Y 坐标。
           - pageX - 触摸事件相对根元素位置的 X 坐标。
           - pageY - 触摸事件相对根元素位置的 Y 坐标。
           - target - 接收触摸事件的元素 ID.
           - timestamp - 触摸事件的时间标记，用来计算速度.
           - touches - 屏幕上所有当前触摸事件的数组.
        - Props:
           - onStartShouldSetResponder - 设置这个视图是否要响应 touch start 事件。
           - accessibilityLabel - “读屏器”（对视力障碍人士的辅助功能）阅读的文字
           - accessibilityHint - 提醒接下来的操作会有什么影响
           - hitSlop - 定义触摸事件在距离视图多远以内时可以触发的，扩大触摸范围
           - nativeID - 从原生类定位这个视图，关闭了视图的'layout-only view removal'优化
           - onAccessibilityTap - 当 accessible 为 true 时，此事件是针对残障人士，并非是一个普通的点击事件
           - onLayout - 这个事件会在布局计算完成后立即调用一次
           - onMagicTap - 当 accessible 为 true 时，如果用户做了一个双指轻触(Magic tap)手势，系统会调用此函数
           - onMoveShouldSetResponder -当有touch move事件在这个视图中发生，并且这个视图没有被设置为这个touch move的响应时，这个函数就会被调用。
           - onMoveShouldSetResponderCapture - 父视图阻止子视图响应 touch move 事件，设为 true
           - onResponderGrant - 视图开始响应触摸事件，此时需要高亮告诉用户正在响应。
           - onResponderMove - 用户正在屏幕上移动手指时调用这个函数
           - onResponderReject - 有一个响应器正处于活跃状态，拒绝当前视图的响应
           - onResponderRelease - 在整个触摸事件结束时调用这个函数
           - onResponderTerminate - 响应被从这个视图上被打断
           - onResponderTerminationRequest - 其他某个视图想要成为事件的响应者，并要求这个视图放弃对事件的响应时，就会调用这个函数。
           - accessible - 此属性为 true 时，表示此视图是一个启用了无障碍功能的元素
           - onStartShouldSetResponderCapture - 父视图阻止子视图响应 touch start 事件
           - pointerEvents - 控制当前视图是否可以作为触控事件的目标。auto/none/box-none/box-only
           - removeClippedSubviews - 通常在ListView和ScrollView中使用，当组件有很多子组件不在屏幕显示范围时，可以将removeClippedSubviews设置为true，允许释放不在显示范围子组件，从而优化了性能。需要注意的是，要想让此属性生效，要确保overflow属性为默认的hidden。
           - style - view styles
           - testID - 在端到端测试中定位这个视图。
           - accessibilityComponentType - 使无障碍服务对这个 UI 组件与原生组件一致处理。仅对 Android 平台有效。none/button/radiobutton_checked/radiobutton_unchecked
           - accessibilityLiveRegion - 无障碍服务:当此视图更新时，是否要通知用户。Android API >= 19 的设备有效
           none/polite/assertive
           - collapsable - 确保对应视图在原生结构中
           - importantForAccessibility - 控制一个视图在无障碍功能中有多重要，仅对 Android 平台有效。auto/yes/no/no-hide-descendants
           - needsOffscreenAlphaCompositing - 决定这个视图是否要先离屏渲染再进行半透明度处理，确保颜色和混合效果正确。
           - renderToHardwareTextureAndroid - 决定这个视图是否要把它自己渲染到一个GPU上的硬件纹理中
           - accessibilityRole - 告诉屏幕当前元素有特殊角色 none/button/link/header/search/image/key/text/summary/imagebutton/adjustable
           - accessibilityStates - 告诉屏幕当前元素有特殊状态 selected/disabled
           - accessibilityTraits - 为读屏器提供更多属性 none/button/link/header/search/image/selected/plays/key/text/summary/disabled/frequentUpdates/startsMedia/adjustable/allowsDirectInteraction/pageTurn
           - accessibilityViewIsModal - 指示语音辅助是否应该忽略视图中接收者的兄弟元素
           - accessibilityElementsHidden - 指示该无障碍元素中包含的无障碍元素是否被隐藏
           - accessibilityIgnoresInvertColors - 当颜色反演器开始时，视图是否反演
           - shouldRasterizeIOS - 决定这个视图是否需要在被混合之前绘制到一个位图上，IOS平台
    * Text 显示文本内容的组件
        `<Text></Text>`
        - IOS和Android中都可以嵌套文本，只有IOS可以嵌套视图
        - Text内部元素不再使用flexbox布局，采用文本布局
        - 你必须把你的文本节点放在<Text>组件内。你不能直接在<View>下放置一段文本。
        - 不能直接设置一整颗子树的默认样式，大部分情况下样式不继承，但文本标签的子树样式继承
        - props
            - selectable - 决定用户是否可以长按选择文本，以便复制和粘贴
            - accessibilityHint - 
            - accessibilityLabel
            - accessible
            - ellipsizeMode
            - nativeID
            - numberOfLines
            - onLayout
            - onLongPress
            - onPress
            - pressRetentionOffset
            - allowFontScaling
            - style
            - testID
            - disabled
            - selectionColor
            - textBreakStrategy
            - adjustsFontSizeToFit
            - minimumFontScale
            - suppressHighlighting
