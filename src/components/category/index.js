import React, { Component } from 'react';
import css from './index.module.scss';
import {connect} from 'react-redux'
import { Breadcrumb } from 'antd'
class Category extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
  render() {
    return (
      <div>
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
    	  
           {/*console.log(this.props.my.location.search)*/}
           {console.log(this.props.ids)}

    	 
      </div>
    );
  }
  handleClick(data,index){
  	this.setState({
  	   current:data
  	})
  	this.props.my.push("/category?id=" + data)
  }

}

export default connect((state=>{
	console.log(state.Id);
	return{
	  lists:state.Bar,
	  indexs:state.indexBar,	
	  ids:state.Id
	}
}))(Category) ;
/*{
   this.state.list.length?
    <Breadcrumb separator="|">
    <Breadcrumb.Item>品类</Breadcrumb.Item>
   { 
    this.state.list.map(item=><Breadcrumb.Item>{item.gc_name}</Breadcrumb.Item>)
   }
 </Breadcrumb>:null
}*/