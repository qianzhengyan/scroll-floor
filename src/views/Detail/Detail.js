import React, { Component } from 'react'

import RouterView from "../../router/routerView"//引入路由视图出口


export default class Detail extends Component {
    state = {
        navTitle: [
            {
                path: "/detail/diancan",
                text: "点餐"
            },
            {
                path: "/detail/comment",
                text: "评论"
            },
            {
                path: "/detail/business",
                text: "商家"
            }
        ],
        ind: 0
    }
    changeLy = (url, ind) => {
        this.setState({ ind });
        this.props.history.push(url);
    }

    render() {
        let { navTitle, ind } = this.state;
        let { children } = this.props;
        return (
            <div>
                <div className="detail">
                    <div className="nav">
                        {
                            navTitle && navTitle.map((item, index) => {
                                return <p key={index} className={index == ind ? 'active' : ""} onClick={this.changeLy.bind(this, item.path, index)}>{item.text}</p>
                            })
                        }
                    </div>
                    <div className="list">
                        <RouterView routes={children}></RouterView>
                    </div>
                </div>
            </div>
        )
    }
}