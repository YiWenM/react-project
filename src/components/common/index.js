import React, { Component } from 'react';
import {connect}from 'react-redux'
import css from "./index.module.scss"
import {NavLink}from 'react-router-dom'

//import action from 'action'
class Common extends Component {
  render() {
    return (
      <header>
            <div className={ 'container'+' '+css.head}>
	          <div className={ 'container_fluid'+' '+css.head_top}>
	      		<i className="iconfont icon-atm"></i>
	      		<NavLink to="/home"><span>首页</span></NavLink>
	      		<ul className={css.top_right}>
					<li>Hi！花卷商城欢迎你~</li>
					<li>登录</li>
					<li>
						<i className="iconfont icon-mobilephone"></i>
						<span>花卷app下载</span>
					</li>
	      		</ul>
	      	</div>
	      </div>	
	      <div className={'container_fluid'+' '+css.head_down}>
		      <div className={css.down_logo}>
					<img src="/head/logo.png" alt=""/>
					<h1>花卷</h1>
					<p>红人视频购物商城</p>
		      </div>
		      <div className={css.down_right}>
		      		<div className={css.down_input}>
						<input type="text" placeholder="请输入想找的红人或商品"/>
						<i className="iconfont icon-search"></i>
					</div>
					<p>
						<i className="iconfont icon-cart"></i>
						<span>我的购物车</span>
						<span>0</span>
					</p>
		      </div>
	      </div> 
      </header>
    );
  }
}

export default Common;