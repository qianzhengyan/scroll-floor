import React, { Component } from 'react'
import {Switch,Redirect,Route} from "react-router-dom"
function routerView (props){
    let {routes} = props;
    let routeArr = routes && routes.filter((item)=>!item.to)//不包含重定向
    let redirectArr = routes && routes.filter((item)=> item.to)//重定向
    return <Switch>
                {
                    routeArr && routeArr.map((item,index)=>{
                        return (
                            <Route key={index} path={item.path} render={(props)=>{
                                return <item.component {...props} children={item.children} />
                            }}></Route>
                        )
                    })
                }
                {
                    redirectArr && redirectArr.map((item,index)=>{
                        return (
                            <Redirect key={index} to={item.to}></Redirect>
                        )
                    })
                }
            </Switch>
}
export default routerView