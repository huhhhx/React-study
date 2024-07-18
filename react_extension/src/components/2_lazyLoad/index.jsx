import React, { Component ,lazy,Suspense} from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import Loading from './Loading'

// import About from './About'
// import Home from './Home'

const About = lazy(()=>import('./About'))
const Home = lazy(() => import('./Home'))


export default class Demo extends Component {

    render() {
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
                            {/* <a href="" className="list-group-item">About</a>
              <a href="" className="list-group-item active">Home</a> */}
                            <NavLink activeClassName='active' className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName='active' className="list-group-item" to="/home">Home</NavLink>


                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* suspense 防止加载路由过慢没有显示的内容 */}
                                <Suspense fallback={<Loading></Loading>}>
                                    {/* 注册路由  开启精准匹配 重定向*/}
                                    <Route path="/home" component={Home}></Route>
                                    <Route path="/about" component={About}></Route>
                                    <Redirect to="/about"></Redirect>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}