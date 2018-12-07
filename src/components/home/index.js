import React, { Component } from 'react';
import css from './index.module.scss';
import action from './action.js'
import {connect} from 'react-redux'
import store from '../../store';
import {NavLink}from 'react-router-dom'
import  axios from 'axios' 
import { Breadcrumb } from 'antd'
import Category from '../category'
import StartHome from '../homelist'
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
	         	this.props.dataList.map((item,index)=><li key={item.gc_id} onClick = {(e)=>this.handleClick.call(this,null,item.gc_id,index)}
	         		className={(this.state.current===index?css.active:"") + ' ' + css.changeColorLi}>	
		         	<img src = {item.pc_icon} alt=""/>
		         	 <span>{item.gc_name}</span>
			         	 <ul className={css.towUl} onMouseOut={this.outleave.bind(this)}>
			         	 	{
			         	 	  item.children.map((items,index2)=><li  key={items.gc_id} className={css.changeColor}
                       onClick = {(e)=>this.handleClickList.call(this,e,items.gc_id,index2,index,item.gc_id)}><span>{items.gc_name}</span></li>)
			         	 	}
			         	 </ul>
	         </li>):null
	         }
	          <li  onClick = {this.handleClick2.bind(this)} className={css.only + ' '+ css.changeColorLi}>
	          	<img src = '' alt=""/>
	         	<span>化妆教学（收费）</span>
	          </li>
	         </ul>
           {
            this.props.isShow?
            <Category my={this.props.history} ></Category> 
            :
            <StartHome my={this.props.history}></StartHome> 
           }
         </div>  
      </div>
    );
  }
  componentWillMount(){
  	this.props.getNav();
    this.setState({
      current:JSON.parse(localStorage.mainIndex)
    })
  }
  componentDidMount(){
   if(this.props.history.location.pathname!=='/home'){
    this.props.getShow(true);
   }else{
    this.props.getShow(false)
   }
  }
  handleClick(e,data,index){
    localStorage.mainid = data
    localStorage.mainIndex = index
  	this.setState({
    	current:JSON.parse(localStorage.mainIndex),
      currents:index,
      isShow:true
    })
    this.props.getList4(data)
    this.props.getList3(index,data)
    this.props.getList(index,data)
    this.props.getShow(true);
  	this.props.history.push('/category?id=' + data)
    
  }
  handleClickList(e,data,index,ulIndex,mainid){
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation()
      localStorage.mainid = mainid
      localStorage.id = data
      localStorage.mainIndex = ulIndex
      console.log(1111111111,JSON.parse( localStorage.id))
      this.setState({
        isShow:true,
        current:JSON.parse(localStorage.mainIndex)

      })
     
      console.log(JSON.parse( localStorage.mainIndex))
      this.props.getShow(true);
      this.props.getList4(data);
      this.props.getList2(data)
      this.props.getList(ulIndex,data)
      this.props.getList3(data,mainid)
      this.props.history.push('/category?id=' + data)
      
  }
  handleClick2(){
  	this.props.history.push('/chargeTutoria')
  }
  Mouseover(data){
    console.log(data)
    this.setState({
      currents:data

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
    list:state.Bar,
    isShow:state.isShow
	}
},action)(Home) ;