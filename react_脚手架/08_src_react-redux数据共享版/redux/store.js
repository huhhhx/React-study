// 引入createStore 专门用于创建redux中最为核心的store对象 版本4可用

//import {configureStore}  from 'redux'

//  该文件专门用于暴露一个store对象 整个应用只有一个store对象
import { legacy_createStore as createStore,applyMiddleware ,combineReducers} from 'redux'

import countReducer from './reducer/count'
import personReducer from './reducer/person'
 
// 引入 redux-thunk 用于支持异步action
import { thunk } from 'redux-thunk'

// 汇总所有的reducer
const allReducers = combineReducers({
    sum:countReducer,
    persons:personReducer

})

export default createStore(allReducers, applyMiddleware(thunk))