import React, { Component } from 'react';
import css from './index.module.scss';
import action from './action.js'
import {connect} from 'react-redux'
import store from '../../store';
import {NavLink}from 'react-router-dom'
import  axios from 'axios' 
import { Breadcrumb } from 'antd'
import Category from '../category'
class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			current:0,
			currents:-1,
      current2:-1
		}
	}
  render() {
    return (
      <div className = {'container' + ' ' + css.head}>
         <div className = 'container_fluid'>
	         <ul className={css.headNav + ' ' + 'clear'} >
	         { this.props.dataList.length?
	         	this.props.dataList.map((item,index)=><li key={item.gc_id} onClick = {(e)=>this.handleClick.call(this,null,item.gc_id,index)} onMouseOver={this.Mouseover.bind(this,index)}
	         		className={this.state.current===index?css.active:""||this.state.currents===index?css.change:""}>	
		         	<img src = {item.pc_icon} alt=""/>
		         	 <span>{item.gc_name}</span>
			         	 <ul className={this.state.currents===index?css.show:''} onMouseOut={this.outleave.bind(this)}>
			         	 	{
			         	 	  item.children.map((items,index2)=><li  key={items.gc_id} onMouseOver={this.Mouseover2.bind(this,index2)} className={this.state.current2===index2?css.change:""}
                       onClick = {(e)=>this.handleClickList.call(this,e,items.gc_id,index2,index,item.gc_id)}><span>{items.gc_name}</span></li>)
			         	 	}
			         	 </ul>
	         </li>):null
	         }
	          <li  onClick = {this.handleClick2.bind(this)}>
	          	<img src = '' alt=""/>
	         	<span>化妆教学（收费）</span>
	          </li>
	         </ul>
           <Category my={this.props.history} ></Category>  
         </div>  
      </div>
    );
  }
  componentWillMount(){
    console.log(this.props)
  	this.props.getNav();
  }
  handleClick(e,data,index){
    if(e){
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation()
    }
  	this.setState({
    	current:index,
      currents:index,
      isShow:true
    })
    this.props.getList3(index,data)
    this.props.getList(index,data)
  	this.props.history.push('/category?id=' + data)
    
  }
  handleClickList(e,data,index,ulIndex,mainid){
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation()
      this.setState({
        isShow:true,
        current:ulIndex

      })
      this.props.getList2(data)
      this.props.getList(ulIndex,data)
     this.props.getList3(data,mainid)
      this.props.history.push('/category?id=' + data)
      
  }
  handleClick2(){
  	this.props.history.push('/chargeTutoria')
  }
  Mouseover(data){
    this.setState({
      currents:data

    })
  }
  Mouseover2(data){
    this.setState({
      current2:data

    })
  }
  outleave(){
  	this.setState({
      currents:-1,
  		current2:-1
  	})
  }
}

export default connect((state)=>{
	return{
		dataList:state.goodsClass,
    list:state.Bar
	}
},action)(Home) ;