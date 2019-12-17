import React, { Component } from 'react'
import Axios from "axios"
import "../../mock/mock.js"
export default class Login extends Component {
    state={
        username:"",
        pwd:""
    }
    changeState=(e)=>{
        // console.log(e.target.name)
        let name=e.target.name
        this.setState({[name]:e.target.value})
    }
    getstate=()=>{
        // console.log(this.state)
        Axios.post('/usermsg',{username:this.state.username,pwd:this.state.pwd}).then(res=>{
            // console.log(res,"res")
            if(res.data.code==1){//登录成功了
                window.localStorage.token = res.data;
                this.props.history.go(-1)
            }else{//登录失败了
                alert(res.data.msg)
            }
        })

    }
    render() {
        return (
            <div className="login">
                <p><input type="text" placeholder="请输入用户名" value={this.state.username} name="username" onChange={this.changeState.bind(this)}/></p>
                <p><input type="text" placeholder="请输入密码" value={this.state.pwd} name="pwd" onChange={this.changeState.bind(this)}/></p>
                <p><button onClick={this.getstate.bind(this)}>登录</button></p>
            </div>
        )
    }
}
