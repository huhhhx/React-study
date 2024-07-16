// 该文件专门为count组件生成 action 对象
import { INCREMENT,DECREMENT } from "../constant"

// 同步action action的值为对象
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({ type: DECREMENT, data })
// 异步action action的值为函数
export const createIncrementAsyncAction = (data,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);

     }
}