import React, { Component } from 'react'
import {connect} from "react-redux"
class Home extends Component {
    state={
        name:""
    }
    clickAddCount(){
        this.props.addCount()
    }
    changeCon(e){
        this.setState({name:e.target.value});
    }
    clickKey(e){
        if(e.keyCode==13){
            let {name} = this.state;
            this.props.changeList(name)
        }
    }
    dellist(index){
        this.props.delList(index)
    }
    render() {
        let {name} = this.state;
        return (
            <div className="home">
                <div>
                    <span onClick={()=>this.props.delCount()}>-</span>
                    <span>{this.props.count}</span>
                    <span onClick={this.clickAddCount.bind(this)}>+</span>
                </div> 
                <p><input type="text" value={name} onChange={this.changeCon.bind(this)} onKeyUp={this.clickKey.bind(this)}/></p>  
                <ul>
                    {
                        this.props.list && this.props.list.map((item,index)=>{
                        return <li key={index} onClick={this.dellist.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>             
            </div>
        )
    }
}

export default connect(
    (state)=>{
        console.log(state,"state*****************8")
        return {
            count:state.count.count,
            list:state.list.list
        }
    },
    (dispatch)=>{
        return {
            addCount(){
                dispatch({type:"ADD_COUNT"})
            },
            delCount(){
                dispatch({type:"DEL_COUNT"})
            },
            changeList(name){
                dispatch({type:"CHANGE_lIST",name})
            },
            delList(index){
                dispatch({type:"DEL_lIST",index})
            }
        }
    }
)(Home)