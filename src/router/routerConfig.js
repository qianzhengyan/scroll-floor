// import Index from '../views/Index/Index'
// import Detail from '../views/Detail/Detail'
// import Login from '../views/Login/Login'
// import Home from "../views/Index/Home/Home"
// import Order from "../views/Index/Order/Order"
// import My from "../views/Index/My/My"
import Loadable from "react-loadable";
import React from "react"
function Loading(){
    return <div className="loading"><span></span><span></span><span></span><span></span><span></span><span></span></div>
}
const Detail = Loadable({
    loader:()=>import('../views/Detail/Detail'),
    loading:()=>Loading()
})
const Index = Loadable({
    loader:()=>import('../views/Index/Index'),
    loading:()=>Loading()
})
const Login = Loadable({
    loader:()=>import('../views/Login/Login'),
    loading:()=>Loading()
})
const Home = Loadable({
    loader:()=>import('../views/Index/Home/Home'),
    loading:()=>Loading()
})
const Order = Loadable({
    loader:()=>import('../views/Index/Order/Order'),
    loading:()=>Loading()
})
const My = Loadable({
    loader:()=>import('../views/Index/My/My'),
    loading:()=>Loading()
})
const Diancan = Loadable({
    loader:()=>import('../views/Detail/Diancan/Diancan'),
    loading:()=>Loading()
})
const Comment = Loadable({
    loader:()=>import('../views/Detail/Comment/Comment'),
    loading:()=>Loading()
})
const Business = Loadable({
    loader:()=>import('../views/Detail/Business/Business'),
    loading:()=>Loading()
})

const routes=[
        {
            path:"/index",
            component:Index,
            children:[
                {
                    path:"/index/home",
                    component:Home
                },
                {
                    path:"/index/order",
                    component:Order
                },
                {
                    path:"/index/my",
                    component:My
                },
                {
                    path:"/index",
                    to:"/index/home"
                }
            ]
        },
        {
            path:"/detail",
            component:Detail,
            children:[
                {
                    path:"/detail/diancan",
                    component:Diancan
                },
                {
                    path:"/detail/comment",
                    component:Comment
                },
                {
                    path:"/detail/business",
                    component:Business
                },
                {
                    path:'/detail',
                    to:"/detail/diancan"
                }
            ]
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/",
            to:"/index"
        }
    ]

export default routes