import { combineReducers } from 'redux'
import countReducer from './count'
import personReducer from './person'

// 汇总所有的reducer
export  default combineReducers({
    sum: countReducer,
    persons: personReducer

})
