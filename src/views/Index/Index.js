import React, { Component } from 'react'

import {NavLink} from "react-router-dom"
import RouterView from "../../router/routerView"
export default class Index extends Component {
    state={
        list:[
            {
                path:"/index/home",
                txt:"首页"
            },
            {
                path:"/index/order",
                txt:"菜单"
            },
            {
                path:"/index/my",
                txt:"我的"
            }
        ]
    }
    render() {
        let {children} = this.props;
        return (
            <div>
                {/* <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/order" component={Order}></Route>
                    <Route path="/index/my" component={My}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch> */}
                <RouterView routes={children}></RouterView>
                <footer>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                            <NavLink key={index} to={item.path}>{item.txt}</NavLink>
                            )
                        })
                    }
                </footer>
            </div>
        )
    }
}