import React, { Component } from 'react';
import css from './index.module.scss'
import action from "./action"
import {connect} from "react-redux"



class Detail extends Component {
	constructor(props){
		super(props);

		this.state = {

		}
	}


    render() {
    	return (
	        <div className={css.main}>

	        	{
	        		this.props.list ?
	        		<div className={css.goods}>
	        			<img src={this.props.list.goods_image} alt=""/>
	        			<div className={css.goods_right}>
			        		<p>{this.props.list.goods_desc}</p>
			        		<p>{this.props.list.goods_name}</p>
			        		<p>
			        			<span>{this.props.list.current_price_txt}</span>
			        			<span>￥{this.props.list.goods_price}</span>
			        			<span>市场价{this.props.list.goods_marketprice}</span>
			        		</p>
			        		<p>规格：{this.props.list.goods_spec}</p>
			        	</div>
	        		
	        		</div>
	        		:
	        		null
	        	}

	        	
	        	
	        
	        
	        </div>
    	)
  	}

  	componentDidMount(){
  		this.props.getDetailList()
  	}


}

export default connect((state)=>{
	return {
		list : state.detailReducer
	}
	
},
	action
)(Detail);