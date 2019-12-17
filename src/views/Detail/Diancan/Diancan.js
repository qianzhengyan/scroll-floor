import React, { Component } from 'react'
import Axios from 'axios';
import "../../../mock/mock.js"
import Item from "../../../components/Item"

import BScroll from "better-scroll";
export default class Diancan extends Component {
    state = {
        list: [],
        ind: 0,
        scrollH: []
    }
    componentDidMount() {
        Axios.get('/getlist').then(res => {
            console.log(res.data.goods);
            this.setState({ list: res.data.goods })

            // 开启 better-scroll 滚动
            this.myScroll = new BScroll(".right", {
                probeType: 3
            })


            let { scrollH } = this.state;
            // 把伪数组转为数组
            let child = Array.from(this.refs.rightlist.children);
            console.log(child, "child")//获取滚动元素的所有列表
            //获取每个子元素与顶部的距离
            child.forEach((item)=>{
                scrollH.push(item.offsetTop - 45);
            })
            let last = child[child.length-1]//最后一个子元素
            scrollH.push(last.offsetTop + last.offsetHeight);
            this.setState({scrollH})//更新设置 scrollH 的值
    
            // 监听滚动
            this.myScroll.on('scroll',({y})=>{
                let scrollY = Math.abs(y);//获取滚动的高度，并转为绝对值
                // console.log(scrollY,"00000000")//滚动条滚动的高度
                for(let i=0;i<scrollH.length;i++){
                    if(scrollY>scrollH[i] && scrollY<scrollH[i+1]){
                        // console.log(i,"iiiii");
                        this.setState({ind:i})
                    }
                }
            })

        })


        
    }
    // 点击左侧列表
    handClick = (ind) => {
        this.setState({ ind })
        this.myScroll.scrollToElement('.title' + ind, 1000)
    }
    render() {
        let { list, ind } = this.state;
        return (
            <div className="diancan">
                {/* 左侧列表导航 */}
                <div className="left">
                    {
                        list && list.map((item, index) => {
                            return <p key={index} onClick={this.handClick.bind(this, index)} className={index == ind ? "active" : ""}>{item.name}</p>
                        })
                    }
                </div>
                {/* 右侧数据列表 */}
                <div className="right">
                    <div ref="rightlist">
                        {
                            list && list.map((item, index) => {
                                return (
                                    <Item key={index} item={item} index={index}></Item>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
