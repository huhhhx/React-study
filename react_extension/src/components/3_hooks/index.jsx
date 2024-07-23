import React from "react"

function Demo(){
    // useState hook
    const [count,setCount] = React.useState(0)

    function add(){
        console.log('你点了加号')
        // setCount(count+1)
        setCount(count=>count+1)
    }
    // useEffect hook
    // 函数组件没有生命周期勾子 以 useEffect 代替，模拟类组件中的生命周期勾子
    // didmount didupdate willunmount 三个函数的组合
    React.useEffect(()=>{
        // 在此可以执行发送 ajax 请求，改变 dom 等操作
        // didmount
        return ()=>{
            // 此回调函数在组件卸载前执行
            // willunmount
        }
    },[]) 

    // useRef hook
    const myRef = React.useRef()
    
     return (
        <div>
             <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
        </div>
     )
}
export default Demo
