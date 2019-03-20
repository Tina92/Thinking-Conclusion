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
            - accessibilityHint - 提醒接下来的操作会有什么影响
            - accessibilityLabel - “读屏器”（对视力障碍人士的辅助功能）阅读的文字
            - accessible - 此属性为 true 时，表示此视图是一个启用了无障碍功能的元素
            - ellipsizeMode - 当 Text 组件无法全部显示需要显示的字符串时如何用省略号进行修饰。head/middle/tail/clip
            - nativeID - 从原生类定位这个视图，关闭了视图的'layout-only view removal'优化
            - numberOfLines - 当文本过长的时候裁剪文本，包括折叠产生的换行在内，总的行数不会超过属性限制。
            - onLayout - 加载时或者布局变化后调用
            - onLongPress - 文本被长按以后调用此回调函数
            - onPress - 文本被点击以后调用此函数
            - pressRetentionOffset - 该设置当视图滚动禁用的情况下，可以定义当手指距离组件的距离。当大于该距离该组件会失去响应。当少于该距离的时候，该组件会重新进行响应。确保你传入一个常量来减少内存分配。
            - allowFontScaling - 控制字体是否要根据系统的“字体大小”辅助选项来进行缩放
            - style - view styles 样式
            - testID - 在端到端测试中定位此视图
            - disabled - 因为测试的目的，特地将文本视图禁用，仅限Android
            - selectionColor - 文本的高亮颜色，仅限Android
            - textBreakStrategy -  英文文本的分段策略， simple/highQuality/balanced
            - adjustsFontSizeToFit - 指定字体是否随着给定样式的限制而自动缩放,仅限IOS
            - minimumFontScale - 指定最小的缩放比，0.01-1，仅限IOS
            - suppressHighlighting - 设为true时，当文本被按下会没有任何视觉效果。默认情况下，文本被按下时会有一个灰色的、椭圆形的高光。仅限IOS
    * Image 显示图片内容的组件
        `<Image source={} />`
        - 默认情况下 Android 不支持 GIF 和 WebP 格式，需要在android/app/build.gradle文件中手动添加模块
        - props
            - style - borderTopRightRadius/backfaceVisibility/borderBottomLeftRadius/borderBottomRightRadius/borderColor/borderRadius/borderTopLeftRadius/backgroundColor/borderWidth/opacity/overflow/resizeMode/tintColor/overlayColor
            - blurRadius - 为图片添加一个指定半径的模糊滤镜。
            - onLayout - 元素加载或者布局改变时调用
            - onLoad - 加载成功完成时调用此函数
            - onLoadEnd - 加载完成时都调用（无论成功还是失败）
            - onLoadStart - 加载开始时调用
            - resizeMode - 当组件尺寸和图片尺寸不成比例时如何调整图片大小 cover/contain/stretch/repeat/center
            - source - 图片源数据 png、jpg、jpeg、bmp、gif、webp(android)、psd(ios)
            - loadingIndicatorSource - 表示在真正图片在加载过程中所显示的图片，擅长加载网络图片。
            - onError - 加载错误的时候调用此函数
            - testID - 在自动测试脚本中表示这个唯一的资源标识符
            - resizeMethod - 当图片尺寸和容器尺寸不成比例时如何调整图片大小 auto/resize/scale
            - accessibilityLabel - 读屏器（无障碍功能）会朗读你所设置的这段文字。(IOS)
            - accessible - 是否启用了无障碍功能（IOS）
            - capInsets - 图片被缩放的时候，capInsets 指定的角上的尺寸会被固定而不进行缩放
            - defaultSource - 读取图片时默认显示的图片
            - onPartialLoad - 在逐步加载的过程中调用此方法
            - onProgress - 在加载过程中不断调用
            - fadeDuration - 淡出时间，默认300ms（Android）
            - progressiveRenderingEnabled - 允许渐进jpeg流（Android）
        - function
            - getSize - 获取图片的宽高
            - prefetch - 预加载一个远程图片
            - abortPrefetch - 中断预加载操作（Android）
            - queryCache - 查询图片缓存状态
            - resolveAssetSource - 获取图片加载信息的对象
    * TextInput 文本输入框
        `<TextInput onChangeText={} />`
        - 有些属性仅在`multiline`为true或者false时有效，边框样式仅在`multiline=false`时有效
        - Android和ios显示一致，需要设置padding：0
        - 长按文本绝对定位元素会被键盘影响，AndroidManifest.xml对应修改
        - props
           - allowFontScaling - 控制字体是否要根据系统的“字体大小”辅助选项来进行缩放
           - autoCapitalize - 是否要自动将特定字符切换为大写 characters/words/sentences/none
           - autoComplete - 自动填充
           - autoCorrect - 是否开启拼写自动纠正
           - autoFocus - 在组件渲染完成后获得焦点
           - blurOnSubmit - 文本框在提交时是否失焦
           - caretHidden - 是否隐藏光标
           - clearButtonMode - 是否要在文本框右侧显示“清除”按钮。仅在单行模式下可用。
           - clearTextOnFocus - 每次开始输入时清除文本框内容
           - contextMenuHidden - 右键菜单是否隐藏
           - dataDetectorTypes - 检测textinput内能被转化为点击URL的数据
           - defaultValue - 文本框初始值
           - disableFullscreenUI - 是否自动检测成为全屏模式
           - editable - 文本框是否可编辑
           - enablesReturnKeyAutomatically - 文本框内没有文字时是否禁用确认按钮
           - inlineImageLeft - 指定图片放置在左侧，图片必须放置在/android/app/src/main/res/drawable目录下
           - inlineImagePadding - 左侧图片的padding样式
           - keyboardAppearance - 键盘颜色 default/light/dark
           - keyboardType - 决定弹出哪种类型键盘 default/number-pad/decimal-pad/numeric/phone-pad/email-address
           - maxLength - 本框中最多的字符数
           - multiline - 多行还是单行
           - numberOfLines - 输入框的行数（Android）
           - onBlur - 文本框失去焦点时调用
           - onChange - 文本框内容变化时调用函数
           - onChangeText - 文本框内容变化时调用函数
           - onContentSizeChange - 当输入框规模变化时调用
           - onEndEditing - 文本输入结束后调用
           - onFocus - 文本框获得焦点时调用
           - onKeyPress - 一个按键按下时调用
           - onLayout - 组件加载或者布局变化的时候调用
           - onScroll - 内容滚动时持续调用
           - onSelectionChange - 长按选择文本时，选择范围变化时调用此函数
           - onSubmitEditing - 软键盘确认或提交按钮按下时调用
           - placeholder - 没有任何文字输入，会显示此字符串
           - placeholderTextColor - 占位字符串显示的文字颜色。
           - returnKeyLabel - 代替 returnKeyType
           - returnKeyType - “确定”按钮显示的内容 done/go/next/search/send
           - scrollEnabled - 是否能滚动
           - secureTextEntry - 文本框遮住之前输入的文字，比如密码框
           - selection - 设置选中文字的范围
           - selectionColor - 输入框高亮的颜色
           - selectionState - 控制文字被选择的状态 blur()/focus()/update()
           - selectTextOnFocus - 获得焦点，所有文字都被选中
           - spellCheck - 是否禁用拼写检查的样式
           - style - view styles
           - textContentType - 表示文本输入区所期望的语义
           - textBreakStrategy - 文字断行策略(Android)
           - underlineColorAndroid - 文本框的下划线颜色
           - value - 文本框的文字内容
        - function
            - clear - 清空输入框的内容
            - isFocused - 当前输入框是否获得焦点
    * ScrollView 可滚动的容器视图
        `<ScrollView></ScrollView>`
        - ScrollView 必须有一个确定的高度才能正常工作 flex:1
        - 注意和FlatList的区别
        - Props
           - alwaysBounceVertical -  属性为true时，垂直方向可以弹性地拉动一截（ios）
           - contentContainerStyle - 样式会应用到包裹所有子视图的内容容器内
           - disableScrollViewPanResponder - 禁用ScrollView上的默认JSPAN响应程序，将权限赋予子组件
           - keyboardDismissMode - 用户拖拽滚动视图的时候，是否要隐藏软键盘。none/on-drag
           - keyboardShouldPersistTaps - 点击scrollview后是否收起当前界面的软键盘 never/always/handled
           - onContentSizeChange - 可滚动内容的视图发生变化时调用
           - onMomentumScrollBegin - 滚动动画开始时调用
           - onMomentumScrollEnd - 滚动动画结束时调用
           - onScroll - 在滚动中，每帧最多调用一次此回调函数，由scrollEventThrottle来控制调用频率
           - onScrollBeginDrag - 用户拖动视图时调用此函数
           - onScrollEndDrag - 用户停止拖动此视图时调用此函数
           - pagingEnabled - 滚动条会停在滚动视图尺寸整数倍的位置上，水平分页
           - refreshControl - 下拉刷新功能
           - removeClippedSubviews - 属性为true，屏幕外的子视图会被移除
           - scrollEnabled - false， 内容不能滚动
           - showsHorizontalScrollIndicator - 显示水平方向的滚动条
           - showsVerticalScrollIndicator - 显示垂直方向滚动条
           - stickyHeaderIndices - 决定哪些成员滚动后固定在顶端
           - endFillColor - 指定以某种颜色来填充大于实际内容的滚动视图多余空间
           - overScrollMode - 覆盖默认的overSccroll模式，auto/always/never
           - scrollPerfTag - 在滚动视图上记录滚动性能的标记
           - DEPRECATED_sendUpdatedChildFrames - 如果为true，则ScrollView将在Scroll事件中发出updateChildFrames数据
           - alwaysBounceHorizontal - 水平方向弹性地拉动一截
           - horizontal - 子视图是否在水平方向上排成一行
           - automaticallyAdjustContentInsets - 滚动视图在导航条或者工具条后时，是否自动调整内容范围（IOS）
           - bounces - 内容末尾的弹性拉动
           - bouncesZoom - 手势缩放内容是否可以超过min/max的限制
           - canCancelContentTouches - false,子节点有触摸操作，手指无法移动滚动视图
           - centerContent - 内容小于滚动视图，内容居中显示
           - contentInset - 内容范围相对滚动视图边缘的坐标
           - contentInsetAdjustmentBehavior - 此属性指定如何使用安全区域insets来修改滚动视图的内容区域（IOS）
           - contentOffset - 手动设置初始的滚动坐标
           - decelerationRate - 用户抬起手指，滚动视图减速停下的速度。normal/fast
           - directionalLockEnabled - 当值为真时，滚动视图在拖拽的时候会锁定只有垂直或水平方向可以滚动
           - indicatorStyle - 滚动条样式 default/black/white
           - maximumZoomScale - 允许的最大缩放比例
           - minimumZoomScale - 允许的最小缩放比例
           - pinchGestureEnabled - 是否允许用户使用双指缩放操作
           - scrollEventThrottle - 控制每帧scroll事件被调用频率
           - scrollIndicatorInsets - 决定滚动条距离视图边缘的坐标
           - scrollsToTop - 点击状态栏的时候视图会滚动到顶部
           - snapToAlignment - 定义停驻点和滚动视图之间的关系 start/center/end
           - snapToInterval - 停止在 snapToInterval 的倍数的位置
           - snapToOffsets  - 视图滚动停止在定义的偏离位置处
           - snapToStart -  默认情况下，列表的开头计为捕捉偏移量
           - snapToEnd - 默认情况下，列表的结尾计为捕捉偏移量
           - zoomScale - 滚动视图当前内容缩放比例
           - nestedScrollEnabled - 是否启用嵌套滚动
        - function
            - scrollTo - 滚动到指定的x, y偏移处
            - scrollToEnd - 滚动到视图底部
            - scrollWithoutAnimationTo - 被 scrollTo 代替
            - flashScrollIndicators - 短暂地显示滚动显示器
    * StyleSheet 提供类似CSS样式表的样式抽象层
        `const styles = StyleSheet.create({})`
        - function
            - setStyleAttributePreprocessor - 设置用于预处理样式属性值的函数。
            - create - 从给定对象创建StyleSheet样式引用。
            - flatten - 将样式对象数组展平为一个聚合样式对象
        - const
            - hairlineWidth - 这一常量始终是一个整数的像素值,最细线标准
            - absoluteFill - 创建具有位置绝对和零位置(position: 'absolute', left: 0, right: 0, top: 0, bottom: 0)的叠加，避免重复style
 + 交互控件
    * Button 按钮组件
        `<Button onPress={} />`
        - props
           - onPress - 用户点击按钮时调用
           - title - 按钮内显示的文本
           - accessibilityLabel - 读屏器读取的内容
           - color - 文本颜色（IOS）,按钮背景色（Android）
           - disabled -按钮是否可点
           - testID - 在端到端测试中定位此视图
           - hasTVPreferredFocus - apply YV only
    * Picker
        `<Picker><Picker.Item label="" value=""/><Picker.Item label="" value=""/></Picker>`
        - Props
           - onValueChange - 某一项被选中时调用
           - selectedValue - 默认选中的值
           - style - view styles
           - testID - 端对端测试中定位此视图
           - enabled - 是否禁用此选择器
           - mode - 选择器呈现方式 dialog(模态对话框)，dropdown(下拉框)（Android）
           - prompt - 选择器的提示字符串（Android）
           - itemStyle - 应用在每项标签上的样式（ios）
    * Slider 用于选择一个范围值的组件
        - props
           - style - view styles
           - disabled - 是否能够移动滑块
           - maximumValue - 滑块的最大值
           - minimumTrackTintColor - 滑块左侧轨道的颜色
           - minimumValue - 滑块最小值
           - onSlidingComplete - 用户松开滑块时调用
           - onValueChange - 拖动滑块时调用
           - step - 滑块步长
           - maximumTrackTintColor - 滑块右侧轨道的颜色
           - testID - 端对端测试中定位此视图
           - value - 滑块的初始值
           - thumbTintColor - 滑块按住是的颜色（Android）
           - maximumTrackImage - 滑块右侧轨道背景图（ios）
           - minimumTrackImage - 滑块左侧轨道背景图（ios）
           - thumbImage - 滑块背景图（ios)
           - trackImage - 轨道背景图(ios)
    * Switch 开关控件
        - props
           - disabled - 是否禁用该组件的交互
           - trackColor - 开启状态时的背景色
           - onValueChange - 值改变时调用
           - ios_backgroundColor - 关闭状态或者禁用状态的背景色
           - testID - 端对端测试中定位此视图
           - thumbColor - 开关上圆形按钮的背景颜色
           - tintColor - 关闭状态时的边框颜色
           - value - 开关是否打开
 + 列表视图
    * FlatList
        - props
           - ScrollView props - 继承 props
           - VirtualizedList props - 继承 props
           - renderItem - 从data中取出数据并渲染到列表中
           - data - 只支持普通数组
           - ItemSeparatorComponent - 行与行之间的分割线组件
           - ListEmptyComponent - 列表为空时渲染该组件
           - ListFooterComponent - 尾部组件
           - ListHeaderComponent - 头部组件
           - columnWrapperStyle - 多列布局，额外指定每行容器样式
           - extraData - 除data以外的数据，放在此属性中
           - getItemLayout - 优化选项，避免动态测量内容尺寸
           - horizontal - 是否为水平布局模式
           - initialNumToRender - 指定开始渲染的元素数量
           - initialScrollIndex - 开始时屏幕顶端时第Index个元素
           - inverted - 翻转滚动方向
           - keyExtractor - 为给定的item生成一个不重复的 key
           - numColumns - 多列布局只能在非水平模式下
           - onEndReached - 当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
           - onEndReachedThreshold - 距离底部距离
           - onRefresh - 下拉刷新
           - onViewableItemsChanged - 可见行元素变化时调用
           - progressViewOffset - 需要在指定的偏移处显示加载指示器
           - legacyImplementation -  
           - refreshing -在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号
           - removeClippedSubviews - 属性为true，屏幕外的子视图会被移除
           - viewabilityConfig
           - viewabilityConfigCallbackPairs
        - function
           - scrollToEnd - 滚动到底部
           - scrollToIndex - 指定元素滚动到可视区指定位置
           - scrollToItem - 顺序遍历元素
           - scrollToOffset - 滚动列表到指定的偏移
           - recordInteraction - 主动通知列表发生了一个事件，以使列表重新计算可视区域。
           - flashScrollIndicators - 短暂显示滚动指示器
    * SectionList
        ```javascript
        <SectionList renderItem = {({item, index, section}) => <Text key={index}>{item}</Text>} 
            renderSectionHeader = {({section:{title}})=>(
                <Text style={{fontWeight:"bold"}}>{title}</Text>
            )}
            sections = {[
                { title:'Title1', data:["item1","item2"] },
                { title:'Title2', data:["item1","item2"] },
                { title:'Title3', data:["item1","item2"] }
            ]}
            keyExtractor = {(item,index) => item + index}
        />
        ```
        - props
           - ScrollView props... - 继承
           - sections - 类似于 data
           - initialNumToRender - 指定开始渲染的元素数量
           - keyExtractor - 为给定的item生成一个不重复的 key
           - onEndReached - 当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
           - extraData - 除data以外的数据，放在此属性中
           - ItemSeparatorComponent - 行与行之间的分割线组件
           - inverted - 翻转滚动方向
           - ListFooterComponent - 尾部组件
           - legacyImplementation
           - ListEmptyComponent - 列表为空时渲染该组件
           - onEndReachedThreshold - 距离底部的距离
           - onRefresh - 下拉刷新
           - onViewableItemsChanged - 可见行元素变化时调用
           - refreshing - 在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号
           - removeClippedSubviews - 通常在ListView和ScrollView中使用，当组件有很多子组件不在屏幕显示范围时，可以将removeClippedSubviews设置为true，允许释放不在显示范围子组件，从而优化了性能。需要注意的是，要想让此属性生效，要确保overflow属性为默认的hidden。
           - ListHeaderComponent - 头部组件
           - renderSectionFooter - 每个组的尾部组件。
           - renderSectionHeader - 每个组的头部组件。
           - SectionSeparatorComponent - 从视觉上把section与它上方或下方的headers区别开来
           - stickySectionHeadersEnabled - section的header粘连在屏幕顶端
        - function
           - scrollToLocation - 将可视区内位于特定位置的列表项滚动到指定位置
           - recordInteraction - 主动通知列表发生了一个事件，以使列表重新计算可视区域。
           - flashScrollIndicators - 短暂地显示滚动显示器
        - define
           - Section 任意类型
 + IOS独有组件
    * ActionSheetIOS 从设备底部弹出一个显示ActionSheet弹出框选项菜单
    * AlertIOS 弹出一个提示对话框，还可以带有输入框
    * DatePickerIOS 日期/时间选择器
    * ImagePickerIOS 插入图片
    * NavigatorIOS 页面的导航跳转
    * ProgressViewIOS 渲染进度条
    * PushNotificationIOS 管理推送通知，包括权限处理和应用角标数字
    * SegmentedControllIOS 渲染一个顶部的选项卡布局
    * TabBarIOS 渲染一个底部选项卡布局
 + Android独有组件
    * BackHandler 监听并处理设备上的返回按钮
    * DatePickerAndroid 日期选择器
    * DrawerLayoutAndroid 抽屉布局
    * PermissionsAndroid 对Android 6.0引入的权限模型的封装
    * ProgressBarAndroid 渲染进度条
    * TimePickerAndroid 时间选择器
    * ToastAndroid 弹出一个Toast提示框
    * ToolbarAndroid 在顶部渲染一个Toolbar工具栏
    * ViewPagerAndroid 可左右翻页滑动的视图容器
 + 其他组件
