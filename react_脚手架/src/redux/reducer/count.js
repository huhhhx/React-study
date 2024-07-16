// reducer 函数会接收到两个参数，分别是：之前的状态（preState)，动作对象（action)
import { INCREMENT, DECREMENT } from "../constant"

const initState = 0  // 初始化状态
export default function countReducer(preState = initState,action){
    // 从action 对象中获取：type、data
    const {type,data} = action
    // 根据type 决定如何加工数据
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState;
    }

}