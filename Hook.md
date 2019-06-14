# Hook
## useState （state hook）
`useState` 会返回一对值：当前状态和一个让你更新它的函数
```javascript
// 声明一个叫“count”的 state 变量
const [count, setCount] = useState(0);
```
接受的参数不限类型

## useEffect (effect hook)
`useEffect` 相当于生命周期里的钩子，在每次渲染后调用，其通过 `return` 函数来清除订阅等功能（相当于生命周期中的卸载组件），可多次使用
```javascript
useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
        ChatAPI.unsubscribrFromFriendStatus(props.friend.id, handleStatusChange);
    }
})
```

## 自定义hook
重用某些订阅逻辑，例如重用好友在线的订阅逻辑
```javascript
 function useFriendStatus(friendID) {
     const [isOnline, setIsOnline] = useState(null);
     function handleStatusChange(status) {
         setIsOnline(status.isOnline);
     }
     useEffect(()=>{
         ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
         return ()=> {
             ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
         }
     });
     return isOnline;
 }
```
