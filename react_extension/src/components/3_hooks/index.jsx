import React from "react"

function Demo(){
    // 这是一个hook
    const [count,setCount] = React.useState(0)

    function add(){
        console.log('你点了加号')
        // setCount(count+1)
        setCount(count=>count+1)
    }

    // 函数组件没有生命周期勾子 以 useEffect 代替
    React.useEffect(()=>{

    })
     return (
        <div>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
        </div>
     )
}
export default Demo
