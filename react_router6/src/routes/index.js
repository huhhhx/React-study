import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";

  const routesList = [
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/home',
        element: <Home></Home>,
        children:[
            {
                path:'news',
                element: <News></News>
               
            },
            {
                path:'messages',
                element:<Message></Message>,
                children: [
                    {   // params 参数
                        // path: 'detail/:id/:content',
                        path: 'detail',
                        element: <Detail></Detail>
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/about"></Navigate>
    }
]
export default routesList