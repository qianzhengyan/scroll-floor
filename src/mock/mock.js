import Mock from "mockjs"
let data = require('./shop.json');
// 登录用户信息接口
Mock.mock("/usermsg","post",function(options){
    let {username,pwd} = JSON.parse(options.body);
    if(username=="lucky"&&pwd=="123"){
        return {
            code:1,
            msg:"登录成功！"
        }
    }else{
        return {
            code:0,
            msg:"登录失败！"
        }
    }
})

Mock.mock("/getlist",'get',function(){
    return data;
})