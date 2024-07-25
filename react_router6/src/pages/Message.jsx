import React,{useState} from 'react'
import { Link,Outlet ,useNavigate} from 'react-router-dom'


export default function Message() {
  const navigate = useNavigate()
    const [message] = useState([
        {id:1,title:'消息1',content:'hhx'},
        { id: 2, title: '消息2', content: 'hhx1' },
        { id: 3, title: '消息3', content: 'hhx2' },
        { id: 4, title: '消息4', content: 'hhx3' },
    ])
    function go(){
      console.log(99)
      navigate('detail',{
        replace:false,
        state:{
          id:2,
          title:'消息2'
        }

      })
    }
  return (
    <div>
      <ul>
       {
        message.map((item)=>{
            return (
              <li key={item.id}>
                {/* params 参数 */}
                {/* <Link to={`detail/${item.id}/${item.content}`}>{item.title}</Link> */}

                {/* search 参数 */}
                {/* <Link to={`detail?id=${item.id}&content=${item.content}`}>{item.title}</Link> */}

                {/* state 参数 */}
                <Link
                  to='detail'
                  state={{
                    id: item.id,
                    content: item.content
                  }}>{item.title}</Link>
              </li>
            )
        })
       }
        <button onClick={go}>点击我跳转</button>
      </ul>
      {/* 指定路由组件的展示位置 */}
     <Outlet></Outlet>
    </div>
  )
}
