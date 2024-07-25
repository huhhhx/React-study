import React from 'react'
import {NavLink,Navigate,useRoutes} from 'react-router-dom'
import routesList from './routes'

export default function App() {
    // 路由表
    const routes = useRoutes(routesList)
  return (
      <div>
          <div className="row">
              <div className="col-xs-offset-2 col-xs-8">
                  <div className="page-header">
                      <h2>Rouer Demo</h2>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                  <div className="list-group">
                     {/* 路由链接 */}
                     {/* 重新根据 isActive 判断高亮，使用自定义高亮样式*/}
                      <NavLink className={({ isActive }) => { return isActive ? 'activeStyle list-group-item' :'list-group-item'}}  to="/about">About</NavLink>
                      <NavLink className={({ isActive }) => { return isActive ? 'activeStyle list-group-item' : 'list-group-item' }} to="/home">Home</NavLink>
                  </div>
              </div>
              <div className="col-xs-6">
                  <div className="panel">
                      <div className="panel-body">
                         {/* 注册路由 */}
                         {/* <Routes>
                            <Route path='/about' element={<About></About>}></Route>
                              <Route path='/home' element={<Home></Home>}></Route>
                              <Route path='/' element={<Navigate to='/about'></Navigate>}></Route>

                         </Routes> */}
                         {/* 使用路由表来自动生成 */}
                         {routes}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
