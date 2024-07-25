import React from 'react'
import { useParams,useSearchParams ,useLocation} from 'react-router-dom'

export default function Detail() {
  // 使用params参数
    // const {id,content} = useParams()

    // search 参数
    // const [search,setSearch] = useSearchParams()
    // const id = search.get('id')
    // const content = search.get('content')

    // state 参数
    const {state:{id,content}} = useLocation()
    
  return (
    <div>
      <li>
        {/* <button onClick={()=>setSearch('id=002&content=hhhh')}>点我更新一下收到的search参数</button> */}
      </li>
     <li>{id}</li>
     <li>{content}</li>
    </div>
  )
}
