import React,{useState} from 'react'
import { NavLink,Routes,Outlet } from 'react-router-dom'

export default function Home() {
    // const [sum,setSum] = useState(0)
  return (
    <div>
      <h3>我是Home</h3>
      {/* 类似编程式导航 */}
      {/* {sum === 2 ? <Navigate to='/about' replace={true}></Navigate> : <h4>当前sum的值为: {sum}</h4>}
      <button onClick={()=>setSum(2)}>点我将sum变为2</button> */}

          <div>
              <ul className="nav nav-tabs">
                  {/* 注册路由 */}
                  <li>
                      <NavLink  to='/home/news' className="list-group-item">news</NavLink>
                  </li>
                  <li>
                      <NavLink  to='/home/messages' className="list-group-item">messages</NavLink>
                  </li>
              </ul>
             {/* 指定路由组件呈现的位置 */}
             <Outlet></Outlet>
          </div>
    </div>
  )
}
