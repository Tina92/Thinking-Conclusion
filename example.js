//延迟加载图片 LazyLoad
/**
 * 节流延迟加载图片类
 * param id 延迟加载图片的容器id
 */
function LazyLoad(id) {
    // 获取需要节流延迟加载图片的容器
    this.container = document.getElementById(id);
    // 缓存图片
    this.imgs = this.getImgs();
    // 执行逻辑
    this.init();
}
var throttler = function() {
        //获取第一个参数
        var isClear = arguements[0],
            fn;
        //如果第一个参数是boolean类型那么第一个参数则标识是否清除计时器
        if (typeof isClear === 'boolean') {
            // 第二个参数则为函数
            fn = arguements[1];
            //函数的计时器句柄存在，这清除该计时器
            fn._throttleID && clearTimeout(fn._throttleID);
            //通过计时器延迟函数的执行
        } else {
            // 第一个参数为函数
            fn = isClear;
            // 第二个参数为函数执行时的参数
            param = arguements[1];
            // 对执行时的参数适配默认值，这是我们用到以前学过的extend方法
            var p = extend({
                context: null, //执行函数执行时的作用域
                args: [], //执行函数执行时的相关参数
                time: 300 //执行函数延迟执行的时间
            }, param);
            // 清除执行函数计时器句柄
            arguements.callee(true, fn);
            // 为函数绑定计时器句柄，延迟执行函数
            fn._throttleID = setTimeout(function() {
                //执行函数
                fn.apply(p.context, p.args)
            }, p.time)
        }
    }
    // 节流延迟加载图片类原型方法
LazyLoad.prototype = {
        // 起始执行逻辑
        init: function() {
            // 加载当前视图图片
            this.update();
            // 绑定事件
            this.bindEvent();
        },
        // 获取延迟加载图片
        getImgs: function() {
            //新数组容器
            var arr = [];
            //获取图片
            var imgs = this.container.getElementByTagName('img');
            // 将获取的图片转为数组（IE 下通过 Array.prototype.slice会报错）
            for (var i = 0, len = imgs.length; i < len; i++) {
                arr.push(img[i])
            }
            return arr;
        },
        // 加载图片
        update: function() {
            //如果图片都加载完成，返回
            if (!this.imgs.length) {
                return;
            }
            //获取图片长度
            var i = this.imgs.length;
            //遍历图片
            for (--i; i >= 0; i--) {
                // 如果图片在可视范围内
                if (this.shouldShow(i)) {
                    // 加载图片
                    this.imgs[i].src = this.imgs[i].getAttribute('data-src');
                    // 清除缓存中的此图片
                    this.imgs.splice(i, 1);
                }
            }
        },
        // 判断图片是否在可视范围内
        shouldShow: function(i) {
            // 获取当前图片
            var img = this.imgs[i],
                // 可视范围内顶部高度（页面滚动条top值）
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                // 可视范围内底部高度
                scrollBottom = scrollTop + document.documentElement.clientHeight;
            // 图片的顶部位置
            imgTop = this.pageY(img),
                // 图片的底部位置
                imgBottom = imgTop + img.offsetHeight;
            // 判断图片是否在可视范围内：图片底部高度大于可视视图顶部高度并且图片底部高度小于可视视图底部高度，
            // 或者图片顶部高度大于可视视图顶部高度并且图片顶部高度小于可视视图底部高度
            if (imgBottom > screenTop && imgBottom < scrollBottom || (imgTop > scrollTop && imgTop < screenBottom))
                return;
            //不满足上面条件则返回 false
            return false;
        },
        // 获取元素页面中的纵坐标位置
        pageY: function(element) {
            // 如果元素有父元素
            if (element.offsetParent) {
                // 返回元素 + 父元素高度
                return element.offsetTop + this.pageY(element.offsetParent);
            } else {
                // 否则返回元素高度
                return element.offsetTop;
            }
        },
        // 绑定事件（简化版）
        on: function(element, type, fn) {
            if (element.addEventListener) {
                addEventListener(type, fn, false);
            } else {
                element.attachEvent('on' + type, fn, false);
            }
        },
        // 为窗户绑定resize事件与scroll事件
        bindEvent: function() {
            var that = this;
            this.on(window, 'resize', function() {
                // 节流处理更新图片逻辑
                throttle(that.update, { context: that });
            });
            this.on(window, 'scroll', function() {
                // 节流处理更新图片逻辑
                throttle(that.update, { context: that });
            })
        }
    }
    //延迟加载 container容器内的图片
new LazyLoad('container');