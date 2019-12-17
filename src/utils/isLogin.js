import React , {Component} from "react";
function GoLogin(Components){
    return class Login extends Component{
        state={
            islogin:false
        }
    
        render(){
            let {islogin} = this.state;
            return islogin ? <Components /> : null;
        }
        componentDidMount(){
            if(window.localStorage.token){
                this.setState({islogin:true})
            }else{
                this.props.history.push('/login')
            }
        }
    }
}

export default GoLogin;