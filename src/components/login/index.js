import React, { Component } from 'react';
import css from './index.module.scss'
import axios from "axios"



class Login extends Component {
	
	constructor(props){
		super(props);

		this.state = {

		}
	}

	render() {
	    return (
	    	<div className="container">
		    	<div className={css.mainer}>
		    		<div className={css.main+ ' ' + 'container_fluid'}>
			      		<div className={css.login_right}>
			      			<div className={css.login}>
								<h2>Hi！花卷商城欢迎你</h2>
								<div>
									<p>您的手机号将被默认为花卷app账号使用</p>
									<input type="text" placeholder="请输入手机号" ref="mytel" /><br/>
									<input type="text" placeholder="请输入密码" ref="mypass"/><br/>
									<span onClick={this.login.bind(this)}>登录</span>
									<span onClick={this.register.bind(this)}>注册</span>
								</div>
			      			</div>	
			      		</div>
			    	</div>
		    	</div>
	    	</div>
	    )
	}


	componentWillMount(){
		
	}

	register(){
		var telnumber = this.refs.mytel.value
		var re = /^1\d{10}$/;
		if (re.test(telnumber)) {
			axios({
			  method: 'post',
			  url: '/register',
			  data: {
			    'tel': telnumber
			  }
			}).then(res=>{
			  console.log(res.data)
			  if(res.data == "可以注册"){
			  	this.props.history.push("/login");
			  	this.refs.mypass.value = ''
			  }
			  else{
			  	alert("该用户已注册哦，快去登录吧")
			  }
			}).catch(err=>{
				console.log(err);
			});
		} 
		else {
			alert("不符合要求");

		}
		
	}


	login(){
		var telnumber = this.refs.mytel.value;
		var re = /^1\d{10}$/;
		if (re.test(telnumber)) {
		
			axios({
			  method: 'post',
			  url: '/tologin',
			  data: {
			    'tel':telnumber
			  }
			}).then(res=>{
			  console.log(res.data)

			  if(res.data == "可以登录"){
			  	this.props.history.push("");
			  	
			  }
			  else{
			  	alert("该用户已注册哦，快去登录吧")
			  }
			}).catch(err=>{
				console.log("请求失败");
			});

		} else {
			alert("电话号码为11位");
		}
	}


}

export default Login;




// 	registerModel.find({
// 		tel : req.body.tel
// 	}).then(result=>{
// 		console.log(result)

// 		if(result.length == 0){
			
// 			res.send("可以注册");

// 			registerModel.create({
// 				tel :req.body.tel
// 			}).then(result=>{
// 				// res.send("注册成功")
// 				console.log("注册成功");
// 			}).catch(error=>{
				
// 			})
// 		}
// 		else{
			
// 			res.send("不可以注册");
// 		}

// 	}).catch(error=>{

// 	})

// });