// 引入createStore 专门用于创建redux中最为核心的store对象 版本4可用

//import {configureStore}  from 'redux'

//  该文件专门用于暴露一个store对象 整个应用只有一个store对象
import { legacy_createStore as createStore } from 'redux'

import countReducer from './count_reducer'
 

 export default  createStore(countReducer)