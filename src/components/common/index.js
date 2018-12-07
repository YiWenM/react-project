import React, { Component } from 'react';
import {connect}from 'react-redux'
import css from "./index.module.scss"
import action from "./action" 
import {NavLink} from "react-router-dom"

//import action from 'action'
class Common extends Component {

	constructor(props){
		super(props);

		this.state = {

			inputValue : ''
		}
	}



	render() { 
	    return (
		    <div className='container'>
		    	<header>
		    		<div className={css.head_topper}>
				        <div className={css.head_top + ' ' + 'container_fluid'}>
				      		<i className="iconfont icon-atm"></i>
				      		<a href="/home">首页</a>
				      		<ul className={css.top_right}>
								<li>Hi！花卷商城欢迎你~</li>
								<li><a href="/login">登录</a></li>
								<li>
									<i className="iconfont icon-mobilephone"></i>
									<span>花卷app下载</span>
								</li>
				      		</ul>
				        </div>
				    </div>
			        <div className={css.head_down + ' ' + 'container_fluid'}>
				        <div className={css.down_logo}>
							<img src="/head/logo.png" alt=""/>
							<h1>花卷</h1>
							<p>红人视频购物商城</p>
				        </div>
				        <div className={css.down_right}>
				      		<div className={css.down_input}>
								<input type="text" placeholder="请输入想找的红人或商品" onInput={this.showValue.bind(this)}/>
								<NavLink to="/find"><i className="iconfont icon-search"></i></NavLink>
							</div>
							<p>
								<i className="iconfont icon-cart"></i>
								<a href="/shoppingCart">我的购物车</a>
								<span>0</span>
							</p>
				        </div>
			    	</div>
		    	</header>
		    </div>
		)
	}
	
	
	showValue(evt){

		this.props.getValue(encodeURI(evt.target.value))

		this.setState({
			inputValue:encodeURI(evt.target.value)
		})

	}

}	

	

export default connect((state)=>{
	return {
		goods : state.findReducer
	}
},
	action
)(Common);