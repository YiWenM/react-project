import React, { Component } from 'react';
import css from './index.module.scss'
import {connect} from "react-redux"
import action from "./action"


class More extends Component {
	constructor(props){
		super(props);

		this.state = {

		}
	}




	render() {
    	return (
    	<div className={css.main + ' ' + 'container_fluid'}>
    		<h2>红人列表</h2>
    		<ul className={css.bigbody}>
        	{
        		this.props.list.map(item=>
					<li key={item.uid}>
						<img src="/head/more.png" alt=""/>
						<div className={css.img_text}>
							<p>
								<span>{item.user_name}</span>
								<span>店铺号：{item.hongren_number}</span>
							</p>
							<div className={css.img_bottom}>
								<span> + 关注</span>
								<span>进入小铺</span>
							</div>
						</div>
						<ul className={css.smallbody}>
						{
							item.goods.map(item=>
								<li key={item.platform_id} onClick={this.toDetail.bind(this,item.goods_id)}>
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
					</li>
        		)
        	}
        	</ul>
    	</div>
    	)
	}
 
	componentWillMount(){
		if(this.props.list.length==0){
			//进axios
			this.props.getMoreList()
		}	
	}

	toDetail(id){
		
		this.props.history.push(`/goods/detail/${id}`);
	}
}	

export default connect((state)=>{
	
	return {
		list : state.moreListReducer
	}
},
	action
)(More);