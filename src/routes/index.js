import LayoutDefault from "../Page/Layout/LayoutDefault";
import Home from "../Page/Home";
import Topic from "../Page/Topic";
import Answer from "../Page/Answers"
import Login from "../Page/Login";
import Register from "../Page/Register";
import Result from "../Page/Result";
import Quizz from "../Page/Quizz";
import PrivateRouters from "../component/PrivetaRouters";
import Logout from "../Page/Logout";
export const routes=[
    {
        path:"/",
        element:<LayoutDefault  />,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            
            {
                path:"login",
                element:<Login/>,
            },
            {
                path:"register",
                element:<Register/>,
            },
            {
                path:"logout",
                element:<Logout/>,
            },
            {element:<PrivateRouters/>,
                children:[
                    {
                        path:"answers",
                        element:<Answer/>,
                    },
                    {
                        path:"quizz/:id",
                        element:<Quizz/>,
                    }
                    ,
                    {
                        path:"topic",
                        element:<Topic/>,
                    },
                    {
                        path:"result/:id",
                        element:<Result/>,
                    }
                    
                
                ]
            }


        ]
    }

];
