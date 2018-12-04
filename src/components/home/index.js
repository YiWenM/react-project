import React, { Component } from 'react';
import css from './index.module.scss';
import action from './action.js'
import {connect} from 'react-redux'
import store from '../../store';
import  axios from 'axios' 
class Home extends Component {
  render() {
    return (
      <div>
           
      </div>
    );
  }
  componentWillMount(){
  	this.props.getNav();

  }
}

export default connect((state)=>{
	console.log(state.goodsClass)
	return{
		dataList:state.goodsClass
	}
},action)(Home) ;