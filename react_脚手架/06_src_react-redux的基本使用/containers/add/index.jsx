// 容器组件：负责和redux通信，将结果交给UI组件

// 引入add的UI组件
import addUI from '../../components/add'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

import { createDecrementAction,createIncrementAsyncAction,createIncrementAction } from '../../redux/count_action';

// 此函数返回一个对象，返回对象中的key作为传递给UI组件props的key
// 返回状态数据
function mapStateToProps(state){
    return {count:state}

}

// 返回操作数据的方法
function mapDispatchToProps(dispatch){
    return {
        jia:number=>dispatch(createIncrementAction(number)),
        jian:number=>dispatch(createDecrementAction(number)),
        jianAsync: (number, time) => dispatch(createIncrementAsyncAction(number,time))
    }

}
// 创建并暴露一个add 的容器组件
// 组件
const addContainer = connect(mapStateToProps,mapDispatchToProps)(addUI);
 export default addContainer