import React, { Component } from 'react';
import css from './index.module.scss'
import {connect} from "react-redux"
import action from "./action"

class Search extends Component {

	constructor(props){
		super(props);

		this.state = {

		}
	}


	render() {
	    return (
	      <div className={css.main + ' ' + 'container_fluid'}>
	     		<h1>相关红人</h1>
	     		<h2>相关产品</h2>
	     		<ul>
	     		{
	     			this.props.list.map(item=>
						<li key={item.goods_id}>
							<img src={item.goods_image} alt=""/>
							<p>{item.goods_desc}</p>
							<p>{item.goods_name}</p>
							<p>
								<span>￥{item.goods_price}</span>
								<span>￥{item.goods_marketprice}</span>
							</p>
						</li>
	     			)
	     		}
	     		</ul>
	      </div>
	    )
	}


	componentDidMount(){
		console.log(this.props.word)
		this.props.findList(this.props.word);
	}
	
		
	
}

export default connect((state)=>{
	
	return {
		word : state.findReducer,
		list : state.searchReducer
	}
},
	action
)(Search);