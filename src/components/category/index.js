import React, { Component } from 'react';
import css from './index.module.scss';
import {connect} from 'react-redux'
import { Breadcrumb } from 'antd';
import action from './action'
class Category extends Component {
	constructor(props){
		super(props);
		this.state = {
			page:15
		}
	}
  render() {
    return (
      <div className="container_fluid">
    	    {
    	    	this.props.lists.list?
    	    	<div className = {css.head}>
    	    	  <Breadcrumb separator="|">
    	            <Breadcrumb.Item className={css.kinds}>品类</Breadcrumb.Item>
    	            <Breadcrumb.Item onClick={this.handleClick.bind(this,this.props.ids.mainid)} className={(this.props.my.location.search==='?id='+this.props.ids.mainid)?css.active:''}>全部</Breadcrumb.Item>
    	    	  	{this.props.lists.list.children.map((item,index)=><Breadcrumb.Item onClick={this.handleClick.bind(this,item.gc_id)} key={item.gc_id} 
    	    	  		className={this.props.my.location.search==='?id='+item.gc_id? css.active:css.kinds}>
    	    	  		{item.gc_name}</Breadcrumb.Item>)}
    	    	  	</Breadcrumb> 
                 </div>
    	    	  	:null

    	    }
              
          {
          	 this.props.imgList.length?
          	      <ul className={css.boxList + ' ' + 'clear'+' ' +"lanjjiazai"}>
          	      {
	  	      	  	 this.props.imgList.map((item,index)=><li key={item.goods_id} onClick={this.ClickImg.bind(this,item.goods_id)}>
	  	      	  	 	 	<div className={css.imgs}>
	  	      	              <img src={item.goods_image} alt="" />
	  	      	  	 	 	</div>
	  	      	  	 	 	<div className={css.desc}>{item.goods_desc}</div>
	  	      	  	 	 	<div className={css.goodsName}>{item.goods_name}</div>
	  	      	  	 	 	<div className={css.priceBox}>
	  	      	                <span className={css.price}>{item.goods_price}</span>
	  	      	                <span className={css.marketprice}><b>￥</b>{item.goods_marketprice}</span>
	  	      	  	 	 	 </div>
	  	      	  	 	 </li>)
          	      }
          	
          	 </ul>:null
         }
      </div>
    );
  }
  componentWillMount(){
    let data = this.props.my.location.search.slice(4)
  	this.props.getList(data,15);
  	this.props.getList2(0,this.props.ids.mainid)		
  }
  componentDidMount(){
  	window.onscroll = this.wheelScroll.bind(this);
  }
 wheelScroll(){
    	var imgHeight = document.querySelector('.lanjjiazai').offsetHeight;
    	if ((document.documentElement.scrollTop||document.body.scrollTop)>imgHeight-500){
    		let data = this.props.my.location.search.slice(4)
        console.log(data)
    		this.setState({
    			page:this.state.page+15
    		})
            this.props.getListlanjia(data,this.state.page)
           
    	} 
  }
  componentWillUnmount(){
    console.log(1111)
    window.onscroll=null;
  }
  handleClick(data,index){
  	this.setState({
  	   current:data,
  	})
  	this.props.getList(data,15)
  	this.props.my.push("/category?id=" + data)
  }
  ClickImg(id){
    this.props.my.push('/goods/detail/'+id)
  }

}

export default connect((state=>{
	return{
	  lists:state.Bar,
	  indexs:state.indexBar,	
	  ids:state.Id,
	  imgList:state.CategroyList
	}
}),action)(Category)