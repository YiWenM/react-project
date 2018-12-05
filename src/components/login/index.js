import React, { Component } from 'react';
import css from './index.module.scss'

class Login extends Component {
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
								<input type="text" placeholder="请输入手机号"/><br/>
								<input type="text" placeholder="请输入密码"/><br/>
								<span>登录</span>
								<span>注册</span>
							</div>
		      			</div>	
		      		</div>
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default Login;